"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, Brain, Code2, LucideIcon } from "lucide-react";
import CountUp from "react-countup";

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface Stat {
  label: string;
  value: number;
}

export default function AboutSection() {
  const keywords = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "AI Integration",
    "Global Remote",
    "User Experience",
    "Performance Optimization",
    "Modern Architecture",
  ];

  const highlights: Highlight[] = [
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "Experience working with international teams across different time zones and cultures",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Leveraging artificial intelligence to enhance development workflows and user experiences",
      color: "text-accent",
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description:
        "Building scalable, maintainable applications with modern development practices",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Staying ahead of technology trends through constant skill development and research",
      color: "text-primary",
    },
  ];

  const stats: Stat[] = [
    { label: "Projects Completed", value: 25 },
    { label: "Years Experience", value: 1.5 },
    { label: "Global Clients", value: 5 },
  ];

  return (
    <section id="about" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            A passionate developer dedicated to creating exceptional digital
            experiences through innovative technology and thoughtful design
          </p>
        </motion.div>

        <div className="mb-20 grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border overflow-hidden rounded-3xl shadow-lg">
              <CardContent className="p-8 lg:p-10">
                {/* Profile Info */}
                <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row">
                  <div className="relative">
                    <div className="bg-primary/20 absolute inset-0 rounded-3xl blur-sm"></div>
                    <Image
                      src="https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTY3NDkyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Freaky Jones - Frontend Engineer"
                      className="relative h-28 w-28 rounded-3xl object-cover shadow-lg"
                      width={112}
                      height={112}
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-foreground mb-2 text-2xl font-bold">
                      Freaky Jones
                    </h3>
                    <p className="text-primary text-lg font-medium">
                      Frontend Engineer & AI Enthusiast
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-2 sm:justify-start">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-muted-foreground text-sm">
                        Available for new opportunities
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio Paragraphs */}
                <div className="text-muted-foreground space-y-6 leading-relaxed">
                  <p>
                    I'm a passionate frontend engineer who thrives at the
                    intersection of creativity and technology. My approach
                    combines technical excellence with design thinking to create
                    user experiences that are both beautiful and highly
                    functional.
                  </p>

                  <p>
                    With a deep appreciation for clean code and modern
                    development practices, I specialize in building scalable
                    applications using React, TypeScript, and cutting-edge AI
                    technologies. My global remote experience has taught me the
                    value of clear communication and collaborative
                    problem-solving.
                  </p>

                  <p>
                    Beyond coding, I'm an avid reader of geopolitics and
                    strategy, which gives me a unique perspective on how
                    technology shapes our world. This broader view helps me
                    build solutions that consider both immediate user needs and
                    long-term impact.
                  </p>
                </div>

                {/* Stats Counters */}
                <motion.div
                  className="mt-10 grid grid-cols-3 gap-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-primary text-3xl font-bold lg:text-4xl">
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          decimals={stat.value % 1 !== 0 ? 1 : 0}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                        {stat.label.includes("Projects") ? "+" : ""}
                      </div>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border group rounded-3xl transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`bg-muted rounded-2xl p-3 ${highlight.color} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <highlight.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-foreground mb-2 text-lg font-semibold">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-foreground mb-8 text-2xl font-semibold">
            Key Expertise
          </h3>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
            {keywords.map((keyword, index) => (
              <motion.div
                key={keyword}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              > 
                <Badge variant="skill">{keyword}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
