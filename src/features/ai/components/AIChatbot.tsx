import { useEffect, useRef, useState } from "react";

import { useToast } from "@/context/ToastContext";
import { sendAiChatMessage, getAiSessionId, resetAiSessionId } from "@/services/aiService";
import { getApiErrorMessage } from "@/utils/apiError";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const HISTORY_STORAGE_KEY = "aqar_ai_history";

const loadHistory = (): ChatMessage[] => {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ChatMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const isArabicText = (value: string) => /[\u0600-\u06FF]/.test(value);

export default function AIChatbot() {
  const toast = useToast();
  const [sessionId, setSessionId] = useState(() => getAiSessionId());
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => loadHistory());
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(messages.slice(-20)));
    }
  }, [messages]);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, open]);

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

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setSending(true);

    try {
      const response = await sendAiChatMessage(sessionId, text);
      
      setMessages((current) => [
        ...current,
        { id: Date.now().toString() + "-ai", role: "assistant", content: response.reply },
      ]);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "AI assistant is unavailable right now."));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[520px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-dark-knight px-4 py-3 text-white">
            <div>
              <p className="text-sm font-bold">AI Assistant</p>
              <p className="text-xs text-white/60">Ask about listings, areas, or next steps.</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearChat}
                title="Clear Chat"
                className="rounded-full p-1.5 text-white/80 transition hover:bg-red-500 hover:text-white cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 px-4 py-4">
            {messages.length === 0 && (
              <div className="rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-500">
                Tell me what kind of place you want, or ask for help comparing rental and sale options.
              </div>
            )}

            {messages.map((message) => {
              const isUser = message.role === "user";
              const rtl = isArabicText(message.content);

              return (
                <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    dir={rtl ? "rtl" : "ltr"}
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      isUser
                        ? "rounded-br-sm bg-dark-knight text-white"
                        : "rounded-bl-sm border border-gray-100 bg-white text-gray-800 shadow-sm"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              );
            })}

            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-gray-100 bg-white px-4 py-2.5 text-sm text-gray-500 shadow-sm">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-gray-100 bg-white p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    submit();
                  }
                }}
                rows={1}
                placeholder="Ask the assistant..."
                className="max-h-24 min-h-10 flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-dark-knight focus:ring-1 focus:ring-dark-knight"
              />
              <button
                type="button"
                onClick={submit}
                disabled={!input.trim() || sending}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark-knight text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
              >
                {sending ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 rotate-90">
                    <path d="M2 21 23 12 2 3v7l15 2-15 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-dark-knight text-white shadow-2xl transition hover:-translate-y-0.5 hover:opacity-95 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
          <path d="M12 3v3M5 8h14a2 2 0 0 1 2 2v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 13h.01M16 13h.01M9 17h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}