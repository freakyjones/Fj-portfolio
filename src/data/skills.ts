export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "FRONTEND",
    items: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion", "WebGL"]
  },
  {
    category: "RELIABILITY & TEST",
    items: ["Playwright E2E", "Jest / Vitest", "CI/CD Pipelines", "Lighthouse CI", "Error Boundaries"]
  },
  {
    category: "ARCHITECTURE & INFRA",
    items: ["Vercel Edge", "Docker", "Supabase", "State Management", "Agentic Workflows"]
  }
];
