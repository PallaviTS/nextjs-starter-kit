# Next.js Starter Kit

A modern starter kit built with Next.js, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡️ [Next.js](https://nextjs.org) 14 with App Router
- 🎨 [Tailwind CSS](https://tailwindcss.com) for styling
- 🧱 [shadcn/ui](https://ui.shadcn.com/) components
- 📱 Responsive navigation menu
- 🎯 TypeScript for type safety
- 📦 PNPM for fast, disk space efficient package management

## Getting Started

### Prerequisites

- Node.js 18+
- PNPM package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd starter-kit
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                   # Next.js app router pages
├── components/
│   ├── ui/               # shadcn/ui components
│   └── navbar.tsx        # Navigation menu component
├── lib/                  # Utility functions
└── types/                # TypeScript type definitions
```

## Customization

### Theme

The project uses a custom teal theme which can be modified in the `globals.css` file.

### Components

UI components are built using shadcn/ui. To add more components:

```bash
pnpm dlx shadcn-ui@latest add <component-name>
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
