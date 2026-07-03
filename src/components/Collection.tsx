import Image from "next/image";
import { oswald } from "@/lib/fonts";

const products = [
  {
    id: "tee",
    name: "Grid Tee",
    price: "$68",
    detail: "Heavyweight cotton",
    image: "/assets/product-tee.jpg",
  },
  {
    id: "hoodie",
    name: "Grid Hoodie",
    price: "$128",
    detail: "Brushed fleece",
    image: "/assets/product-hoodie.jpg",
  },
  {
    id: "tank",
    name: "Grid Tank",
    price: "$58",
    detail: "Lightweight cotton",
    image: "/assets/product-tank.jpg",
  },
];

export default function Collection() {
  return (
    <div
      id="collection"
      style={{
        position: "relative",
        background: "#111110",
        padding: "140px 48px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto" }}>
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
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.24em",
                color: "#7A7A78",
                marginBottom: 18,
              }}
            >
              // COLLECTION
            </div>
            <div
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
            style={{
              fontSize: 14,
              color: "#7A7A78",
              maxWidth: 340,
              lineHeight: 1.6,
            }}
          >
            Four foundational pieces. Available Fall 2026.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {products.map((product) => (
            <div key={product.id}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1400px) 33vw, 445px"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
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
              <div
                style={{ fontSize: 12, color: "#6E6E6E", marginTop: 4 }}
              >
                {product.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
