import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { connectSocket, getSocket } from "@/api/socket";
import { useAuth } from "@/context/AuthContext";
import {
  getAllNotifications,
  markNotificationRead,
} from "@/services/notificationService";
import type { Notification } from "@/types";
import {
  mergeNotifications,
  normalizeNotification,
} from "@/utils/notifications";

interface NotificationsContextValue {
  notifications: Notification[];
  unreadCount: number;
  loading: boolean;
  error: string | null;
  refreshNotifications: (options?: { silent?: boolean }) => Promise<void>;
  markAsRead: (id: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
}

const NotificationsContext = createContext<NotificationsContextValue | null>(null);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, token } = useAuth();

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const notificationsRef = useRef<Notification[]>([]);

  useEffect(() => {
    notificationsRef.current = notifications;
  }, [notifications]);

  const resetState = useCallback(() => {
    setNotifications([]);
    setUnreadCount(0);
    setLoading(false);
    setError(null);
  }, []);

  const refreshNotifications = useCallback(
    async (options?: { silent?: boolean }) => {
      if (!isAuthenticated) {
        resetState();
        return;
      }

      if (!options?.silent) setLoading(true);
      setError(null);

      try {
        const res = await getAllNotifications();
        const fetched = (res.data.data.notifications ?? []).map(normalizeNotification);

        setNotifications((current) => mergeNotifications(fetched, current));
        setUnreadCount(
          Number(
            res.data.data.unreadCount
              ?? fetched.filter((notification) => !notification.viewed).length,
          ),
        );
      } catch {
        setError("Failed to load notifications.");
        throw new Error("Failed to load notifications.");
      } finally {
        if (!options?.silent) setLoading(false);
      }
    },
    [isAuthenticated, resetState],
  );

  useEffect(() => {
    if (!isAuthenticated) {
      resetState();
      return;
    }

    refreshNotifications().catch(() => {});
  }, [isAuthenticated, refreshNotifications, resetState]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const socket = getSocket() ?? (token ? connectSocket(token) : null);
    if (!socket) return;

    const handleNewNotification = (incoming: Record<string, unknown>) => {
      const nextNotification = normalizeNotification(incoming);
      const alreadyExists = notificationsRef.current.some(
        (notification) =>
          notification.notification_id === nextNotification.notification_id,
      );

      setNotifications((current) =>
        mergeNotifications([nextNotification], current),
      );

      if (!alreadyExists && !nextNotification.viewed) {
        setUnreadCount((current) => current + 1);
      }
    };

    const handleConnect = () => {
      refreshNotifications({ silent: true }).catch(() => {});
    };

    socket.on("new_notification", handleNewNotification);
    socket.on("connect", handleConnect);

    return () => {
      socket.off("new_notification", handleNewNotification);
      socket.off("connect", handleConnect);
    };
  }, [isAuthenticated, refreshNotifications]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const handleFocus = () => {
      if (document.hidden) return;
      refreshNotifications({ silent: true }).catch(() => {});
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleFocus);
    };
  }, [isAuthenticated, refreshNotifications]);

  const markAsRead = useCallback(
    async (id: string) => {
      const existing = notificationsRef.current.find(
        (notification) => notification.notification_id === id,
      );
      if (!existing || existing.viewed) return;

      setNotifications((current) =>
        current.map((notification) =>
          notification.notification_id === id
            ? { ...notification, viewed: true }
            : notification,
        ),
      );
      setUnreadCount((current) => Math.max(0, current - 1));

      try {
        await markNotificationRead(id);
      } catch {
        refreshNotifications({ silent: true }).catch(() => {});
        throw new Error("Failed to mark notification as read.");
      }
    },
    [refreshNotifications],
  );

  const markAllAsRead = useCallback(async () => {
    const unreadIds = notificationsRef.current
      .filter((notification) => !notification.viewed)
      .map((notification) => notification.notification_id);

    if (unreadIds.length === 0) return;

    setNotifications((current) =>
      current.map((notification) => ({ ...notification, viewed: true })),
    );
    setUnreadCount(0);

    const results = await Promise.allSettled(
      unreadIds.map((id) => markNotificationRead(id)),
    );

    if (results.some((result) => result.status === "rejected")) {
      refreshNotifications({ silent: true }).catch(() => {});
      throw new Error("Failed to mark all notifications as read.");
    }
  }, [refreshNotifications]);

  const value = useMemo<NotificationsContextValue>(
    () => ({
      notifications,
      unreadCount,
      loading,
      error,
      refreshNotifications,
      markAsRead,
      markAllAsRead,
    }),
    [
      error,
      loading,
      markAllAsRead,
      markAsRead,
      notifications,
      refreshNotifications,
      unreadCount,
    ],
  );

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error("useNotifications must be used within NotificationsProvider.");
  }

  return context;
};
