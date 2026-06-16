import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import NavBar                from "@/features/properties/components/NavBar";
import { getRentRequestById } from "@/services/rentRequestService";
import {
  clearPendingRentPayment,
  buildRentPaymentSuccessUrl,
  getPaymentLink,
  savePendingRentPayment,
} from "@/services/paymentService";
import { useToast }           from "@/context/ToastContext";
import type { RentRequest }   from "@/types";

export default function PaymentPage() {
  const { id }   = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast    = useToast();

  const [request,   setRequest]   = useState<RentRequest | null>(null);
  const [loading,   setLoading]   = useState(true);
  const [paying,    setPaying]    = useState(false);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      navigate("/rent-requests");
      return;
    }

    getRentRequestById(id)
      .then((res) => setRequest(res.data))
      .catch(() => {
        toast.error("Could not load request details.");
        navigate("/rent-requests");
      })
      .finally(() => setLoading(false));
  }, [id, navigate, toast]);

  const handlePay = async () => {
    if (!id || !request) return;

    try {
      setPaying(true);

      const fresh = await getRentRequestById(id);
      const freshRequest = fresh.data as RentRequest;

      if (freshRequest.request_state === "PAID") {
        navigate(`/payment/success?request_id=${freshRequest.request_id}`);
        return;
      }

      if (!["ACCEPTED", "PAYMENT_PENDING"].includes(freshRequest.request_state)) {
        toast.error("This request is no longer available for payment.");
        setRequest(freshRequest);
        return;
      }

      setRequest(freshRequest);

      savePendingRentPayment(freshRequest.request_id);

      const res = await getPaymentLink(
        freshRequest.request_id,
        buildRentPaymentSuccessUrl(freshRequest.request_id),
      );

      const paymentUrl = res.data?.url;

      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }

      window.location.assign(paymentUrl);
    } catch (err) {
      clearPendingRentPayment();
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        toast.error("This request no longer exists.");
        navigate("/rent-requests");
        return;
      }
      toast.error(
        axios.isAxiosError(err)
          ? (err.response?.data?.msg ?? err.message ?? "Failed to start payment.")
          : err instanceof Error
            ? err.message
            : "Unexpected error.",
      );
      setPaying(false);
    }
  };

  if (loading) return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
      </div>
    </>
  );

  if (!request) return null;

  const isPaid = request.request_state === "PAID";
  const canPay = ["ACCEPTED", "PAYMENT_PENDING"].includes(request.request_state);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-lg mx-auto space-y-6">

          {/* Back */}
          <button
            onClick={() => navigate("/rent-requests")}
            className="text-sm text-gray-500 hover:text-gray-900 font-semibold flex items-center gap-1 transition cursor-pointer"
          >
            ← Back to Requests
          </button>

          <h1 className="text-3xl font-bold text-gray-900">Complete Payment</h1>

          {/* Order summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
            <h2 className="text-base font-bold text-gray-700 border-b border-gray-100 pb-3">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="text-gray-500">Property</span>
                <span className="font-semibold text-gray-900">
                  {request.property_name ?? `Property #${request.property_id}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Check-in</span>
                <span className="font-semibold text-gray-900">{request.check_in_date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Check-out</span>
                <span className="font-semibold text-gray-900">{request.check_out_date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Type</span>
                <span className="font-semibold text-gray-900">{request.renting_type}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-base font-bold text-gray-900">Total Due</span>
              <span className="text-2xl font-bold text-gray-900">
                EGP {Number(request.total_price).toLocaleString()}
              </span>
            </div>
          </div>

          {!canPay && !isPaid && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              This request is currently <strong>{request.request_state}</strong>. Payment is only available after the owner accepts the request.
            </div>
          )}

          {isPaid && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              This request has already been paid. You can go straight to the confirmation page.
            </div>
          )}

          {/* Security note */}
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <span className="text-xl shrink-0">🔒</span>
            <p className="text-sm text-blue-700 leading-relaxed">
              You will be redirected to our secure payment partner Kashier to complete
              the transaction. Your card details are never stored on our servers.
            </p>
          </div>

          {/* Pay button */}
          <button
            onClick={handlePay}
            disabled={paying || (!canPay && !isPaid)}
            className="w-full bg-dark-knight text-white py-4 rounded-2xl font-bold text-base
                       hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed
                       cursor-pointer flex items-center justify-center gap-3"
          >
            {paying ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Preparing your payment…
              </>
            ) : (
              isPaid ? "View Payment Confirmation →" : "Proceed to Payment →"
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            By proceeding you agree to our terms of service.{" "}
            <Link to="/rent-requests" className="text-amber-500 hover:underline">
              Cancel
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}
