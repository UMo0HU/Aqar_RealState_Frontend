import { useCallback, useEffect, useState } from "react";
import { useNavigate }                 from "react-router-dom";

import NavBar                          from "@/features/properties/components/NavBar";
import { useAuth }                     from "@/context/AuthContext";
import { useChatSync }                 from "@/context/ChatSyncProvider";
import { getSocket }                   from "@/api/socket";
import { BASE_URL }                    from "@/api/axiosInstance";
import {
  getInbox,
  hydrateInboxChat,
  rememberChatContext,
  type InboxChat,
  type SocketChatMessage,
} from "@/services/chatService";

// ─── Resolve image URL (same logic as propertyService) ────────────────────────
const resolveImg = (raw: string | null | undefined): string => {
  if (!raw) return "";
  if (raw.startsWith("http")) return raw;
  return `${BASE_URL}/${raw.replace(/^\//, "")}`;
};

const parseImages = (raw: string[] | string | null | undefined): string[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  try { return JSON.parse(raw); } catch { return []; }
};

// ─── Relative time formatter ──────────────────────────────────────────────────
const timeAgo = (iso: string | null): string => {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1)  return "Just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 7)  return `${d}d ago`;
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
};

export default function ChatInboxPage() {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const { refreshInboxCount } = useChatSync();

  const [chats,   setChats]   = useState<InboxChat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  const loadInbox = useCallback(async () => {
    const res = await getInbox();
    const nextChats = (res.data.data ?? []).map((chat) => {
      const hydrated = hydrateInboxChat(chat);

      rememberChatContext(hydrated.chat_id, {
        property_id: hydrated.property_id,
        property_name: hydrated.property_name,
        property_img: parseImages(hydrated.property_images)[0] ?? null,
        partner_id: hydrated.partner_id,
        partner_name: hydrated.partner_name,
      });

      return hydrated;
    });

    setChats(nextChats);
  }, []);

  // ── Initial fetch ─────────────────────────────────────────────────────────
  useEffect(() => {
    loadInbox()
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [loadInbox]);

  // ── Socket: live inbox updates ────────────────────────────────────────────
  // When a new message arrives for any chat, update last_message + unread_count
  useEffect(() => {
    const attach = () => {
      const socket = getSocket();
      if (!socket) return false;

      const handler = (msg: SocketChatMessage) => {
        setChats((prev) => {
          const exists = prev.find((c) => c.chat_id === msg.chat_id);
          if (!exists) {
            rememberChatContext(msg.chat_id, {
              property_id: msg.property_id,
              partner_id: msg.sender_id === userInfo?.id ? undefined : msg.sender_id,
            });
            // Unknown chat — refresh inbox to get full details
            loadInbox().catch(() => {});
            return prev;
          }

          rememberChatContext(exists.chat_id, {
            property_id: msg.property_id ?? exists.property_id,
            property_name: exists.property_name,
            property_img: parseImages(exists.property_images)[0] ?? null,
            partner_id: exists.partner_id,
            partner_name: exists.partner_name,
          });

          const nextUnreadCount = msg.sender_id === userInfo?.id
            ? exists.unread_count
            : exists.unread_count + 1;

          // Move this chat to the top and update last message
          const updated: InboxChat = {
            ...exists,
            last_message:      msg.content,
            last_message_time: new Date(msg.created_at).toISOString(),
            property_id:       msg.property_id ?? exists.property_id ?? null,
            unread_count:      nextUnreadCount,
          };
          return [updated, ...prev.filter((c) => c.chat_id !== msg.chat_id)];
        });
      };

      socket.on("new_chat_message", handler);
      return () => { socket.off("new_chat_message", handler); };
    };

    const cleanup = attach();
    if (cleanup) return cleanup;
    const t = setTimeout(() => attach(), 1500);
    return () => clearTimeout(t);
  }, [loadInbox, userInfo?.id]);

  const navigateToChat = (chat: InboxChat) => {
    rememberChatContext(chat.chat_id, {
      property_id: chat.property_id,
      property_name: chat.property_name,
      property_img: parseImages(chat.property_images)[0] ?? null,
      partner_id: chat.partner_id,
      partner_name: chat.partner_name,
    });
    setChats((prev) =>
      prev.map((current) =>
        current.chat_id === chat.chat_id
          ? { ...current, unread_count: 0 }
          : current,
      ),
    );

    navigate(`/chat/${chat.chat_id}`, {
      state: {
        partnerName:  chat.partner_name,
        partnerId:    chat.partner_id,
        propertyId:   chat.property_id,
        propertyName: chat.property_name,
        propertyImg:  parseImages(chat.property_images)[0] ?? null,
      },
    });

    refreshInboxCount();
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-500 text-sm mt-1">Your conversations with property owners and renters.</p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-16">
              <div className="w-10 h-10 border-4 border-dark-knight border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="text-center py-20 space-y-3">
              <p className="text-4xl">⚠️</p>
              <p className="text-gray-600 font-semibold">Failed to load messages.</p>
              <button
                onClick={() => {
                  setError(false);
                  setLoading(true);
                  loadInbox()
                    .catch(() => setError(true))
                    .finally(() => setLoading(false));
                }}
                className="mt-2 bg-dark-knight text-white px-5 py-2 rounded-xl text-sm font-bold hover:opacity-90 transition cursor-pointer"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && chats.length === 0 && (
            <div className="text-center py-24 space-y-3">
              <p className="text-6xl">💬</p>
              <p className="text-xl font-bold text-gray-700">No messages yet.</p>
              <p className="text-gray-400 text-sm">
                When you contact a property owner, your conversation will appear here.
              </p>
            </div>
          )}

          {/* Chat list */}
          <div className="space-y-2">
            {chats.map((chat) => {
              const img    = resolveImg(parseImages(chat.property_images)[0]);
              const unread = chat.unread_count > 0;

              return (
                <button
                  key={chat.chat_id}
                  type="button"
                  onClick={() => navigateToChat(chat)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left transition cursor-pointer
                    ${unread
                      ? "bg-amber-50 border-amber-200 hover:bg-amber-100"
                      : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"}`}
                >
                  {/* Property thumbnail / avatar */}
                  <div className="relative shrink-0">
                    {img ? (
                      <img
                        src={img}
                        alt={chat.property_name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center text-2xl">
                        🏠
                      </div>
                    )}
                    {unread && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 text-black rounded-full text-[10px] font-bold flex items-center justify-center">
                        {chat.unread_count > 9 ? "9+" : chat.unread_count}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm truncate ${unread ? "font-bold text-gray-900" : "font-semibold text-gray-800"}`}>
                        {chat.partner_name}
                      </p>
                      <p className="text-[10px] text-gray-400 shrink-0">
                        {timeAgo(chat.last_message_time)}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 truncate mb-0.5">
                      📍 {chat.property_name}
                    </p>
                    <p className={`text-xs truncate ${unread ? "text-gray-700 font-semibold" : "text-gray-400"}`}>
                      {chat.last_message ?? "Start the conversation…"}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-4 h-4 text-gray-300 shrink-0">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
