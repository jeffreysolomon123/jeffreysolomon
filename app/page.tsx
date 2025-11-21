import Image from "next/image";
import CardNav from "./components/CardNav";
import GlassHeader from "./components/GlassHeader";
import DarkVeil from "./components/DarkVeil";
import HeroSection from "./components/HeroSection";
import SocialFloat from "./components/SocialFloat";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden mybg">
      {/* Background */}

      {/* Header */}

      {/* Hero */}
      <HeroSection />
      <SocialFloat
        linkedin="https://linkedin.com/in/jeffreysolomon123"
        github="https://github.com/jeffreysolomon123"
        instagram="https://instagram.com/jefffffrey"
        youtube="https://www.youtube.com/@jeffreysolomon1107"
      />
    </main>
  );
}
