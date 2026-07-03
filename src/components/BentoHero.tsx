"use client";

import { motion } from "framer-motion";

const words = ["Премиальный", "digital,", "который", "приносит", "деньги"];

export default function BentoHero() {
  return (
    <section
      id="hero"
      className="section-padding pt-[120px] pb-[8vh] min-h-screen flex flex-col justify-center"
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <h1 className="font-bold leading-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.5 + i * 0.15 }}
            >
              <span className={i >= 3 ? "gradient-text" : ""}>{word}</span>
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-white/50 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          Сайты &middot; Приложения &middot; Telegram-боты &middot; AI-автоматизация &middot; Маркетинг &middot; Отделы продаж
        </motion.p>
      </motion.div>

      <motion.div
        className="bento"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        {/* Card 1: Large left */}
        <div className="card row-span-2 flex flex-col">
          <div className="relative flex-1 min-h-[200px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-t-[25px]"
              src="/videos/animation-favou.mp4"
            />
          </div>
          <div className="p-4 flex items-center gap-3">
            <span className="text-sm text-white/70">Online Store</span>
            <span className="text-green-400 text-xs">&#10003;</span>
          </div>
        </div>

        {/* Card 2: Center large */}
        <div className="card row-span-2 flex flex-col">
          <div className="relative flex-1 min-h-[300px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/videos/medmel-animation.mp4"
            />
          </div>
        </div>

        {/* Card 3: Top right - CTA */}
        <div className="card flex items-center justify-center p-6">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors"
          >
            Все работы
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>

        {/* Card 4: Bottom right */}
        <div className="card">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover min-h-[150px]"
            src="/videos/tgApp-animation.mp4"
          />
        </div>
      </motion.div>
    </section>
  );
}
