"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-primary/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-[400px] sm:h-[400px] bg-primary/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-[300px] sm:h-[300px] bg-primary/5 rounded-full blur-[80px] animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs sm:text-sm font-medium">
                Новое поколение ресторанного сервиса
              </span>
            </motion.div>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Сканируй стол.{" "}
              <span className="gold-text">Заказывай вместе.</span>{" "}
              Каждый за себя.
            </h1>

            <p className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed">
              Мобильная система заказов для ресторанов с видео-меню и групповыми заказами.
              Гости сканируют QR — и заказывают прямо с телефона.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl animate-shimmer text-bg-dark font-bold text-base sm:text-lg animate-pulse-gold"
              >
                Подключить ресторан
                <ArrowRight size={20} />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white font-semibold text-base sm:text-lg hover:bg-white/5 transition-colors"
              >
                <Play size={18} />
                Смотреть демо
              </a>
            </div>

            <div className="mt-8 sm:mt-12 flex items-center gap-6 sm:gap-8 text-text-muted text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-xl sm:text-2xl">150+</span>
                <span>ресторанов</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-xl sm:text-2xl">50K+</span>
                <span>заказов</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-xl sm:text-2xl">4.9</span>
                <span>рейтинг</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="w-[260px] sm:w-[300px] h-[520px] sm:h-[600px] bg-bg-card rounded-[40px] border-2 border-white/10 shadow-2xl overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-bg-dark rounded-b-2xl z-10" />

                {/* Screen content */}
                <div className="absolute inset-2 rounded-[32px] overflow-hidden bg-bg-dark">
                  {/* Status bar */}
                  <div className="h-12 flex items-end justify-between px-6 pb-1">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white/50 rounded-sm relative">
                        <div className="absolute inset-0.5 bg-success rounded-[1px]" style={{ width: "70%" }} />
                      </div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 py-3 border-b border-white/5">
                    <div className="text-center">
                      <p className="text-primary text-[10px] font-medium">Villa Romana</p>
                      <p className="text-white text-xs font-bold mt-0.5">Стол №5</p>
                    </div>
                  </div>

                  {/* Category tabs */}
                  <div className="flex gap-2 px-3 py-2 overflow-hidden">
                    {["Салаты", "Паста", "Основные"].map((cat, i) => (
                      <div
                        key={cat}
                        className={`px-3 py-1 rounded-full text-[9px] font-medium whitespace-nowrap ${
                          i === 0
                            ? "bg-primary text-bg-dark"
                            : "bg-white/5 text-text-secondary"
                        }`}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>

                  {/* Dish cards */}
                  <div className="px-3 space-y-2 mt-1">
                    {[
                      { name: "Цезарь с креветками", price: "890 ₽", tag: "Хит" },
                      { name: "Бурата с томатами", price: "1 190 ₽", tag: "" },
                      { name: "Спагетти с морепр...", price: "1 290 ₽", tag: "Новинка" },
                    ].map((dish) => (
                      <div
                        key={dish.name}
                        className="bg-bg-elevated rounded-xl p-2 flex gap-2"
                      >
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <p className="text-white text-[10px] font-semibold truncate pr-1">
                              {dish.name}
                            </p>
                            {dish.tag && (
                              <span className="text-[7px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full flex-shrink-0">
                                {dish.tag}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-primary text-[11px] font-bold">
                              {dish.price}
                            </span>
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <span className="text-bg-dark text-[10px] font-bold">+</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom cart bar */}
                  <div className="absolute bottom-4 left-3 right-3">
                    <div className="gold-gradient rounded-xl py-2.5 px-4 flex items-center justify-between">
                      <div>
                        <p className="text-bg-dark text-[10px] font-bold">Корзина</p>
                        <p className="text-bg-dark/70 text-[8px]">3 блюда</p>
                      </div>
                      <span className="text-bg-dark text-xs font-bold">3 370 ₽</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[50px] blur-[40px] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
