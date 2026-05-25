import { useState }      from "react";
import { useNavigate }   from "react-router-dom";
import axios             from "axios";

import NavBar             from "@/features/properties/components/NavBar";
import StepIndicator      from "@/features/properties/components/AddPropertyComponents/StepIndicator";
import PropertyTypeToggle from "@/features/properties/components/AddPropertyComponents/PropertyTypeToggle";
import BasicInfoStep      from "@/features/properties/components/AddPropertyComponents/BasicInfoStep";
import LocationStep       from "@/features/properties/components/AddPropertyComponents/LocationStep";
import MediaStep          from "@/features/properties/components/AddPropertyComponents/MediaStep";
import OwnershipStep      from "@/features/properties/components/AddPropertyComponents/OwnershipStep";

import { addProperty }       from "@/services/propertyService";
import {
  getSellingPlanPrice,
  saveListingSubscription,
} from "@/services/listingSubscriptionService";
import { useToast }          from "@/context/ToastContext";
import { validateStep, hasErrors } from "@/utils/propertyValidator";
import type { PropertyFormData }   from "@/types";

import cautionIcon from "@/assets/cautionIcon.svg";

const TOTAL_STEPS = 4;

const AddPropertyPage = () => {
  const navigate = useNavigate();
  const toast    = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step,   setStep]   = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<PropertyFormData>({
    property_type:   "for_sale",
    sellingPlan:     1,
    propertyName:    "",
    propertyDesc:    "",
    location:        "",
    latitude:        30.0444,
    longitude:       31.2357,
    is_furnished:    false,
    bedroomsNumber:  0,
    bathroomsNumber: 0,
    bedsNumber:      0,
    size:            0,
    price:           undefined,
    pricePerDay:     undefined,
    priceMonthly:    undefined,
    images:          [],
    ownershipProof:  [],
  });

  const nextStep = () => {
    const errs = validateStep(step, formData);
    if (hasErrors(errs)) { setErrors(errs); return; }
    setErrors({});
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setErrors({});
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    const errs = validateStep(step, formData);
    if (hasErrors(errs)) { setErrors(errs); return; }

    try {
      setIsSubmitting(true);
      const res = await addProperty(formData);
      const propertyId = res.data?.propertyId;
      const subscriptionId = res.data?.subscriptionId;

      if (formData.property_type === "for_sale" && propertyId && subscriptionId && formData.sellingPlan) {
        saveListingSubscription({
          propertyId: Number(propertyId),
          subscriptionId: String(subscriptionId),
          propertyName: formData.propertyName,
          planMonths: formData.sellingPlan,
          amount: getSellingPlanPrice(formData.sellingPlan),
          paymentState: "UNPAID",
        });

        toast.success("Sale property submitted. We’ll unlock subscription payment as soon as admin verification is complete.");
        navigate(`/property/${propertyId}/subscription`);
        return;
      }

      toast.success("Property submitted! It will go live after our team reviews it (24–48 h).");
      navigate("/my-properties");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.msg ?? "Submission failed. Please try again.");
      } else {
        toast.error("Unexpected error. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-900">List Your Property</h1>
            <p className="text-gray-500 mt-1">Complete the form below to submit your property for review.</p>
          </div>

          <StepIndicator currentStep={step} />

          {/* Verification notice */}
          <div className="flex items-start gap-4 bg-dark-knight text-white rounded-2xl p-5">
            <div className="w-11 h-11 rounded-full bg-dark-yellow border border-amber-300 shrink-0 flex items-center justify-center">
              <img src={cautionIcon} alt="caution" className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Pending Verification Status</h2>
              <p className="text-sm text-white/80 leading-relaxed mt-0.5">
                Your listing will be marked as <em>Pending Verification</em> and will not be visible to
                the public until our compliance team reviews your ownership documents. This typically
                takes 24–48 hours.
              </p>
            </div>
          </div>

          {/* Step content */}
          {step === 1 && (
            <>
              <PropertyTypeToggle
                value={formData.property_type}
                onChange={(val) => {
                  setFormData({
                    ...formData,
                    property_type: val,
                    sellingPlan: val === "for_sale" ? (formData.sellingPlan ?? 1) : undefined,
                  });
                  setErrors({});
                }}
              />
              <BasicInfoStep formData={formData} setFormData={setFormData} errors={errors} />
            </>
          )}
          {step === 2 && <LocationStep  formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 3 && <MediaStep     formData={formData} setFormData={setFormData} errors={errors} />}
          {step === 4 && <OwnershipStep formData={formData} setFormData={setFormData} errors={errors} />}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4">
            {step > 1 ? (
              <button onClick={prevStep} className="px-5 py-2.5 border border-gray-300 rounded-xl font-semibold hover:bg-gray-100 transition">
                ← Back
              </button>
            ) : <div />}

            {step < TOTAL_STEPS ? (
              <button onClick={nextStep} className="px-6 py-2.5 bg-dark-knight text-white rounded-xl font-bold hover:opacity-90 transition">
                Next Step →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2.5 bg-green-600 text-white rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {isSubmitting ? "Submitting…" : "Submit Property 🚀"}
              </button>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default AddPropertyPage;
