import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Collection from "@/components/Collection";
import SpecMarquee from "@/components/SpecMarquee";
import Join from "@/components/Join";
import SocialStrip from "@/components/SocialStrip";
import Footer from "@/components/Footer";
import { inter } from "@/lib/fonts";

export default function Home() {
  return (
    <div
      className={inter.className}
      style={{
        background: "#0A0A0A",
        color: "#F2F2F0",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Nav />
      <Hero />
      <Philosophy />
      <Collection />
      <SpecMarquee />
      <Join />
      <SocialStrip />
      <Footer />
    </div>
  );
}
