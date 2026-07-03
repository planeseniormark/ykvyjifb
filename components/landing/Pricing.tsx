"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const included = [
  "Мобильное меню с видео",
  "Групповые заказы",
  "Админ-панель управления",
  "QR-коды на каждый стол",
  "Интеграция с iiko",
  "Аналитика и статистика",
  "Вызов официанта",
  "Техническая поддержка 24/7",
  "Обновления без доплат",
  "Обучение персонала",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/30 to-bg-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Простая <span className="gold-text">цена</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Одна цена за подключение, прозрачная абонентская плата. Без скрытых платежей
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative bg-bg-card rounded-3xl overflow-hidden border border-primary/20">
            {/* Glow effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />

            {/* Header */}
            <div className="relative text-center pt-8 sm:pt-10 px-6 sm:px-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
                <Sparkles size={14} className="text-primary" />
                <span className="text-primary text-xs sm:text-sm font-semibold">
                  Всё включено
                </span>
              </div>

              <div className="mb-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  49 990
                </span>
                <span className="text-primary text-xl sm:text-2xl font-bold ml-1">₽</span>
              </div>
              <p className="text-text-secondary text-sm sm:text-base mb-4">
                единоразово за подключение
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10">
                <span className="text-white text-lg sm:text-xl font-bold">
                  + 2 490 ₽
                </span>
                <span className="text-text-secondary text-sm">/мес</span>
              </div>
              <p className="text-text-muted text-xs mt-2 mb-6">
                абонентская плата за обслуживание
              </p>
            </div>

            {/* Divider */}
            <div className="mx-6 sm:mx-8 border-t border-white/5" />

            {/* Features */}
            <div className="px-6 sm:px-8 py-6 sm:py-8">
              <p className="text-white text-sm font-semibold mb-4 sm:mb-5">
                Что входит:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-2.5"
                  >
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 sm:px-8 pb-8 sm:pb-10">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 rounded-xl animate-shimmer text-bg-dark font-bold text-base sm:text-lg animate-pulse-gold"
              >
                Подключить ресторан
                <ArrowRight size={20} />
              </a>
              <p className="text-text-muted text-xs text-center mt-3">
                Бесплатная консультация и демонстрация
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
