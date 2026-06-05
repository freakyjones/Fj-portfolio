import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  it("renders with children correctly", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Button variant="outline">Outline Button</Button>);
    let buttonElement = screen.getByRole("button", { name: /outline button/i });
    expect(buttonElement.className).toContain("border");

    rerender(<Button variant="destructive">Destructive Button</Button>);
    buttonElement = screen.getByRole("button", { name: /destructive button/i });
    expect(buttonElement.className).toContain("bg-destructive");
  });

  it("handles clicks correctly", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    const buttonElement = screen.getByRole("button", { name: /clickable/i });

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders custom element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="https://example.com">Link Button</a>
      </Button>
    );

    // Should render anchor link instead of button
    const linkElement = screen.getByRole("link", { name: /link button/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe("A");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  it("disables the button when disabled attribute is passed", () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole("button", { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();
  });
});
