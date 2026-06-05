---
trigger: always_on
---

# UI Component Styling Discipline Rules

Whenever you create, modify, or refactor any UI component in this project, you MUST strictly adhere to the following styling conventions.

## 1. Tailwind CSS v4 & Semantic Colors
*   **NO Hardcoded CSS Colors**: You are strictly prohibited from using raw Tailwind color classes like `bg-zinc-800`, `text-slate-900`, `text-blue-500`, or `border-neutral-200`.
*   **Semantic Tokens**: All color utilities must leverage the semantic variables defined in [globals.css](file:///c:/Users/praba/.gemini/antigravity/scratch/Fj-portfolio/src/app/globals.css):
    *   **Base colors**: `bg-background`, `text-foreground`
    *   **Containers**: `bg-card`, `text-card-foreground`, `bg-popover`, `text-popover-foreground`
    *   **Interactive/Primary**: `bg-primary`, `text-primary-foreground`, `bg-secondary`, `text-secondary-foreground`
    *   **Muted/Accents**: `bg-muted`, `text-muted-foreground`, `text-accent`, `bg-destructive`, `border-border`, `bg-input`
*   **Borders & Radius**: Standardize borders using `border-border` and radius tokens (`rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`).

## 2. Interactive States & Focus Outlines
*   **Focus Rings**: Avoid standard browser outlines. All focusable elements (inputs, buttons, links, etc.) must define custom focus states using:
    *   `outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-ring` or equivalent.
*   **Aria States**: Use Tailwind aria-attributes (e.g. `aria-invalid:ring-destructive/20`, `disabled:opacity-50`, `disabled:pointer-events-none`) to reflect accessibility states dynamically.

## 3. Structural Patterns
*   **Data Slots**: Component primitives must include a `data-slot="..."` attribute (e.g., `<div data-slot="card" ...>`) to support clean CSS targeting and automated test validation.
*   **Class Merging**: Always use the `cn(...)` utility from `@/lib/utils` to merge incoming `className` props with component base styles:
    ```tsx
    import { cn } from "@/lib/utils";
    // ...
    className={cn("base-classes", className)}
    ```
*   **Polymorphic Rendering**: To support components rendering as a different HTML element (e.g., rendering a `Button` as an `a` tag), implement the `asChild` prop with Radix UI Slot:
    ```tsx
    import { Slot } from "@radix-ui/react-slot";
    // ...
    const Comp = asChild ? Slot : "button";
    return <Comp {...props} />;
    ```

## 4. Animation (Framer Motion)
*   **Lazy Loading**: Do not import standard `motion` from `framer-motion` for rendering elements. Instead, import `m` and wrap layouts in the lazy-loaded `<FramerProvider>` context:
    ```tsx
    import { m } from "framer-motion";
    // ...
    return <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>...</m.div>
    ```
*   **React 19 Compatibility**: When mocking or defining animations, ensure that non-standard HTML properties (like animation props) are not passed directly to raw HTML/SVG elements.
