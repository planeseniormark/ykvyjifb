"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./Globe.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

export default function Globe() {
  const scrollToSubscribe = () =>
    document.querySelector("#subscribe")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={`globe ${styles.globe}`}>
      <motion.div className="globe-content" {...fadeUp}>
        <div className="globe-container">
          <div className="globe-container-border" />
          <div className="globe-container-textbox">
            <div className="globe-container-textbox-text">
              <div className="titlebox">
                <h2 className="subheadline white">
                  Работаем с командами по всему миру
                </h2>
                <div className="titlebox-gradient" />
              </div>
              <p className="description grey">
                Москва, Дубай, Стамбул — часовые пояса не мешают. Созвон, бриф,
                прозрачный процесс и еженедельные демо.
              </p>
              <button
                className="button globe-container-button"
                onClick={scrollToSubscribe}
              >
                <div className="globe-container-button-row">
                  <div className="globe-container-button-active" />
                  <p className="small-description white">
                    Свободно место на этот месяц
                  </p>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
            </div>
          </div>
          <div className="globe-container-videobox">
            <video
              className="globe-container-video"
              src="/videos/animation-favou.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="globe-top-fade" />
            <div className="globe-bottom-fade" />
            <div className="globe-left-fade" />
            <div className="globe-right-fade" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
