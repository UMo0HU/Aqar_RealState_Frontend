import { useState, useRef, useEffect } from "react";
import { Link, useNavigate }           from "react-router-dom";

import { useAuth }               from "@/context/AuthContext";
import { useChatSync }           from "@/context/ChatSyncProvider";
import { useNotifications }      from "@/context/NotificationsContext";
import { logout as logoutAPI }   from "@/services/authService";

import { BellIcon, ChatIcon, ProfileIcon, SignOutIcon } from "@/utils/Icons";

// ─── Small icon button with optional numeric badge ────────────────────────────
const NavIconButton = ({
  children,
  onClick,
  badgeCount = 0,
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  badgeCount?: number;
  title?: string;
}) => (
  <button
    onClick={onClick}
    title={title}
    className="relative p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
  >
    {children}
    {badgeCount > 0 && (
      <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-300 text-black rounded-full text-[9px] font-bold flex items-center justify-center leading-none">
        {badgeCount > 9 ? "9+" : badgeCount}
      </span>
    )}
  </button>
);

// ─── NavBar ───────────────────────────────────────────────────────────────────
const NavBar = () => {
  const { userInfo, isAuthenticated, logout } = useAuth();
  const { unreadCount } = useNotifications();
  const { unreadChatCount } = useChatSync();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ── Close dropdown on outside click ──────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    setDropdownOpen(false);
    try { await logoutAPI(); } catch { /* ignore */ }
    logout();
  };

  const initials = userInfo
    ? `${userInfo.firstName[0]}${userInfo.secondName[0]}`.toUpperCase()
    : "";

  return (
    <nav className="flex md:flex-row flex-col gap-2.5 justify-around items-center py-2 font-semibold bg-dark-knight text-white shadow-[0px_4px_4px_0px_#FFFFFF1A]">

      <Link to="/" className="text-2xl font-bold tracking-wide">AQAR</Link>

      <div className="flex md:gap-16 sm:gap-10 gap-5 text-sm">
        <Link to="/"                         className="hover:text-amber-300 transition-colors">Browse</Link>
        <Link to="/properties?type=for_sale" className="hover:text-amber-300 transition-colors">Buy</Link>
        <Link to="/properties?type=for_rent" className="hover:text-amber-300 transition-colors">Rent</Link>
        <Link to="/ai-assistant" className="hover:text-amber-300 transition-colors">AI Assistant</Link>
      </div>

      <div className="flex items-center gap-1">
        {!isAuthenticated ? (
          <>
            <Link to="/auth/login"  className="rounded-full px-5 py-1 bg-amber-300 text-black text-sm font-bold hover:bg-amber-400 transition">Login</Link>
            <Link to="/auth/signup" className="rounded-full px-5 py-1 bg-white text-black text-sm font-bold hover:bg-gray-100 transition">Sign up</Link>
          </>
        ) : (
          <>
            {/* Chat icon — links to /chat inbox */}
            <NavIconButton title="Messages" badgeCount={unreadChatCount} onClick={() => navigate("/chat")}>
              <ChatIcon />
            </NavIconButton>

            {/* Notification bell with live badge */}
            <NavIconButton
              title="Notifications"
              badgeCount={unreadCount}
              onClick={() => { navigate("/notifications"); }}
            >
              <BellIcon />
            </NavIconButton>

            {/* Avatar + dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-2 ml-1 pl-2 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center text-xs font-bold">
                  {initials}
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-11 w-52 bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">

                  {/* User info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-bold truncate">{userInfo?.firstName} {userInfo?.secondName}</p>
                    <p className="text-xs text-gray-400 truncate">{userInfo?.email}</p>
                  </div>

                  {/* Nav links */}
                  <div className="py-1">
                    {[
                      { to: "/profile",       icon: <ProfileIcon />, label: "Profile"       },
                      { to: "/my-properties", icon: "🏠",            label: "My Properties" },
                      { to: "/rent-requests", icon: "📨",            label: "Rent Requests" },
                      { to: "/leases",        icon: "📋",            label: "My Leases"     },
                      { to: "/favorites",     icon: "❤️",            label: "Saved"         },
                      { to: "/chat",          icon: "💬",            label: "Messages"      },
                    ].map(({ to, icon, label }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                      >
                        <span className="w-4 h-4 flex items-center justify-center text-base">{icon}</span>
                        {label}
                      </Link>
                    ))}
                  </div>

                  {/* Sign out */}
                  <div className="border-t border-gray-100 py-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      <SignOutIcon /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
