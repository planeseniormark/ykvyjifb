"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#features", label: "Возможности" },
  { href: "#menu", label: "Видео-меню" },
  { href: "#pricing", label: "Цены" },
  { href: "#contact", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl gold-gradient flex items-center justify-center">
              <span className="text-bg-dark font-bold text-sm sm:text-lg">P</span>
            </div>
            <span className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-white">
              PlateFlow
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#pricing"
              className="inline-flex items-center px-5 py-2.5 rounded-lg gold-gradient text-bg-dark font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Подключить
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-text-secondary hover:text-white transition-colors py-2 text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-lg gold-gradient text-bg-dark font-semibold text-sm mt-4"
              >
                Подключить ресторан
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
