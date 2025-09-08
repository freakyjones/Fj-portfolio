"use client";

import { motion } from "framer-motion";
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
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Globe,
    label: "Global Remote",
    description: "Cross-timezone collaboration",
    color: "text-primary",
    bgColor: "bg-primary/10",
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
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 lg:px-8"
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
      <div className="bg-primary/3 absolute top-1/4 right-1/4 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-accent/3 absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.02]"
        viewBox="0 0 100 100"
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
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#hero-grid)" />
      </svg>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="mb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        {/* Status Badge */}
        <div className="bg-card border-border mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm transition-shadow duration-300 hover:shadow-md">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-muted-foreground text-sm font-medium">
            Available for new opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
          Crafting Scalable
          <br />
          <span className="text-primary">Frontend Experiences</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg leading-relaxed font-normal md:text-xl">
          I specialize in React, TypeScript, and modern UI frameworks to deliver
          fast, user-centric web applications that drive business growth.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <CTAButton
          label="View My Work"
          onClick={() => scrollToSection("#projects")}
          primary
        />
        <CTAButton
          label="Get in Touch"
          onClick={() => scrollToSection("#contact")}
        />
      </motion.div>
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
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        size="lg"
        onClick={onClick}
        className={
          primary
            ? "bg-primary hover:bg-primary/90 text-primary-foreground min-w-[160px] rounded-2xl px-8 py-4 text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
            : "border-border text-foreground hover:bg-muted hover:border-primary/30 min-w-[160px] rounded-2xl border-2 px-8 py-4 text-base font-medium transition-all duration-300"
        }
      >
        {label}
      </Button>
    </motion.div>
  );
}

function HeroSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-20"
    >
      <div className="mb-10 text-center">
        <h3 className="text-foreground mb-3 text-xl font-semibold">
          Core Expertise
        </h3>
        <p className="text-muted-foreground text-sm">
          Technologies I use to bring ideas to life
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
        {keySkills.map((skill, index) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="group"
          >
            <Card className="bg-card/80 border-border/60 hover:border-border h-full rounded-2xl border shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function HeroStats() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mx-auto mb-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="group text-center">
          <motion.div
            className="text-primary mb-2 text-3xl font-bold transition-transform duration-300 group-hover:scale-110 lg:text-4xl"
            whileHover={{ scale: 1.1 }}
          >
            {stat.value}
          </motion.div>
          <div className="text-muted-foreground text-sm font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-muted-foreground/60 hover:text-muted-foreground cursor-pointer transition-colors"
        onClick={() => scrollToSection("#about")}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </motion.div>
  );
}
