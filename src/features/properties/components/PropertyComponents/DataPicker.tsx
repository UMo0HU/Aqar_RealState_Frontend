import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { format, addMonths, startOfDay, differenceInCalendarDays, eachDayOfInterval, isSameDay } from "date-fns";

export interface DateSelection {
  checkIn:     string;
  checkOut:    string;
  rentingType: "DAY" | "MONTH";
  days?:       number;
  numMonths?:  number;
}

interface Props {
  mode:           "DAY" | "MONTH";
  onChange:       (selection: DateSelection | null) => void;
  disabledDates?: Date[];
  onRangeError?:  (msg: string) => void;
}

/*
  Centering strategy:
  ───────────────────────────────────────────────────────────────
  WRONG  →  flex justify-center  on the scroll wrapper
            When content overflows, CSS anchors the RIGHT edge
            and throws left overflow away — it's unreachable.

  CORRECT → overflow-x-auto  on outer wrapper (plain block)
            w-fit mx-auto     on inner wrapper
            `margin: auto` centers when container > content.
            When container < content it falls back to left-aligned,
            so both ← and → scroll directions work normally.
  ───────────────────────────────────────────────────────────────
*/
const rdpTheme: React.CSSProperties = {
  "--rdp-cell-size":               "40px",
  "--rdp-month-width":             "280px",
  "--rdp-accent-color":            "#0F172A",
  "--rdp-accent-color-dark":       "#0F172A",
  "--rdp-range-middle-color":      "#FEF3C7",
  "--rdp-range-middle-color-dark": "#FEF3C7",
  "--rdp-selected-color":          "#ffffff",
  "--rdp-today-color":             "#D97706",
} as React.CSSProperties;

export default function DatePicker({ mode, onChange, disabledDates = [], onRangeError }: Props) {
  const [dayRange,    setDayRange]    = useState<DateRange | undefined>();
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [numMonths,   setNumMonths]   = useState<number>(1);

  const rangeHasDisabledDate = (from: Date, to: Date): boolean => {
    if (disabledDates.length === 0) return false;
    const days = eachDayOfInterval({ start: from, end: to });
    return days.some((day) => disabledDates.some((d) => isSameDay(day, d)));
  };

  const emitDay = (r: DateRange | undefined) => {
    setDayRange(r);
    if (!r?.from || !r?.to) { onChange(null); return; }
    if (rangeHasDisabledDate(r.from, r.to)) {
      setDayRange(undefined);
      onChange(null);
      onRangeError?.("Your selected range includes unavailable dates.");
      return;
    }
    const days = differenceInCalendarDays(r.to, r.from);
    if (days <= 0) { onChange(null); return; }
    onChange({
      checkIn:     format(r.from, "yyyy-MM-dd"),
      checkOut:    format(r.to,   "yyyy-MM-dd"),
      rentingType: "DAY",
      days,
    });
  };

  const emitMonth = (date: Date | undefined, months: number) => {
    if (!date || months < 1) { onChange(null); return; }
    const checkOut = addMonths(date, months);
    onChange({
      checkIn:     format(date,     "yyyy-MM-dd"),
      checkOut:    format(checkOut, "yyyy-MM-dd"),
      rentingType: "MONTH",
      numMonths:   months,
    });
  };

  // ── DAY mode ──────────────────────────────────────────────────────────────
  if (mode === "DAY") {
    return (
      <div>
        {/* outer: scrollable block — inner: w-fit mx-auto so both directions scroll */}
        <div className="overflow-x-auto">
          <div style={rdpTheme} className="w-fit mx-auto">
            <DayPicker
              mode="range"
              selected={dayRange}
              onSelect={emitDay}
              numberOfMonths={1}
              disabled={[{ before: startOfDay(new Date()) }, ...disabledDates]}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-1 max-w-[280px] mx-auto">
          {[
            { label: "Check-in",  date: dayRange?.from },
            { label: "Check-out", date: dayRange?.to   },
          ].map(({ label, date }) => (
            <div key={label} className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</p>
              <p className="font-semibold text-xs mt-0.5 truncate">
                {date ? format(date, "EEE, MMM d") : "—"}
              </p>
            </div>
          ))}
        </div>

        {dayRange?.from && dayRange?.to && (
          <p className="text-xs text-center text-gray-500 mt-2">
            {differenceInCalendarDays(dayRange.to, dayRange.from)} days
          </p>
        )}
      </div>
    );
  }

  // ── MONTH mode ────────────────────────────────────────────────────────────
  const checkOut = checkInDate ? addMonths(checkInDate, numMonths) : undefined;

  return (
    <div className="space-y-4">

      {/* Step 1 — move-in date picker */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">
          1. Pick your move-in date
        </p>
        {/* same scroll fix as DAY mode */}
        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white">
          <div style={rdpTheme} className="w-fit mx-auto py-2">
            <DayPicker
              mode="single"
              selected={checkInDate}
              onSelect={(d) => {
                if (d && disabledDates.some((dd) => isSameDay(d, dd))) {
                  onRangeError?.("This date is unavailable.");
                  return;
                }
                setCheckInDate(d ?? undefined);
                emitMonth(d ?? undefined, numMonths);
              }}
              numberOfMonths={1}
              disabled={[{ before: startOfDay(new Date()) }, ...disabledDates]}
            />
          </div>
        </div>
      </div>

      {/* Step 2 — month spinner, centered */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">
          2. How many months?
        </p>
        <div className="flex items-center justify-center gap-4">
          <button type="button"
            onClick={() => { const n = Math.max(1, numMonths - 1); setNumMonths(n); emitMonth(checkInDate, n); }}
            className="w-9 h-9 rounded-full border border-gray-200 text-xl font-bold text-gray-600 hover:bg-gray-100 transition cursor-pointer flex items-center justify-center">
            −
          </button>
          <span className="text-2xl font-bold text-gray-900 w-10 text-center">{numMonths}</span>
          <button type="button"
            onClick={() => { const n = Math.min(24, numMonths + 1); setNumMonths(n); emitMonth(checkInDate, n); }}
            className="w-9 h-9 rounded-full border border-gray-200 text-xl font-bold text-gray-600 hover:bg-gray-100 transition cursor-pointer flex items-center justify-center">
            +
          </button>
          <span className="text-sm text-gray-500">month{numMonths !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {/* Move-in / Move-out pills */}
      <div className="grid grid-cols-2 gap-2 max-w-[280px] mx-auto">
        {[
          { label: "Move-in",  date: checkInDate },
          { label: "Move-out", date: checkOut    },
        ].map(({ label, date }) => (
          <div key={label} className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">{label}</p>
            <p className="font-semibold text-xs mt-0.5 truncate">
              {date ? format(date, "MMM d, yyyy") : "—"}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
