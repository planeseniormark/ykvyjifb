"use client";

import { motion } from "framer-motion";
import { Play, Eye } from "lucide-react";
import { useRef, useState } from "react";

const viewCounts = [3842, 2156, 4273, 5091, 1834, 2567, 3190, 1923, 2741, 3415];

const dishes = [
  {
    name: "Цезарь с креветками",
    description: "Романо, тигровые креветки, пармезан 24 мес., домашний соус Цезарь",
    price: "890 ₽",
    weight: "320 г",
    calories: 380,
    video: "/videos/grok-video-1b9ae0c1-a959-498b-b482-95ce5efeedde.mp4",
    tag: "Хит",
  },
  {
    name: "Тартар из тунца",
    description: "Свежий тунец, авокадо, соевый гель, чипсы из нори, кунжут, юзу",
    price: "1 290 ₽",
    weight: "200 г",
    calories: 280,
    video: "/videos/grok-video-1ebe9c7d-8c7c-483e-af4c-6231abed1afb.mp4",
    tag: "Новинка",
  },
  {
    name: "Спагетти с морепродуктами",
    description: "Креветки, мидии, кальмар, томатный соус, базилик, чеснок",
    price: "1 290 ₽",
    weight: "380 г",
    calories: 520,
    video: "/videos/grok-video-4e901207-f047-4e55-9578-6ff65e8930ff.mp4",
    tag: "",
  },
  {
    name: "Стейк Рибай",
    description: "Мраморная говядина, 300 г, гриль, розмариновое масло, овощи-гриль",
    price: "2 890 ₽",
    weight: "450 г",
    calories: 780,
    video: "/videos/grok-video-9fdc0a09-b9ba-4a08-a9f5-74ec8732b2fc.mp4",
    tag: "Хит",
  },
  {
    name: "Бурата с томатами",
    description: "Свежая бурата, розовые томаты, песто из базилика, руккола",
    price: "1 190 ₽",
    weight: "280 г",
    calories: 420,
    video: "/videos/grok-video-c94aca43-cb91-442c-aecf-c2f0b456e4cd.mp4",
    tag: "",
  },
  {
    name: "Каре ягнёнка",
    description: "4 рёбрышка, мятный песто, картофель гратен, вяленые томаты",
    price: "2 490 ₽",
    weight: "400 г",
    calories: 680,
    video: "/videos/grok-video-cf65ba92-532c-46b2-b789-6d5956a6c4ca.mp4",
    tag: "",
  },
  {
    name: "Тирамису классический",
    description: "Маскарпоне, савоярди, эспрессо, какао, амаретто",
    price: "590 ₽",
    weight: "180 г",
    calories: 420,
    video: "/videos/grok-video-dbde10fe-8119-4cf7-999c-c5b022ba888a.mp4",
    tag: "",
  },
  {
    name: "Лосось на гриле",
    description: "Филе лосося, спаржа, голландский соус, лимон, каперсы",
    price: "1 690 ₽",
    weight: "350 г",
    calories: 520,
    video: "/videos/grok-video-ea1f958e-6bc1-470d-8e2b-04651c12ea0d.mp4",
    tag: "Новинка",
  },
  {
    name: "Шоколадный фондан",
    description: "Тёмный шоколад 70%, жидкий центр, ванильное мороженое, малина",
    price: "690 ₽",
    weight: "220 г",
    calories: 520,
    video: "/videos/grok-video-ec0cdf3f-2c37-49bb-ad3a-b34cefc43627.mp4",
    tag: "",
  },
  {
    name: "Ризотто с чернилами каракатицы",
    description: "Рис арборио, чернила каракатицы, морепродукты, пармезан",
    price: "1 350 ₽",
    weight: "370 г",
    calories: 490,
    video: "/videos/grok-video-ed627baa-e27b-4ad1-984e-ef80c06c82d1.mp4",
    tag: "",
  },
];

function DishCard({ dish, index }: { dish: (typeof dishes)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="card-hover group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-bg-card border-subtle rounded-2xl overflow-hidden">
        {/* Video / Thumbnail area */}
        <div className="relative aspect-[4/3] bg-bg-elevated overflow-hidden">
          <video
            ref={videoRef}
            src={dish.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Play overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play size={18} className="text-white ml-0.5" fill="white" />
              </div>
            </div>
          )}

          {/* Tag */}
          {dish.tag && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-bg-dark">
                {dish.tag}
              </span>
            </div>
          )}

          {/* Views counter */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
            <Eye size={12} className="text-white/70" />
            <span className="text-white/70 text-[10px]">{viewCounts[index]}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="font-[family-name:var(--font-playfair)] text-white text-base sm:text-lg font-bold mb-1 truncate">
            {dish.name}
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm line-clamp-1 mb-3">
            {dish.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-text-muted text-xs">
              <span>{dish.weight}</span>
              <span>{dish.calories} ккал</span>
            </div>
            <span className="text-primary font-bold text-base sm:text-lg tabular-nums">
              {dish.price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoMenu() {
  return (
    <section id="menu" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gold-text">Видео-меню</span> вместо фотографий
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            10 блюд из нашего демо-ресторана Villa Romana. Наведите на карточку, чтобы увидеть видео
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {dishes.map((dish, index) => (
            <DishCard key={dish.name} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
