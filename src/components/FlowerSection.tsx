"use client";

import { motion } from "framer-motion";

const lines = [
  "Растите в digital,",
  "Пусть ваш бизнес",
  "расцветает",
];

export default function FlowerSection() {
  return (
    <section className="section-padding py-[15vh] flex items-center justify-center">
      <div className="text-center">
        {lines.map((line, lineIdx) => (
          <div key={lineIdx} className="flower-text">
            {line.split("").map((char, charIdx) => (
              <motion.span
                key={charIdx}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: lineIdx * 0.3 + charIdx * 0.03,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
