import Image from "next/image";
import CardNav from "./components/CardNav";
import GlassHeader from "./components/GlassHeader";
import DarkVeil from "./components/DarkVeil";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden mybg">
      {/* Background */}

      {/* Header */}
      <GlassHeader brand="Jeffrey Solomon" />

      {/* Hero */}
      <HeroSection />
    </main>
  );
}
