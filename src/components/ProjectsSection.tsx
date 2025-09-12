"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Analytics platform leveraging ML for actionable business insights, real-time data viz, and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: ["React", "TypeScript", "D3.js", "Python", "TensorFlow"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    impact: "40% increase in data-driven decisions",
  },
  {
    id: 2,
    title: "Modern E-Commerce Platform",
    description:
      "Full-stack e-commerce with advanced filtering, real-time inventory, and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    impact: "25% boost in conversion rates",
  },
  {
    id: 3,
    title: "Mobile Fitness Companion",
    description:
      "React Native app with AI workout recommendations, progress tracking, and social challenges.",
    image:
      "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: ["React Native", "Expo", "Firebase", "Node.js", "OpenAI"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    impact: "10K+ active users",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/40 px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-foreground mb-6 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            Selected projects showcasing modern web technologies, AI
            integration, and measurable business impact.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border group hover:shadow-primary/10 flex h-full flex-col overflow-hidden rounded-3xl border shadow-lg transition-all duration-300">
                <CardHeader className="relative p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={550}
                    height={256}
                  />
                  {project.featured && (
                    <Badge className="bg-primary/90 text-primary-foreground absolute top-4 left-4 flex items-center gap-1.5 border-0 text-xs backdrop-blur-sm">
                      <Star className="h-3 w-3" />
                      Featured
                    </Badge>
                  )}
                  <Badge className="bg-background/80 border-border absolute right-4 bottom-4 border text-xs backdrop-blur-sm">
                    {project.impact}
                  </Badge>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border bg-muted/50 text-muted-foreground rounded-full px-3 py-1 text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto flex gap-3 p-6 pt-0">
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                      Code
                    </a>
                  </Button>
                  <Button className="flex-1 rounded-xl" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye />
                      Live
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-card border-border mx-auto max-w-2xl rounded-3xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-foreground mb-4 text-xl font-bold">
                See More of My Work
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                Explore my complete portfolio on GitHub, including open-source
                contributions, experimental projects, and collaborative work.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl"
                asChild
              >
                <a
                  href="https://github.com/freakyjoenes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
