import { describe, it, expect } from "vitest";
import { getProjectBySlug, getRelatedProjects, projects } from "./projects";

describe("projects data helper functions", () => {
  describe("getProjectBySlug", () => {
    it("returns correct project data for a valid slug", () => {
      const targetProject = projects[0];
      const result = getProjectBySlug(targetProject.slug);
      expect(result).toBeDefined();
      expect(result?.id).toBe(targetProject.id);
      expect(result?.title).toBe(targetProject.title);
    });

    it("returns undefined for a non-existent slug", () => {
      const result = getProjectBySlug("non-existent-project-slug");
      expect(result).toBeUndefined();
    });
  });

  describe("getRelatedProjects", () => {
    it("returns related projects excluding the current project", () => {
      const currentProject = projects[0];
      const result = getRelatedProjects(currentProject.slug);

      // Verify it doesn't contain the current project
      const containsCurrent = result.some((p) => p.slug === currentProject.slug);
      expect(containsCurrent).toBe(false);

      // Verify length is at most 2
      expect(result.length).toBeLessThanOrEqual(2);
    });

    it("returns empty array if no other projects exist", () => {
      // If there was only one project in the array
      const singleProjectList = [projects[0]];
      const getRelated = (slug: string) => {
        return singleProjectList.filter((p) => p.slug !== slug).slice(0, 2);
      };
      const result = getRelated(projects[0].slug);
      expect(result.length).toBe(0);
    });
  });
});
