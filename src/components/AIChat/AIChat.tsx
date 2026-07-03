"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import styles from "./AIChat.module.css";

type Message = { role: "user" | "assistant"; content: string };

function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    )
  );
}

function FormattedMessage({ content }: { content: string }) {
  const blocks = content
    .split(/\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
  return (
    <>
      {blocks.map((block, i) => (
        <p className="small-description white" key={i}>
          {renderInline(block, `b${i}`)}
        </p>
      ))}
    </>
  );
}

function playNotification() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1174.66, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.45);
  } catch {
    /* audio unavailable */
  }
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Привет! Я AI-ассистент YOLO. Расскажу об услугах, ценах и помогу выбрать решение. Что вас интересует?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const autoOpened = useRef(false);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    const onScroll = () => {
      if (autoOpened.current) return;
      const scrolledToEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (scrolledToEnd) {
        autoOpened.current = true;
        setOpen(true);
        playNotification();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const send = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Не получилось отправить сообщение. Попробуйте ещё раз.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className={styles.fab}
        onClick={() => setOpen(!open)}
        aria-label="AI-чат"
      >
        {open ? (
          <X className={styles.fabIcon} />
        ) : (
          <MessageCircle className={styles.fabIcon} />
        )}
      </button>
      <div className={`${styles.window} ${open ? styles.windowOpen : ""}`}>
        <div className={styles.header}>
          <div className={styles.headerDot} />
          <p className="small-description white">AI-ассистент YOLO</p>
        </div>
        <div className={styles.body} ref={bodyRef}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={`${styles.message} ${m.role === "user" ? styles.messageUser : styles.messageBot}`}
            >
              <FormattedMessage content={m.content} />
            </div>
          ))}
          {loading && (
            <div className={`${styles.message} ${styles.messageBot}`}>
              <p className="small-description grey">Печатает…</p>
            </div>
          )}
        </div>
        <form className={styles.inputRow} onSubmit={send}>
          <input
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ваш вопрос…"
          />
          <button
            className={styles.sendButton}
            type="submit"
            disabled={loading}
            aria-label="Отправить"
          >
            <Send className={styles.sendIcon} />
          </button>
        </form>
      </div>
    </>
  );
}
