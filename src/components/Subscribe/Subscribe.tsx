"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import styles from "./Subscribe.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <section id="subscribe" className={`subscribe ${styles.subscribe}`}>
      <motion.div className="subscribe-content" {...fadeUp}>
        <div className="subscribe-content-center">
          <div className="subscribe-content-center-textbox textbox">
            <div className="titlebox">
              <h2 className="subheadline white subscribe-small-line-height">
                Обсудим ваш проект?
              </h2>
              <div className="titlebox-gradient" />
            </div>
            <p className="description grey">
              Оставьте почту — Влад лично свяжется с вами в течение 24 часов,
              предложит решение и посчитает смету.
            </p>
          </div>
          <div className="subscribe-content-center-bottom">
            <form
              className="subscribe-content-center-button"
              onSubmit={submit}
            >
              <div className="subscribe-content-center-button-form">
                <input
                  className="subscribe-content-center-button-form-input description"
                  type="email"
                  placeholder="ваша@почта.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="subscribe-content-center-button-box"
                  type="submit"
                >
                  <p className="small-description black">Отправить</p>
                  <div
                    className={`subscribe-button-overlay ${sent ? "visible" : ""}`}
                  >
                    <div className="subscribe-button-overlay-checkbox">
                      <Check className="subscribe-button-overlay-icon" />
                    </div>
                    <p className="small-description black">Готово!</p>
                  </div>
                </button>
              </div>
            </form>
            <p className="small-description grey">
              Или напишите напрямую:{" "}
              <a
                className="small-description white hover-text-grey link"
                href="https://t.me/OSIPOWLAD"
              >
                Telegram <ArrowUpRight className={styles.inlineIcon} />
              </a>{" "}
              <a
                className="small-description white hover-text-grey link"
                href="https://t.me/YoloAgencyBot"
              >
                Бот заказов <ArrowUpRight className={styles.inlineIcon} />
              </a>{" "}
              <a
                className="small-description white hover-text-grey link"
                href="https://wa.me/79950961577"
              >
                WhatsApp <ArrowUpRight className={styles.inlineIcon} />
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
