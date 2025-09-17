import { BookOpen, Globe2, Lightbulb, LucideIcon } from "lucide-react";

export interface Interest {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface Book {
  title: string;
  author: string;
  category: string;
}

export interface Insight {
  title: string;
  description: string;
  readTime: string;
  category: string;
}

export const interests: Interest[] = [
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "Understanding how geopolitical trends shape technology adoption and business strategies worldwide",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BookOpen,
    title: "Strategic Thinking",
    description:
      "Applying insights from strategy and global affairs to solve complex technical challenges",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description:
      "Combining diverse knowledge areas to develop innovative approaches to development problems",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

export const currentReads: Book[] = [
  { title: "The Art of War", author: "Sun Tzu", category: "Strategy" },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Anthropology",
  },
  {
    title: "The Innovator's Dilemma",
    author: "Clayton Christensen",
    category: "Business",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psychology",
  },
];

export const insights: Insight[] = [
  {
    title: "Technology & Geopolitics",
    description:
      "How global political shifts influence technology standards and digital infrastructure development.",
    readTime: "8 min read",
    category: "Analysis",
  },
  {
    title: "Remote Work Revolution",
    description:
      "The long-term implications of distributed teams on global talent markets and economic structures.",
    readTime: "6 min read",
    category: "Future of Work",
  },
  {
    title: "AI Ethics Across Cultures",
    description:
      "Exploring how different cultural values shape artificial intelligence development and deployment.",
    readTime: "10 min read",
    category: "Technology",
  },
];
