"use client";

import { useRef } from "react";
import { oswald } from "@/lib/fonts";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./SpecMarquee.module.css";

const specs = [
  "ENGINEERED DISCIPLINE",
  "SS26 / GRID SYSTEM",
  "STRUCTURE IS STRENGTH",
  "PRECISION SEAMS",
  "MEASURED · REPEATABLE",
  "NO SLOGANS · NO NOISE",
];

export default function SpecMarquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current?.querySelector<HTMLElement>(
        `.${styles.track}`
      );
      if (!track) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      // The track holds two identical sequences, so travelling -50% loops
      // seamlessly.
      gsap.to(track, {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: root }
  );

  const sequence = (
    <>
      {specs.map((label, i) => (
        <span key={`${label}-${i}`} className={styles.item}>
          <span className={styles.mark} aria-hidden="true">
            ◆
          </span>
          <span className={`${oswald.className} ${styles.label}`}>{label}</span>
        </span>
      ))}
    </>
  );

  return (
    <div ref={root} className={styles.band} aria-label="GYM GRID specifications">
      <div className={styles.track}>
        {sequence}
        {sequence}
      </div>
    </div>
  );
}
