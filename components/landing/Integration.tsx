"use client";

import { motion } from "framer-motion";
import { Plug, ArrowRight, CheckCircle2 } from "lucide-react";

const integrations = [
  "Автоматическая отправка заказов на кухню",
  "Синхронизация стоп-листа в реальном времени",
  "Актуальные цены из iiko",
  "Статусы заказов обновляются автоматически",
  "Поддержка модификаторов и комментариев",
  "Работа с несколькими точками",
];

export default function Integration() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/30 to-bg-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <Plug size={14} className="text-primary" />
              <span className="text-primary text-xs sm:text-sm font-medium">
                Интеграция
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Работает с <span className="gold-text">iiko</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed">
              PlateFlow интегрируется с iiko — главной системой автоматизации
              ресторанов в России. Заказы попадают на кухню мгновенно.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {integrations.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-success flex-shrink-0" />
                  <span className="text-text-secondary text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* PlateFlow box */}
              <div className="bg-bg-card border-subtle rounded-2xl p-6 sm:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                    <span className="text-bg-dark font-bold text-sm">P</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">PlateFlow</p>
                    <p className="text-text-muted text-xs">Система заказов</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {["Заказы", "Меню", "Столы"].map((t) => (
                    <div key={t} className="bg-primary/10 rounded-lg py-2 text-center">
                      <span className="text-primary text-xs font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center my-2">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight size={24} className="text-primary rotate-90" />
                </motion.div>
              </div>

              {/* iiko box */}
              <div className="bg-bg-card border-subtle rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 flex items-center justify-center">
                    <span className="text-[#FF6B00] font-bold text-sm">ii</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">iiko</p>
                    <p className="text-text-muted text-xs">Автоматизация ресторана</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {["Кухня", "Касса", "Склад"].map((t) => (
                    <div key={t} className="bg-[#FF6B00]/10 rounded-lg py-2 text-center">
                      <span className="text-[#FF6B00] text-xs font-medium">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
