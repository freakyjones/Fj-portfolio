export interface Project {
  id: number;
  slug: string;
  title: string;
  intent: string;      
  performance: string; 
  ingestionSpec: string[]; 
  infrastructure: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "critical-minerals-dashboard",
    title: "OP_CRI_MINERALS_DASH",
    intent: "A high-performance strategic intelligence dashboard engineered for policymakers and supply chain analysts. It provides real-time geospatial mapping, production tracking, and predictive risk scoring for the global critical minerals supply chain. The architecture was designed from the ground up with strict, verifiable guardrails to seamlessly support autonomous AI agent contribution without accumulating technical debt.",
    performance: "Architected a highly modular, feature-isolated codebase utilizing React 19's concurrent rendering and aggressive route-level lazy-loading to optimize client-side performance. Engineered robust rendering pipelines for complex geoJSON datasets and interactive charts, while implementing strict Zod runtime boundary validation to maintain a constant 60 FPS and zero rendering crashes.",
    ingestionSpec: [
      "REACT_19",
      "TYPESCRIPT",
      "TAILWIND_CSS",
      "FRAMER_MOTION",
      "ZUSTAND",
      "ZOD",
      "RECHARTS",
      "REACT-LEAFLET",
      "SUPABASE"
    ],
    infrastructure: "VERCEL_EDGE // SUPABASE_RLS",
    liveUrl: "https://cri-minerals.vercel.app",
  },
  {
    id: 2,
    slug: "ai-weather-application",
    title: "OP_AI_WEATHER_NODE",
    intent: "Real-time weather aggregation pipeline augmented with an OpenAI LLM to provide contextual, predictive outfit recommendations.",
    performance: "Optimized tree-shaking and asset pipelines to deliver a hyper-lean 31 KiB production bundle, slashing Time to Interactive (TTI) on low-bandwidth mobile networks while executing fluid state transitions.",
    ingestionSpec: [
      "REACT_18",
      "VITE",
      "OPENAI_API",
      "OPENWEATHER"
    ],
    infrastructure: "VERCEL_STATIC",
    liveUrl: "https://weather-app-three-dusky-12.vercel.app",
  },
  {
    id: 3,
    slug: "job-hunt-agent",
    title: "OP_JOB_HUNT_AGENT",
    intent: "An end-to-end autonomous pipeline that discovers high-leverage job opportunities, dynamically tailors resumes using generative AI, and programmatically submits applications to maximize interview yield.",
    performance: "Architected a highly resilient, zero-cost automation engine that navigates complex web topologies and mitigates strict API quotas via intelligent model fallbacks, enabling the autonomous processing of targeted applications daily.",
    ingestionSpec: [
      "NEXT_JS",
      "TYPESCRIPT",
      "SUPABASE",
      "PLAYWRIGHT",
      "GEMINI_AI"
    ],
    infrastructure: "GITHUB_ACTIONS // VERCEL // SUPABASE_POSTGRES",
    liveUrl: "https://job-hunt-agent-dashboard.vercel.app",
  }
];

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string) => {
  return projects.filter((project) => project.slug !== currentSlug).slice(0, 2);
};
