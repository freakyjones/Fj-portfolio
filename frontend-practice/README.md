# 🎨 Frontend Practice Workspace

Welcome to your dedicated frontend practice directory! This space is designed for you to experiment, learn, and build pixel-perfect, accessible, and high-performance user interfaces.

---

## 🤖 The Frontend Practice Mentor

Whenever you work on files or directories within `frontend-practice/`, a dedicated **Frontend Practice Mentor** agent is activated. 

The mentor will:
*   Guide you through challenges step-by-step.
*   Suggest modern HTML/CSS layouts, animations, and structures.
*   Enforce the project's **component styling discipline** (Tailwind v4 semantic tokens, custom focus rings, etc.).
*   Give you professional code reviews evaluating **semantic markup, responsiveness, accessibility (a11y), performance, and typing**.

---

## 🎨 Component Styling Rules

All components built in this workspace should strictly follow the project's design system:
1.  **Tailwind CSS v4 Semantic Tokens**: Use semantic classes (e.g. `bg-background`, `text-foreground`, `bg-card`, `border-border`, `text-primary`) rather than hardcoding static colors (like `bg-zinc-800`).
2.  **Focus States**: Implement clean focus outlines for keyboard navigation using `focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-ring outline-none`.
3.  **Data Slots**: Track component nodes with a `data-slot="..."` attribute (e.g. `data-slot="card"`).
4.  **Utility Merging**: Use `cn(...)` from `@/lib/utils` for merging dynamic class names.
5.  **Lazy Motion**: Use `<m.div>` and Framer Motion's lazy-load providers instead of standard `motion.div`.

---

## 🏆 Suggested Practice Challenges

Here are some challenges to get you started. You can create a new folder for each challenge (e.g. `frontend-practice/accordion/`) and build your files there!

### Challenge 1: Accessible Accordion Component
*   **Goal**: Create an accordion that reveals and hides content.
*   **Target skills**: Radix Slot/asChild, `aria-expanded` and `aria-controls` bindings, keyboard navigation (arrow keys up/down, space/enter), and smooth height transition via `framer-motion` lazy height animation.

### Challenge 2: Glassmorphic Pricing Card
*   **Goal**: Build a pricing layout featuring a monthly/annually toggle and visual cards.
*   **Target skills**: Glassmorphic CSS styling (backdrop-blur, border gradients, translucent background), semantic layout (`<article>`), focus-visible controls, and elegant hover micro-interactions.

### Challenge 3: Responsive Mobile Menu Overlay
*   **Goal**: Create a drawer-style navigation menu that slides in on mobile.
*   **Target skills**: Responsive viewports, focus trap (preventing focus leaving the drawer when open), escape-key dismiss, and layout animation using `AnimatePresence`.

---

## 🚀 How to Start
1.  Create a folder inside this directory for your component (e.g. `frontend-practice/my-accordion/`).
2.  Write your typescript component and style it.
3.  When you're ready, ask the agent: **"Can you review my component in frontend-practice/my-accordion?"** to receive a structured feedback report.
