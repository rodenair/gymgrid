import type { Metadata } from "next";
import { oswald, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "GYM GRID — Engineered Discipline",
  description:
    "Performance apparel built on structure, not slogans. Every line, considered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
