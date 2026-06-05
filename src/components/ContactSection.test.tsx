import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactSection from "./ContactSection";

// Mock sonner toast
vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("ContactSection component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  it("renders form fields and contact info cards correctly", () => {
    render(<ContactSection />);
    
    // Verify info cards render
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("abhilashpandey8170@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Availability")).toBeInTheDocument();

    // Verify form elements render
    expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message \*/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("displays validation errors on invalid inputs", async () => {
    render(<ContactSection />);
    const submitButton = screen.getByRole("button", { name: /send message/i });

    // Submit without input values
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Name must be at least 2 characters.")).toBeInTheDocument();
      expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
      expect(screen.getByText("Subject must be at least 5 characters.")).toBeInTheDocument();
      expect(screen.getByText("Message must be at least 10 characters.")).toBeInTheDocument();
    });
  });

  it("displays custom email validation errors", async () => {
    render(<ContactSection />);
    
    const emailInput = screen.getByLabelText(/email \*/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    
    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    });
  });

  it("submits the form data correctly and calls api endpoint", async () => {
    // Mock successful fetch response
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, message: "Email sent successfully!" }),
    });

    render(<ContactSection />);

    // Fill the inputs
    fireEvent.change(screen.getByLabelText(/name \*/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/email \*/i), { target: { value: "john.doe@example.com" } });
    fireEvent.change(screen.getByLabelText(/subject \*/i), { target: { value: "Project Inquiry" } });
    fireEvent.change(screen.getByLabelText(/message \*/i), {
      target: { value: "Hello, this is a valid test message with more than 10 characters." },
    });

    // Click submit
    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "John Doe",
            email: "john.doe@example.com",
            subject: "Project Inquiry",
            message: "Hello, this is a valid test message with more than 10 characters.",
          }),
        })
      );
    });
  });
});
