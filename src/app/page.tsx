import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/Hero";
import { Navigation } from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}
