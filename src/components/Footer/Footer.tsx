"use client";

import { Send, Mail, Bot, Phone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img className={styles.logo} src="/images/yolo-logo.png" alt="YOLO" />
            <p className="small-description grey">
              YOU ONLY LIVE ONCE.
              <br />
              Делаем digital, который приносит деньги.
            </p>
          </div>
          <div className={styles.nav}>
            <p className="small-description grey">Навигация</p>
            <p
              className="small-description white hover-text-grey"
              onClick={() => scrollTo("#hero")}
            >
              Главная
            </p>
            <p
              className="small-description white hover-text-grey"
              onClick={() => scrollTo("#services")}
            >
              Услуги
            </p>
            <p
              className="small-description white hover-text-grey"
              onClick={() => scrollTo("#projects")}
            >
              Портфолио
            </p>
            <p
              className="small-description white hover-text-grey"
              onClick={() => scrollTo("#subscribe")}
            >
              Контакты
            </p>
          </div>
          <div className={styles.socials}>
            <p className="small-description grey">Связаться</p>
            <a
              className={`small-description white hover-text-grey ${styles.socialLink}`}
              href="https://t.me/OSIPOWLAD"
            >
              <Send className={styles.socialIcon} /> Telegram @OSIPOWLAD
            </a>
            <a
              className={`small-description white hover-text-grey ${styles.socialLink}`}
              href="https://t.me/YoloAgencyBot"
            >
              <Bot className={styles.socialIcon} /> Бот заказов
            </a>
            <a
              className={`small-description white hover-text-grey ${styles.socialLink}`}
              href="https://wa.me/79950961577"
            >
              <Phone className={styles.socialIcon} /> WhatsApp +7 995 096-15-77
            </a>
            <a
              className={`small-description white hover-text-grey ${styles.socialLink}`}
              href="mailto:hello@yolo-agency.ru"
            >
              <Mail className={styles.socialIcon} /> hello@yolo-agency.ru
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className="small-description grey">
            © {new Date().getFullYear()} YOLO. Влад Осипов. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
