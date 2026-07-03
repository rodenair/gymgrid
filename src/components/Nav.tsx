import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { accentText } from "@/lib/theme";
import Reveal from "@/components/motion/Reveal";

const navLinks = [
  { href: "#collection", label: "COLLECTION" },
  { href: "#philosophy", label: "PHILOSOPHY" },
  { href: "#social", label: "JOURNAL" },
];

export default function Nav() {
  return (
    <Reveal
      y={-12}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 48px",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
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

      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
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

      <a
        href="#join"
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: "#0A0A0A",
          background: "#EDEDEC",
          padding: "11px 22px",
          textDecoration: "none",
        }}
      >
        JOIN
      </a>
    </Reveal>
  );
}
