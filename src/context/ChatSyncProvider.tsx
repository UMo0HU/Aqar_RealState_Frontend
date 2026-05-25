import { useEffect, type ReactNode } from "react";

import { getSocket } from "@/api/socket";
import { useAuth } from "@/context/AuthContext";
import {
  rememberChatContext,
  type SocketChatMessage,
} from "@/services/chatService";

export function ChatSyncProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, userInfo } = useAuth();

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
    };

    socket.on("new_chat_message", handleIncomingMessage);

    return () => {
      socket.off("new_chat_message", handleIncomingMessage);
    };
  }, [isAuthenticated, userInfo?.id]);

  return <>{children}</>;
}
