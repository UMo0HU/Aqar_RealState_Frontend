import type { Property } from "@/types";
import { resolveImageUrl } from "@/services/propertyService";
import { fetchEventSource } from "@microsoft/fetch-event-source";

// ─── Session Management ──────────────────────────────────────────────────────
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

// ─── Configuration ───────────────────────────────────────────────────────────
const AI_REQUEST_TIMEOUT_MS = 90_000;

const env = import.meta.env as Record<string, string | undefined>;
export const AI_BASE_URL = (
  env.VITE_AI_API_URL ??
  env.REACT_APP_AI_API_URL ??
  "https://web-production-c0669.up.railway.app/api/v1"
).replace(/\/$/, "");

// ─── Warm-up ping (wakes Railway from cold start) ────────────────────────────
const PING_TIMEOUT_MS = 5_000;

export const pingAiService = async (): Promise<void> => {
  const base = AI_BASE_URL.replace(/\/api\/v1$/, "");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PING_TIMEOUT_MS);
  try {
    await fetch(`${base}/health`, {
      method: "GET",
      signal: controller.signal,
    });
  } catch {
    // Silently ignore — this is just a warm-up
  } finally {
    clearTimeout(timer);
  }
};

// ─── HTTP helper with timeout + retry ────────────────────────────────────────
const isRetryableStatus = (status: number) =>
  status === 502 || status === 503;

const postAi = async (path: string, body: object, attempt: number = 1): Promise<any> => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_REQUEST_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(`${AI_BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } catch (err: unknown) {
    clearTimeout(timer);

    if (err instanceof DOMException && err.name === "AbortError") {
      if (attempt < 2) {
        return postAi(path, body, attempt + 1);
      }
      throw new Error("The AI service is taking longer than expected. Please try again.");
    }

    if (attempt < 2) {
      return postAi(path, body, attempt + 1);
    }
    throw new Error("Unable to contact AI service. Check your network connection.");
  }

  clearTimeout(timer);

  if (!response.ok && isRetryableStatus(response.status) && attempt < 2) {
    return postAi(path, body, attempt + 1);
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg =
      data?.detail?.[0]?.msg ??
      data?.message ??
      `AI Service Error (${response.status})`;
    throw new Error(errorMsg);
  }

  return data;
};

// ─── Chat endpoint ───────────────────────────────────────────────────────────
export const sendAiChatMessage = async (sessionId: string, message: string) => {
  const data = await postAi("/chat", { message, session_id: sessionId });

  return {
    answer: data?.answer ?? data?.reply ?? "I could not read the assistant response.",
    reply: data?.reply,
    properties: data?.properties ?? [],
  };
};

// ─── Search endpoint ─────────────────────────────────────────────────────────
const mapAiProperty = (prop: any): Property => ({
  propertyId: prop.id ?? prop.property_id,
  ownerId: prop.owner_id ?? "",
  propertyName: prop.title ?? prop.property_name ?? "",
  propertyDesc: prop.description ?? prop.property_desc ?? "",
  location: prop.location ?? "",
  pricePerDay: prop.price_per_day ?? (prop.price ? prop.price / 30 : 0),
  priceValue: prop.price_value ?? prop.price ?? 0,
  pricingUnit: prop.pricing_unit ?? "MONTH",
  size: String(prop.size ?? ""),
  bedroomsNumber: prop.bedrooms ?? prop.bedrooms_no ?? 0,
  bedsNumber: prop.beds_no ?? prop.bedrooms ?? 1,
  bathroomsNumber: prop.bathrooms ?? prop.bathrooms_no ?? 0,
  images: Array.isArray(prop.images)
    ? prop.images.map(resolveImageUrl)
    : prop.image_url
      ? [resolveImageUrl(prop.image_url)]
      : [],
  ownershipProof: [],
  isAvailable: prop.is_available ?? true,
  isVerified: prop.is_verified ?? true,
  isVisible: prop.is_visible ?? true,
  is_furnished: prop.is_furnished ?? false,
  isSponsored: prop.is_sponsored ?? false,
  property_type: prop.property_type ?? "for_rent",
  listingStatus: prop.listing_status ?? "active",
  listingExpiry: prop.listing_expiry ?? null,
  rate: prop.rate ?? null,
  latitude: prop.latitude,
  longitude: prop.longitude,
  owner_first_name: prop.owner_first_name,
  owner_second_name: prop.owner_second_name,
  owner_email: prop.owner_email,
});

export const searchAiProperties = async (query: string): Promise<Property[]> => {
  const data = await postAi("/search", { query });
  return (data?.properties || []).map(mapAiProperty);
};

// ─── Recommendations ─────────────────────────────────────────────────────────
export interface RecommendPayload {
  property_description: string;
  session_id: string;
  property_ids: number[];
  limit: number;
}

export const recommendSimilarProperties = async (payload: RecommendPayload) => {
  const data = await postAi("/recommend/similar", payload);
  return data;
};

// ─── SSE Chat Stream ─────────────────────────────────────────────────────────
interface StreamCallbacks {
  onToken: (text: string) => void;
  onProperties: (properties: any[]) => void;
  onDone: () => void;
  onError: (err: any) => void;
}

export const streamAiChatMessage = async (
  sessionId: string,
  message: string,
  callbacks: StreamCallbacks
) => {
  const ctrl = new AbortController();

  await fetchEventSource(`${AI_BASE_URL}/chat/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "text/event-stream",
    },
    body: JSON.stringify({ message, session_id: sessionId }),
    signal: ctrl.signal,

    onmessage(ev) {
      if (ev.event === "token") {
        const data = JSON.parse(ev.data);
        callbacks.onToken(data.text);
      } else if (ev.event === "properties") {
        const data = JSON.parse(ev.data);
        callbacks.onProperties(data.properties);
      } else if (ev.event === "done") {
        callbacks.onDone();
      }
    },
    onerror(err) {
      callbacks.onError(err);
      ctrl.abort();
      throw err;
    },
  });
};