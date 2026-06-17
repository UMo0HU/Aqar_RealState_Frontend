import { useState } from "react";

import { useToast } from "@/context/ToastContext";
import { purchaseRequestService } from "@/services/purchaseRequestService";
import { getApiErrorMessage } from "@/utils/apiError";

interface Props {
  propertyId: number;
  onClose: () => void;
}

export default function PurchaseRequestModal({ propertyId, onClose }: Props) {
  const toast = useToast();
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    try {
      setSending(true);
      await purchaseRequestService.sendRequest(propertyId, message.trim());
      toast.success("Purchase request sent!");
      onClose();
    } catch (err) {
      toast.error(getApiErrorMessage(err, "Failed to send purchase request."));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600">Purchase Request</p>
            <h2 className="mt-1 text-xl font-bold text-gray-900">Interested in this property?</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-500">
          Send a purchase request to the seller. They will review it and you can track its status.
        </p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Optional message to the seller…"
          rows={4}
          className="mt-4 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
        />

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-gray-300 py-2.5 text-sm font-semibold transition hover:bg-gray-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={sending}
            className="flex-1 rounded-xl bg-dark-knight py-2.5 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-50 cursor-pointer"
          >
            {sending ? "Sending…" : "Send Request"}
          </button>
        </div>
      </div>
    </div>
  );
}
