"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

function Cube({ letters }: { letters: string }) {
  return (
    <div className={styles.cubeScene}>
      <div className={styles.cube}>
        <div className={`${styles.cubeFace} ${styles.cubeFront}`}>
          <span className={styles.cubeLetters}>{letters}</span>
        </div>
        <div className={`${styles.cubeFace} ${styles.cubeBack}`}>
          <span className={styles.cubeLetters}>{letters}</span>
        </div>
        <div className={`${styles.cubeFace} ${styles.cubeLeft}`} />
        <div className={`${styles.cubeFace} ${styles.cubeRight}`} />
        <div className={`${styles.cubeFace} ${styles.cubeTop}`} />
        <div className={`${styles.cubeFace} ${styles.cubeBottom}`} />
      </div>
    </div>
  );
}

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 2000);
    const t2 = setTimeout(() => setRemoved(true), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`${styles.screen} ${hidden ? styles.screenHidden : ""}`}
      aria-hidden
    >
      <div className={styles.cubes}>
        <Cube letters="YO" />
        <Cube letters="LO" />
      </div>
    </div>
  );
}
