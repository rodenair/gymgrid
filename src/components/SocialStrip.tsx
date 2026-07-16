"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./SocialStrip.module.css";

const placeholders = Array.from({ length: 6 }, (_, i) => i);

export default function SocialStrip() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const q = gsap.utils.selector(root);
      const tiles = q<HTMLElement>(`.${styles.tile}`);
      const head = q<HTMLElement>("[data-reveal]");

      if (reduce) {
        gsap.set([tiles, head], { opacity: 1, y: 0 });
        return;
      }

      gsap.from(head, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
      });

      gsap.from(tiles, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
        stagger: { each: 0.08, grid: "auto", from: "start" },
        scrollTrigger: {
          trigger: q<HTMLElement>(`.${styles.grid}`)[0],
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} id="social" className={styles.section}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 36,
        }}
      >
        <div
          data-reveal
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.24em",
            color: "#7A7A78",
          }}
        >
          {"// @GYMGRID"}
        </div>
        <a
          data-reveal
          href="#"
          style={{
            fontSize: 12,
            color: "#8C8C8C",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          FOLLOW ON INSTAGRAM →
        </a>
      </div>
      <div className={styles.grid}>
        {placeholders.map((i) => (
          <div key={i} className={styles.tile}>
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "#4a4a48",
                textTransform: "uppercase",
              }}
            >
              Coming soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
