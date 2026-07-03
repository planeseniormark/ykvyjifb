"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FolderOpen } from "lucide-react";
import styles from "./Projects.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] as const },
};

const PROJECTS = [
  {
    video: "/videos/Lagoona-anim.mp4",
    title: "Lagoona",
    text: "Сайт бронирования для загородного курорта",
  },
  {
    video: "/videos/animation-favou.mp4",
    title: "Favou",
    text: "Брендовый промо-сайт с 3D-анимациями",
  },
  {
    video: "/videos/medmel-animation.mp4",
    title: "MedMel",
    text: "Медицинский сервис: сайт и личный кабинет",
  },
  {
    video: "/videos/tgApp-animation.mp4",
    title: "TG Mini App",
    text: "Telegram-приложение для продаж и лояльности",
  },
  {
    video: "/videos/food-anim.mp4",
    title: "FoodApp",
    text: "Приложение доставки еды с онлайн-оплатой",
  },
  {
    video: "/videos/liarGame-animation.MP4",
    title: "Liar Game",
    text: "Мультиплеерная веб-игра в реальном времени",
  },
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className={`projects ${styles.projects}`}>
      <motion.div className={`textbox ${styles.textbox}`} {...fadeUp}>
        <div className="subheadline-box">
          <FolderOpen className="subheadline-box-icon" />
          <p className="small-description grey">Портфолио</p>
        </div>
        <div className="titlebox">
          <h2 className="subheadline white">Наши проекты</h2>
          <div className="titlebox-gradient" />
        </div>
        <p className="description grey">
          Каждый проект — законченный продукт, который работает и приносит деньги.
        </p>
      </motion.div>

      <motion.div className="projects-carousel" ref={emblaRef} {...fadeUp}>
        <div className="projects-carousel-row">
          <div className="projects-item-padding" />
          {PROJECTS.map((p) => (
            <div className="projects-carousel-item" key={p.title}>
              <video
                className="projects-carousel-item-video"
                src={p.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="projects-carousel-item-overlay">
                <p className="small-subheadline white">{p.title}</p>
                <p className="small-description grey">{p.text}</p>
              </div>
            </div>
          ))}
          <div className="projects-item-padding" />
        </div>
      </motion.div>

      <div className="projects-content-bottom">
        <div className="projects-content-bottom-buttons">
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
        <div className="embla__dots">
          {snaps.map((_, i) => (
            <button
              key={i}
              className={`embla__dot ${i === selected ? "embla__dot--selected" : ""}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
