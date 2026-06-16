import { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "@/features/properties/components/NavBar";
import { getBalance, requestWithdrawal } from "@/services/paymentService";
import { useToast } from "@/context/ToastContext";
import { getApiErrorMessage } from "@/utils/apiError";

export default function WalletPage() {
  const toast = useToast();

  const [balance, setBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawMethod, setWithdrawMethod] = useState("bank_transfer");
  const [withdrawReceiver, setWithdrawReceiver] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getBalance()
      .then((res) => setBalance(res.data.balance))
      .catch((err) => {
        const msg = getApiErrorMessage(err, "Could not load balance.");
        toast.error(msg);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleWithdraw = async () => {
    const amountNum = parseFloat(withdrawAmount);
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      toast.error("Enter a valid positive amount.");
      return;
    }
    if (!withdrawReceiver.trim()) {
      toast.error("Enter receiver account details.");
      return;
    }

    try {
      setSubmitting(true);
      await requestWithdrawal(amountNum, withdrawMethod, withdrawReceiver.trim());
      toast.success("Withdrawal submitted successfully!");
      setShowModal(false);
      setWithdrawAmount("");
      setWithdrawReceiver("");

      const res = await getBalance();
      setBalance(res.data.balance);
    } catch (err) {
      toast.error(getApiErrorMessage(err, "Withdrawal failed."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Wallet</h1>
            <p className="text-sm text-gray-500 mb-6">Manage your earnings and withdrawals.</p>

            {loading ? (
              <div className="flex justify-center py-10">
                <div className="w-8 h-8 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="rounded-2xl bg-gradient-to-br from-dark-knight to-slate-700 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-wide">Current Balance</p>
                  <p className="mt-2 text-4xl font-extrabold">
                    {balance !== null ? `${parseFloat(balance).toLocaleString()} EGP` : "—"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="w-full bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50"
                >
                  Withdraw
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Withdraw Funds</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Balance: {balance !== null ? `${parseFloat(balance).toLocaleString()} EGP` : "—"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Amount (EGP)</label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="e.g. 500"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Method</label>
              <select
                value={withdrawMethod}
                onChange={(e) => setWithdrawMethod(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              >
                <option value="bank_transfer">Bank Transfer</option>
                <option value="card">Card</option>
                <option value="wallet">Mobile Wallet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Receiver Details</label>
              <textarea
                value={withdrawReceiver}
                onChange={(e) => setWithdrawReceiver(e.target.value)}
                placeholder="Bank account / wallet number / card details"
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition resize-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleWithdraw}
                disabled={submitting}
                className="flex-1 bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50"
              >
                {submitting ? "Processing…" : "Confirm Withdrawal"}
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-6 py-3 border border-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
