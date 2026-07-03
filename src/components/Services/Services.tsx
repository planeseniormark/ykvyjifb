"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import styles from "./Services.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

const SERVICES = [
  {
    title: "Сайты и веб-приложения",
    text: "Лендинги, корпоративные сайты, e-commerce и SaaS — от прототипа до продакшена.",
    price: "от 30 000 ₽",
  },
  {
    title: "Telegram-боты и Mini Apps",
    text: "Автоматизация продаж и сервисов внутри Telegram: боты, мини-приложения, интеграции с CRM.",
    price: "от 15 000 ₽",
  },
  {
    title: "Маркетинг и продвижение",
    text: "Стратегия, перформанс-реклама и контент, которые дают измеримый рост выручки.",
    price: "от 15 000 ₽/мес",
  },
  {
    title: "AI-автоматизация",
    text: "Чат-боты на GigaChat и GPT, автоматизация процессов и внутренние AI-инструменты.",
    price: "от 80 000 ₽",
  },
];

export default function Services() {
  return (
    <section id="services" className={`services ${styles.services}`}>
      <div className="services-content">
        <motion.div className="textbox" {...fadeUp}>
          <div className="subheadline-box">
            <Layers className="subheadline-box-icon" />
            <p className="small-description grey">Услуги</p>
          </div>
          <div className="titlebox">
            <h2 className="subheadline white">
              Полный цикл digital-продакшена
            </h2>
            <div className="titlebox-gradient" />
          </div>
          <p className="description grey">
            От идеи до запуска и роста — одна команда, один ответственный, один результат.
          </p>
        </motion.div>

        <motion.div className={styles.grid} {...fadeUp}>
          {SERVICES.map((s) => (
            <div className={styles.card} key={s.title}>
              <div className={styles.cardTop}>
                <div className={styles.cardTitleRow}>
                  <p className="small-subheadline white">{s.title}</p>
                  <p className={`small-description grey ${styles.cardPrice}`}>{s.price}</p>
                </div>
                <p className="small-description grey">{s.text}</p>
              </div>
              <div className={styles.cardIcon}>
                <ArrowUpRight className={styles.cardIconSvg} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
