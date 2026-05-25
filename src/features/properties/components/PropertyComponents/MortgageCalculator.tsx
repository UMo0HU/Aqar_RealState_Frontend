import { useState } from "react";
import type { Property } from "@/types/index";

interface Props {
  property: Property;
}

export default function MortgageCalculator({ property }: Props) {
  const [downPayment, setDownPayment]   = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm]         = useState("");
  const [monthly, setMonthly]           = useState<number | null>(null);

  const propertyPrice = property.priceValue ?? 0;

  const calculate = () => {
    const P   = propertyPrice - Number(downPayment || 0);
    const r   = Number(interestRate) / 100 / 12;
    const n   = Number(loanTerm) * 12;
    if (P <= 0 || r <= 0 || n <= 0) { setMonthly(null); return; }
    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthly(M);
  };

  // Only show for sale properties
  if (property.property_type !== "for_sale") return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
      <h2 className="text-xl font-semibold">Mortgage Calculator</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Property Price (EGP)</label>
          <input
            readOnly
            value={propertyPrice.toLocaleString()}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm bg-gray-50 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Down Payment (EGP)</label>
          <input
            type="number"
            min={0}
            placeholder="e.g. 500000"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Annual Interest Rate (%)</label>
          <input
            type="number"
            min={0}
            step={0.1}
            placeholder="e.g. 12"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Loan Term (Years)</label>
          <input
            type="number"
            min={1}
            placeholder="e.g. 20"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
      >
        Calculate Monthly Payment
      </button>

      {monthly !== null && (
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Estimated Monthly Payment</p>
          <p className="text-3xl font-bold mt-1">
            EGP {monthly.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </p>
        </div>
      )}
    </div>
  );
}
