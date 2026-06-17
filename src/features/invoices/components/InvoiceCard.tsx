import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Invoice } from "@/types";
import {
  buildInvoicePaymentSuccessUrl,
  getInvoicePaymentLink,
  savePendingInvoicePayment,
} from "@/services/paymentService";
import { useToast } from "@/context/ToastContext";
import { getApiErrorMessage } from "@/utils/apiError";

const STATUS_STYLES: Record<string, string> = {
  UNPAID:  "bg-amber-100 text-amber-700",
  PAID:    "bg-green-100 text-green-700",
  OVERDUE: "bg-red-100 text-red-600",
  VOID:    "bg-gray-100 text-gray-500",
};

interface Props {
  invoice: Invoice;
}

export default function InvoiceCard({ invoice }: Props) {
  const navigate = useNavigate();
  const toast = useToast();
  const [paying, setPaying] = useState(false);

  const due = new Date(invoice.due_date);
  const today = new Date();
  const daysUntilDue = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const isOverdue = invoice.status === "OVERDUE";

  const handlePay = async () => {
    if (paying) return;
    try {
      setPaying(true);
      savePendingInvoicePayment(invoice.invoice_id);
      const res = await getInvoicePaymentLink(
        invoice.invoice_id,
        buildInvoicePaymentSuccessUrl(invoice.invoice_id),
      );
      const paymentUrl = res.data?.url;
      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }
      window.location.assign(paymentUrl);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Could not start payment."));
      setPaying(false);
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm p-5 space-y-3 hover:shadow-md transition ${
        isOverdue ? "border-red-200" : "border-gray-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <p className="font-bold text-gray-900 text-sm">{invoice.property_name}</p>
          <p className="text-[11px] text-gray-400 mt-0.5">{invoice.location}</p>
        </div>
        <span
          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${STATUS_STYLES[invoice.status] ?? "bg-gray-100 text-gray-500"}`}
        >
          {invoice.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
        <p>Amount: <span className="font-semibold text-gray-800">EGP {Number(invoice.amount).toLocaleString()}</span></p>
        <p>Due: <span className="font-semibold text-gray-800">{invoice.due_date}</span></p>
        {isOverdue && (
          <p className="col-span-2 text-red-600 font-semibold">
            {Math.abs(daysUntilDue)} day{Math.abs(daysUntilDue) !== 1 ? "s" : ""} overdue
          </p>
        )}
        {invoice.status === "UNPAID" && daysUntilDue > 0 && daysUntilDue <= 3 && (
          <p className="col-span-2 text-amber-600 font-semibold">
            Due in {daysUntilDue} day{daysUntilDue !== 1 ? "s" : ""}
          </p>
        )}
        {invoice.paid_at && (
          <p className="col-span-2">Paid: <span className="font-semibold text-gray-800">{invoice.paid_at?.slice(0, 10)}</span></p>
        )}
      </div>

      <div className="flex gap-2 flex-wrap pt-1">
        {(invoice.status === "UNPAID" || invoice.status === "OVERDUE") && (
          <button
            onClick={handlePay}
            disabled={paying}
            className="text-xs px-4 py-1.5 bg-dark-knight text-white rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
          >
            {paying ? "Redirecting..." : "Pay Now"}
          </button>
        )}
        <button
          onClick={() => navigate(`/leases`)}
          className="text-xs px-4 py-1.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition cursor-pointer"
        >
          View Lease
        </button>
      </div>
    </div>
  );
}
