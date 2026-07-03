"use client";

import { useState, type FormEvent } from "react";
import { oswald } from "@/lib/fonts";

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted" | "error">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("submitted");
  }

  return (
    <div
      id="join"
      style={{
        background: "#0A0A0A",
        padding: "150px 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.24em",
          color: "#7A7A78",
          marginBottom: 22,
        }}
      >
        // JOIN THE GRID
      </div>
      <div
        className={oswald.className}
        style={{
          fontWeight: 700,
          fontSize: "clamp(30px,4vw,46px)",
          textTransform: "uppercase",
          color: "#F5F5F4",
          maxWidth: 640,
          lineHeight: 1.15,
          marginBottom: 18,
        }}
      >
        Be first through the door.
      </div>
      <div
        style={{
          fontSize: 15,
          color: "#8C8C8C",
          maxWidth: 420,
          lineHeight: 1.7,
          marginBottom: 44,
        }}
      >
        Early access to drops, restocks, and nothing else.
      </div>

      {status === "submitted" ? (
        <div
          style={{
            fontSize: 13,
            letterSpacing: "0.08em",
            color: "#EDEDEC",
            width: "100%",
            maxWidth: 440,
            padding: "16px 4px",
            borderBottom: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          YOU&apos;RE ON THE LIST
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{ width: "100%", maxWidth: 440 }}
        >
          <div
            style={{
              display: "flex",
              gap: 0,
              width: "100%",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="EMAIL ADDRESS"
              aria-label="Email address"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                padding: "16px 4px",
                fontSize: 13,
                letterSpacing: "0.08em",
                color: "#F2F2F0",
              }}
            />
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#EDEDEC",
                padding: "16px 8px",
                cursor: "pointer",
              }}
            >
              JOIN →
            </button>
          </div>
          {status === "error" && (
            <div
              style={{
                fontSize: 12,
                color: "#B8B8B6",
                marginTop: 12,
                textAlign: "left",
              }}
            >
              Enter a valid email address.
            </div>
          )}
        </form>
      )}
    </div>
  );
}
