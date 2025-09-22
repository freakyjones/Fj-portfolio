"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
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
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex flex-1 flex-col"
                >
                  <CardHeader className="relative p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={550}
                      height={256}
                    />
                    {project.featured && (
                      <Badge className="bg-primary/90 text-primary-foreground absolute top-4 left-4 flex items-center gap-1.5 border-0 backdrop-blur-sm">
                        <Star className="h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                    <Badge className="border-border bg-background/80 absolute right-4 bottom-4 border text-xs backdrop-blur-sm">
                      {project.impact}
                    </Badge>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col p-6">
                    <h3
                      className="text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors"
                      aria-level={3}
                      role="heading"
                    >
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
                </Link>
                <CardFooter className="mt-auto flex gap-3 p-6 pt-0">
                  <Link href={`/projects/${project.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full rounded-xl">
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </Link>
                  <Button className="flex-1 rounded-xl" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                      Live Demo
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
                <Link href="/projects">
                  <ExternalLink />
                  View All Projects
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
