import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useNotifications } from "@/context/NotificationsContext";
import { useToast } from "@/context/ToastContext";
import {
  buildInvoicePaymentSuccessUrl,
  getInvoicePaymentLink,
  savePendingInvoicePayment,
} from "@/services/paymentService";
import { getApiErrorMessage } from "@/utils/apiError";
import { parseNotificationMetadata } from "@/utils/notifications";

const ACTIONABLE_TYPES = new Set(["RENT_DUE_NOTICE", "PAYMENT_OVERDUE"]);

export default function RentDueBanner() {
  const { notifications } = useNotifications();
  const toast = useToast();
  const [paying, setPaying] = useState(false);

  const activeNotification = useMemo(() => {
    const actionable = notifications.filter((notification) => {
      const metadata = parseNotificationMetadata(notification.metadata);
      return !notification.viewed && ACTIONABLE_TYPES.has(notification.event_type) && metadata.invoice_id;
    });

    return actionable.find((notification) => notification.event_type === "PAYMENT_OVERDUE")
      ?? actionable[0]
      ?? null;
  }, [notifications]);

  if (!activeNotification) return null;

  const metadata = parseNotificationMetadata(activeNotification.metadata);
  const invoiceId = String(metadata.invoice_id ?? "");
  const isOverdue = activeNotification.event_type === "PAYMENT_OVERDUE";

  const handlePayInvoice = async () => {
    if (!invoiceId || paying) return;

    try {
      setPaying(true);
      savePendingInvoicePayment(invoiceId);
      const res = await getInvoicePaymentLink(invoiceId, buildInvoicePaymentSuccessUrl(invoiceId));
      const paymentUrl = res.data?.url;

      if (typeof paymentUrl !== "string" || !paymentUrl) {
        throw new Error("Missing payment URL");
      }

      window.location.assign(paymentUrl);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Could not start invoice payment."));
      setPaying(false);
    }
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-3xl">
      <div className={`rounded-2xl border px-4 py-3 shadow-2xl ${
        isOverdue
          ? "border-red-200 bg-red-50 text-red-800"
          : "border-amber-200 bg-amber-50 text-amber-900"
      }`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold">
              {isOverdue ? "Rent payment overdue" : "Rent payment due soon"}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed">
              {activeNotification.notification_body || "Complete your rent invoice payment to keep the lease active."}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Link
              to="/leases"
              className="rounded-xl border border-current px-4 py-2 text-xs font-bold transition hover:bg-white/50"
            >
              View Lease
            </Link>
            <button
              type="button"
              onClick={handlePayInvoice}
              disabled={paying}
              className="rounded-xl bg-dark-knight px-4 py-2 text-xs font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            >
              {paying ? "Preparing..." : "Pay Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
