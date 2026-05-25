import axios from "@/api/axiosInstance";

export interface NotificationRecord {
  notification_id: string | number;
  sender?: string;
  receiver?: string;
  event_type?: string;
  notification_title?: string;
  notification_body?: string;
  metadata?: Record<string, unknown> | string | null;
  viewed?: boolean | number | null;
  created_at?: string;
  type?: string;
  title?: string;
  body?: string;
}

export interface NotificationsListData {
  notifications?: NotificationRecord[];
  unreadCount?: number;
}

export const getAllNotifications = () =>
  axios.get<{ status: string; data: NotificationsListData }>("/api/notification");

export const getNotificationById = (id: string) =>
  axios.get<{ status: string; data: NotificationRecord }>(`/api/notification/${id}`);

export const markNotificationRead = (id: string) =>
  axios.put<{ status: string; data?: NotificationRecord }>(`/api/notification/${id}`);
