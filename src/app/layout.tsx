import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

// ------------------------
// 2️⃣ Metadata (SSR only)
// ------------------------
export const metadata: Metadata = {
  title: "FJ App",
  description: "Hydration-safe + Hot Reload ready",
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
    <html lang="en">
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
