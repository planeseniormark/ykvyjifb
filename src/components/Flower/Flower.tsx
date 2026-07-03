"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import styles from "./Flower.module.css";

const TEXT =
  "YOLO — значит делать сразу хорошо. Мы объединяем дизайн, разработку и маркетинг, чтобы каждый проект приносил бизнесу реальные деньги, а не просто красивую картинку.";

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={styles.char}>
      {char}
    </motion.span>
  );
}

export default function Flower() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const chars = TEXT.split("");

  return (
    <section className={`flower ${styles.flower}`}>
      <div className="flower-content" ref={ref}>
        <p className={`subheadline white flower-text ${styles.text}`}>
          {chars.map((char, i) => (
            <Char
              key={i}
              char={char}
              index={i}
              total={chars.length}
              progress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
