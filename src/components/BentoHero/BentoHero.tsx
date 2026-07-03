"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import MatterLogos from "./MatterLogos";
import styles from "./BentoHero.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

export default function BentoHero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(id);
  }, [emblaApi]);

  const scrollToSubscribe = useCallback(() => {
    document.querySelector("#subscribe")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section id="hero" className={`bento ${styles.bento}`}>
      <div className="light-rays-container light-rays-absolute">
        <div className="light-rays-grid" />
        <div className="light-rays-wrapper">
          <div className="light-ray light-ray-1" />
          <div className="light-ray light-ray-2" />
          <div className="light-ray light-ray-3" />
          <div className="light-ray light-ray-4" />
          <div className="light-ray light-ray-5" />
          <div className="light-ray light-ray-6" />
          <div className="light-ray light-ray-7" />
          <div className="light-ray light-ray-8" />
          <div className="light-rays-glow light-rays-glow-1" />
          <div className="light-rays-glow light-rays-glow-2" />
          <div className="light-rays-glow light-rays-glow-3" />
        </div>
      </div>

      <motion.div className={`textbox ${styles.textbox}`} {...fadeUp}>
        <div className="subheadline-box">
          <Sparkles className="subheadline-box-icon" />
          <p className="small-description grey">Digital-агентство полного цикла</p>
        </div>
        <div className="titlebox">
          <h1 className="headline white">
            Живём один раз.
            <br />
            Делаем сразу хорошо.
          </h1>
          <div className="titlebox-medium-gradient" />
        </div>
        <p className={`big-description grey ${styles.heroDescription}`}>
          YOLO — премиальные сайты, приложения, Telegram-боты и AI-автоматизация,
          которые превращают внимание в выручку.
        </p>
      </motion.div>

      <motion.div className="bento-grid" {...fadeUp}>
        <div className="bento-col bento-col-left">
          <div className="bento-card bento-card-showcase">
            <div className="bento-carousel" ref={emblaRef}>
              <div className="bento-carousel-row">
                {["/videos/animation-favou.mp4", "/videos/food-anim.mp4", "/videos/tgApp-animation.mp4"].map(
                  (src) => (
                    <div className="bento-carousel-item" key={src}>
                      <video
                        className="bento-carousel-item-image"
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="bento-card bento-card-thumb">
            <video
              className="bento-thumb-image"
              src="/videos/medmel-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <button className="button bento-cta-button" onClick={scrollToSubscribe}>
              <div className="button-content">
                <span className="small-description">Смотреть работы</span>
                <span className="small-description">Смотреть работы</span>
              </div>
              <div className="button-circle">
                <ArrowUpRight className="button-icon" />
              </div>
            </button>
          </div>
        </div>

        <div className={`bento-col ${styles.bentoColCenter}`}>
          <div className="bento-card bento-card-main">
            <video
              className="bento-card-main-video"
              src="/videos/Lagoona-anim.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="bento-card-main-overlay">
              <p className="description white">Lagoona — сайт-бронирование</p>
              <p className="tiny-description grey">
                Дизайн, разработка и запуск за 3 недели
              </p>
            </div>
          </div>
          <div className="bento-card bento-card-client">
            <video
              className="bento-client-video"
              src="/videos/liarGame-animation.MP4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="bento-client-bar">
              <img className="bento-client-avatar" src="/images/yolo-logo.png" alt="YOLO" />
              <p className="bento-client-bar-name">Liar Game — веб-приложение</p>
            </div>
          </div>
        </div>

        <div className="bento-col bento-col-right">
          <div className={`bento-card bento-card-cta ${styles.bentoCardCta}`}>
            <MatterLogos />
            <div className={styles.ctaContent}>
              <p className="description white">Нам доверяют лидеры рынка</p>
              <button className="button" onClick={scrollToSubscribe}>
                <div className="button-content">
                  <span className="small-description">Обсудить проект</span>
                  <span className="small-description">Обсудить проект</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
            </div>
          </div>
          <div className="bento-card bento-card-thumb">
            <video
              className="bento-thumb-image"
              src="/videos/tgApp-animation.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </motion.div>

      <div className="gradients-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />
      </div>
    </section>
  );
}
