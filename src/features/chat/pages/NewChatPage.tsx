import { useState }                  from "react";
import { useNavigate, useLocation }  from "react-router-dom";

import NavBar                        from "@/features/properties/components/NavBar";
import { rememberChatContext, sendMessage } from "@/services/chatService";
import { useToast }                  from "@/context/ToastContext";
import { useAuth }                   from "@/context/AuthContext";
import { BASE_URL }                  from "@/api/axiosInstance";

interface NewChatState {
  receiverId:   string;
  propertyId:   number | string;
  propertyName: string;
  propertyImg?: string | null;
  partnerName:  string;
}

export default function NewChatPage() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const toast      = useToast();
  const { userInfo } = useAuth();

  const state = location.state as NewChatState | null;

  const [content,  setContent]  = useState("");
  const [sending,  setSending]  = useState(false);
  const propertyImg = state?.propertyImg ?? null;

  const imgSrc = propertyImg
    ? (propertyImg.startsWith("http")
        ? propertyImg
        : `${BASE_URL}/${propertyImg.replace(/^\//, "")}`)
    : null;

  const handleSend = async () => {
    if (!state?.receiverId || !state?.propertyId) return;

    const text = content.trim();
    if (!text || sending) return;

    setSending(true);
    try {
      const res    = await sendMessage(state.receiverId, state.propertyId, text);
      const chatId = res.data.data.chat_id;

      rememberChatContext(chatId, {
        property_id: state.propertyId,
        property_name: state.propertyName,
        property_img: state.propertyImg ?? null,
        partner_id: state.receiverId,
        partner_name: state.partnerName,
      });

      navigate(`/chat/${chatId}`, {
        replace: true,
        state: {
          partnerName:  state.partnerName,
          partnerId:    state.receiverId,
          propertyId:   state.propertyId,
          propertyName: state.propertyName,
          propertyImg:  state.propertyImg ?? null,
        },
      });
    } catch {
      toast.error("Failed to send message. Please try again.");
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 140)}px`;
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-lg">
          {!state?.receiverId || !state?.propertyId ? (
            <div className="space-y-5 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="space-y-2 text-center">
                <p className="text-5xl">💬</p>
                <h1 className="text-2xl font-bold text-gray-900">Chat Context Missing</h1>
                <p className="text-sm leading-relaxed text-gray-500">
                  We need a property and recipient before starting a conversation. Please open chat from a property page or your inbox.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/chat")}
                  className="rounded-xl bg-dark-knight px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 cursor-pointer"
                >
                  Open Inbox
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-50 cursor-pointer"
                >
                  Go Back
                </button>
              </div>
            </div>
          ) : (
            <>

          {/* Back */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-gray-500 hover:text-gray-900 font-semibold mb-6 flex items-center gap-1 transition cursor-pointer"
          >
            ← Back
          </button>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">New Message</h1>
          <p className="text-gray-500 text-sm mb-6">
            You're starting a conversation about this property.
          </p>

          {/* Property preview card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex gap-4 p-4 mb-6">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={state.propertyName}
                className="w-20 h-16 rounded-xl object-cover shrink-0"
              />
            ) : (
              <div className="w-20 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-2xl shrink-0">
                🏠
              </div>
            )}
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-sm truncate">{state.propertyName}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                To: <span className="font-semibold text-gray-700">{state.partnerName}</span>
              </p>
            </div>
          </div>

          {/* Your name chip */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-amber-300 text-dark-knight flex items-center justify-center text-xs font-bold shrink-0">
              {userInfo?.firstName?.[0]?.toUpperCase() ?? "?"}
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {userInfo?.firstName} {userInfo?.secondName}
            </p>
          </div>

          {/* Message input */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 space-y-4">
            <textarea
              value={content}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Hi, I'm interested in this property and would like to know more…"
              rows={4}
              className="w-full resize-none border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-dark-knight focus:ring-1 focus:ring-dark-knight transition"
              autoFocus
            />

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-gray-400">
                Enter to send · Shift+Enter for new line
              </p>
              <button
                type="button"
                onClick={handleSend}
                disabled={!content.trim() || sending}
                className="flex items-center gap-2 bg-dark-knight text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message →"
                )}
              </button>
            </div>
          </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
