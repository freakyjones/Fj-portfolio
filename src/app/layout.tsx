import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// ------------------------
// 1️⃣ Google Fonts
// ------------------------
export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteConfig = {
  name: "Abhilsh Pandey | Software Engineer",
  description:
    "A personal portfolio of John Doe, a passionate software engineer specializing in building modern web applications with React, Next.js, and TypeScript.",
  url: "https://your-domain.com", // Replace with your actual domain
  ogImage: "https://your-domain.com/og-image.png", // Replace with your OG image URL
  keywords: [
    "Portfolio",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  author: "Abhilash Pandey",
};

// ------------------------
// 2️⃣ Metadata (SSR only)
// ------------------------
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@your_twitter_handle", // Replace with your Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// ------------------------
// 3️⃣ RootLayout
// ------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
