"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Находишь клиента",
    description: "Рекомендуй знакомым, подписчикам, партнёрам",
  },
  {
    step: "02",
    title: "Отправляешь контакт",
    description: "Имя + телефон/Telegram/WhatsApp — в Telegram-бот",
  },
  {
    step: "03",
    title: "Получаешь 20%",
    description: "От суммы оплаченного заказа",
  },
];

export default function ReferralProgram() {
  return (
    <section className="section-padding py-[10vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="font-bold gradient-text mb-3"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
        >
          Приведи клиента — получи 20%
        </h2>
        <p className="text-white/50 text-sm md:text-base mb-10">
          Реферальная программа для всех
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="card p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="text-3xl font-bold text-white/20">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white/40 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://t.me/yolo_agency_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Перейти в Telegram-бот
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
          <span className="text-white/30 text-sm">
            Набираем 1 000 человек для поиска клиентов
          </span>
        </div>
      </motion.div>
    </section>
  );
}
