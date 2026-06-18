import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/context/ToastContext";
import { sendAiChatMessage, getAiSessionId, resetAiSessionId } from "@/services/aiService";
import { getApiErrorMessage } from "@/utils/apiError";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  properties?: any[]; // Flexible array for whatever schema comes back
}

const HISTORY_STORAGE_KEY = "aqar_ai_history_v3";

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

  // Auto-scroll to bottom
  useEffect(() => {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(messages.slice(-50)));
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending]);

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
      
      // 🐛 DEBUGGER: Keep an eye on this in your F12 Console
      console.log("[AI SCHEMA DEBUG] Full Response:", response);
      
      setMessages((current) => [
        ...current, 
        { 
          id: Date.now().toString() + "-ai", 
          role: "assistant", 
          content: response.reply,
          properties: response.properties 
        }
      ]);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "AI assistant is unavailable."));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-60px)] w-full bg-gray-50 font-sans">
      
      {/* 1. Full-Width Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white border-b border-gray-200 shadow-sm z-10">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-gray-500 hover:text-dark-knight transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-dark-knight">Aqar Assistant</h1>
            <p className="text-xs text-gray-500">Powered by AI</p>
          </div>
        </div>
        <button 
          onClick={handleClearChat} 
          className="text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors"
        >
          Clear Chat
        </button>
      </header>

      {/* 2. Scrollable Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <svg className="w-12 h-12 mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-lg font-medium">Hello! What kind of property are you looking for?</p>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              
              <div className={`max-w-[90%] md:max-w-[75%] p-5 rounded-3xl text-[15px] leading-relaxed shadow-sm ${
                msg.role === "user" 
                  ? "bg-dark-knight text-white rounded-br-sm" 
                  : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"
              }`}>
                
                {/* The AI's Text Response */}
                <div className="whitespace-pre-wrap">{msg.content}</div>

                {/* The Properties Rendered as Simple Text Lines */}
                {msg.properties && Array.isArray(msg.properties) && msg.properties.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Attached Listings</p>
                    
                    {msg.properties.map((prop: any, idx: number) => (
                      <div key={idx} className="text-sm">
                        <span className="font-semibold text-gray-900">• {prop?.title || "Listing"}</span>
                        
                        {/* Safe inline data */}
                        <span className="text-gray-600 ml-1">
                          — {prop?.price ? `${Number(prop.price).toLocaleString()} EGP` : "Price N/A"}
                        </span>
                        
                        {prop?.url && (
                          <a href={prop.url} target="_blank" rel="noreferrer" className="ml-2 text-amber-600 font-medium hover:underline">
                            [View]
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {sending && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 px-6 py-4 rounded-3xl rounded-bl-sm text-gray-500 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>
      </main>

      {/* 3. Bottom Input Area */}
      <footer className="bg-white border-t border-gray-200 p-4 z-10">
        <div className="max-w-4xl mx-auto flex gap-3 items-end">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { 
              if (e.key === "Enter" && !e.shiftKey) { 
                e.preventDefault(); 
                submit(); 
              } 
            }}
            className="flex-1 max-h-32 min-h-[52px] p-3.5 bg-gray-50 border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-dark-knight focus:border-dark-knight transition-all resize-none"
            placeholder="Type your message here... (Shift + Enter for new line)"
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