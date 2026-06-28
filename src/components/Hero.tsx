"use client";

import { m } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowDown, Code2, Zap, Globe, Palette } from "lucide-react";

interface Skill {
  icon: React.ElementType;
  label: string;
  description: string;
  color: string;
  bgColor: string;
}

const keySkills: Skill[] = [
  {
    icon: Code2,
    label: "React & Next.js",
    description: "Modern component architecture",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    label: "TypeScript",
    description: "Type-safe development",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Palette,
    label: "UI/UX Design",
    description: "User-centered interfaces",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    label: "Global Remote",
    description: "Cross-timezone collaboration",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) element.scrollIntoView({ behavior: "smooth" });
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 lg:px-8"
    >
      {/* 🌌 Background Layer */}
      <HeroBackground />

      {/* 🚀 Foreground Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <HeroContent />
        <HeroSkills />
        <HeroStats />
        <ScrollIndicator />
      </div>
    </section>
  );
}

/* ------------------------
 * 🔹 Subcomponents
 * ------------------------ */

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Aurora gradient-mesh: drifting Electric Clay + Ghost Mint blobs */}
      <div className="aurora-a bg-primary/25 absolute -top-32 right-[10%] h-[34rem] w-[34rem] rounded-full blur-[120px]" />
      <div className="aurora-b bg-accent/15 absolute top-1/3 -left-24 h-[28rem] w-[28rem] rounded-full blur-[120px]" />
      <div className="aurora-c bg-secondary/20 absolute bottom-[-8rem] left-1/2 h-[30rem] w-[30rem] rounded-full blur-[130px]" />

      {/* Fine grid for engineered precision */}
      <svg
        className="text-foreground absolute inset-0 h-full w-full opacity-[0.04]"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 4 0 L 0 0 0 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.25"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#hero-grid)" />
      </svg>

      {/* Film grain for depth */}
      <div className="grain-overlay absolute inset-0 opacity-[0.06] mix-blend-overlay" />

      {/* Vignette so content stays legible over the aurora */}
      <div className="from-background/0 via-background/0 to-background absolute inset-0 bg-gradient-to-b" />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="mb-16 text-center">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        {/* Status Badge */}
        <div className="border-border bg-card/60 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm backdrop-blur-md transition-shadow duration-300 hover:shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
          </span>
          <span className="text-muted-foreground text-sm font-medium">
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-foreground mb-6 text-5xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-7xl">
          Crafting Scalable
          <br />
          <span className="from-primary via-primary to-accent bg-gradient-to-r bg-clip-text text-transparent">
            Frontend Experiences
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-normal md:text-xl">
          I specialize in <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span>, and modern
          UI frameworks to deliver fast, user-centric web applications that drive{" "}
          <span className="text-primary font-medium">business growth</span>.
        </p>
      </m.div>

      {/* CTA Buttons */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <CTAButton
          label="Let's Work Together"
          onClick={() => scrollToSection("#contact")}
          primary
        />
        <CTAButton label="About Me" onClick={() => scrollToSection("#about")} />
      </m.div>
    </div>
  );
}

function CTAButton({
  label,
  onClick,
  primary,
}: {
  label: string;
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        size="lg"
        onClick={onClick}
        className={
          primary
            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/30 hover:shadow-primary/40 min-w-[180px] rounded-2xl px-8 py-6 text-base font-semibold shadow-lg transition-all duration-300"
            : "border-border text-foreground hover:border-primary/40 hover:bg-card min-w-[180px] rounded-2xl border-2 bg-transparent px-8 py-6 text-base font-medium transition-all duration-300"
        }
      >
        {label}
      </Button>
    </m.div>
  );
}

function HeroSkills() {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-20"
    >
      <div className="mb-10 text-center">
        <h3 className="font-display text-foreground mb-3 text-xl font-semibold">
          Core Expertise
        </h3>
        <p className="text-muted-foreground text-sm">
          Technologies I use to bring ideas to life
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
        {keySkills.map((skill, index) => (
          <m.div
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group"
          >
            <Card className="bg-card/70 border-border hover:border-primary/50 hover:shadow-primary/10 h-full rounded-2xl border shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex rounded-xl p-3 ${skill.bgColor} ${skill.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <skill.icon className="h-6 w-6" />
                </div>
                <h4 className="text-foreground mb-2 text-sm font-semibold">
                  {skill.label}
                </h4>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </div>
    </m.div>
  );
}

function HeroStats() {
  const stats = [
    { value: "1.5", label: "Years Experience" },
    { value: "2+", label: "Projects Delivered" },
    { value: "100%", label: "Response Rate" },
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="group text-center">
          <m.div
            className="font-display text-primary mb-2 text-4xl font-bold transition-transform duration-300 group-hover:scale-110 lg:text-5xl"
            whileHover={{ scale: 1.1 }}
          >
            {stat.value}
          </m.div>
          <div className="text-muted-foreground text-sm font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </m.div>
  );
}

function ScrollIndicator() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
    >
      <m.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-muted-foreground/60 hover:text-primary cursor-pointer transition-colors"
        onClick={() => scrollToSection("#about")}
      >
        <ArrowDown className="h-6 w-6" />
      </m.div>
    </m.div>
  );
}
