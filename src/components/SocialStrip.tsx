import Reveal from "@/components/motion/Reveal";

const placeholders = Array.from({ length: 6 }, (_, i) => i);

export default function SocialStrip() {
  return (
    <div
      id="social"
      style={{
        background: "#0A0A0A",
        padding: "0 48px 140px",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 36,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.24em",
            color: "#7A7A78",
          }}
        >
          // @GYMGRID
        </div>
        <a
          href="#"
          style={{
            fontSize: 12,
            color: "#8C8C8C",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          FOLLOW ON INSTAGRAM →
        </a>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 4,
        }}
      >
        {placeholders.map((i) => (
          <Reveal
            key={i}
            delay={i * 0.06}
            y={16}
            style={{
              width: "100%",
              aspectRatio: "1/1",
              background: "#111110",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                color: "#4a4a48",
                textTransform: "uppercase",
              }}
            >
              Coming soon
            </span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
