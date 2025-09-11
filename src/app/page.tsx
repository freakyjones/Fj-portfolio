import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/Hero";
import { Navigation } from "@/components/NavBar";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  );
}
