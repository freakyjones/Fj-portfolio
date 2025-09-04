# 🏆 Freaky Jones Portfolio

Next.js 14 + TypeScript + Tailwind CSS + ShadCN/UI
Production-ready frontend portfolio showcasing modern architecture, reusable components, and full-stack features.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI**: Tailwind CSS + ShadCN/UI
- **Components**: Server & Client Components, reusable design
- **Data**: API Routes for backend functionality
- **Deployment**: Vercel for global low-latency performance

## ⚡ Key Features

- App Router with nested layouts and dynamic routing
- Multiple rendering modes: SSG, SSR, ISR, Streaming
- Reusable UI components: Buttons, Cards, Forms, Modals
- Optimized for performance: small bundles, responsive design, fast load times
- Git version control with structured commits

## 📂 Project Structure

```
app/
 ├─ layout.tsx          # Root layout (header/footer)
 ├─ page.tsx            # Home page
 ├─ about/page.tsx      # About section
 ├─ projects/page.tsx   # Portfolio projects
 ├─ contact/page.tsx    # Contact form
 └─ api/                # Serverless API routes
components/
 ├─ ui/                 # ShadCN/UI components
 └─ custom/             # Project-specific reusable components
public/                  # Static assets
styles/                  # Tailwind/global styles
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/freaky-jones-portfolio.git
    cd freaky-jones-portfolio
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```

### Add ShadCN/UI Components:

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
```

### Deploy:

```bash
vercel
```

## 🔑 Notes

- **Server-first approach**: use Server Components unless client interactivity is required
- **Keep `components/ui` organized** for reusable, modular components
- **Optimize for global performance**: caching, CDN, bundle size
