"use client";

import { motion } from "framer-motion";

const services = [
  { name: "Сайты и приложения", active: true },
  { name: "Маркетинг и SMM", active: false },
  { name: "Дизайн", active: false },
  { name: "Разработка ПО", active: false },
  { name: "Telegram-боты", active: false },
  { name: "AI-автоматизация", active: false },
  { name: "Лидогенерация", active: false },
];

export default function Services() {
  return (
    <section id="services" className="section-padding py-[10vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-[5vh]"
      >
        <div>
          <div className="pill-badge mb-6">&#9889; Наши услуги</div>
          <h2
            className="font-bold gradient-text mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Ваш digital-рост
          </h2>
          <p className="text-white/50 text-sm md:text-base mb-6">
            Полный спектр решений для бизнеса любого масштаба
          </p>
          <a
            href="#ai-chat"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm text-white hover:bg-white/5 transition-colors"
          >
            Обсудить проект
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>

        {/* Flowchart */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card p-5 flex items-center gap-3 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span
                  className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                    service.active
                      ? "bg-green-500/20 border-green-500 text-green-400"
                      : "border-white/20 text-white/30"
                  }`}
                >
                  {service.active ? "&#10003;" : ""}
                </span>
                <span className="text-sm text-white/80">{service.name}</span>
              </motion.div>
            ))}
            <motion.div
              className="card p-5 flex items-center justify-center bg-white/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-sm font-semibold text-white/90">
                Ваш бизнес
              </span>
            </motion.div>
          </div>
        </div>

        {/* Video */}
        <motion.div
          className="services-content-container mt-4 rounded-[25px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="services-content-container-border" />
          <div className="services-fade-top" />
          <div className="services-fade-bottom" />
          <div className="services-fade-left" />
          <div className="services-fade-right" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain relative z-0"
            src="/videos/websites1.mp4"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
