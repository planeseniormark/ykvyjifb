"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const kpis = [
  {
    icon: "\uD83C\uDF10",
    number: 50,
    suffix: "+",
    label: "проектов",
    description: "успешно реализованных для бизнеса",
  },
  {
    icon: "\uD83D\uDC64",
    number: 10,
    suffix: "+",
    label: "Telegram-ботов",
    description: "разработано и запущено",
  },
  {
    icon: "\uD83D\uDCBC",
    number: 8,
    suffix: "+",
    label: "работ с крупными компаниями",
    description: "ВТБ, Газпром нефть, Альфа-Банк и др.",
  },
];

export default function KPI() {
  return (
    <section className="section-padding py-[10vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pill-badge mb-6">&#128202; Ключевые показатели</div>
        <h2
          className="font-bold gradient-text mb-3"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
        >
          Цифры говорят сами за себя
        </h2>
        <p className="text-white/50 text-sm md:text-base mb-10">
          Результаты, а не обещания
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              className="card p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="text-3xl">{kpi.icon}</span>
              <div
                className="font-bold gradient-text"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                <CountUp end={kpi.number} suffix={kpi.suffix} />
              </div>
              <p className="text-white/80 font-medium">{kpi.label}</p>
              <p className="text-white/40 text-sm">{kpi.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
