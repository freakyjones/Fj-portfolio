"use client";

import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Eye,
  Star,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

interface ProjectClientPageProps {
  project: Project;
}

export default function ProjectDetailClientPage({
  project,
}: ProjectClientPageProps) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header Hero Section */}
      <section className="bg-muted/10 relative px-6 pt-24 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted rounded-2xl transition-all duration-300"
              asChild
            >
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            {project.featured && (
              <div className="border-border bg-card mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm">
                <Star className="text-primary h-4 w-4" />
                <span className="text-muted-foreground text-sm font-medium">
                  Featured Project
                </span>
              </div>
            )}

            <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="text-muted-foreground font-normal md:text-2xl">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1200}
              height={600}
              className="h-[400px] w-full object-cover md:h-[500px]"
            />
            <div className="from-foreground/20 absolute inset-0 bg-gradient-to-t to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Overview & Screenshots */}
            <div className="space-y-12 lg:col-span-2">
              {/* Overview Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-foreground mb-6 text-3xl font-bold">
                  About this Project
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-foreground text-xl font-semibold">
                    Key Features & Highlights
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {project.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Screenshots Gallery */}
              {project.screenshots.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-foreground mb-8 text-2xl font-bold">
                    Project Screenshots
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        className="group cursor-pointer"
                      >
                        <Card className="bg-card border-border group h-full overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
                          <CardHeader className="p-0">
                            <div className="relative overflow-hidden">
                              <Image
                                src={screenshot.url}
                                alt={screenshot.title}
                                width={400}
                                height={300}
                                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="from-foreground/40 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                          </CardHeader>
                          <CardContent className="p-4">
                            <h4 className="text-foreground mb-1 text-sm font-semibold">
                              {screenshot.title}
                            </h4>
                            <p className="text-muted-foreground text-xs">
                              {screenshot.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border rounded-3xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-foreground mb-4 text-xl font-semibold">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-border bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-xl px-3 py-1 text-xs font-normal transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border rounded-3xl shadow-lg">
                  <CardContent className="space-y-3 p-6">
                    <h3 className="text-foreground mb-4 text-xl font-semibold">
                      Project Links
                    </h3>

                    <Button
                      size="sm"
                      className="bg-primary hover:bg-secondary text-primary-foreground w-full rounded-2xl transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-muted w-full rounded-2xl transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Impact Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border rounded-3xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-foreground mb-4 text-xl font-semibold">
                      Impact & Results
                    </h3>

                    <div className="mb-4 text-center">
                      <div className="text-primary mb-1 text-2xl font-bold">
                        {project.impactDetails.metric}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        Primary Impact
                      </div>
                    </div>

                    <div className="space-y-2">
                      {project.impactDetails.details.map((detail, index) => (
                        <div
                          key={index}
                          className="text-muted-foreground flex items-center gap-2 text-sm"
                        >
                          <TrendingUp className="text-primary h-3 w-3 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
