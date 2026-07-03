"use client";

import { useEffect, useRef } from "react";
import { oswald } from "@/lib/fonts";
import { accentText } from "@/lib/theme";
import { gsap } from "@/lib/gsap";
import GridScene from "@/components/three/GridScene";

export default function Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.7 }
    )
      .fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.9,
          stagger: 0.12,
        },
        "-=0.35"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.45"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        scrollCueRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.3"
      );

    gsap.to(scrollCueRef.current, {
      y: 6,
      duration: 1.1,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        background: "#000",
      }}
    >
      <GridScene />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.1) 68%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, transparent 22%)",
        }}
      />

      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0px 48px",
          maxWidth: 880,
        }}
      >
        <div
          ref={eyebrowRef}
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
          className={oswald.className}
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
          <span
            ref={titleLine1Ref}
            style={{ display: "block", overflow: "hidden" }}
          >
            Engineered
          </span>
          <span
            ref={titleLine2Ref}
            style={{ display: "block", overflow: "hidden" }}
          >
            Discipline
          </span>
        </div>
        <div
          ref={descRef}
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
        <div
          ref={ctaRef}
          style={{ display: "flex", alignItems: "center", gap: 20 }}
        >
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

      <div
        ref={scrollCueRef}
        style={{
          position: "absolute",
          bottom: 36,
          left: 48,
          fontSize: 11,
          letterSpacing: "0.14em",
          color: "#7A7A78",
        }}
      >
        // SCROLL
      </div>
    </div>
  );
}
