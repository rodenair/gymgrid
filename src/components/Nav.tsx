"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { accentText } from "@/lib/theme";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./Nav.module.css";

const navLinks = [
  { href: "#collection", label: "COLLECTION" },
  { href: "#philosophy", label: "PHILOSOPHY" },
  { href: "#social", label: "JOURNAL" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;
      gsap.from(root.current, {
        y: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className={styles.nav}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 34, height: 35, flexShrink: 0, position: "relative" }}>
          <Image
            src="/assets/logo-icon.png"
            alt="GYM GRID"
            fill
            sizes="34px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          className={oswald.className}
          style={{
            fontWeight: 700,
            fontSize: 19,
            letterSpacing: "0.04em",
            color: "#F5F5F4",
          }}
        >
          GYM GRID
        </div>
      </div>

      <div className={styles.links}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: accentText,
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a href="#join" className={styles.joinButton}>
        JOIN
      </a>

      <button
        type="button"
        className={styles.menuButton}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path
            d={menuOpen ? "M1 1L17 13M1 13L17 1" : "M0 1H18M0 7H18M0 13H18"}
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#join" className={styles.mobileJoin} onClick={() => setMenuOpen(false)}>
          JOIN
        </a>
      </div>
    </div>
  );
}
