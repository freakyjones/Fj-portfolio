import HeroSection from "@/components/Hero";
import { Navigation } from "@/components/NavBar";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/AboutSection"));
const SkillsSection = dynamic(() =>
  import("@/components/SkillsSection").then((mod) => mod.SkillsSection),
);
const ProjectsSection = dynamic(() =>
  import("@/components/ProjectsSection").then((mod) => mod.ProjectsSection),
);
const MyInsights = dynamic(() =>
  import("@/components/MyInsights").then((mod) => mod.MyInsights),
);
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <ProjectsSection /> */}
        {/* <MyInsights /> */}
        <ContactSection />
      </main>
    </>
  );
}
