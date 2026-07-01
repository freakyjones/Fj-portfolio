export interface CommsLink {
  id: string;
  label: string;
  url: string;
}

export interface CognitiveStream {
  id: string;
  type: "READING" | "LEARNING";
  title: string;
  progress?: number; // 0-100
  statusText?: string;
}

export const commsData: CommsLink[] = [
  { id: "linkedin", label: "LINKEDIN", url: "https://www.linkedin.com/in/abhilash-pandey-0b45a1185" },
  { id: "github", label: "GITHUB", url: "https://github.com/freakyjones" },
  { id: "email", label: "EMAIL", url: "mailto:abhilashpandey8170@gmail.com" },
];

export const cognitiveStreams: CognitiveStream[] = [
  {
    id: "stream-1",
    type: "READING",
    title: "Linear Algebra: Matrix Transformations & Eigenvectors",
    progress: 20,
  },
  {
    id: "stream-2",
    type: "READING",
    title: "System Design: Distributed Data-Intensive Applications",
    progress: 30,
  },
  {
    id: "stream-3",
    type: "LEARNING",
    title: "Optimizing React 19 concurrent features on Edge runtimes",
    statusText: "ACTIVE",
  }
];
