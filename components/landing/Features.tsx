"use client";

import { motion } from "framer-motion";
import {
  Users,
  Video,
  Link2,
  BarChart3,
  QrCode,
  BellRing,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Групповые заказы",
    description:
      "Компания друзей заказывает вместе — каждый видит общий заказ, но платит только за своё",
  },
  {
    icon: Video,
    title: "Видео-меню",
    description:
      "Каждое блюдо с коротким видео — гость видит, что получит, до заказа. Конверсия растёт на 40%",
  },
  {
    icon: Link2,
    title: "Интеграция с iiko",
    description:
      "Заказы автоматически попадают на кухню через iiko — без ручного ввода и ошибок",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description:
      "Подробная статистика: популярные блюда, средний чек, загрузка столов, просмотры видео",
  },
  {
    icon: QrCode,
    title: "QR-коды на столы",
    description:
      "Генерация уникальных QR-кодов для каждого стола — скачайте и распечатайте за минуту",
  },
  {
    icon: BellRing,
    title: "Вызов официанта",
    description:
      "Гость нажимает кнопку — официант получает уведомление с номером стола мгновенно",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/50 to-bg-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Всё для <span className="gold-text">вашего ресторана</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            PlateFlow — это не просто меню на телефоне. Это полноценная экосистема
            для управления заказами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-hover group"
            >
              <div className="h-full bg-bg-card border-subtle rounded-2xl p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon
                    className="text-primary"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
