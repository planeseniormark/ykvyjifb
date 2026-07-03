"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Armchair,
} from "lucide-react";

const stats = [
  { label: "Заказы сегодня", value: "127", change: "+18%", icon: ShoppingCart, color: "#3B82F6" },
  { label: "Выручка", value: "284 500 ₽", change: "+23%", icon: DollarSign, color: "#22C55E" },
  { label: "Средний чек", value: "2 240 ₽", change: "+5%", icon: TrendingUp, color: "#D4A853" },
  { label: "Активные столы", value: "14", change: "", icon: Armchair, color: "#EC4899" },
];

const topDishes = [
  { name: "Стейк Рибай", orders: 34, revenue: "98 260 ₽" },
  { name: "Цезарь с креветками", orders: 28, revenue: "24 920 ₽" },
  { name: "Спагетти с морепр.", orders: 25, revenue: "32 250 ₽" },
  { name: "Тирамису", orders: 22, revenue: "12 980 ₽" },
  { name: "Каре ягнёнка", orders: 19, revenue: "47 310 ₽" },
];

export default function AdminPreview() {
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
            Мощная <span className="gold-text">админ-панель</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Управляйте рестораном из одного места — заказы, меню, столы, аналитика
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-card border-subtle rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-text-muted text-xs">PlateFlow Admin — Villa Romana</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Stats cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="bg-bg-elevated rounded-xl p-3 sm:p-4 border border-white/5"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${stat.color}15` }}
                    >
                      <stat.icon size={16} style={{ color: stat.color }} />
                    </div>
                    {stat.change && (
                      <span className="text-success text-[10px] sm:text-xs font-medium">
                        {stat.change}
                      </span>
                    )}
                  </div>
                  <p className="text-white text-sm sm:text-lg font-bold truncate">{stat.value}</p>
                  <p className="text-text-muted text-[10px] sm:text-xs mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Chart placeholder */}
              <div className="bg-bg-elevated rounded-xl p-4 sm:p-5 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white text-sm font-semibold">Заказы за неделю</h4>
                  <BarChart3 size={16} className="text-text-muted" />
                </div>
                <div className="flex items-end gap-1 sm:gap-2 h-32 sm:h-40">
                  {[65, 80, 45, 90, 70, 100, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                      className="flex-1 rounded-t-md"
                      style={{
                        background: i === 5
                          ? "linear-gradient(180deg, #D4A853 0%, #B8922E 100%)"
                          : "rgba(212, 168, 83, 0.2)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-text-muted text-[10px]">
                  {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Top dishes */}
              <div className="bg-bg-elevated rounded-xl p-4 sm:p-5 border border-white/5">
                <h4 className="text-white text-sm font-semibold mb-4">Топ-5 блюд</h4>
                <div className="space-y-3">
                  {topDishes.map((dish, i) => (
                    <div key={dish.name} className="flex items-center gap-3">
                      <span className="text-text-muted text-xs w-4">{i + 1}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs sm:text-sm font-medium truncate">{dish.name}</p>
                        <div className="w-full bg-white/5 rounded-full h-1.5 mt-1">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(dish.orders / 34) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                            className="h-full rounded-full gold-gradient"
                          />
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-primary text-xs font-semibold">{dish.revenue}</p>
                        <p className="text-text-muted text-[10px]">{dish.orders} заказов</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
