import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClientPage from "./project-detail-client-page";

import type { Metadata } from "next";

/**
 * Generates static paths for each project slug at build time.
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "PROJECT_NOT_FOUND",
    };
  }

  return {
    title: `${project.title} // MANIFEST`,
    description: project.intent,
    openGraph: {
      title: `${project.title} | Abhilash Pandey`,
      description: project.intent,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // If no project matches the slug, render the 404 page.
  if (!project) {
    notFound();
  }

  return <ProjectDetailClientPage project={project} />;
}
