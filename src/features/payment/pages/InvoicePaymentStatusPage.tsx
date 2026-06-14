import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import NavBar from "@/features/properties/components/NavBar";
import {
  clearPendingInvoicePayment,
  loadPendingInvoicePayment,
} from "@/services/paymentService";

export default function InvoicePaymentStatusPage() {
  const [searchParams] = useSearchParams();

  const invoiceId = useMemo(() => {
    const queryId = searchParams.get("invoice_id");
    return queryId || loadPendingInvoicePayment()?.invoiceId || null;
  }, [searchParams]);

  useEffect(() => {
    if (invoiceId) clearPendingInvoicePayment();
  }, [invoiceId]);

  return (
    <>
      <NavBar />
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-12 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-700">
          i
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Invoice Payment Submitted</h1>
          <p className="max-w-md leading-relaxed text-gray-500">
            The payment provider redirected you back to AQAR. The backend confirms invoice payments through its webhook, so your lease and notifications may take a moment to update.
          </p>
        </div>

        {invoiceId && (
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 text-left text-sm shadow-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Invoice</span>
              <span className="font-semibold text-gray-900">{invoiceId.slice(0, 8)}...</span>
            </div>
          </div>
        )}

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            to="/leases"
            className="rounded-xl bg-dark-knight px-8 py-3 font-bold text-white transition hover:opacity-90"
          >
            View Leases
          </Link>
          <Link
            to="/notifications"
            className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold transition hover:bg-gray-50"
          >
            View Notifications
          </Link>
        </div>
      </div>
    </>
  );
}
