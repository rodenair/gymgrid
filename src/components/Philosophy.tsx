import Image from "next/image";
import { oswald } from "@/lib/fonts";
import Reveal from "@/components/motion/Reveal";

export default function Philosophy() {
  return (
    <div
      id="philosophy"
      style={{
        position: "relative",
        background: "#0A0A0A",
        padding: "160px 48px",
        display: "grid",
        gridTemplateColumns: "0.95fr 1.05fr",
        gap: 80,
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Reveal style={{ position: "relative" }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.24em",
            color: "#7A7A78",
            marginBottom: 24,
          }}
        >
          // PHILOSOPHY
        </div>
        <div
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
          style={{
            fontSize: 16,
            lineHeight: 1.85,
            color: "#9E9E9C",
            maxWidth: 480,
          }}
        >
          No slogans. No noise. Just precision, engineered into every seam.
        </div>
      </Reveal>

      <Reveal
        delay={0.15}
        y={0}
        style={{
          position: "relative",
          background: "#000",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/assets/logo-icon.png"
          alt="GYM GRID monogram"
          width={280}
          height={286}
          style={{ width: "100%", maxWidth: 280, height: "auto" }}
        />
      </Reveal>
    </div>
  );
}
