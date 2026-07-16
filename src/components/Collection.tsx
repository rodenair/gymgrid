"use client";

import { useRef } from "react";
import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { gsap, useGSAP } from "@/lib/gsap";
import GridLines from "./GridLines";
import styles from "./Collection.module.css";

const products = [
  {
    id: "tee",
    index: "01",
    sku: "GG-TEE-001",
    name: "Grid Tee",
    price: "$68",
    detail: "Heavyweight cotton",
    image: "/assets/product-tee.jpg",
  },
  {
    id: "hoodie",
    index: "02",
    sku: "GG-HOD-002",
    name: "Grid Hoodie",
    price: "$128",
    detail: "Brushed fleece",
    image: "/assets/product-hoodie.jpg",
  },
  {
    id: "tank",
    index: "03",
    sku: "GG-TNK-003",
    name: "Grid Tank",
    price: "$58",
    detail: "Lightweight cotton",
    image: "/assets/product-tank.jpg",
  },
];

export default function Collection() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const q = gsap.utils.selector(root);
      const heads = q<HTMLElement>("[data-reveal]");
      const cards = q<HTMLElement>(`.${styles.card}`);
      const rules = q<SVGLineElement>(`.${styles.rule} line`);

      if (reduce) {
        gsap.set([heads, cards], { opacity: 1, y: 0 });
        gsap.set(rules, { drawSVG: "100%" });
        return;
      }

      // Header reveals as the section title crosses into view.
      gsap.from(heads, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: heads[0], start: "top 85%", once: true },
      });

      // Product cards reveal on scroll: each card lifts + fades while its
      // spec rule draws itself across the top.
      const grid = q<HTMLElement>(`.${styles.grid}`)[0];
      gsap.set(rules, { drawSVG: "0%" });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: grid, start: "top 80%", once: true },
      });

      tl.from(cards, {
        opacity: 0,
        y: 56,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.16,
      }).to(
        rules,
        {
          drawSVG: "100%",
          duration: 0.7,
          ease: "power2.inOut",
          stagger: 0.16,
        },
        0.15
      );
    },
    { scope: root }
  );

  return (
    <div ref={root} id="collection" className={styles.section}>
      <GridLines mode="scroll" columns={6} rows={2} />
      <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <div>
            <div
              data-reveal
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.24em",
                color: "#7A7A78",
                marginBottom: 18,
              }}
            >
              {"// COLLECTION"}
            </div>
            <div
              data-reveal
              className={oswald.className}
              style={{
                fontWeight: 700,
                fontSize: "clamp(32px,3.6vw,48px)",
                textTransform: "uppercase",
                color: "#F5F5F4",
              }}
            >
              The First Drop
            </div>
          </div>
          <div
            data-reveal
            style={{
              fontSize: 14,
              color: "#7A7A78",
              maxWidth: 340,
              lineHeight: 1.6,
            }}
          >
            Available Fall 2026.
          </div>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.id} className={styles.card}>
              <div className={styles.cardSpec}>
                <svg
                  className={styles.rule}
                  width="100%"
                  height="1"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="0.5"
                    x2="100"
                    y2="0.5"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                <div className={styles.specRow}>
                  <span>{`// ${product.index}`}</span>
                  <span>{product.sku}</span>
                </div>
              </div>

              <div className={styles.imageWrap}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1400px) 33vw, 445px"
                  className={styles.image}
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
                <span className={`${styles.tick} ${styles.tickTL}`} />
                <span className={`${styles.tick} ${styles.tickBR}`} />
              </div>

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className={oswald.className}
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    color: "#F2F2F0",
                  }}
                >
                  {product.name}
                </div>
                <div style={{ fontSize: 14, color: "#8C8C8C" }}>
                  {product.price}
                </div>
              </div>
              <div style={{ fontSize: 12, color: "#6E6E6E", marginTop: 4 }}>
                {product.detail}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
