import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams }      from "react-router-dom";

import { getSocket }                                from "@/api/socket";
import { useAuth }                                  from "@/context/AuthContext";
import { useChatSync }                              from "@/context/ChatSyncProvider";
import { useToast }                                 from "@/context/ToastContext";
import NavBar                                       from "@/features/properties/components/NavBar";
import {
  getChatHistory,
  getInboxChatById,
  getRememberedChatContext,
  markChatAsRead,
  rememberChatContext,
  sendMessage,
  type ChatMessage,
  type SocketChatMessage,
}                                                   from "@/services/chatService";

// ─── Timestamp formatting ─────────────────────────────────────────────────────
const fmtTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

const fmtDate = (iso: string) => {
  const d = new Date(iso);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  if (d.toDateString() === today.toDateString())     return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

const parseImages = (raw: string[] | string | null | undefined): string[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  try { return JSON.parse(raw); } catch { return []; }
};

// ─── Day divider ──────────────────────────────────────────────────────────────
const DayDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 my-4">
    <div className="flex-1 h-px bg-gray-200" />
    <span className="text-[11px] text-gray-400 font-semibold">{label}</span>
    <div className="flex-1 h-px bg-gray-200" />
  </div>
);

// ─── Group messages by day ────────────────────────────────────────────────────
type DayGroup = { date: string; messages: ChatMessage[] };
const groupByDay = (msgs: ChatMessage[]): DayGroup[] => {
  const map = new Map<string, ChatMessage[]>();
  msgs.forEach((m) => {
    const key = new Date(m.created_at).toDateString();
    map.set(key, [...(map.get(key) ?? []), m]);
  });
  return Array.from(map.entries()).map(([date, messages]) => ({ date, messages }));
};

interface ChatNavState {
  partnerName?: string;
  partnerId?: string;
  propertyId?: number | string | null;
  propertyName?: string;
  propertyImg?: string | null;
}

interface ChatContextState {
  partnerName: string;
  partnerId: string;
  propertyId: number | string | null;
  propertyName: string;
  propertyImg: string | null;
}

const EMPTY_CHAT_CONTEXT: ChatContextState = {
  partnerName: "Chat",
  partnerId: "",
  propertyId: null,
  propertyName: "",
  propertyImg: null,
};

const pickText = (...values: Array<string | null | undefined>) => {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value;
  }
  return "";
};

const readKnownChatContext = (
  chatId: string | undefined,
  state: ChatNavState | null,
): Partial<ChatContextState> => {
  const remembered = chatId ? getRememberedChatContext(chatId) : null;

  return {
    partnerName: state?.partnerName ?? remembered?.partner_name,
    partnerId: state?.partnerId ?? remembered?.partner_id,
    propertyId: state?.propertyId ?? remembered?.property_id ?? null,
    propertyName: state?.propertyName ?? remembered?.property_name,
    propertyImg: state?.propertyImg ?? remembered?.property_img ?? null,
  };
};

const mergeChatContext = (
  current: ChatContextState,
  incoming: Partial<ChatContextState>,
): ChatContextState => ({
  partnerName: pickText(incoming.partnerName, current.partnerName) || "Chat",
  partnerId: pickText(incoming.partnerId, current.partnerId),
  propertyId: incoming.propertyId ?? current.propertyId ?? null,
  propertyName: pickText(incoming.propertyName, current.propertyName),
  propertyImg: incoming.propertyImg ?? current.propertyImg ?? null,
});

export default function ChatWindowPage() {
  const { chat_id }  = useParams<{ chat_id: string }>();
  const location     = useLocation();
  const navigate     = useNavigate();
  const { userInfo } = useAuth();
  const { refreshInboxCount } = useChatSync();
  const toast        = useToast();
  const userId       = userInfo?.id ?? "";

  const state = location.state as ChatNavState | null;

  const [chatContext, setChatContext] = useState<ChatContextState>(() =>
    mergeChatContext(EMPTY_CHAT_CONTEXT, readKnownChatContext(chat_id, state)),
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [contextLoading, setContextLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContextRef = useRef(chatContext);

  useEffect(() => {
    chatContextRef.current = chatContext;
  }, [chatContext]);

  const persistChatContext = useCallback((nextContext: ChatContextState) => {
    if (!chat_id) return;

    rememberChatContext(chat_id, {
      property_id: nextContext.propertyId,
      property_name: nextContext.propertyName,
      property_img: nextContext.propertyImg,
      partner_id: nextContext.partnerId,
      partner_name: nextContext.partnerName,
    });
  }, [chat_id]);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    bottomRef.current?.scrollIntoView({ behavior });
  };

  const loadHistory = useCallback(async () => {
    if (!chat_id) return;

    setLoading(true);
    setError(false);

    try {
      const res = await getChatHistory(chat_id);
      setMessages(res.data.data ?? []);
      markChatAsRead(chat_id).catch(() => {});
      refreshInboxCount();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [chat_id, refreshInboxCount]);

  // ── Load history ──────────────────────────────────────────────────────────
  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  // ── Restore partner/property context from state, storage, then inbox ─────
  useEffect(() => {
    if (!chat_id) {
      setContextLoading(false);
      return;
    }

    let cancelled = false;
    const baseContext = mergeChatContext(
      EMPTY_CHAT_CONTEXT,
      readKnownChatContext(chat_id, state),
    );

    setChatContext((current) => mergeChatContext(current, baseContext));

    const needsInboxHydration =
      !baseContext.partnerId
      || !baseContext.partnerName
      || !baseContext.propertyName
      || baseContext.propertyId === null;

    if (!needsInboxHydration) {
      setContextLoading(false);
      return;
    }

    setContextLoading(true);

    const hydrateFromInbox = async () => {
      try {
        const inboxChat = await getInboxChatById(chat_id);
        if (!inboxChat || cancelled) return;

        const nextContext = mergeChatContext(baseContext, {
          partnerName: inboxChat.partner_name,
          partnerId: inboxChat.partner_id,
          propertyId: inboxChat.property_id ?? null,
          propertyName: inboxChat.property_name,
          propertyImg: parseImages(inboxChat.property_images)[0] ?? null,
        });

        setChatContext((current) => mergeChatContext(current, nextContext));
      } catch {
        // Leave the existing fallback warning if the backend cannot restore this chat.
      } finally {
        if (!cancelled) setContextLoading(false);
      }
    };

    hydrateFromInbox();

    return () => {
      cancelled = true;
    };
  }, [
    chat_id,
    state?.partnerId,
    state?.partnerName,
    state?.propertyId,
    state?.propertyImg,
    state?.propertyName,
  ]);

  useEffect(() => {
    persistChatContext(chatContext);
  }, [chatContext, persistChatContext]);

  // ── Scroll to bottom when messages load or change ─────────────────────────
  useEffect(() => {
    scrollToBottom("auto");
  }, [loading]);

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages.length]);

  // ── Socket: receive messages from the other person ────────────────────────
  useEffect(() => {
    const attach = () => {
      const socket = getSocket();
      if (!socket || !chat_id) return false;

      const handler = (msg: SocketChatMessage) => {
        if (msg.chat_id !== chat_id) return;
        if (msg.sender_id === userId) return;

        const nextContext = mergeChatContext(chatContextRef.current, {
          partnerId: msg.sender_id,
          propertyId: msg.property_id ?? null,
        });

        setChatContext(nextContext);
        persistChatContext(nextContext);
        setContextLoading(false);

        setMessages((prev) => [
          ...prev,
          {
            message_id: `socket-${Date.now()}`,
            sender_id: msg.sender_id,
            content: msg.content,
            is_read: false,
            created_at: msg.created_at
              ? new Date(msg.created_at).toISOString()
              : new Date().toISOString(),
          },
        ]);

        markChatAsRead(chat_id).catch(() => {});
      };

      socket.on("new_chat_message", handler);
      return () => { socket.off("new_chat_message", handler); };
    };

    const cleanup = attach();
    if (cleanup) return cleanup;
    const timer = setTimeout(() => attach(), 1500);
    return () => clearTimeout(timer);
  }, [chat_id, persistChatContext, userId]);

  // ── Send message ──────────────────────────────────────────────────────────
  const handleSend = useCallback(async () => {
    const text = content.trim();
    if (!text || sending || !chatContext.partnerId || !chat_id) return;

    if (!chatContext.propertyId) {
      toast.error("Cannot send: property context is missing. Please re-open this chat.");
      return;
    }

    setSending(true);
    setContent("");

    const optimistic: ChatMessage = {
      message_id: `opt-${Date.now()}`,
      sender_id: userId,
      content: text,
      is_read: true,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimistic]);

    try {
      await sendMessage(chatContext.partnerId, chatContext.propertyId, text);
      persistChatContext(chatContext);
    } catch {
      setMessages((prev) => prev.filter((m) => m.message_id !== optimistic.message_id));
      setContent(text);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }, [chatContext, chat_id, content, persistChatContext, sending, toast, userId]);

  // ── Enter to send, Shift+Enter for new line ───────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Auto-resize textarea ──────────────────────────────────────────────────
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  const dayGroups = groupByDay(messages);
  const canReply = Boolean(chatContext.partnerId && chatContext.propertyId);
  const showInvalidContextWarning = !contextLoading && !canReply;

  return (
    <>
      <NavBar />
      <div className="flex flex-col h-[calc(100vh-56px)] bg-gray-50">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
          <button
            type="button"
            onClick={() => navigate("/chat")}
            className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="w-10 h-10 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center font-bold text-sm shrink-0">
            {chatContext.partnerName?.[0]?.toUpperCase() ?? "?"}
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm truncate">
              {chatContext.partnerName}
            </p>
            {chatContext.propertyName && (
              <p className="text-xs text-gray-400 truncate">
                📍 {chatContext.propertyName}
              </p>
            )}
          </div>
        </div>

        {/* ── Messages area ────────────────────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">

          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-8 h-8 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <p className="text-4xl">⚠️</p>
              <p className="text-gray-600 font-semibold">Failed to load messages.</p>
              <button
                onClick={() => {
                  loadHistory();
                }}
                className="bg-dark-knight text-white px-4 py-2 rounded-xl text-sm font-bold cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-2">
              <p className="text-5xl">👋</p>
              <p className="text-gray-600 font-semibold">No messages yet.</p>
              <p className="text-gray-400 text-sm">Send a message to start the conversation.</p>
            </div>
          )}

          {!loading && !error && dayGroups.map((group) => (
            <div key={group.date}>
              <DayDivider label={fmtDate(group.messages[0].created_at)} />

              {group.messages.map((msg, idx) => {
                const isMe = msg.sender_id === userId;
                const prevMsg = group.messages[idx - 1];
                const sameSender = prevMsg?.sender_id === msg.sender_id;
                const isOptimistic =
                  msg.message_id.startsWith("opt-") || msg.message_id.startsWith("socket-");

                return (
                  <div
                    key={msg.message_id}
                    className={`flex ${isMe ? "justify-end" : "justify-start"} ${sameSender ? "mt-0.5" : "mt-3"}`}
                  >
                    {!isMe && !sameSender && (
                      <div className="w-7 h-7 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center text-xs font-bold shrink-0 mr-2 mt-0.5">
                        {chatContext.partnerName?.[0]?.toUpperCase() ?? "?"}
                      </div>
                    )}
                    {!isMe && sameSender && <div className="w-7 mr-2 shrink-0" />}

                    <div className={`max-w-[70%] ${isMe ? "items-end" : "items-start"} flex flex-col`}>
                      <div
                        className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                          ${isMe
                            ? "bg-dark-knight text-white rounded-br-sm"
                            : "bg-white text-gray-800 rounded-bl-sm border border-gray-100 shadow-sm"}
                          ${isOptimistic && isMe ? "opacity-75" : "opacity-100"}`}
                      >
                        {msg.content}
                      </div>
                      {(group.messages[idx + 1]?.sender_id !== msg.sender_id || idx === group.messages.length - 1) && (
                        <p className={`text-[10px] text-gray-400 mt-1 ${isMe ? "text-right" : "text-left"}`}>
                          {fmtTime(msg.created_at)}
                          {isMe && (
                            <span className="ml-1">
                              {Number(msg.is_read) ? " ✓✓" : " ✓"}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        {/* ── Input bar ────────────────────────────────────────────────── */}
        <div className="bg-white border-t border-gray-100 px-4 py-3">
          {contextLoading && !canReply && (
            <div className="mx-auto mb-3 flex max-w-2xl items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-dark-knight border-t-transparent" />
              Restoring this conversation’s property context…
            </div>
          )}
          {showInvalidContextWarning && (
            <div className="mx-auto mb-3 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              You can read this conversation, but replying is temporarily unavailable because the server did not return the property link for this chat. Re-open it from the property page to restore the full context.
            </div>
          )}
          <div className="flex items-end gap-3 max-w-2xl mx-auto">
            <textarea
              ref={inputRef}
              value={content}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={contextLoading || !canReply}
              placeholder={
                contextLoading
                  ? "Restoring conversation details…"
                  : "Type a message… (Enter to send, Shift+Enter for new line)"
              }
              rows={1}
              className="flex-1 resize-none border border-gray-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition max-h-[120px] overflow-y-auto"
              style={{ lineHeight: "1.5" }}
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={contextLoading || !canReply || !content.trim() || sending}
              className="w-10 h-10 bg-dark-knight text-white rounded-full flex items-center justify-center shrink-0 hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {sending ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 rotate-90">
                  <path d="M2 21L23 12 2 3v7l15 2-15 2z"/>
                </svg>
              )}
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
