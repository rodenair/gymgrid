import styles from "./SocialStrip.module.css";

const placeholders = Array.from({ length: 6 }, (_, i) => i);

export default function SocialStrip() {
  return (
    <div id="social" className={styles.section}>
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
      <div className={styles.grid}>
        {placeholders.map((i) => (
          <div
            key={i}
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
          </div>
        ))}
      </div>
    </div>
  );
}
