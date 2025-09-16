export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  heroImage: string;
  image: string; // For the project list card
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  impact: string;
  highlights: string[];
  screenshots: {
    url: string;
    title: string;
    description: string;
  }[];
  impactDetails: {
    metric: string;
    details: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-analytics-dashboard",
    title: "AI-Powered Analytics Dashboard",
    subtitle: "Advanced Business Intelligence Platform",
    description:
      "A comprehensive analytics platform leveraging machine learning to provide actionable business insights with real-time data visualization and predictive analytics capabilities. The platform serves enterprise clients with advanced reporting needs and real-time decision-making requirements.",
    category: "Web Application",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: [
      "React",
      "TypeScript",
      "D3.js",
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/freakyjoenes",
    liveUrl: "https://github.com/freakyjoenes",
    featured: true,
    impact: "40% increase in data-driven decisions",
    highlights: [
      "Real-time data processing and visualization",
      "Machine learning-powered predictive analytics",
      "Customizable dashboard widgets and layouts",
      "Advanced user role management and permissions",
      "Export capabilities for reports and charts",
      "Mobile-responsive design for on-the-go access",
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        title: "Main Dashboard View",
        description: "Overview of key metrics and KPIs",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        title: "Advanced Analytics",
        description: "Deep-dive analytics with predictive models",
      },
      {
        url: "https://images.unsplash.com/photo-1585229259079-05ab82f93c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
        title: "Code & Configuration",
        description: "Custom report builder interface",
      },
    ],
    impactDetails: {
      metric: "40% increase in data-driven decisions",
      details: [
        "Reduced report generation time by 75%",
        "Improved decision-making speed by 60%",
        "Increased user engagement by 85%",
        "Generated $2M+ in cost savings",
      ],
    },
  },
  {
    id: 2,
    slug: "modern-ecommerce-platform",
    title: "Modern E-Commerce Platform",
    subtitle: "Scalable and Performant E-commerce Solution",
    description:
      "Full-stack e-commerce with advanced filtering, real-time inventory, and seamless checkout. Built with a focus on performance and user experience to maximize conversion rates.",
    category: "E-commerce",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    image:
      "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/freakyjoenes",
    liveUrl: "https://github.com/freakyjoenes",
    featured: true,
    impact: "25% boost in conversion rates",
    highlights: [
      "Server-side rendering for optimal SEO",
      "Stripe integration for secure payments",
      "Advanced product search and filtering",
      "Admin dashboard for managing products and orders",
    ],
    screenshots: [],
    impactDetails: {
      metric: "25% boost in conversion rates",
      details: [
        "Increased average order value by 15%",
        "Reduced cart abandonment by 30%",
      ],
    },
  },
  {
    id: 3,
    slug: "mobile-fitness-companion",
    title: "Mobile Fitness Companion",
    subtitle: "AI-Powered Personal Trainer in Your Pocket",
    description:
      "React Native app with AI workout recommendations, progress tracking, and social challenges. Designed to keep users motivated and engaged on their fitness journey.",
    category: "Mobile App",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    image:
      "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: ["React Native", "Expo", "Firebase", "Node.js", "OpenAI"],
    githubUrl: "https://github.com/freakyjoenes",
    liveUrl: "https://github.com/freakyjoenes",
    featured: false,
    impact: "10K+ active users",
    highlights: [
      "Personalized workout plans using OpenAI",
      "Real-time progress tracking and analytics",
      "Social features to challenge friends",
      "Gamified achievements and rewards system",
    ],
    screenshots: [],
    impactDetails: {
      metric: "10K+ active users",
      details: [
        "Achieved 4.8-star rating on app stores",
        "Featured as 'App of the Day'",
      ],
    },
  },
  {
    id: 4,
    slug: "blockchain-trading-interface",
    title: "Blockchain Trading Interface",
    subtitle: "Decentralized Finance Trading Platform",
    description:
      "Decentralized finance platform with real-time crypto trading, portfolio management, and advanced charting tools for professional traders.",
    category: "Blockchain",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1748609664795-11546ad62000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    image:
      "https://images.unsplash.com/photo-1748609664795-11546ad62000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: ["React", "Web3.js", "Solidity", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/freakyjoenes",
    liveUrl: "https://github.com/freakyjoenes",
    featured: false,
    impact: "$2M+ trading volume",
    highlights: [],
    screenshots: [],
    impactDetails: { metric: "", details: [] },
  },
  {
    id: 5,
    slug: "saas-project-management-tool",
    title: "SaaS Project Management Tool",
    subtitle: "Collaborative Project Management Platform",
    description:
      "Enterprise-grade project management platform with team collaboration, time tracking, and automated reporting features.",
    category: "SaaS",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    image:
      "https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    techStack: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
    githubUrl: "https://github.com/freakyjoenes",
    liveUrl: "https://github.com/freakyjoenes",
    featured: false,
    impact: "300+ teams using daily",
    highlights: [],
    screenshots: [],
    impactDetails: { metric: "", details: [] },
  },
];

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string) => {
  return projects.filter((project) => project.slug !== currentSlug).slice(0, 2);
};
