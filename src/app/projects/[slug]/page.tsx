import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClientPage from "./project-detail-client-page";

/**
 * Generates static paths for each project slug at build time.
 */
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug((await params).slug);

  // If no project matches the slug, render the 404 page.
  if (!project) {
    notFound();
  }

  return <ProjectDetailClientPage project={project} />;
}
