import React from "react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock framer-motion globally to bypass animation rendering cycles in tests
vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  
  const mockElements = ["div", "nav", "button", "span", "p", "h1", "h2", "h3", "h4", "a"];
  const mMock: Record<string, any> = {};
  const motionMock: Record<string, any> = {};

  mockElements.forEach((element) => {
    // Create a mock component that filters out animation-specific attributes
    const MockComponent = React.forwardRef(({
      children,
      initial,
      animate,
      transition,
      variants,
      whileHover,
      whileTap,
      whileInView,
      viewport,
      exit,
      ...props
    }: any, ref) => {
      return React.createElement(element, { ...props, ref }, children);
    });
    MockComponent.displayName = `Mock${element}`;
    
    mMock[element] = MockComponent;
    motionMock[element] = MockComponent;
  });

  return {
    ...actual,
    m: {
      ...actual.m,
      ...mMock,
    },
    motion: {
      ...actual.motion,
      ...motionMock,
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    LazyMotion: ({ children }: { children: React.ReactNode }) => children,
  };
});
