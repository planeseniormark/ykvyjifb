"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={styles.wrapper}>
        <motion.div
          className={styles.inside}
          initial={{ scale: 0.6, y: "-15vh", opacity: 0 }}
          animate={mounted ? { scale: 1, y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.left}>
            <img
              className={styles.logo}
              src="/images/yolo-logo.png"
              alt="YOLO"
              onClick={() => scrollTo("#hero")}
            />
          </div>
          <div className={styles.big}>
            {NAV_LINKS.map((l) => (
              <p
                key={l.href}
                className="small-description white hover-text-grey"
                onClick={() => scrollTo(l.href)}
              >
                {l.label}
              </p>
            ))}
          </div>
          <div className={styles.right}>
            <button className="button" onClick={() => scrollTo("#subscribe")}>
              <div className="button-content">
                <span className="small-description">Связаться</span>
                <span className="small-description">Связаться</span>
              </div>
              <div className="button-circle">
                <ArrowUpRight className="button-icon" />
              </div>
            </button>
          </div>
          <div
            className={`${styles.rightMobile} ${styles.example5} ${menuOpen ? styles.menuOpenBtn : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={styles.menuBars}>
              <span />
            </div>
          </div>
        </motion.div>
      </nav>
      <div className={`${styles.menuContainer} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.menu}>
          <div className={styles.menuNavigation}>
            {NAV_LINKS.map((l) => (
              <p
                key={l.href}
                className={`subheadline white ${styles.menuNavigationText}`}
                onClick={() => scrollTo(l.href)}
              >
                {l.label}
              </p>
            ))}
            <p
              className={`subheadline white ${styles.menuNavigationText}`}
              onClick={() => scrollTo("#subscribe")}
            >
              Связаться
            </p>
          </div>
          <div className={styles.menuSocial}>
            <a href="https://t.me/yolo_agency_bot" aria-label="Telegram">
              <Send className={styles.menuSocialIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
