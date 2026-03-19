"use client";
import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import DOMPurify from "dompurify";

// =====================
// Lógica de Negócio
// =====================

const WEBHOOK_CHAT =
  "https://grupobsx2025.app.n8n.cloud/webhook/8837f376-647f-4a29-a984-e1df15846084/chat";

// Novo: webhook de FEEDBACK (não altera o do chat)
const WEBHOOK_FEEDBACK =
  "https://grupobsx2025.app.n8n.cloud/webhook/811f2d00-47e2-4550-b40c-f99c9e824a36";

function getSessionId() {
  if (typeof window === "undefined") return "";
  const saved = localStorage.getItem("bsx_chat_session");
  if (saved) return saved;
  const id = crypto.randomUUID();
  localStorage.setItem("bsx_chat_session", id);
  return id;
}

// ==============================
// Mensagem Individual do Chat
// ==============================
function ChatMessage({ message }) {
  const isBot = message.from === "bot";
  const [processedHtml, setProcessedHtml] = useState("");

  // Usamos useEffect para garantir que a sanitização só rode no cliente.
  useEffect(() => {
    // Verificação extra para garantir que estamos no navegador.
    if (typeof window !== "undefined") {
      const sanitized = DOMPurify.sanitize(message.text, {
        ALLOWED_TAGS: ["strong", "b", "ul", "li", "br", "p", "a"],
        ALLOWED_ATTR: ["href", "target", "rel"],
      });
      setProcessedHtml(sanitized);
    }
  }, [message.text]);
  return (
    <div className={`flex items-end gap-2 ${!isBot && "justify-end"}`}>
      {isBot && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <Bot size={20} />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-base sm:text-sm ${
          isBot
            ? "bg-gray-200 text-gray-900 rounded-bl-none"
            : "bg-blue-600 text-white rounded-br-none"
        }`}
      >
        <div
          className="[&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 [&_a]:text-blue-500 [&_a]:underline"
          dangerouslySetInnerHTML={{
            __html: processedHtml,
          }}
        />
      </div>
      {!isBot && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-700">
          <User size={20} />
        </div>
      )}
    </div>
  );
}

// ==============================
// Componente Principal do Chatbot
// ==============================
export default function ChatBubbleWidget({
  title = "Assistente Virtual BSX",
  brandColor = "",
  secondaryColor = "blue",
  initialMessage = "Olá! Como posso ajudar?",
}) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [log, setLog] = useState([{ from: "bot", text: initialMessage }]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // ===== Feedback state =====
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedScore, setSelectedScore] = useState(null); // 0..10
  const [sendingFeedback, setSendingFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  // Perguntas rápidas (como no exemplo da imagem)
  const quickQuestions = [
    "Quero saber como consultar meu CPF",
    "Quero consultar a placa do meu carro",
    "Como posso consultar um CNPJ",
  ];

  // Mostrar/ocultar perguntas rápidas
  const [showQuick, setShowQuick] = useState(true);

  const bodyRef = useRef(null);

  useEffect(() => {
    if (!bodyRef.current) return;

    setTimeout(() => {
      const listContainer = bodyRef.current.firstElementChild;
      if (!listContainer) return;
      let lastUserIndex = -1;
      for (let i = log.length - 1; i >= 0; i--) {
        if (log[i].from === "user") {
          lastUserIndex = i;
          break;
        }
      }
      if (lastUserIndex !== -1) {
        const userMsgElement = listContainer.children[lastUserIndex];

        if (userMsgElement) {
          userMsgElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      } else {
        bodyRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);

    // IMPORTANTE: Mantemos apenas [log] na dependência.
    // Assim ele roda tanto quando você envia quanto quando o bot responde.
  }, [log]);

  // ==============================
  // Envio para o webhook do CHAT (mantido)
  // ==============================
  async function sendText(text) {
    if (!text || loading) return;

    const sessionId = getSessionId();
    setLog((prev) => [...prev, { from: "user", text }]);
    setLoading(true);
    setErr("");

    try {
      const res = await fetch(WEBHOOK_CHAT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          action: "sendMessage",
          chatInput: text,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`);

      const output =
        data?.output || data?.message || "Sem resposta. Tente novamente.";
      setLog((prev) => [...prev, { from: "bot", text: output }]);
    } catch (e) {
      const errorMessage = e.message || "Falha ao contatar o assistente.";
      setErr(errorMessage);
      setLog((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Desculpe, tive um problema para me conectar. Pode tentar de novo?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function send() {
    const text = msg.trim();
    if (!text) return;
    setShowQuick(false);
    setMsg("");
    await sendText(text);
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function handleQuickQuestion(q) {
    // Esconde perguntas frequentes e envia
    setShowQuick(false);
    sendText(q);
  }

  // ==============================
  // Envio para o webhook de FEEDBACK
  // ==============================
  async function submitFeedback(score) {
    if (sendingFeedback) return;
    setSendingFeedback(true);
    setSelectedScore(score);

    const payload = {
      user_id: getSessionId(),
      score: Number(score),
      feedback: feedbackText || "",
      created_at: new Date().toISOString(), // string
    };

    try {
      const res = await fetch(WEBHOOK_FEEDBACK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setFeedbackSent(true);
      setFeedbackText("");
      setLog((prev) => [
        ...prev,
        {
          from: "bot",
          text: `Obrigado pelo feedback! Pontuação ${score}/10 registrada.`,
        },
      ]);
    } catch (e) {
      setLog((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Não foi possível enviar seu feedback agora. Tente novamente.",
        },
      ]);
    } finally {
      setSendingFeedback(false);
    }
  }

  const ratingOptions = Array.from({ length: 11 }, (_, i) => i); // 0..10

  return (
    <>
      {/* Janela do Chat */}
      <div
        className={`fixed z-50 flex flex-col overflow-hidden shadow-2xl transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
          inset-0 rounded-none 
          sm:inset-auto sm:bottom-24 sm:right-5 sm:w-full sm:max-w-md sm:h-[70dvh] sm:max-h-[600px] sm:rounded-2xl`}
      >
        {/* Cabeçalho */}
        <header
          className="flex items-center justify-between px-5 py-4 font-semibold text-white shrink-0"
          style={{ backgroundColor: brandColor }}
        >
          <div className="flex items-center gap-3">
            <Bot size={20} /> <span>{title}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Botão Feedback */}
            <button
              onClick={() => setFeedbackOpen((v) => !v)}
              aria-expanded={feedbackOpen}
              className="rounded-full bg-white/10 px-3 py-1 text-xs hover:bg-white/25"
              title="Abrir/fechar feedback"
            >
              Feedback
            </button>
            <button onClick={() => setOpen(false)} aria-label="Fechar chat">
              <X size={20} className="hover:opacity-75" />
            </button>
          </div>
        </header>

        {/* Painel de Feedback (expansível) */}
        {feedbackOpen && (
          <div className="border-b border-gray-200 bg-white px-5 py-3 text-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-gray-800">Feedback</span>
              <button
                onClick={() => setFeedbackOpen(false)}
                aria-label="Fechar feedback"
                className="rounded p-1 hover:bg-gray-100"
              >
                <X size={14} className="text-gray-500" />
              </button>
            </div>

            {!feedbackSent ? (
              <div className="space-y-3">
                <p className="text-gray-700">
                  Nos dê um feedback: clique em uma nota de{" "}
                  <strong>0 a 10</strong> e, se quiser, escreva um comentário.
                </p>
                <div className="grid grid-cols-11 gap-1">
                  {ratingOptions.map((n) => (
                    <button
                      key={n}
                      disabled={sendingFeedback}
                      onClick={() => submitFeedback(n)}
                      title={`${n}/10`}
                      className={`aspect-square rounded-md border text-sm flex items-center justify-center select-none transition ${
                        selectedScore === n
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white text-gray-800 hover:bg-gray-50 border-gray-300"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Escreva um feedback (opcional)"
                  className="w-full min-h-[64px] rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>
            ) : (
              <div className="text-emerald-700">
                Obrigado! Seu feedback foi registrado. 💜
              </div>
            )}
          </div>
        )}

        {/* Corpo das Mensagens */}
        <div ref={bodyRef} className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="space-y-4">
            {log.map((m, i) => (
              <ChatMessage key={i} message={m} />
            ))}
            {loading && (
              <div className="flex items-end gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Bot size={20} />
                </div>
                <div className="rounded-2xl rounded-bl-none bg-gray-200 px-4 py-3">
                  <div className="flex items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400"></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Perguntas Rápidas (fecháveis e somem ao clicar) */}
        {showQuick && (
          <div className="bg-gray-50 px-5 pb-2 pt-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs text-gray-500">Perguntas comuns:</span>
              <button
                onClick={() => setShowQuick(false)}
                aria-label="Fechar perguntas comuns"
                className="rounded p-1 hover:bg-gray-100"
              >
                <X size={14} className="text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleQuickQuestion(q)}
                  className="w-full rounded-full border border-gray-300 px-3 py-2 text-left text-sm transition-colors duration-200 hover:border-purple-500 hover:bg-purple-50 disabled:opacity-50"
                  disabled={loading}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Rodapé com Input */}
        <footer className="bg-gray-50 p-3 shrink-0">
          {/* O <form>  */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="group flex items-center gap-2 rounded-lg border border-gray-300  p-1 transition-all duration-200 hover:border-purple-400 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-[purple-500/50]"
          >
            {/* O <input> */}
            <input
              type="text"
              value={msg}
              id="chat-input"
              nome="chat-input"
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Digite sua mensagem…"
              className="w-full flex-1 px-3 py-1 text-base text-gray-900 placeholder-gray-500 focus:outline-none"
              disabled={loading}
            />
            {/* Botão de Envio  */}
            <button
              type="submit"
              disabled={loading || !msg.trim()}
              aria-label="Enviar mensagem"
              className={`flex cursor-pointer h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-colors disabled:cursor-not-allowed ${
                msg.trim()
                  ? "bg-[#83227D]"
                  : "bg-gray-300 group-hover:bg-gray-400"
              }`}
            >
              <Send size={20} />
            </button>
          </form>
          {err && (
            <p className="pt-1 text-center text-xs text-red-600">{err}</p>
          )}
        </footer>
        <div className="bg-white justify-items-center">
          <p className="text-neutral-500 text-xs not-italic font-normal leading-5">
            A IA pode produzir informações imprecisas
          </p>
        </div>
      </div>

      {/* Botão Flutuante */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar chatbot" : "Abrir chatbot"}
        className={`fixed cursor-pointer bottom-5 right-5 z-40 flex h-10 items-center justify-center rounded-full text-white text-sm shadow-lg transition-all duration-300 ease-in-out hover:scale-102 ${
          open ? "w-12" : "w-auto px-6"
        }`}
        style={{ backgroundColor: brandColor }}
      >
        {open ? (
          <X size={22} />
        ) : (
          <span className="whitespace-nowrap font-semibold">
            Fale com o BSX
          </span>
        )}
      </button>
    </>
  );
}
