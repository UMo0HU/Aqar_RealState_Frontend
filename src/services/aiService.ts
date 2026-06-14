import { mapProperty } from "@/utils/mapProperty";
import type { Property } from "@/types";

// --- Session Management (Memory + LocalStorage) ---
const SESSION_KEY = "aqar_ai_session_id";
let memorySessionId: string | null = null;

const generateId = () => 
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const getAiSessionId = (): string => {
  if (memorySessionId) return memorySessionId;
  
  const stored = localStorage.getItem(SESSION_KEY);
  if (stored) {
    memorySessionId = stored;
    return stored;
  }

  const next = generateId();
  memorySessionId = next;
  localStorage.setItem(SESSION_KEY, next);
  return next;
};

export const resetAiSessionId = (): string => {
  const next = generateId();
  memorySessionId = next;
  localStorage.setItem(SESSION_KEY, next);
  return next;
};

// --- API Configuration ---
const env = import.meta.env as Record<string, string | undefined>;
export const AI_BASE_URL = (
  env.VITE_AI_API_URL ?? 
  env.REACT_APP_AI_API_URL ?? 
  "https://web-production-c0669.up.railway.app/api/v1"
).replace(/\/$/, "");

const postAi = async (path: string, body: object) => {
  const response = await fetch(`${AI_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg = data?.detail?.[0]?.msg ?? data?.message ?? `AI Service Error (${response.status})`;
    throw new Error(errorMsg);
  }

  return data;
};

// --- API Endpoints ---
export const sendAiChatMessage = async (sessionId: string, message: string) => {
  const data = await postAi("/chat", { message, session_id: sessionId });
  return {
    reply: data?.answer || "I could not read the assistant response.",
    properties: (data?.properties || []).map(mapProperty),
  };
};

export const searchAiProperties = async (query: string): Promise<Property[]> => {
  const data = await postAi("/search", { query });
  return (data?.properties || []).map(mapProperty);
};

export interface RecommendPayload {
  property_description: string;
  session_id: string;
  property_ids: number[];
  limit: number;
}

export const recommendSimilarProperties = async (payload: RecommendPayload): Promise<Property[]> => {
  const data = await postAi("/recommend/similar", payload);
  return (data?.properties || []).map(mapProperty);
};