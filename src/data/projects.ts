export interface Project {
  id: number;
  slug: string;
  title: string;
  intent: string;      
  performance: string | string[]; 
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
    performance: [
      "Architected a decoupled, zero-leak frontend architecture leveraging React 19 concurrent features and asynchronous chunk-splitting, slashing initial script evaluation time.",
      "Engineered multi-layered telemetry pipelines using Zod runtime schemas to enforce deterministic boundary validation, ensuring zero client-side degradation during heavy geoJSON payload ingestion.",
      "Established isolated component contexts specifically designed to remain structurally resilient against automated agentic iterations and code generation."
    ],
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
    performance: [
      "Deployed a headless automation pipeline utilizing Playwright to programmatically traverse complex web state machines, dynamically bypassing strict DOM mutations.",
      "Orchestrated an intelligent LLM router tier featuring token-cost optimization hooks and programmatic model fallbacks (Gemini to alternative endpoints) to guarantee 100% operation uptime without quota breaches.",
      "Configured persistent system synchronization via Supabase Postgres triggers to maintain transactional consistency across multi-stage application workflows."
    ],
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
