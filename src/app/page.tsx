import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/Hero";
import { Navigation } from "@/components/NavBar";
import { MyInsights } from "@/components/MyInsights";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("@components/ContactSection"));

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <MyInsights />
        <ContactSection />
      </main>
    </>
  );
}
