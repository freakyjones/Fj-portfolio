"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Palette,
  Zap,
  Brain,
  Globe,
  Settings,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  skills: Skill[];
}

interface Tool {
  name: string;
  category: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 96 },
        { name: "JavaScript (ES6+)", level: 94 },
      ],
    },
    {
      title: "AI & Integration",
      icon: Brain,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "OpenAI API", level: 88 },
        { name: "LangChain", level: 85 },
        { name: "Python", level: 80 },
        { name: "ML Integration", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Prisma ORM", level: 88 },
        { name: "REST APIs", level: 93 },
      ],
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX Design", level: 87 },
        { name: "Responsive Design", level: 96 },
        { name: "Design Systems", level: 92 },
      ],
    },
  ];

  const tools: Tool[] = [
    { name: "React", category: "Frontend", level: "Expert" },
    { name: "TypeScript", category: "Language", level: "Expert" },
    { name: "Next.js", category: "Framework", level: "Expert" },
    { name: "Tailwind CSS", category: "Styling", level: "Expert" },
    { name: "Node.js", category: "Backend", level: "Advanced" },
    { name: "PostgreSQL", category: "Database", level: "Advanced" },
    { name: "Prisma", category: "ORM", level: "Advanced" },
    { name: "GitHub", category: "Version Control", level: "Expert" },
    { name: "Figma", category: "Design", level: "Advanced" },
    { name: "OpenAI", category: "AI", level: "Intermediate" },
    { name: "Vercel", category: "Deployment", level: "Advanced" },
    { name: "AWS", category: "Cloud", level: "Intermediate" },
  ];

  const achievements: Achievement[] = [
    {
      icon: TrendingUp,
      title: "Performance Expert",
      description: "Delivering apps with 95+ PageSpeed scores",
    },
    {
      icon: Globe,
      title: "Global Collaboration",
      description: "Managed projects across 5+ time zones",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Average delivery 20% faster than standard",
    },
  ];

  return (
    <section id="skills" className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
            A versatile skill set built through experience, continuous learning,
            and delivering projects across diverse domains.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border rounded-2xl transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-8 flex items-center gap-4">
                    <div
                      className={`rounded-xl p-3 ${category.bgColor} ${category.color}`}
                    >
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-foreground text-xl font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-foreground text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-primary text-xs font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.2,
                              delay: skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-card border-border rounded-2xl">
            <CardContent className="p-8">
              <div className="mb-10 text-center">
                <h3 className="text-foreground mb-3 flex items-center justify-center gap-2 text-2xl font-semibold">
                  <Settings className="text-primary h-6 w-6" />
                  Technology Stack
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Tools and technologies I use to bring ideas to life
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="bg-muted/50 border-border rounded-xl transition-all duration-300 hover:bg-muted hover:shadow">
                      <CardContent className="p-4 text-center">
                        <div className="text-foreground font-medium">
                          {tool.name}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {tool.category}
                        </div>
                        <Badge
                          variant={tool.level.toLowerCase() as any}
                          className="mt-2 text-xs"
                        >
                          {tool.level}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border group rounded-2xl text-center transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary/10 text-primary mb-6 inline-flex rounded-xl p-4 transition-transform duration-300 group-hover:scale-110">
                    <achievement.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-foreground mb-2 text-base font-semibold md:text-lg">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}