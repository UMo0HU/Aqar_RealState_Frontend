import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import { getSocket } from "@/api/socket";
import { useAuth } from "@/context/AuthContext";
import {
  getInbox,
  rememberChatContext,
  type SocketChatMessage,
} from "@/services/chatService";

interface ChatSyncValue {
  unreadChatCount: number;
  refreshInboxCount: () => Promise<void>;
}

const ChatSyncContext = createContext<ChatSyncValue>({
  unreadChatCount: 0,
  refreshInboxCount: async () => {},
});

export const useChatSync = () => useContext(ChatSyncContext);

export function ChatSyncProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, userInfo } = useAuth();
  const [unreadChatCount, setUnreadChatCount] = useState(0);

  const refreshInboxCount = useCallback(async () => {
    try {
      const res = await getInbox();
      const chats = res.data.data ?? [];
      const total = chats.reduce((sum, chat) => sum + (chat.unread_count ?? 0), 0);
      setUnreadChatCount(total);
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated || !userInfo?.id) return;

    refreshInboxCount();
  }, [isAuthenticated, userInfo?.id, refreshInboxCount]);

  useEffect(() => {
    if (!isAuthenticated || !userInfo?.id) return;

    const socket = getSocket();
    if (!socket) return;

    const handleIncomingMessage = (message: SocketChatMessage) => {
      if (!message?.chat_id) return;

      rememberChatContext(message.chat_id, {
        property_id: message.property_id,
        partner_id: message.sender_id === userInfo.id ? undefined : message.sender_id,
      });

      if (message.sender_id !== userInfo.id) {
        refreshInboxCount();
      }
    };

    socket.on("new_chat_message", handleIncomingMessage);

    return () => {
      socket.off("new_chat_message", handleIncomingMessage);
    };
  }, [isAuthenticated, userInfo?.id, refreshInboxCount]);

  return (
    <ChatSyncContext.Provider value={{ unreadChatCount, refreshInboxCount }}>
      {children}
    </ChatSyncContext.Provider>
  );
}
