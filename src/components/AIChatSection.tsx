"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const examples = [
  "Мне нужен сайт для ресторана с бронированием",
  "Сколько стоит Telegram-бот?",
  "Хочу автоматизировать обработку заявок",
  "Нужен интернет-магазин с доставкой",
];

export default function AIChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Привет! Я AI-помощник агентства YOLO. Расскажите, что вам нужно — я подберу решение и назову примерную цену.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Произошла ошибка. Попробуйте позже." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Не удалось подключиться к серверу. Попробуйте позже." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-chat" className="section-padding py-[10vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pill-badge mb-6">&#129302; AI-помощник</div>
        <h2
          className="font-bold gradient-text mb-3"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
        >
          Не знаете, с чего начать?
        </h2>
        <p className="text-white/50 text-sm md:text-base mb-10">
          Опишите задачу — AI назовёт решение и цену
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Examples */}
          <div className="flex flex-col gap-4">
            <p className="text-white/60 text-sm mb-2">Примеры запросов:</p>
            {examples.map((ex, i) => (
              <motion.button
                key={i}
                className="glass-card p-4 text-left text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                onClick={() => sendMessage(ex)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                &laquo;{ex}&raquo;
              </motion.button>
            ))}
          </div>

          {/* Chat Window */}
          <div className="glass-card flex flex-col h-[420px]">
            <div className="p-4 border-b border-white/5">
              <span className="text-sm font-medium text-white/80">
                AI-помощник YOLO
              </span>
            </div>
            <div className="chat-messages flex-1">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={
                    msg.role === "assistant"
                      ? "chat-bubble-bot"
                      : "chat-bubble-user"
                  }
                >
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="chat-bubble-bot">
                  <span className="animate-pulse">Думаю...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-white/5">
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Опишите вашу задачу..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-white/20 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-40"
                >
                  &#10148;
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
