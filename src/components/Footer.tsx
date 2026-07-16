import Image from "next/image";
import { oswald } from "@/lib/fonts";
import styles from "./Footer.module.css";

const shopLinks = [
  { href: "#collection", label: "Collection" },
  { href: "#", label: "Size Guide" },
];

const brandLinks = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#social", label: "Journal" },
];

const connectLinks = [
  { href: "#", label: "Instagram" },
  { href: "#join", label: "Email List" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.14em",
          color: "#5c5c5c",
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: 13,
              color: "#9E9E9C",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 18,
            }}
          >
            <div style={{ width: 28, height: 29, position: "relative" }}>
              <Image
                src="/assets/logo-icon.png"
                alt="GYM GRID"
                fill
                sizes="28px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              className={oswald.className}
              style={{
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "0.04em",
                color: "#F5F5F4",
              }}
            >
              GYM GRID
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#6E6E6E",
              letterSpacing: "0.1em",
            }}
          >
            ENGINEERED DISCIPLINE
          </div>
        </div>

        <FooterColumn title="SHOP" links={shopLinks} />
        <FooterColumn title="BRAND" links={brandLinks} />
        <FooterColumn title="CONNECT" links={connectLinks} />
      </div>

      <div className={styles.bottom}>
        <div style={{ fontSize: 11, color: "#5c5c5c" }}>
          © 2026 GYM GRID. All rights reserved.
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#5c5c5c",
            letterSpacing: "0.08em",
          }}
        >
          {"// GRID.001"}
        </div>
      </div>
    </div>
  );
}
