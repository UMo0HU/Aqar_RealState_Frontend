import { io, type Socket } from "socket.io-client";
import { BASE_URL } from "@/api/axiosInstance";

let socket: Socket | null = null;

export const connectSocket = (token: string): Socket => {
  if (socket?.connected) return socket;

  if (socket) {
    socket.disconnect();
    socket = null;
  }

  socket = io(BASE_URL, {
    auth: { token },
    transports: ["websocket", "polling"],
    reconnectionAttempts: 6,
    reconnectionDelay: 1500,
  });

  socket.on("connect", () =>
    console.log("✅ Socket connected:", socket?.id)
  );

  socket.on("disconnect", (reason) =>
    console.log("❌ Socket disconnected:", reason)
  );

  socket.on("connect_error", (err) =>
    console.error("⚠️ Socket error:", err.message)
  );

  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
    console.log("🔌 Socket disconnected manually");
  }
};

export const getSocket = (): Socket | null => socket;