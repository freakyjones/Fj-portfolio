import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility function", () => {
  it("merges standard class names correctly", () => {
    const result = cn("text-red-500", "bg-blue-500");
    expect(result).toContain("text-red-500");
    expect(result).toContain("bg-blue-500");
  });

  it("handles conditional class values correctly", () => {
    const isTrue = true;
    const isFalse = false;
    const result = cn("base-class", isTrue && "active-class", isFalse && "inactive-class");
    expect(result).toContain("base-class");
    expect(result).toContain("active-class");
    expect(result).not.toContain("inactive-class");
  });

  it("overrides conflicting tailwind classes correctly using twMerge rules", () => {
    const result = cn("px-2 py-2", "px-4");
    expect(result).toContain("px-4");
    expect(result).toContain("py-2");
    expect(result).not.toContain("px-2");
  });
});
