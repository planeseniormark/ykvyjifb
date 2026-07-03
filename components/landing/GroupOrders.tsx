"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag, CreditCard, Share2 } from "lucide-react";

const guests = [
  { name: "Алексей", items: ["Стейк Рибай", "Цезарь"], total: "3 780 ₽", color: "#3B82F6", status: "Заказал" },
  { name: "Мария", items: ["Бурата", "Лосось"], total: "2 880 ₽", color: "#EC4899", status: "Заказала" },
  { name: "Дмитрий", items: ["Тартар из тунца"], total: "1 290 ₽", color: "#22C55E", status: "Выбирает..." },
];

export default function GroupOrders() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-card/30 to-bg-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-bg-card border-subtle rounded-2xl p-5 sm:p-8 max-w-md mx-auto lg:mx-0">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-text-muted text-xs">Villa Romana</p>
                  <h4 className="text-white font-bold text-lg">
                    Стол №5 — <span className="text-primary">3 гостя</span>
                  </h4>
                </div>
                <button className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Guest cards */}
              <div className="space-y-3">
                {guests.map((guest, i) => (
                  <motion.div
                    key={guest.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    className="bg-bg-elevated rounded-xl p-4 border border-white/5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: guest.color }}
                      >
                        {guest.name[0]}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-semibold">{guest.name}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${guest.status === "Выбирает..." ? "bg-warning/10 text-warning" : "bg-success/10 text-success"}`}>
                        {guest.status}
                      </span>
                    </div>
                    <div className="ml-11">
                      <p className="text-text-secondary text-xs">{guest.items.join(", ")}</p>
                      <p className="text-primary text-sm font-bold mt-1">{guest.total}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-text-secondary text-sm">Общий счёт стола</span>
                <span className="text-white text-xl font-bold">7 950 ₽</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Групповые <span className="gold-text">заказы</span>
            </h2>
            <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed">
              Больше никаких &laquo;кто что заказывал?&raquo; и общих счетов.
              Каждый гость видит, что заказали друзья, и платит только за себя.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  icon: Users,
                  title: "Несколько гостей за столом",
                  desc: "Каждый сканирует QR и присоединяется к общей сессии",
                },
                {
                  icon: ShoppingBag,
                  title: "Общие и личные блюда",
                  desc: "Отмечайте блюда как общие — стоимость разделится автоматически",
                },
                {
                  icon: CreditCard,
                  title: "Раздельный счёт",
                  desc: "Каждый видит свою сумму и оплачивает отдельно",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
