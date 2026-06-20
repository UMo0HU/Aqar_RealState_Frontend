import { useEffect, useState } from "react";

import NavBar from "@/features/properties/components/NavBar";
import {
  getBalance,
  getTransactionHistory,
  requestWithdrawal,
} from "@/services/paymentService";
import type { Transaction } from "@/services/paymentService";
import { useToast } from "@/context/ToastContext";
import { getApiErrorMessage } from "@/utils/apiError";

export default function WalletPage() {
  const toast = useToast();

  const [balance, setBalance] = useState<string | null>(null);
  const [lockedFunds, setLockedFunds] = useState<string | null>(null);
  const [availableBalance, setAvailableBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [txLoading, setTxLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawMethod, setWithdrawMethod] = useState("bank_transfer");
  const [withdrawReceiver, setWithdrawReceiver] = useState("");
  const [receiverError, setReceiverError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchBalance = () =>
    getBalance()
      .then((res) => {
        setBalance(res.data.balance);
        setLockedFunds(res.data.lockedFunds ?? null);
        setAvailableBalance(res.data.availableBalance ?? null);
      })
      .catch((err) => {
        const msg = getApiErrorMessage(err, "Could not load balance.");
        toast.error(msg);
      });

  const fetchTransactions = () =>
    getTransactionHistory()
      .then((res) => setTransactions(res.data.transactions))
      .catch(() => {})
      .finally(() => setTxLoading(false));

  useEffect(() => {
    Promise.all([fetchBalance(), fetchTransactions()])
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const validateReceiver = (value: string, method: string): string => {
    const trimmed = value.trim();
    if (!trimmed) return "Receiver details are required.";

    if (method === "wallet") {
      const walletRegex = /^(01)[0-2,5]{1}[0-9]{8}$/;
      if (!walletRegex.test(trimmed)) {
        return "Invalid wallet number. Must be 11 digits starting with 01 (e.g. 01012345678).";
      }
    } else {
      const digitsOnly = trimmed.replace(/\D/g, "");
      if (digitsOnly.length < 10) {
        return "Account number must be at least 10 digits.";
      }
    }
    return "";
  };

  const handleReceiverChange = (value: string) => {
    setWithdrawReceiver(value);
    setReceiverError(validateReceiver(value, withdrawMethod));
  };

  const handleMethodChange = (method: string) => {
    setWithdrawMethod(method);
    setReceiverError(validateReceiver(withdrawReceiver, method));
  };

  const handleWithdraw = async () => {
    const amountNum = parseFloat(withdrawAmount);
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      toast.error("Enter a valid positive amount.");
      return;
    }

    if (availableBalance !== null && amountNum > parseFloat(availableBalance)) {
      toast.error("Amount exceeds your available balance.");
      return;
    }

    const err = validateReceiver(withdrawReceiver, withdrawMethod);
    if (err) {
      setReceiverError(err);
      toast.error(err);
      return;
    }

    try {
      setSubmitting(true);
      await requestWithdrawal(amountNum, withdrawMethod, withdrawReceiver.trim());
      toast.success("Withdrawal submitted successfully!");
      setShowModal(false);
      setWithdrawAmount("");
      setWithdrawReceiver("");

      await Promise.all([fetchBalance(), fetchTransactions()]);
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
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-wide">Total Balance</p>
                  <p className="mt-2 text-4xl font-extrabold">
                    {balance !== null ? `${parseFloat(balance).toLocaleString("en-GB")} EGP` : "—"}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white/70">Available for Withdrawal</p>
                      <p className="text-lg font-bold text-emerald-300">
                        {availableBalance !== null
                          ? `${parseFloat(availableBalance).toLocaleString("en-GB")} EGP`
                          : "—"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white/70">Locked for Upcoming Rentals</p>
                      <p className="text-sm font-semibold text-white/50">
                        {lockedFunds !== null
                          ? `${parseFloat(lockedFunds).toLocaleString("en-GB")} EGP`
                          : "—"}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  disabled={availableBalance !== null && parseFloat(availableBalance) <= 0}
                  className="w-full bg-dark-knight text-white py-3 rounded-xl font-bold hover:opacity-90 transition disabled:opacity-50"
                >
                  Withdraw
                </button>
              </div>
            )}
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Transaction History</h2>
            {txLoading ? (
              <div className="flex justify-center py-6">
                <div className="w-6 h-6 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
              </div>
            ) : transactions.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-6">No transactions yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs uppercase tracking-wide border-b border-gray-100">
                      <th className="pb-2 pr-4 font-semibold">Date</th>
                      <th className="pb-2 pr-4 font-semibold">Type</th>
                      <th className="pb-2 font-semibold text-right">Amount</th>
                      <th className="pb-2 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {transactions.map((tx) => (
                      <tr key={tx.payment_id} className="hover:bg-gray-50/50">
                        <td className="py-3 pr-4 text-gray-500 whitespace-nowrap">
                          {new Date(tx.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3 pr-4">
                          <span
                            className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              tx.payment_type === "rent"
                                ? "bg-green-100 text-green-700"
                                : tx.payment_type === "withdraw"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {tx.payment_type === "rent"
                              ? "Rent"
                              : tx.payment_type === "withdraw"
                                ? "Withdrawal"
                                : "Refund"}
                          </span>
                        </td>
                        <td className="py-3 text-right font-semibold tabular-nums whitespace-nowrap">
                          {parseFloat(tx.value).toLocaleString("en-GB")} EGP
                        </td>
                        <td className="py-3 text-right whitespace-nowrap">
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              tx.status === "succeeded"
                                ? "bg-green-100 text-green-700"
                                : tx.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-600"
                            }`}
                          >
                            {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Withdrawal Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Withdraw Funds</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Available: {availableBalance !== null ? `${parseFloat(availableBalance).toLocaleString("en-GB")} EGP` : "—"}
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
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Amount (EGP)
              </label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="e.g. 500"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              />
              <p className="mt-1 text-xs text-gray-400">
                Max: {availableBalance !== null ? `${parseFloat(availableBalance).toLocaleString("en-GB")} EGP` : "—"}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Method</label>
              <select
                value={withdrawMethod}
                onChange={(e) => handleMethodChange(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              >
                <option value="bank_transfer">Bank Transfer</option>
                <option value="card">Card</option>
                <option value="wallet">Mobile Wallet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Receiver Details
              </label>
              <textarea
                value={withdrawReceiver}
                onChange={(e) => handleReceiverChange(e.target.value)}
                placeholder={
                  withdrawMethod === "wallet"
                    ? "Phone number (e.g. 01012345678)"
                    : "Bank account number (min 10 digits)"
                }
                rows={3}
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none transition resize-none ${
                  receiverError
                    ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 focus:border-dark-knight focus:ring-1 focus:ring-dark-knight"
                }`}
              />
              {receiverError && <p className="mt-1 text-xs text-red-500">{receiverError}</p>}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleWithdraw}
                disabled={submitting || !!receiverError}
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
