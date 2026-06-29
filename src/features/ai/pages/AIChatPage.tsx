import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useToast } from "@/context/ToastContext";
import { streamAiChatMessage, getAiSessionId, resetAiSessionId } from "@/services/aiService";
import { getApiErrorMessage } from "@/utils/apiError";
import { BASE_URL } from "@/api/axiosInstance";
import type { AIChatProperty } from "@/types/ai";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  properties?: AIChatProperty[];
}

const HISTORY_STORAGE_KEY = "aqar_ai_history_v3";
const ASSET_BASE_URL = BASE_URL;

const resolveImage = (path: string) => {
  if (!path) return "https://placehold.co/400x300?text=No+Image";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${ASSET_BASE_URL}/${path.replace(/^\//, "")}`;
};

export default function AIChatPage() {
  const toast = useToast();
  const [sessionId, setSessionId] = useState(() => getAiSessionId());
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const aiMessageIdRef = useRef<string | null>(null);
  const charBufferRef = useRef<string[]>([]);
  const charTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamDoneRef = useRef(false);

  const isNearBottom = () => {
    const el = containerRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight < 100;
  };

  const stopCharInterval = () => {
    if (charTimerRef.current !== null) {
      clearInterval(charTimerRef.current);
      charTimerRef.current = null;
    }
  };

  const outputNextChar = () => {
    if (charBufferRef.current.length === 0) {
      if (streamDoneRef.current) {
        stopCharInterval();
        setSending(false);
      }
      return;
    }
    const char = charBufferRef.current.shift()!;
    const id = aiMessageIdRef.current;
    if (!id) return;
    setMessages((prev) => {
      const existing = prev.find((m) => m.id === id);
      if (existing) {
        return prev.map((msg) =>
          msg.id === id ? { ...msg, content: msg.content + char } : msg
        );
      }
      return [...prev, { id, role: "assistant", content: char, properties: [] }];
    });
  };

  useEffect(() => {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(messages.slice(-50)));
    if (isNearBottom()) {
      endRef.current?.scrollIntoView({ behavior: sending ? "auto" : "smooth" });
    }
  }, [messages, sending]);

  useEffect(() => {
    return () => stopCharInterval();
  }, []);

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem(HISTORY_STORAGE_KEY);
    setSessionId(resetAiSessionId());
    toast.success("Chat history cleared.");
  };

  const submit = async () => {
    const text = input.trim();
    if (!text || sending) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: "user", content: text };
    const aiMessageId = Date.now().toString() + "-ai";
    aiMessageIdRef.current = aiMessageId;
    stopCharInterval();
    charBufferRef.current = [];
    streamDoneRef.current = false;

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setSending(true);

    try {
      await streamAiChatMessage(sessionId, text, {
        onToken: (chunk) => {
          for (const char of chunk) {
            charBufferRef.current.push(char);
          }
          if (!charTimerRef.current) {
            charTimerRef.current = setInterval(outputNextChar, 30);
          }
        },
        onProperties: (properties) => {
          const id = aiMessageIdRef.current;
          if (!id) return;
          setMessages((prev) => {
            const existing = prev.find((m) => m.id === id);
            if (existing) {
              return prev.map((msg) =>
                msg.id === id ? { ...msg, properties: properties as AIChatProperty[] } : msg
              );
            }
            return [...prev, { id, role: "assistant", content: "", properties: properties as AIChatProperty[] }];
          });
        },
        onDone: () => {
          streamDoneRef.current = true;
        },
        onError: () => {
          charBufferRef.current = [];
          stopCharInterval();
          setSending(false);
        },
      });
    } catch (error) {
      charBufferRef.current = [];
      stopCharInterval();
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageIdRef.current && msg.content === ""
            ? { ...msg, content: "Sorry, the AI assistant encountered an error." }
            : msg
        )
      );
      toast.error(getApiErrorMessage(error, "AI assistant is unavailable."));
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] w-full bg-gray-50 font-sans">

      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-gray-500 hover:text-dark-knight transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-dark-knight">Aqar Assistant</h1>
            <p className="text-xs text-gray-500">Powered by AI Semantic Search Engine</p>
          </div>
        </div>
        <button
          onClick={handleClearChat}
          className="text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors"
        >
          Clear Chat
        </button>
      </header>

      <main ref={containerRef} className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        <div className="max-w-full lg:max-w-7xl mx-auto space-y-6 px-0 lg:px-4">

          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <svg className="w-16 h-16 mb-4 text-dark-knight opacity-40 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-xl font-semibold text-gray-700">Welcome to Aqar Smart Assistant</p>
              <p className="text-sm text-gray-500 mt-1">Ask anything! Example: "عايز شقة في التجمع ٣ غرف"</p>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>

              <div className={`p-5 rounded-3xl text-[15px] leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-dark-knight text-white rounded-br-sm max-w-[90%] md:max-w-[60%]"
                  : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm max-w-full md:max-w-[90%]"
              }`}>

                {msg.role === "assistant" ? (
                  <div className="overflow-x-auto [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_th]:bg-gray-50 [&_th]:p-2.5 [&_th]:border [&_th]:border-gray-200 [&_th]:text-left [&_td]:p-2.5 [&_td]:border [&_td]:border-gray-200 [&_td]:align-top [&_tr:nth-child(even)_td]:bg-gray-50/50 prose prose-sm max-w-none prose-headings:text-gray-900 prose-a:text-amber-600 prose-strong:text-gray-900 prose-code:text-amber-700 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-li:marker:text-gray-400">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap font-medium">{msg.content}</div>
                )}

                {msg.properties && Array.isArray(msg.properties) && msg.properties.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-gray-100 space-y-4">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Matched Properties</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {msg.properties.map((prop: AIChatProperty, idx: number) => {
                        const currentId = prop.property_id || prop.id;
                        const finalTitle = prop.title || prop.property_name || "Premium Real Estate Listing";
                        const imgUrl = resolveImage(prop.image_url || (Array.isArray(prop.images) ? prop.images[0] : ""));
                        const displayPrice = prop.price || prop.price_value;
                        const beds = prop.bedrooms || prop.bedrooms_no || 0;
                        const baths = prop.bathrooms || prop.bathrooms_no || 0;
                        const sizeValue = prop.size || 0;
                        const isSale = prop.property_type === "for_sale";
                        return (
                          <div key={idx} className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/60 hover:shadow-md transition-all">
                            <div className="h-32 w-full relative bg-gray-200">
                              <img src={imgUrl} alt={finalTitle} className="w-full h-full object-cover" />
                              <span className="absolute top-2 right-2 bg-dark-knight/85 text-white font-bold text-[11px] px-2 py-0.5 rounded-full uppercase">
                                {isSale ? "For Sale" : "For Rent"}
                              </span>
                            </div>
                            <div className="p-3.5 flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{finalTitle}</h4>
                                <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{prop.location}</p>
                              </div>
                              <div className="mt-3">
                                <div className="text-xs text-gray-400 flex gap-2 mb-2 font-medium">
                                  <span>{beds} Beds</span>•<span>{baths} Baths</span>•<span>{sizeValue} m²</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                  <span className="text-sm font-extrabold text-dark-knight">
                                    {displayPrice ? `${Number(displayPrice).toLocaleString()} EGP` : "Contact Agent"}
                                  </span>
                                  <Link
                                    to={isSale ? `/buy/property/${currentId}` : `/rent/property/${currentId}`}
                                    className="text-xs bg-amber-500 text-white font-bold px-3 py-1.5 rounded-lg hover:bg-amber-600 transition"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}

          {sending && !messages.some((m) => m.id === aiMessageIdRef.current) && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 px-6 py-4 rounded-3xl rounded-bl-sm text-gray-500 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-dark-knight rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-dark-knight rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-2 h-2 bg-dark-knight rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 p-4 z-10">
        <div className="max-w-full lg:max-w-7xl mx-auto flex gap-3 items-end px-0 lg:px-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            className="flex-1 max-h-32 min-h-[52px] p-3.5 bg-gray-50 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-dark-knight focus:border-dark-knight transition-all resize-none font-medium text-gray-800"
            placeholder="Search listings with natural language... (Shift + Enter for new line)"
            rows={1}
          />
          <button
            onClick={submit}
            disabled={sending || !input.trim()}
            className="h-[52px] px-8 bg-dark-knight text-white font-bold rounded-2xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center shrink-0"
          >
            Send
          </button>
        </div>
      </footer>

    </div>
  );
}