"use client";

import { useRef } from "react";
import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { gsap, useGSAP } from "@/lib/gsap";
import GridLines from "./GridLines";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const q = gsap.utils.selector(root);
      const copy = q<HTMLElement>("[data-reveal]");
      const brackets = q<SVGPathElement>(`.${styles.frame} path`);
      const monogram = q<HTMLElement>(`.${styles.monogram}`);

      if (reduce) {
        gsap.set(copy, { opacity: 1, y: 0 });
        gsap.set(brackets, { drawSVG: "100%" });
        gsap.set(monogram, { opacity: 1, scale: 1 });
        return;
      }

      gsap.from(copy, {
        opacity: 0,
        y: 32,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: q<HTMLElement>(`.${styles.panel}`)[0],
          start: "top 80%",
          once: true,
        },
      });

      gsap.set(brackets, { drawSVG: "0%" });
      gsap.set(monogram, { opacity: 0, scale: 0.92 });

      tl.to(brackets, {
        drawSVG: "100%",
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.08,
      }).to(
        monogram,
        { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" },
        0.3
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} id="philosophy" className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          data-reveal
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.24em",
            color: "#7A7A78",
            marginBottom: 24,
          }}
        >
          {"// PHILOSOPHY"}
        </div>
        <div
          data-reveal
          className={oswald.className}
          style={{
            fontWeight: 700,
            fontSize: "clamp(32px,3.6vw,52px)",
            lineHeight: 1.08,
            textTransform: "uppercase",
            color: "#F5F5F4",
            marginBottom: 32,
          }}
        >
          Structure is strength.
        </div>
        <div
          data-reveal
          style={{
            fontSize: 16,
            lineHeight: 1.85,
            color: "#9E9E9C",
            maxWidth: 480,
            marginBottom: 20,
          }}
        >
          GYM GRID begins with the program, not the print. Every garment is
          drafted the way a training block is — set against a grid, measured,
          repeatable.
        </div>
        <div
          data-reveal
          style={{
            fontSize: 16,
            lineHeight: 1.85,
            color: "#9E9E9C",
            maxWidth: 480,
          }}
        >
          No slogans. No noise. Just precision, engineered into every seam.
        </div>
      </div>

      <div className={styles.panel}>
        <GridLines mode="scroll" columns={5} rows={5} color="rgba(201,203,204,0.1)" />

        {/* Technical corner brackets that draw themselves around the mark. */}
        <svg
          className={styles.frame}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M2 14 L2 2 L14 2" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <path d="M86 2 L98 2 L98 14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <path d="M98 86 L98 98 L86 98" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
          <path d="M14 98 L2 98 L2 86" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>

        <Image
          src="/assets/logo-icon.png"
          alt="GYM GRID monogram"
          width={280}
          height={286}
          className={styles.monogram}
          style={{ width: "100%", maxWidth: 280, height: "auto" }}
        />
      </div>
    </div>
  );
}
