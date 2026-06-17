import { useEffect, useState } from "react";

import NavBar from "@/features/properties/components/NavBar";
import InvoiceCard from "@/features/invoices/components/InvoiceCard";
import InvoiceSummaryCards from "@/features/invoices/components/InvoiceSummaryCards";
import {
  getRenterInvoices,
  getOwnerInvoices,
  getInvoiceStats,
} from "@/services/invoiceService";
import { useToast } from "@/context/ToastContext";
import type { Invoice, InvoiceStats } from "@/types";

export default function InvoicesPage() {
  const toast = useToast();

  const [renterInvoices, setRenterInvoices] = useState<Invoice[]>([]);
  const [ownerInvoices, setOwnerInvoices] = useState<Invoice[]>([]);
  const [stats, setStats] = useState<InvoiceStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"renter" | "owner">("renter");

  useEffect(() => {
    Promise.allSettled([
      getRenterInvoices(),
      getOwnerInvoices(),
      getInvoiceStats(),
    ]).then(([r, o, s]) => {
      if (r.status === "fulfilled") setRenterInvoices(r.value.data.data ?? []);
      if (o.status === "fulfilled") setOwnerInvoices(o.value.data.data ?? []);
      if (s.status === "fulfilled") setStats(s.value.data.data ?? null);
      if (r.status === "rejected" && o.status === "rejected") {
        toast.error("Failed to load invoices.");
      }
    }).finally(() => setLoading(false));
  }, []);

  const current = tab === "renter" ? renterInvoices : ownerInvoices;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Invoices</h1>
          <p className="text-gray-500 text-sm mb-6">
            View and pay your rent invoices.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {(["renter", "owner"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 px-4 text-sm font-bold transition border-b-2 -mb-px capitalize ${
                  tab === t
                    ? "border-dark-knight text-dark-knight"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                As {t}
                <span className="ml-1.5 text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-semibold">
                  {(t === "renter" ? renterInvoices : ownerInvoices).length}
                </span>
              </button>
            ))}
          </div>

          {/* Stats */}
          {!loading && stats && (
            <InvoiceSummaryCards
              {...(tab === "renter"
                ? { stats: stats.asRenter, perspective: "renter" as const }
                : { stats: stats.asOwner, perspective: "owner" as const })}
            />
          )}

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Empty */}
          {!loading && current.length === 0 && (
            <div className="text-center py-20 text-gray-400 space-y-2">
              <p className="text-5xl">📄</p>
              <p className="font-semibold">No invoices as {tab} yet.</p>
            </div>
          )}

          {/* Invoice list */}
          <div className="space-y-4">
            {current.map((inv) => (
              <InvoiceCard key={inv.invoice_id} invoice={inv} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
