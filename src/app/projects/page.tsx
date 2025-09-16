"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Eye,
  Star,
  Home,
  ChevronRight,
  Calendar,
  ExternalLink,
} from "lucide-react";

export default function AllProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const allTechStacks = projects.flatMap((project) => project.techStack);
  const uniqueTechnologies = new Set(allTechStacks);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header Section */}
      <section className="bg-muted/10 px-6 pt-24 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground mb-8 flex items-center gap-2 text-sm"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground h-auto p-0 transition-colors hover:bg-transparent"
              asChild
            >
              <Link href="/">
                <Home className="mr-1 h-4 w-4" />
                Home
              </Link>
            </Button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Projects</span>
          </motion.div>

          {/* Page Title and Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 text-center"
          >
            <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              All Projects
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
              A comprehensive collection of my work spanning web applications,
              mobile apps, blockchain solutions, and creative experiments. Each
              project represents a unique challenge and innovative solution.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-primary text-3xl font-bold">
                {projects.length}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                Total Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold">
                {featuredProjects.length}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                Featured Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-primary text-3xl font-bold">
                {uniqueTechnologies.size}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                Technologies
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Highlighting my most impactful and innovative work
            </p>
          </motion.div>

          <div className="mb-20 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Using the same card structure as the main grid for consistency */}
                <Card className="border-border bg-card group h-full overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Link href={`/projects/${project.slug}`}>
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          width={550}
                          height={256}
                        />
                        <div className="from-foreground/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-sm">
                            <Star className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-border bg-background/90 text-xs backdrop-blur-sm"
                          >
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-border bg-muted/50 text-muted-foreground px-2 py-1 text-xs"
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-foreground group-hover:text-primary mb-3 text-2xl font-bold transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-1 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-border bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground px-3 py-1 text-xs font-normal transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge
                          variant="outline"
                          className="border-border bg-muted/50 text-muted-foreground px-3 py-1 text-xs"
                        >
                          +{project.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-6 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-muted flex-1 rounded-2xl text-xs transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-secondary flex-1 rounded-2xl text-xs transition-all duration-300"
                      asChild
                    >
                      <Link href={`/projects/${project.slug}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="bg-muted/20 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-foreground text-3xl font-bold md:text-4xl">
              More Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete collection of my development work and experiments
            </p>
          </motion.div>
          {/* Responsive Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="border-border bg-card group h-full overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="p-0">
                    <Link href={`/projects/${project.slug}`}>
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={550}
                          height={256}
                          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="from-foreground/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Top badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {project.featured && (
                            <Badge className="bg-primary/90 text-primary-foreground border-0 text-xs backdrop-blur-sm">
                              <Star className="mr-1 h-2 w-2" />
                              Featured
                            </Badge>
                          )}
                          <Badge
                            variant="outline"
                            className="border-border bg-background/90 text-xs backdrop-blur-sm"
                          >
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  </CardHeader>

                  <CardContent className="flex-1 p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-border bg-muted/50 text-muted-foreground px-2 py-1 text-xs"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-foreground group-hover:text-primary mb-3 line-clamp-2 font-bold transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack - show only first 3 */}
                    <div className="mb-4 flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-border bg-muted/50 text-muted-foreground rounded-xl px-2 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-border bg-muted/50 text-muted-foreground rounded-xl px-2 py-1 text-xs"
                        >
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2 p-6 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-muted flex-1 rounded-2xl text-xs transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-3 w-3" />
                        GitHub
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-secondary flex-1 rounded-2xl text-xs transition-all duration-300"
                      asChild
                    >
                      <Link href={`/projects/${project.slug}`}>
                        <Eye className="mr-1 h-3 w-3" />
                        Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
