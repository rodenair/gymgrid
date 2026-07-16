"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./GridLines.module.css";

type GridLinesProps = {
  /** Number of vertical divisions (interior + edge lines). */
  columns?: number;
  /** Number of horizontal divisions. */
  rows?: number;
  /** "load" draws on mount, "scroll" draws when the grid scrolls into view. */
  mode?: "load" | "scroll";
  /** Stroke colour of the grid lines. */
  color?: string;
  /** Extra delay (seconds) before the draw begins — only used in "load" mode. */
  delay?: number;
  className?: string;
};

/**
 * A technical, blueprint-style grid overlay whose lines "draw" themselves in
 * with GSAP's DrawSVGPlugin. Stretches to fill its (positioned) parent.
 * Purely decorative — never intercepts pointer events.
 */
export default function GridLines({
  columns = 6,
  rows = 4,
  mode = "scroll",
  color = "rgba(201,203,204,0.16)",
  delay = 0,
  className,
}: GridLinesProps) {
  const ref = useRef<SVGSVGElement>(null);

  // Interior lines only — edges are handled by the section borders.
  const verticals = Array.from({ length: columns - 1 }, (_, i) =>
    ((i + 1) / columns) * 100
  );
  const horizontals = Array.from({ length: rows - 1 }, (_, i) =>
    ((i + 1) / rows) * 100
  );

  useGSAP(
    () => {
      const svg = ref.current;
      if (!svg) return;
      const lines = svg.querySelectorAll<SVGLineElement>("line");
      if (!lines.length) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduce) {
        gsap.set(lines, { drawSVG: "100%", opacity: 1 });
        return;
      }

      gsap.set(lines, { drawSVG: "0%", opacity: 1 });
      gsap.to(lines, {
        drawSVG: "100%",
        duration: 1.2,
        ease: "power2.inOut",
        delay: mode === "load" ? delay : 0,
        stagger: { each: 0.05, from: "center" },
        scrollTrigger:
          mode === "scroll"
            ? { trigger: svg, start: "top 88%", once: true }
            : undefined,
      });
    },
    { scope: ref }
  );

  return (
    <svg
      ref={ref}
      className={`${styles.grid} ${className ?? ""}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {verticals.map((x) => (
        <line
          key={`v${x}`}
          x1={x}
          y1={0}
          x2={x}
          y2={100}
          stroke={color}
          strokeWidth={0.15}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {horizontals.map((y) => (
        <line
          key={`h${y}`}
          x1={0}
          y1={y}
          x2={100}
          y2={y}
          stroke={color}
          strokeWidth={0.15}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
