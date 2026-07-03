"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Артём Волков",
    role: "Владелец «Brasserie №1»",
    text: "Средний чек вырос на 30% после подключения видео-меню. Гости заказывают больше, когда видят блюда в видео.",
    rating: 5,
    color: "#3B82F6",
  },
  {
    name: "Елена Соколова",
    role: "Управляющая «Terrazza»",
    text: "Официанты не бегают с терминалами — заказы сразу на кухне. Сэкономили 2 ставки и ускорили обслуживание вдвое.",
    rating: 5,
    color: "#EC4899",
  },
  {
    name: "Максим Петров",
    role: "Шеф-повар «Umami»",
    text: "Групповые заказы — находка. Компании больше не спорят кто что заказывал. Каждый платит за себя — все довольны.",
    rating: 5,
    color: "#22C55E",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Нам <span className="gold-text">доверяют</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Рестораторы, которые уже используют PlateFlow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-hover"
            >
              <div className="h-full bg-bg-card border-subtle rounded-2xl p-5 sm:p-7 flex flex-col">
                <Quote size={28} className="text-primary/30 mb-4" />

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed flex-1 mb-5">
                  &laquo;{t.text}&raquo;
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-primary"
                      fill="#D4A853"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: t.color }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
