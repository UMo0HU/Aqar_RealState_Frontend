// ─── Nav Icons ────────────────────────────────────────────────────────────────

export const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
  </svg>
);

export const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round"/>
  </svg>
);

export const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
  </svg>
);

export const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 14a1 1 0 100 2 1 1 0 000-2z" fill="currentColor" stroke="none"/>
    <path d="M2 10h20M6 4l4-1 8 3" strokeLinecap="round"/>
  </svg>
);

export const SignOutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── Property Card Icons ──────────────────────────────────────────────────────

export const WhiteHeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="white"
    stroke="white"
    strokeWidth="1.5"
    className="w-9 h-9 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"  // ← من w-7 لـ w-9
  >
    <path d="M12 21C12 21 3 13.5 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-9 13-9 13z"/>
  </svg>
);

export const RedHeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="#ef4444"
    stroke="#ef4444"
    strokeWidth="1.5"
    className="w-9 h-9 drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]"  // ← من w-7 لـ w-9
  >
    <path d="M12 21C12 21 3 13.5 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-9 13-9 13z"/>
  </svg>
);

export const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 shrink-0">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

export const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M3 12V7a1 1 0 011-1h16a1 1 0 011 1v5" strokeLinecap="round"/>
    <path d="M3 12h18v5H3z"/>
    <path d="M3 17v2M21 17v2" strokeLinecap="round"/>
    <rect x="7" y="9" width="4" height="3" rx="0.5"/>
    <rect x="13" y="9" width="4" height="3" rx="0.5"/>
  </svg>
);

export const BathIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path d="M4 12h16v3a5 5 0 01-5 5H9a5 5 0 01-5-5v-3z"/>
    <path d="M4 12V6a2 2 0 014 0v1" strokeLinecap="round"/>
    <path d="M8 21v1M16 21v1" strokeLinecap="round"/>
  </svg>
);

export const RulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <path d="M6 6v3M10 6v2M14 6v3M18 6v2" strokeLinecap="round"/>
  </svg>
);