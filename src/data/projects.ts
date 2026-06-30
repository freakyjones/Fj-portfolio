export interface Project {
  id: number;
  slug: string;
  title: string;
  function: string;      
  impact: string; 
  tech: string[]; 
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "critical-minerals-dashboard",
    title: "OP_CRI_MINERALS_DASH",
    function: "Strategic intelligence platform for high-performance, interactive geospatial mapping of global mineral reserves using agentic AI architectures.",
    impact: "Achieved seamless client-side filtering of massive geoJSON datasets with strict Zod runtime validation, yielding zero rendering crashes.",
    tech: [
      "REACT_19",
      "TYPESCRIPT",
      "RECHARTS",
      "REACT-LEAFLET",
      "ZOD"
    ],
    liveUrl: "https://cri-minerals.vercel.app",
  },
  {
    id: 2,
    slug: "nextjs-developer-portfolio",
    title: "OP_DEV_PORTFOLIO_NODE",
    function: "Production-ready full-stack portfolio demonstrating advanced React Server Components (RSC), SSR, and hybrid telemetry integrations.",
    impact: "Scored 100 on Lighthouse CI for core web vitals through optimized font loading and Turbopack compilation.",
    tech: [
      "NEXT_15",
      "TAILWIND_V4",
      "FRAMER_MOTION",
      "GRAPHQL"
    ],
    liveUrl: "https://fj-portfolio-zeta.vercel.app",
  },
  {
    id: 3,
    slug: "ai-weather-application",
    title: "OP_AI_WEATHER_NODE",
    function: "Real-time weather aggregation pipeline augmented with an OpenAI LLM to provide contextual, predictive outfit recommendations.",
    impact: "Minimized payload size to a 31 KiB bundle while executing complex fluid state transitions across multi-endpoint fetch sequences.",
    tech: [
      "REACT_18",
      "VITE",
      "OPENAI_API",
      "OPENWEATHER"
    ],
    liveUrl: "https://weather-app-three-dusky-12.vercel.app",
  }
];

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string) => {
  return projects.filter((project) => project.slug !== currentSlug).slice(0, 2);
};
