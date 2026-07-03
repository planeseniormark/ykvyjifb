"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import styles from "./Testimonials.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

const TESTIMONIALS = [
  {
    name: "Анна К.",
    role: "Основатель, Lagoona",
    text: "Ребята из YOLO сделали сайт бронирования быстрее, чем мы согласовали ТЗ с прошлым подрядчиком. Конверсия выросла в два раза.",
    gradient: "blue",
    initials: "АК",
  },
  {
    name: "Дмитрий С.",
    role: "Продакт-менеджер, финтех",
    text: "Telegram Mini App запустили за месяц. Чистый код, понятная коммуникация, никакой бюрократии.",
    gradient: "purple",
    initials: "ДС",
  },
  {
    name: "Мария В.",
    role: "Маркетинг-директор, HoReCa",
    text: "Впервые работаю с командой, которая сама предлагает, как улучшить воронку, а не просто закрывает задачи.",
    gradient: "red",
    initials: "МВ",
  },
  {
    name: "Игорь Л.",
    role: "Сооснователь стартапа",
    text: "AI-бот на GigaChat закрыл 70% обращений в поддержку. Окупился за первый месяц.",
    gradient: "brown",
    initials: "ИЛ",
  },
  {
    name: "Екатерина П.",
    role: "Владелец e-commerce",
    text: "Влад лично вникает в каждый проект. Редкое сочетание маркетингового мышления и технической экспертизы.",
    gradient: "beige",
    initials: "ЕП",
  },
];

const GRADIENTS: Record<string, string> = {
  red: "testimonials-item-profile-gradient-red",
  blue: "testimonials-item-profile-gradient-blue",
  purple: "testimonials-item-profile-gradient-purple",
  brown: "testimonials-item-profile-gradient-brown",
  beige: "testimonials-item-profile-gradient-beige",
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className={`testimonials ${styles.testimonials}`}>
      <div className="testimonials-content">
        <motion.div className="textbox testimonials-content-textbox" {...fadeUp}>
          <div className="subheadline-box">
            <MessageSquare className="subheadline-box-icon" />
            <p className="small-description grey">Отзывы</p>
          </div>
          <div className="titlebox">
            <h2 className="subheadline white">Что говорят клиенты</h2>
            <div className="titlebox-gradient" />
          </div>
        </motion.div>

        <motion.div className="testimonials-carousel" ref={emblaRef} {...fadeUp}>
          <div className="testimonials-carousel-row">
            <div className="testimonials-item-padding" />
            {TESTIMONIALS.map((t) => (
              <div className="testimonials-item" key={t.name}>
                <div className="testimonials-item-grid" />
                <div className="testimonials-item-content">
                  <div className="testimonials-item-profile">
                    <div
                      className={`testimonials-item-profile-gradient ${GRADIENTS[t.gradient]}`}
                    />
                    <span className={styles.initials}>{t.initials}</span>
                  </div>
                  <p className="description white">“{t.text}”</p>
                  <div className="testimonials-item-center">
                    <p className="small-description white">{t.name}</p>
                    <p className="small-description grey">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="testimonials-item-padding" />
          </div>
        </motion.div>

        <div className="testimonials-content-bottom">
          <div className="testimonials-content-bottom-buttons">
            <button
              className="carousel-button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Назад"
            >
              <ArrowLeft className="carousel-button-icon" />
            </button>
            <button
              className="carousel-button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Вперёд"
            >
              <ArrowRight className="carousel-button-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
