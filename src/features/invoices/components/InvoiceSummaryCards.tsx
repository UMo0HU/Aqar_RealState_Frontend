import type { InvoiceStats } from "@/types";

interface Props {
  stats: InvoiceStats["asRenter"];
  perspective: "renter";
}

interface OwnerProps {
  stats: InvoiceStats["asOwner"];
  perspective: "owner";
}

type UnionProps = Props | OwnerProps;

function fmt(amount: number) {
  return `EGP ${amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
}

export default function InvoiceSummaryCards(props: UnionProps) {
  if (props.perspective === "renter") {
    const s = props.stats;
    const cards = [
      { label: "Total Due", value: fmt(s.total_due), color: "text-red-600" },
      { label: "Unpaid", value: s.unpaid_count, color: "text-amber-600" },
      { label: "Overdue", value: s.overdue_count, color: "text-red-600" },
      { label: "Paid", value: s.paid_count, color: "text-green-600" },
    ];

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{c.label}</p>
            <p className={`text-xl font-bold mt-1 ${c.color}`}>{c.value}</p>
          </div>
        ))}
      </div>
    );
  }

  const s = (props as OwnerProps).stats;
  const cards = [
    { label: "Expected Income", value: fmt(s.expected_income), color: "text-green-600" },
    { label: "Pending", value: s.pending_count, color: "text-amber-600" },
    { label: "Collected", value: s.paid_count, color: "text-green-600" },
    { label: "Delinquent Tenants", value: s.delinquent_tenants, color: "text-red-600" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {cards.map((c) => (
        <div key={c.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{c.label}</p>
          <p className={`text-xl font-bold mt-1 ${c.color}`}>{c.value}</p>
        </div>
      ))}
    </div>
  );
}
