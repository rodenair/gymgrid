import Image from "next/image";
import { oswald } from "@/lib/fonts";
import { accentText } from "@/lib/theme";

export default function Hero() {
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
          Engineered
          <br />
          Discipline
        </div>
        <div
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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
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
