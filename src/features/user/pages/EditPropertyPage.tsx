import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import NavBar             from "@/features/properties/components/NavBar";
import SellingPlanSelector from "@/features/properties/components/AddPropertyComponents/SellingPlanSelector";
import EditInfoForm, { type EditInfoFormValues } from "@/features/user/components/EditInfoForm";
import ImageGalleryEditor from "@/features/user/components/ImageGalleryEditor";

import {
  getPropertyById,
  editPropertyInfo,
  editPropertyImages,
} from "@/services/propertyService";
import {
  getStoredListingSubscription,
  syncStoredListingSubscriptionWithProperty,
} from "@/services/listingSubscriptionService";
import { mapProperty } from "@/utils/mapProperty";
import { useToast }    from "@/context/ToastContext";
import type { Property } from "@/types";
import { getSaleSubscriptionUiState, hasExpiredSaleListing } from "@/utils/saleSubscriptionState";

type Tab = "info" | "images";

// ─── Fetch a remote URL and return it as a File object ───────────────────────
// Used to re-package kept images so the backend receives one flat list of files.
const urlToFile = async (url: string): Promise<File> => {
  const res      = await fetch(url);
  const blob     = await res.blob();
  const filename = url.split("/").pop() ?? "image.jpg";
  return new File([blob], filename, { type: blob.type });
};

export default function EditPropertyPage() {
  const { id }   = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast    = useToast();

  const [property, setProperty] = useState<Property | null>(null);
  const [loading,  setLoading]  = useState(true);
  const [tab,      setTab]      = useState<Tab>("info");
  const [saving,   setSaving]   = useState(false);

  // ── Info form state ───────────────────────────────────────────────────────
  const [form, setForm] = useState<EditInfoFormValues>({
    propertyName:    "",
    propertyDesc:    "",
    location:        "",
    latitude:        undefined,
    longitude:       undefined,
    priceValue:      "",
    size:            "",
    bedroomsNumber:  "",
    bedsNumber:      "",
    bathroomsNumber: "",
    is_furnished:    false,
  });

  // ── Images state ──────────────────────────────────────────────────────────
  // keptUrls = existing server URLs the user hasn't removed
  // newFiles  = freshly picked File objects
  const [keptPropertyUrls,  setKeptPropertyUrls]  = useState<string[]>([]);
  const [newPropertyFiles,  setNewPropertyFiles]  = useState<File[]>([]);
  const [keptOwnershipUrls, setKeptOwnershipUrls] = useState<string[]>([]);
  const [newOwnershipFiles, setNewOwnershipFiles] = useState<File[]>([]);
  const [uploadingImages,   setUploadingImages]   = useState(false);

  // ── Load ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!id) return;
    getPropertyById(id)
      .then((res) => {
        const p = mapProperty(res.data);
        setProperty(p);
        setForm({
          propertyName:    p.propertyName,
          propertyDesc:    p.propertyDesc,
          location:        p.location,
          latitude:        p.latitude,
          longitude:       p.longitude,
          priceValue:      String(p.priceValue),
          size:            String(p.size),
          bedroomsNumber:  String(p.bedroomsNumber),
          bedsNumber:      String(p.bedsNumber),
          bathroomsNumber: String(p.bathroomsNumber),
          is_furnished:    p.is_furnished,
        });
        setKeptPropertyUrls(p.images);
        setKeptOwnershipUrls(p.ownershipProof);
      })
      .catch(() => { toast.error("Failed to load property."); navigate("/my-properties"); })
      .finally(() => setLoading(false));
  }, [id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onFormChange = (patch: Partial<EditInfoFormValues>) =>
    setForm((f) => ({ ...f, ...patch }));

  const saleSubscription = property?.property_type === "for_sale"
    ? syncStoredListingSubscriptionWithProperty(property) ?? getStoredListingSubscription(property.propertyId)
    : null;
  const saleSubscriptionState = property?.property_type === "for_sale"
    ? getSaleSubscriptionUiState(property, saleSubscription)
    : null;

  // ── Save info ─────────────────────────────────────────────────────────────
  const handleSaveInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    try {
      setSaving(true);
      await editPropertyInfo(id, {
        propertyName:    form.propertyName    || undefined,
        propertyDesc:    form.propertyDesc    || undefined,
        location:        form.location        || undefined,
        latitude:        form.latitude,
        longitude:       form.longitude,
        priceValue:      form.priceValue      ? Number(form.priceValue)      : undefined,
        size:            form.size            ? Number(form.size)            : undefined,
        bedroomsNumber:  form.bedroomsNumber  ? Number(form.bedroomsNumber)  : undefined,
        bedsNumber:      form.is_furnished
          ? (form.bedsNumber ? Number(form.bedsNumber) : undefined)
          : 0,
        bathroomsNumber: form.bathroomsNumber ? Number(form.bathroomsNumber) : undefined,
      });
      toast.success("Property updated. It will be re-verified by our team.");
      navigate("/my-properties");
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Update failed.") : "Unexpected error.");
    } finally {
      setSaving(false);
    }
  };

  // ── Save images ───────────────────────────────────────────────────────────
  const propertyChanged  = newPropertyFiles.length  > 0 || keptPropertyUrls.length  !== (property?.images.length        ?? 0);
  const ownershipChanged = newOwnershipFiles.length > 0 || keptOwnershipUrls.length !== (property?.ownershipProof.length ?? 0);
  const totalProperty    = keptPropertyUrls.length  + newPropertyFiles.length;
  const totalOwnership   = keptOwnershipUrls.length + newOwnershipFiles.length;

  const handleSaveImages = async () => {
    if (!id) return;
    if (!propertyChanged && !ownershipChanged) { toast.error("No changes to save."); return; }
    if (propertyChanged  && totalProperty  < 5) { toast.error(`Property photos need at least 5 total (currently ${totalProperty}).`);  return; }
    if (ownershipChanged && totalOwnership < 3) { toast.error(`Ownership documents need at least 3 total (currently ${totalOwnership}).`); return; }

    try {
      setUploadingImages(true);

      // Convert kept URLs → File blobs so the backend receives one flat list.
      // The backend deletes ALL old files then saves whatever it receives,
      // so sending kept images as blobs = keep them + add new ones in one call.
      const keptPropertyAsFiles  = propertyChanged  ? await Promise.all(keptPropertyUrls.map(urlToFile))  : [];
      const keptOwnershipAsFiles = ownershipChanged ? await Promise.all(keptOwnershipUrls.map(urlToFile)) : [];

      await editPropertyImages(id, {
        images:         propertyChanged  ? [...keptPropertyAsFiles,  ...newPropertyFiles]  : undefined,
        ownershipProof: ownershipChanged ? [...keptOwnershipAsFiles, ...newOwnershipFiles] : undefined,
      });

      toast.success("Images updated. Property will be re-verified.");
      navigate("/my-properties");
    } catch (err) {
      toast.error(axios.isAxiosError(err) ? (err.response?.data?.msg ?? "Upload failed.") : "Unexpected error.");
    } finally {
      setUploadingImages(false);
    }
  };

  // ── Loading ───────────────────────────────────────────────────────────────
  if (loading) return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
      </div>
    </>
  );

  const TABS: { key: Tab; label: string; icon: string }[] = [
    { key: "info",   label: "Info & Location", icon: "✏️" },
    { key: "images", label: "Images",          icon: "🖼️" },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          <button type="button" onClick={() => navigate("/my-properties")}
            className="text-sm text-gray-500 hover:text-gray-900 font-semibold mb-6 flex items-center gap-1 transition cursor-pointer">
            ← Back to My Properties
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-1">Edit Property</h1>
          <p className="text-gray-500 text-sm mb-6">
            Editing: <strong className="text-gray-800">{property?.propertyName}</strong>
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {TABS.map((t) => (
              <button key={t.key} type="button" onClick={() => setTab(t.key)}
                className={`flex items-center gap-1.5 pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px cursor-pointer
                  ${tab === t.key
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"}`}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* ── INFO & LOCATION ──────────────────────────────────────────── */}
          {tab === "info" && property && (
            <div className="space-y-6">
              {property.property_type === "for_sale" && (
                <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Selling Plan</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        Sale plans are created with the property and managed through the subscription flow.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate(`/property/${property.propertyId}/subscription`)}
                      className="rounded-xl bg-dark-knight px-4 py-2.5 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
                    >
                      Open Selling Plan
                    </button>
                  </div>

                  <SellingPlanSelector
                    value={saleSubscription?.planMonths}
                    disabled
                    helperText={
                      saleSubscriptionState === "active"
                        ? "The plan is locked because the current subscription is active."
                        : saleSubscriptionState === "paid_awaiting_verification"
                          ? "Payment is complete, so the plan stays locked while the property waits for admin verification."
                          : saleSubscriptionState === "ready_to_pay"
                            ? "The property is verified and waiting for payment of the saved plan."
                            : saleSubscriptionState === "payment_pending"
                              ? "A payment session is already in progress for this saved plan."
                              : saleSubscriptionState === "expired"
                                ? "The previous plan has expired, but the current backend does not expose a renewal or plan-update endpoint from edit."
                                : "Plan details are only available when this browser has a stored subscription record for the property."
                    }
                  />

                  <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-600">
                    <p className="font-semibold text-gray-900">
                      {saleSubscriptionState === "awaiting_verification" && "Pending verification"}
                      {saleSubscriptionState === "paid_awaiting_verification" && "Paid · pending verification"}
                      {saleSubscriptionState === "ready_to_pay" && "Verified · unpaid"}
                      {saleSubscriptionState === "payment_pending" && "Payment processing"}
                      {saleSubscriptionState === "active" && "Subscription active"}
                      {saleSubscriptionState === "expired" && "Subscription expired"}
                      {saleSubscriptionState === "missing_subscription" && "Subscription details unavailable"}
                    </p>
                    <p className="mt-1">
                      {hasExpiredSaleListing(property)
                        ? "This listing has expired. A new frontend renewal flow cannot be completed until the backend exposes a fresh sale-subscription endpoint."
                        : property.listingExpiry
                          ? `Current listing expiry: ${new Date(property.listingExpiry).toLocaleDateString("en-GB")}`
                          : "No active listing expiry is currently set."}
                    </p>
                  </div>
                </div>
              )}

              <EditInfoForm
                property={property}
                form={form}
                saving={saving}
                onChange={onChange}
                onFormChange={onFormChange}
                onSubmit={handleSaveInfo}
                onCancel={() => navigate("/my-properties")}
              />
            </div>
          )}

          {/* ── IMAGES ───────────────────────────────────────────────────── */}
          {tab === "images" && (
            <div className="space-y-6">

              <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <span className="text-xl shrink-0">ℹ️</span>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Remove photos you no longer want and add new ones.
                  Kept photos are re-uploaded automatically when you save.
                </p>
              </div>

              <ImageGalleryEditor
                title="Property Photos"
                minCount={5}
                keptUrls={keptPropertyUrls}
                newFiles={newPropertyFiles}
                accept="image/jpeg,image/jpg,image/png,image/webp"
                hint="JPG, PNG, WEBP"
                iconType="photo"
                onRemoveUrl={(url) => setKeptPropertyUrls((prev) => prev.filter((u) => u !== url))}
                onAddFiles={(files) => setNewPropertyFiles((prev) => [...prev, ...files])}
                onRemoveNew={(i) => setNewPropertyFiles((prev) => prev.filter((_, idx) => idx !== i))}
              />

              <ImageGalleryEditor
                title="Ownership Documents"
                minCount={3}
                keptUrls={keptOwnershipUrls}
                newFiles={newOwnershipFiles}
                accept="image/jpeg,image/jpg,image/png,image/webp,.pdf"
                hint="JPG, PNG, PDF"
                iconType="document"
                onRemoveUrl={(url) => setKeptOwnershipUrls((prev) => prev.filter((u) => u !== url))}
                onAddFiles={(files) => setNewOwnershipFiles((prev) => [...prev, ...files])}
                onRemoveNew={(i) => setNewOwnershipFiles((prev) => prev.filter((_, idx) => idx !== i))}
              />

              <div className="flex gap-3">
                <button type="button" onClick={handleSaveImages}
                  disabled={uploadingImages || (!propertyChanged && !ownershipChanged)}
                  className="flex-1 bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
                  {uploadingImages ? "Uploading…" : "Save Image Changes"}
                </button>
                <button type="button" onClick={() => navigate("/my-properties")}
                  className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition cursor-pointer">
                  Cancel
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
