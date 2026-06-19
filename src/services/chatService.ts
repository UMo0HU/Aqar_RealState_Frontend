import axios from "@/api/axiosInstance";

export interface InboxChat {
  chat_id: string;
  property_id?: number | string | null;
  property_name: string;
  property_images: string[] | string | null;
  partner_name: string;
  partner_id: string;
  last_message: string | null;
  last_message_time: string | null;
  unread_count: number;
  is_property_deleted?: boolean;
}

export interface ChatMessage {
  message_id: string;
  sender_id:  string;
  content:    string;
  is_read:    boolean | number;
  created_at: string;
}

export interface SendMessageData {
  chat_id: string;
  sender_id: string;
  property_id?: number | string;
  content: string;
  created_at: string | Date;
}

export interface SocketChatMessage {
  chat_id: string;
  sender_id: string;
  property_id?: number | string;
  content: string;
  created_at: string | Date;
}

export interface StoredChatContext {
  chat_id: string;
  property_id?: number | string | null;
  property_name?: string;
  property_img?: string | null;
  partner_id?: string;
  partner_name?: string;
  updated_at: number;
}

const CHAT_CONTEXT_STORAGE_KEY = "aqar_chat_context";
const MAX_STORED_CHAT_CONTEXTS = 50;

const normalizePropertyId = (value: number | string | null | undefined) => {
  if (value === undefined || value === null || value === "") return undefined;
  const asNumber = Number(value);
  return Number.isFinite(asNumber) ? asNumber : value;
};

const mergeStoredText = (
  next: string | null | undefined,
  previous: string | null | undefined,
): string | undefined => {
  if (typeof next === "string") return next.trim() ? next : previous ?? undefined;
  if (typeof previous === "string") return previous;
  return undefined;
};

const readStoredChatContexts = (): Record<string, StoredChatContext> => {
  try {
    const raw = localStorage.getItem(CHAT_CONTEXT_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, StoredChatContext>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writeStoredChatContexts = (contexts: Record<string, StoredChatContext>) => {
  const trimmed = Object.values(contexts)
    .sort((left, right) => right.updated_at - left.updated_at)
    .slice(0, MAX_STORED_CHAT_CONTEXTS)
    .reduce<Record<string, StoredChatContext>>((next, context) => {
      next[context.chat_id] = context;
      return next;
    }, {});

  localStorage.setItem(CHAT_CONTEXT_STORAGE_KEY, JSON.stringify(trimmed));
};

export const rememberChatContext = (
  chatId: string,
  context: Partial<Omit<StoredChatContext, "chat_id" | "updated_at">>,
) => {
  if (!chatId) return;

  const existing = readStoredChatContexts();
  const previous = existing[chatId];

  existing[chatId] = {
    chat_id: chatId,
    property_id: normalizePropertyId(context.property_id ?? previous?.property_id),
    property_name: mergeStoredText(context.property_name, previous?.property_name),
    property_img: context.property_img ?? previous?.property_img ?? null,
    partner_id: mergeStoredText(context.partner_id, previous?.partner_id),
    partner_name: mergeStoredText(context.partner_name, previous?.partner_name),
    updated_at: Date.now(),
  };

  writeStoredChatContexts(existing);
};

export const getRememberedChatContext = (chatId: string) =>
  readStoredChatContexts()[chatId] ?? null;

export const findRememberedChatContext = (
  propertyId: number | string,
  partnerId: string,
) => {
  if (!partnerId) return null;

  const normalizedPropertyId = String(normalizePropertyId(propertyId));

  return Object.values(readStoredChatContexts()).find(
    (context) =>
      String(normalizePropertyId(context.property_id)) === normalizedPropertyId &&
      context.partner_id === partnerId,
  ) ?? null;
};

export const hydrateInboxChat = (chat: InboxChat): InboxChat => {
  const remembered = getRememberedChatContext(chat.chat_id);

  return {
    ...chat,
    property_id: normalizePropertyId(chat.property_id ?? remembered?.property_id) ?? null,
  };
};

export const getInbox = () =>
  axios.get<{ status: string; data: InboxChat[] }>("/chat/inbox");

export const getInboxChatById = async (chatId: string) => {
  const res = await getInbox();
  const chats = (res.data.data ?? []).map(hydrateInboxChat);
  return chats.find((chat) => chat.chat_id === chatId) ?? null;
};

export const getChatHistory = (chat_id: string) =>
  axios.get<{ status: string; data: ChatMessage[] }>(`/chat/history/${chat_id}`);

export const sendMessage = (
  receiver_id: string,
  property_id: number | string,
  content: string,
) =>
  axios.post<{ status: string; data: SendMessageData }>("/chat/send", {
    receiver_id,
    property_id,
    content,
  });

export const markChatAsRead = (chat_id: string) =>
  axios.patch(`/chat/read/${chat_id}`);
