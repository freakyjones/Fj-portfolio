"use client";

import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Download, Copy, Image, Palette, Code2, FileText } from "lucide-react";
import { ComponentProps, useEffect, useState } from "react";

// Helper to get CSS variable values from the DOM
const getCssVariable = (variable: string) => {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};

// Helper component for export/copy buttons to reduce repetition
interface ExportButtonProps extends ComponentProps<typeof Button> {
  label: string;
  icon: React.ElementType;
}

const ExportButton = ({ label, icon: Icon, ...props }: ExportButtonProps) => (
  <Button {...props}>
    <Icon className={props.size === "lg" ? "mr-2 h-5 w-5" : "mr-2 h-4 w-4"} />
    {label}
  </Button>
);

// Asset Inventory and Export Utilities
export const AssetExporter = () => {
  const [designTokens, setDesignTokens] = useState({
    colors: {},
    spacing: {},
    typography: {
      fontFamily: "var(--font-geist-sans)",
    },
  });

  useEffect(() => {
    // This runs on the client after the component mounts
    // and the CSS variables are available.
    setDesignTokens({
      colors: {
        primary: getCssVariable("--primary"),
        secondary: getCssVariable("--secondary"),
        accent: getCssVariable("--accent"),
        background: getCssVariable("--background"),
        foreground: getCssVariable("--foreground"),
        muted: getCssVariable("--muted"),
        border: getCssVariable("--border"),
        card: getCssVariable("--card"),
      },
      spacing: {
        radius: getCssVariable("--radius"),
        "radius-sm": getCssVariable("--radius-sm"),
        "radius-md": getCssVariable("--radius-md"),
        "radius-lg": getCssVariable("--radius-lg"),
        "radius-xl": getCssVariable("--radius-xl"),
      },
      typography: {
        fontFamily: getCssVariable("--font-sans"),
      },
    });
  }, []);

  // Image Assets Inventory
  const imageAssets = [
    {
      name: "Professional Portrait",
      url: "https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTY3NDkyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      usage: "About section profile image",
      dimensions: "1080x1080",
      format: "JPG",
    },
    {
      name: "AI Dashboard Interface",
      url: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY3NDUxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      usage: "Project showcase - AI Analytics",
      dimensions: "1080x720",
      format: "JPG",
    },
    {
      name: "Modern Web Application",
      url: "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NTY3NjUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      usage: "Project showcase - E-commerce Platform",
      dimensions: "1080x720",
      format: "JPG",
    },
    {
      name: "Mobile App Design",
      url: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU2NzU1MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      usage: "Project showcase - Fitness App",
      dimensions: "1080x720",
      format: "JPG",
    },
  ];

  // Lucide Icons Used (these are code-based, not image files)
  const iconInventory = [
    "Code2",
    "Globe",
    "Brain",
    "Palette",
    "Database",
    "Zap",
    "ArrowDown",
    "Menu",
    "X",
    "GithubIcon",
    "ExternalLink",
    "Eye",
    "Star",
    "BookOpen",
    "Users",
    "Target",
    "TrendingUp",
    "Smartphone",
    "Settings",
    "Mail",
    "MapPin",
    "Calendar",
    "Coffee",
    "Heart",
  ];

  // SVG Patterns and Graphics
  const svgAssets = [
    {
      name: "Hero Grid Pattern",
      code: `<svg viewBox="0 0 100 100"> <defs> <pattern id="hero-grid" width="4" height="4" patternUnits="userSpaceOnUse"> <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"/> </pattern> </defs> <rect width="100" height="100" fill="url(#hero-grid)" /> </svg>`,
      usage: "Hero section background",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadAsJson = (data: any, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadDesignTokens = () => {
    const cssVariables = `:root {
 /* Colors */
 --primary: ${designTokens.colors.primary};
 --secondary: ${designTokens.colors.secondary};
 --accent: ${designTokens.colors.accent};
 --background: ${designTokens.colors.background};
 --foreground: ${designTokens.colors.foreground};
 --muted: ${designTokens.colors.muted};
 --border: ${designTokens.colors.border};

 /* Spacing */
 --radius: ${designTokens.spacing.radius};

 /* Typography */
 --font-family: '${designTokens.typography.fontFamily}', sans-serif;
 };`;
    const blob = new Blob([cssVariables], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design-tokens.css";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-background min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            Portfolio Asset Exporter
          </h1>
          <p className="text-muted-foreground text-lg">
            Export and download all design assets from your portfolio
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Design Tokens */}
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <Palette className="text-primary h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Design Tokens</h3>
                <p className="text-muted-foreground text-sm">
                  Colors, spacing, and typography system
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mb-4 grid grid-cols-4 gap-2">
                {Object.entries(designTokens.colors).map(([name, color]) => (
                  <div key={name} className="text-center">
                    <div
                      className="border-border mx-auto mb-2 h-12 w-12 rounded-xl border"
                      style={{ backgroundColor: color as string }}
                    />
                    <div className="text-muted-foreground font-mono text-xs">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <ExportButton
                  icon={Download}
                  label="JSON"
                  onClick={() =>
                    downloadAsJson(designTokens, "design-tokens.json")
                  }
                  className="flex-1"
                />
                <ExportButton
                  icon={FileText}
                  label="CSS"
                  onClick={downloadDesignTokens}
                  variant="outline"
                  className="flex-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Image Assets */}
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <Image className="text-accent h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Image Assets</h3>
                <p className="text-muted-foreground text-sm">
                  All images used in the portfolio
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {imageAssets.map((asset, index) => (
                <div
                  key={index}
                  className="border-border rounded-2xl border p-4"
                >
                  <div className="flex items-start gap-3">
                    <NextImage
                      src={asset.url}
                      alt={asset.usage}
                      className="h-16 w-16 rounded-xl object-cover"
                      width={parseInt(asset.dimensions.split("x")[0], 10) || 64}
                      height={
                        parseInt(asset.dimensions.split("x")[1], 10) || 64
                      }
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-medium">{asset.name}</h4>
                      <p className="text-muted-foreground mb-2 text-xs">
                        {asset.usage}
                      </p>
                      <div className="flex gap-2">
                        <ExportButton
                          icon={Copy}
                          label="Copy URL"
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(asset.url)}
                          className="text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <ExportButton
                icon={Download}
                label="Export All Image URLs"
                onClick={() => downloadAsJson(imageAssets, "image-assets.json")}
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* Icon Inventory */}
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <Code2 className="text-secondary h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Icon Inventory</h3>
                <p className="text-muted-foreground text-sm">
                  Lucide React icons used (code-based)
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                {iconInventory.map((icon) => (
                  <div
                    key={icon}
                    className="bg-muted rounded-lg p-2 text-center font-mono text-xs"
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <ExportButton
                icon={Copy}
                label="Copy Import Statement"
                onClick={() =>
                  copyToClipboard(
                    `import { ${iconInventory.join(", ")} } from 'lucide-react';`,
                  )
                }
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* SVG Assets */}
          <Card className="rounded-3xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <FileText className="text-primary h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">SVG Assets</h3>
                <p className="text-muted-foreground text-sm">
                  Custom SVG patterns and graphics
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {svgAssets.map((asset, index) => (
                <div
                  key={index}
                  className="border-border rounded-2xl border p-4"
                >
                  <h4 className="mb-2 font-medium">{asset.name}</h4>
                  <p className="text-muted-foreground mb-3 text-xs">
                    {asset.usage}
                  </p>
                  <div className="bg-muted overflow-x-auto rounded-lg p-3 font-mono text-xs">
                    <pre>
                      <code>{asset.code}</code>
                    </pre>
                  </div>
                  <ExportButton
                    icon={Copy}
                    label="Copy SVG Code"
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(asset.code)}
                    className="mt-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <Card className="mt-8 rounded-3xl">
          <CardContent className="p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">Complete Asset Package</h3>
            <p className="text-muted-foreground mb-6">
              Download everything you need to recreate this design
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <ExportButton
                icon={Download}
                label="Download Complete Package"
                onClick={() =>
                  downloadAsJson(
                    { designTokens, imageAssets, iconInventory, svgAssets },
                    "complete-asset-package.json",
                  )
                }
                size="lg"
                className="rounded-2xl"
              />
              <ExportButton
                icon={Copy}
                label="Copy Design Tokens"
                onClick={() =>
                  copyToClipboard(JSON.stringify(designTokens, null, 2))
                }
                variant="outline"
                size="lg"
                className="rounded-2xl"
              />
              <ExportButton
                icon={Image}
                label="Copy All Image URLs"
                onClick={() => {
                  const urls = imageAssets.map((asset) => asset.url).join("\n");
                  copyToClipboard(urls);
                }}
                variant="outline"
                size="lg"
                className="rounded-2xl"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssetExporter;
