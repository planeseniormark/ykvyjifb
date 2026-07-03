"use client";

import styles from "./Marquee.module.css";

const LOGOS = [
  { src: "/logos/client-logo-mik.jpg", alt: "МИК" },
  { src: "/logos/client-logo-vtb.png", alt: "ВТБ" },
  { src: "/logos/client-logo-gazprom.png", alt: "Газпром нефть" },
  { src: "/logos/client-logo-mgimo.jpg", alt: "МГИМО Ventures" },
  { src: "/logos/client-logo-stellar.png", alt: "Stellar" },
  { src: "/logos/client-logo-cosmos.webp", alt: "Cosmos Hotel Group" },
  { src: "/logos/client-logo-alfa.webp", alt: "Альфа-Банк" },
  { src: "/logos/client-logo-razvedka.png", alt: "Большая Разведка" },
];

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <p className={`small-description grey ${styles.title}`}>
        С нами работают команды из
      </p>
      <div className={styles.track}>
        <div className={styles.row}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div className={styles.item} key={`${logo.src}-${i}`}>
              <img className={styles.image} src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </div>
  );
}
