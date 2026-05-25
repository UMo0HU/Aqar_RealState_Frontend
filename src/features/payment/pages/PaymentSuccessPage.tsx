import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NavBar from "@/features/properties/components/NavBar";
import { getRentRequestById } from "@/services/rentRequestService";
import {
  clearPendingRentPayment,
  loadPendingRentPayment,
} from "@/services/paymentService";
import type { RentRequest } from "@/types";

type VerificationState =
  | "missing"
  | "checking"
  | "processing"
  | "success"
  | "not_paid"
  | "error";

const MAX_CHECKS = 6;
const CHECK_DELAY_MS = 2500;

export default function PaymentSuccessPage() {
  const [searchParams] = useSearchParams();
  const [request, setRequest] = useState<RentRequest | null>(null);
  const [status, setStatus] = useState<VerificationState>("checking");
  const [reloadKey, setReloadKey] = useState(0);

  const requestId = useMemo(() => {
    const queryId = searchParams.get("request_id");
    if (queryId) return queryId;
    return loadPendingRentPayment()?.requestId ?? null;
  }, [searchParams]);

  useEffect(() => {
    if (!requestId) {
      setStatus("missing");
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let attempts = 0;

    const verifyPayment = async () => {
      attempts += 1;

      try {
        const res = await getRentRequestById(requestId);
        if (cancelled) return;

        const nextRequest = res.data as RentRequest;
        setRequest(nextRequest);

        if (nextRequest.request_state === "PAID") {
          clearPendingRentPayment();
          setStatus("success");
          return;
        }

        if (["ACCEPTED", "PAYMENT_PENDING"].includes(nextRequest.request_state)) {
          if (attempts < MAX_CHECKS) {
            setStatus("checking");
            timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
            return;
          }

          setStatus("processing");
          return;
        }

        setStatus("not_paid");
      } catch {
        if (cancelled) return;

        if (attempts < MAX_CHECKS) {
          setStatus("checking");
          timeoutId = setTimeout(verifyPayment, CHECK_DELAY_MS);
          return;
        }

        setStatus("error");
      }
    };

    setStatus("checking");
    verifyPayment();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [requestId, reloadKey]);

  const summary = request && (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm">
      <h2 className="border-b border-gray-100 pb-3 text-sm font-bold text-gray-700">
        Payment Summary
      </h2>
      <div className="space-y-2 pt-3 text-sm text-gray-600">
        <div className="flex justify-between gap-4">
          <span>Request</span>
          <span className="font-semibold text-gray-900">
            {request.request_id.slice(0, 8)}…
          </span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Status</span>
          <span className="font-semibold text-gray-900">{request.request_state}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Total</span>
          <span className="font-semibold text-gray-900">
            EGP {Number(request.total_price).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        {status === "checking" && (
          <>
            <div className="h-24 w-24 rounded-full bg-blue-100 text-5xl flex items-center justify-center">
              ⏳
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Verifying Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We&apos;re waiting for the payment provider to finish confirming your transaction.
                This can take a few seconds after the redirect.
              </p>
            </div>
            {summary}
          </>
        )}

        {status === "success" && (
          <>
            <div className="h-24 w-24 rounded-full bg-green-100 text-5xl flex items-center justify-center">
              🎉
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Confirmed!</h1>
              <p className="max-w-sm leading-relaxed text-gray-500">
                Your payment was successful. Your lease is now active and the owner
                has been notified. Check your notifications for details.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/leases"
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                View My Leases
              </Link>
              <Link
                to="/rent-requests"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to Requests
              </Link>
            </div>
          </>
        )}

        {status === "processing" && (
          <>
            <div className="h-24 w-24 rounded-full bg-amber-100 text-5xl flex items-center justify-center">
              🔄
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Still Processing</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                You were redirected back successfully, but we have not seen the final payment confirmation yet.
                Please wait a moment and check again.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Check Again
              </button>
              {requestId && (
                <Link
                  to={`/payment/${requestId}`}
                  className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Back to Payment
                </Link>
              )}
            </div>
          </>
        )}

        {status === "not_paid" && (
          <>
            <div className="h-24 w-24 rounded-full bg-red-100 text-5xl flex items-center justify-center">
              ⚠️
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Not Confirmed</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We checked the request status and it is still <strong>{request?.request_state ?? "not paid"}</strong>.
                If you completed the card step, give it a moment and try checking again.
              </p>
            </div>
            {summary}
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Check Again
              </button>
              {requestId && (
                <Link
                  to={`/payment/${requestId}`}
                  className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
                >
                  Return to Payment
                </Link>
              )}
            </div>
          </>
        )}

        {status === "missing" && (
          <>
            <div className="h-24 w-24 rounded-full bg-gray-100 text-5xl flex items-center justify-center">
              🧾
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Payment Context Missing</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We couldn&apos;t determine which rent request this payment belongs to. Please return to your requests and open the payment flow again.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/rent-requests"
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                View My Requests
              </Link>
              <Link
                to="/"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to Home
              </Link>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <div className="h-24 w-24 rounded-full bg-red-100 text-5xl flex items-center justify-center">
              ❌
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Couldn&apos;t Verify Payment</h1>
              <p className="max-w-md leading-relaxed text-gray-500">
                We ran into a problem while checking the request status. Try again in a moment or return to your rent requests.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setReloadKey((value) => value + 1)}
                className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
              >
                Retry Verification
              </button>
              <Link
                to="/rent-requests"
                className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                Back to Requests
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
