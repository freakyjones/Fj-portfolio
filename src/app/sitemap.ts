import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getLogs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://fj-portfolio-zeta.vercel.app";

  const baseRoutes = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/logs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/assets`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const logRoutes = getLogs().map((log) => ({
    url: `${siteUrl}/logs/${log.slug}`,
    lastModified: new Date(log.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...baseRoutes, ...projectRoutes, ...logRoutes];
}
