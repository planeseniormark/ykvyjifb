"use client";

import { motion } from "framer-motion";

const words1 = "Лидируйте".split("");
const words2 = "в своей отрасли".split("");

export default function Subscribe() {
  return (
    <section className="section-padding py-[15vh] relative overflow-hidden">
      {/* Background videos with low opacity */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-[0.08] pointer-events-none">
        <video autoPlay loop muted playsInline src="/videos/animation-favou.mp4" className="w-full h-full object-cover rounded-[25px]" />
        <video autoPlay loop muted playsInline src="/videos/medmel-animation.mp4" className="w-full h-full object-cover rounded-[25px]" />
        <video autoPlay loop muted playsInline src="/videos/food-anim.mp4" className="w-full h-full object-cover rounded-[25px]" />
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="overflow-hidden">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              {words1.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block gradient-text"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              className="font-bold"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              {words2.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block gradient-text"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.04 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>

        <motion.p
          className="text-white/50 text-base md:text-lg mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          Готовы выделиться среди конкурентов? Давайте создадим что-то
          выдающееся вместе.
        </motion.p>

        <motion.a
          href="#ai-chat"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-white/90 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          Обсудить проект
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
