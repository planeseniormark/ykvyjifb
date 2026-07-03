"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import styles from "./KPI.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const KPIS = [
  {
    target: 5,
    suffix: "+",
    title: "лет в маркетинге",
    text: "Опыт Влада Осипова и команды в digital-маркетинге и продажах",
  },
  {
    target: 8,
    suffix: "+",
    title: "проектов для клиентов",
    text: "Сайты, приложения и боты, запущенные для брендов и стартапов",
  },
  {
    target: 100,
    suffix: "%",
    title: "фокус на результат",
    text: "Каждый проект доводим до измеримых бизнес-показателей",
  },
];

export default function KPI() {
  return (
    <section className={`kpi ${styles.kpi}`}>
      <div className="kpi-content">
        <motion.div className="textbox" {...fadeUp}>
          <div className="subheadline-box">
            <TrendingUp className="subheadline-box-icon" />
            <p className="small-description grey">Цифры</p>
          </div>
          <div className="titlebox">
            <h2 className="subheadline white">YOLO в цифрах</h2>
            <div className="titlebox-gradient" />
          </div>
        </motion.div>
        <motion.div className={`kpi-content-row ${styles.row}`} {...fadeUp}>
          {KPIS.map((k) => (
            <div className="kpi-content-item" key={k.title}>
              <div className="kpi-item-grid" />
              <div className="kpi-item-textbox">
                <div className="kpi-item-textbox-top">
                  <div className="kpi-item-textbox-number">
                    <p className={`kpi-item-textbox-number-text ${styles.number}`}>
                      <CountUp target={k.target} suffix={k.suffix} />
                    </p>
                    <div className="kpi-item-textbox-number-gradient" />
                  </div>
                  <p className="small-subheadline white kpi-item-textbox-top-text">
                    {k.title}
                  </p>
                </div>
                <p className="small-description grey">{k.text}</p>
              </div>
              <div className="kpi-item-button">
                <ArrowUpRight className="kpi-item-button-icon" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
