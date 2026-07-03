"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Store Page",
    stack: ["HTML", "CSS", "JS"],
    video: "/videos/animation-favou.mp4",
    link: "https://favou.vercel.app/",
    description: "Страница интернет-магазина с анимациями и современным дизайном",
  },
  {
    title: "Лендинг для клиники",
    stack: ["React", "TypeScript"],
    video: "/videos/medmel-animation.mp4",
    link: "https://медмел.рф/",
    description: "Адаптивный сайт для медицинской клиники в Сургуте",
  },
  {
    title: "Mini App Telegram",
    stack: ["React", "TypeScript"],
    video: "/videos/tgApp-animation.mp4",
    link: "https://mini-app-tg-nu.vercel.app/",
    description: "Мини-приложение для Telegram с игровой механикой",
  },
  {
    title: "Бронирование отелей",
    stack: ["HTML", "CSS", "JS"],
    video: "/videos/Lagoona-anim.mp4",
    link: "https://lagoona-one.vercel.app/",
    description: "Система бронирования для сети отелей",
  },
  {
    title: "Онлайн-магазин еды",
    stack: ["React", "TypeScript", "Redux"],
    video: "/videos/food-anim.mp4",
    link: "https://my-food-project-ten.vercel.app/",
    description: "Интернет-магазин еды с корзиной и фильтрами",
  },
  {
    title: "Telegram-игра",
    stack: ["React", "TypeScript", "Docker"],
    video: "/videos/liarGame-animation.MP4",
    link: "https://t.me/game_liar_bot",
    description: "Веб-интерфейс для многопользовательской Telegram-игры",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding py-[10vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pill-badge mb-6">&#128421; Наши работы</div>
        <h2
          className="font-bold gradient-text mb-3"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
        >
          Проекты нашей команды
        </h2>
        <p className="text-white/50 text-sm md:text-base mb-10">
          Реальные проекты — от лендингов до Telegram-ботов
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="card flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={project.video}
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="glass-card px-3 py-1 text-xs text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-lg text-white">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors mt-1"
                >
                  Открыть проект
                  <svg
                    width="14"
                    height="14"
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
