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
# For workspace projects (using pnpm)
pnpm dlx shadcn@latest add <component-name> -w

# Example: Adding a button component
pnpm dlx shadcn@latest add button -w
```

Note: The `-w` flag is required when using pnpm workspaces to ensure the component is added to the root workspace.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Deploy on Vercel

The project is configured for seamless deployment on Vercel. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your project to Vercel:

   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Choose your Git repository
   - Vercel will automatically detect Next.js and configure the build settings

3. Environment Variables:

   - Copy variables from `.env.example` to your Vercel project
   - Go to Project Settings → Environment Variables
   - Add the required environment variables
   - Update `NEXT_PUBLIC_APP_URL` to your production URL

4. Deploy:
   - Vercel will automatically deploy your project
   - Each push to the main branch will trigger a new deployment
   - Preview deployments are created for other branches

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Production Checks

Before deploying:

- Ensure all environment variables are set
- Test the production build locally:
  ```bash
  pnpm build
  pnpm start
  ```
- Check the [deployment documentation](https://vercel.com/docs/deployments/overview) for more information
