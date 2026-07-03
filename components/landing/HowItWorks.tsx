"use client";

import { motion } from "framer-motion";
import { ScanLine, Utensils, Users, ChefHat } from "lucide-react";

const steps = [
  {
    icon: ScanLine,
    title: "Сканируй QR",
    description: "Гость сканирует QR-код на столе и попадает в меню ресторана",
    color: "#3B82F6",
  },
  {
    icon: Utensils,
    title: "Выбирай блюда",
    description: "Смотрит видео-обзоры блюд и добавляет понравившиеся в корзину",
    color: "#D4A853",
  },
  {
    icon: Users,
    title: "Общий заказ",
    description: "Компания видит кто что выбрал — каждый платит за себя",
    color: "#22C55E",
  },
  {
    icon: ChefHat,
    title: "Заказ на кухне",
    description: "Заказ автоматически уходит на кухню через интеграцию с iiko",
    color: "#EF4444",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Как это <span className="gold-text">работает</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Четыре простых шага от сканирования QR-кода до готового заказа на кухне
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="text-center">
                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center relative z-10"
                    style={{ background: `${step.color}15` }}
                  >
                    <step.icon size={28} style={{ color: step.color }} strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gold-gradient flex items-center justify-center text-bg-dark text-xs font-bold z-20">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
