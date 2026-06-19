import type { Notification } from "@/types";

export interface RawNotificationRecord {
  notification_id?: string | number | null;
  sender?: string | null;
  receiver?: string | null;
  event_type?: string | null;
  notification_title?: string | null;
  notification_body?: string | null;
  metadata?: Record<string, unknown> | string | null;
  viewed?: boolean | number | null;
  created_at?: string | Date | null;
  type?: string | null;
  title?: string | null;
  body?: string | null;
}

export const TYPE_ICONS: Record<string, string> = {
  RENT_REQUEST: "📨",
  RENT_REQUEST_ACCEPTED: "🎉",
  RENT_REQUEST_REJECTED: "❌",
  RENT_REQUEST_CANCELLED: "🚫",
  PAYMENT_SUCCESS: "💳",
  RENT_PAID: "💰",
  MONTHLY_RENT_PAID: "💳",
  PAYMENT_REFUNDED: "🔄",
  WITHDRAWAL_SUCCESS: "🏦",
  LISTING_FEE_PAID: "🏷️",
  LISTING_EXPIRY_WARNING: "⏳",
  LISTING_EXPIRED: "🚫",
  RENT_DUE_NOTICE: "⏳",
  PAYMENT_OVERDUE: "⚠️",
  TENANT_PAYMENT_FAILED: "🚩",
  LEASE_COMPLETED: "🏠",
  LEASE_TERMINATED: "🚫",
  PURCHASE_REQUEST: "🏡",
  REQUEST_ACCEPTED: "🤝",
  REQUEST_REJECTED: "❌",
  PROPERTY_SOLD: "🔑",
};

export const parseNotificationMetadata = (
  metadata: Notification["metadata"] | string | null | undefined,
): Record<string, unknown> => {
  if (!metadata) return {};
  if (typeof metadata === "string") {
    try {
      const parsed = JSON.parse(metadata) as Record<string, unknown>;
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  return metadata;
};

const toIsoDate = (value: string | Date | null | undefined) => {
  if (!value) return new Date().toISOString();
  const next = new Date(value);
  return Number.isNaN(next.getTime()) ? new Date().toISOString() : next.toISOString();
};

export const normalizeNotification = (raw: RawNotificationRecord): Notification => ({
  notification_id: String(raw.notification_id ?? Date.now()),
  sender: String(raw.sender ?? "SYSTEM"),
  receiver: String(raw.receiver ?? ""),
  event_type: String(raw.event_type ?? raw.type ?? ""),
  notification_title: String(raw.notification_title ?? raw.title ?? ""),
  notification_body: String(raw.notification_body ?? raw.body ?? ""),
  metadata: parseNotificationMetadata(raw.metadata),
  viewed: raw.viewed === true || Number(raw.viewed ?? 0) > 0,
  created_at: toIsoDate(raw.created_at),
});

export const mergeNotifications = (...collections: Notification[][]) => {
  const seen = new Set<string>();
  const merged: Notification[] = [];

  collections.flat().forEach((notification) => {
    if (!notification?.notification_id) return;
    if (seen.has(notification.notification_id)) return;
    seen.add(notification.notification_id);
    merged.push(notification);
  });

  return merged.sort(
    (left, right) =>
      new Date(right.created_at).getTime() - new Date(left.created_at).getTime(),
  );
};

export const resolveNotificationRoute = (notification: Notification): string | null => {
  const meta = parseNotificationMetadata(notification.metadata);

  switch (notification.event_type) {
    case "RENT_REQUEST":
    case "RENT_REQUEST_ACCEPTED":
    case "RENT_REQUEST_REJECTED":
    case "RENT_REQUEST_CANCELLED":
      return "/rent-requests";

    case "PAYMENT_SUCCESS":
      return meta.request_id ? `/payment/success?request_id=${meta.request_id}` : "/rent-requests";

    case "RENT_PAID":
    case "MONTHLY_RENT_PAID":
    case "PAYMENT_REFUNDED":
    case "WITHDRAWAL_SUCCESS":
    case "RENT_DUE_NOTICE":
    case "PAYMENT_OVERDUE":
    case "TENANT_PAYMENT_FAILED":
    case "LEASE_COMPLETED":
    case "LEASE_TERMINATED":
      return "/leases";

    case "LISTING_FEE_PAID":
    case "LISTING_EXPIRY_WARNING":
    case "LISTING_EXPIRED":
      return meta.property_id ? `/property/${meta.property_id}/subscription` : "/my-properties";

    case "PURCHASE_REQUEST":
    case "REQUEST_ACCEPTED":
    case "REQUEST_REJECTED":
      return "/purchase-requests";

    case "PROPERTY_SOLD":
      return "/my-properties";

    default:
      return null;
  }
};
