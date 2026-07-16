"use client";

import { useRef } from "react";
import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { accentText } from "@/lib/theme";
import { gsap, useGSAP } from "@/lib/gsap";
import GridLines from "./GridLines";
import styles from "./Hero.module.css";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const lines = gsap.utils.toArray<HTMLElement>(
        `.${styles.lineInner}`,
        root.current
      );
      const fades = gsap.utils.toArray<HTMLElement>(
        "[data-fade]",
        root.current
      );
      const hud = gsap.utils.toArray<HTMLElement>("[data-hud]", root.current);
      const scrollLine = root.current?.querySelector<SVGLineElement>(
        `.${styles.scrollTrack} line`
      );

      if (reduce) {
        gsap.set([...lines, ...fades, ...hud], {
          opacity: 1,
          yPercent: 0,
          y: 0,
        });
        if (scrollLine) gsap.set(scrollLine, { drawSVG: "100%" });
        return;
      }

      gsap.set(lines, { yPercent: 115 });
      gsap.set(fades, { opacity: 0, y: 24 });
      gsap.set(hud, { opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.15,
      });

      tl.to(fades[0], { opacity: 1, y: 0, duration: 0.7 }, 0)
        .to(
          lines,
          { yPercent: 0, duration: 1.05, stagger: 0.12 },
          0.1
        )
        .to(
          fades.slice(1),
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          0.55
        )
        .to(hud, { opacity: 1, duration: 0.9, stagger: 0.1 }, 0.7);

      if (scrollLine) {
        tl.fromTo(
          scrollLine,
          { drawSVG: "0%" },
          { drawSVG: "100%", duration: 0.8, ease: "power2.inOut" },
          0.9
        );
      }
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        background: "#000",
      }}
    >
      <Image
        src="/assets/hero-model.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "65% 30%",
          opacity: 0.92,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.15) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 30%)",
        }}
      />

      {/* Technical grid overlay that draws itself in on load. */}
      <GridLines mode="load" columns={7} rows={4} delay={0.35} />

      {/* HUD-style technical readouts. */}
      <div data-hud className={`${styles.hud} ${styles.hudTopRight}`}>
        {"SS26 · REF 04-A"}
      </div>
      <div data-hud className={`${styles.hud} ${styles.hudBottomRight}`}>
        {"N 40.7128 · W 74.0060"}
        <br />
        {"FRAME 001 / 001"}
      </div>

      <div className={styles.content}>
        <div
          data-fade
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.32em",
            color: accentText,
            marginBottom: 22,
          }}
        >
          GYM GRID — SS26
        </div>
        <div
          className={`${oswald.className} ${styles.headline}`}
          style={{
            fontWeight: 700,
            fontSize: "clamp(48px,7vw,104px)",
            lineHeight: 0.98,
            letterSpacing: "0.005em",
            textTransform: "uppercase",
            color: "#F5F5F4",
            marginBottom: 26,
          }}
        >
          <span className={styles.lineMask}>
            <span className={styles.lineInner}>Engineered</span>
          </span>
          <span className={styles.lineMask}>
            <span className={styles.lineInner}>Discipline</span>
          </span>
        </div>
        <div
          data-fade
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "#B8B8B6",
            maxWidth: 440,
            marginBottom: 40,
          }}
        >
          Performance apparel built on structure, not slogans. Every line,
          considered.
        </div>
        <div data-fade className={styles.actions}>
          <a
            href="#collection"
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#0A0A0A",
              background: "#EDEDEC",
              padding: "16px 32px",
              textDecoration: "none",
            }}
          >
            ENTER THE COLLECTION
          </a>
          <a
            href="#join"
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#F2F2F0",
              border: "1px solid rgba(237,237,236,0.35)",
              padding: "16px 32px",
              textDecoration: "none",
            }}
          >
            JOIN THE LIST
          </a>
        </div>
      </div>

      <div className={styles.scroll}>
        <svg
          className={styles.scrollTrack}
          width="1"
          height="46"
          viewBox="0 0 1 46"
          aria-hidden="true"
        >
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="46"
            stroke="#7a7a78"
            strokeWidth="1"
          />
        </svg>
        <span data-hud>{"// SCROLL"}</span>
      </div>
    </div>
  );
}
