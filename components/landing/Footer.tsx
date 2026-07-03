import { ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Продукт",
    links: [
      { label: "Возможности", href: "#features" },
      { label: "Видео-меню", href: "#menu" },
      { label: "Цены", href: "#pricing" },
      { label: "Интеграция с iiko", href: "#" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Блог", href: "#" },
      { label: "Контакты", href: "#contact" },
      { label: "Вакансии", href: "#" },
    ],
  },
  {
    title: "Связаться",
    links: [
      { label: "Telegram @OSIPOWLAD", href: "https://t.me/OSIPOWLAD" },
      { label: "WhatsApp", href: "https://wa.me/79950961577" },
      { label: "plateflow@yolo-agency.ru", href: "mailto:plateflow@yolo-agency.ru" },
      { label: "FAQ", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-10 sm:py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl gold-gradient flex items-center justify-center">
                <span className="text-bg-dark font-bold text-sm">P</span>
              </div>
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-white">
                PlateFlow
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Мобильная система заказов для ресторанов с видео-меню и групповыми заказами
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white text-sm font-semibold mb-3 sm:mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} PlateFlow. Все права защищены.
          </p>
          <div className="flex items-center gap-1.5 text-text-muted text-xs sm:text-sm">
            <span>Разработано</span>
            <a
              href="https://yolo-agency.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors font-medium"
            >
              YOLO Agency (Влад Осипов)
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
