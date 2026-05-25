import { useState } from "react";
import { useNavigate }         from "react-router-dom";

import { useNotifications }      from "@/context/NotificationsContext";
import { useToast }              from "@/context/ToastContext";
import NavBar                    from "@/features/properties/components/NavBar";
import type { Notification }     from "@/types";
import {
  resolveNotificationRoute,
  TYPE_ICONS,
} from "@/utils/notifications";

// ─── Format a timestamp nicely ───────────────────────────────────────────────
const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

export default function NotificationsPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    notifications,
    unreadCount,
    loading,
    error,
    refreshNotifications,
    markAsRead,
    markAllAsRead,
  } = useNotifications();
  const [markingAll, setMarkingAll] = useState(false);

  // ── Click: mark read + navigate ───────────────────────────────────────────
  const handleClick = async (n: Notification) => {
    if (!n.viewed) {
      try {
        await markAsRead(n.notification_id);
      } catch {
        toast.error("Failed to update this notification.");
        return;
      }
    }

    const route = resolveNotificationRoute(n);
    if (route) navigate(route);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-500 text-sm mt-1">
                {unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up!"}
              </p>
            </div>
            {unreadCount > 0 && (
              <button
                disabled={markingAll}
                onClick={async () => {
                  try {
                    setMarkingAll(true);
                    await markAllAsRead();
                  } catch {
                    toast.error("Failed to update all notifications.");
                  } finally {
                    setMarkingAll(false);
                  }
                }}
                className="text-xs font-bold text-gray-500 hover:text-dark-knight border border-gray-200 px-3 py-1.5 rounded-lg transition mt-1 cursor-pointer disabled:opacity-50"
              >
                {markingAll ? "Updating…" : "Mark all read"}
              </button>
            )}
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="space-y-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
              <p className="font-semibold">{error}</p>
              <button
                type="button"
                onClick={() => refreshNotifications().catch(() => {})}
                className="rounded-xl bg-white px-4 py-2 font-semibold transition hover:bg-red-100 cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && notifications.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <p className="text-6xl">🔔</p>
              <p className="text-xl font-bold text-gray-700">No notifications yet.</p>
            </div>
          )}

          {/* List */}
          <div className="space-y-2.5">
            {notifications.map((n) => {
              const hasRoute = resolveNotificationRoute(n) !== null;
              const isInteractive = hasRoute || !n.viewed;

              return (
                <div
                  key={n.notification_id}
                  onClick={() => handleClick(n)}
                  className={`flex gap-4 p-4 rounded-2xl border transition
                    ${isInteractive ? "cursor-pointer" : "cursor-default"}
                    ${n.viewed
                      ? "bg-white border-gray-100 hover:border-gray-200"
                      : "bg-amber-50 border-amber-200 hover:bg-amber-100"}`}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-xl shrink-0 select-none">
                    {TYPE_ICONS[n.event_type] ?? "🔔"}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm font-bold ${n.viewed ? "text-gray-700" : "text-gray-900"}`}>
                        {n.notification_title}
                      </p>
                      {!n.viewed && (
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5 leading-snug">
                      {n.notification_body}
                    </p>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="text-xs text-gray-400">
                        {formatDate(n.created_at)}
                      </p>
                      {hasRoute && (
                        <span className="text-[11px] text-amber-600 font-semibold">
                          View →
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
