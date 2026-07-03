"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Send, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 gold-gradient opacity-10" />
          <div className="absolute inset-0 bg-bg-card/95" />

          {/* Blobs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-[80px]" />

          <div className="relative px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Готовы <span className="gold-text">начать</span>?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Запустим PlateFlow за 7 дней по 50% предоплате. Настроим систему,
              обучим персонал и будем на связи 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
              <a
                href="https://t.me/OSIPOWLAD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl animate-shimmer text-bg-dark font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <Send size={18} />
                Написать в Telegram
              </a>
              <a
                href="https://wa.me/79950961577"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white font-semibold text-base sm:text-lg hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-text-muted text-sm">
              <a
                href="https://t.me/OSIPOWLAD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Send size={16} className="text-primary" />
                <span>@OSIPOWLAD</span>
              </a>
              <a
                href="https://wa.me/79950961577"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle size={16} className="text-primary" />
                <span>+7 (995) 096-15-77</span>
              </a>
              <a
                href="mailto:plateflow@yolo-agency.ru"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span>plateflow@yolo-agency.ru</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
