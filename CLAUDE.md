# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Martin Areso's portfolio website - a modern Next.js 15 application built with TypeScript, TailwindCSS, and shadcn/ui. It's a Turborepo monorepo featuring a personal portfolio with blog functionality, project showcases, and multiple component themes (compact, cozy, modern).

## Commands

### Development

```bash
# Start development server (uses turbo watch)
pnpm dev

# Start only the Next.js app (if working specifically on web app)
pnpm dev:next

# Build the entire project
pnpm build

# Start production server
pnpm start
```

### Code Quality & Linting

```bash
# Run ESLint across all packages
pnpm lint

# Fix ESLint issues automatically
pnpm lint:fix

# Run TypeScript type checking
pnpm typecheck

# Format code with Prettier
pnpm format

# Format and fix code
pnpm format:fix

# Check for unused dependencies
pnpm check:knip

# Check workspace dependencies
pnpm lint:ws
```

````

### Cleanup
```bash
# Clean node_modules
pnpm clean

# Clean all workspace node_modules
pnpm clean:workspaces
````

### UI Components

```bash
# Add new shadcn/ui components
pnpm ui-add
```

## Architecture

### Monorepo Structure

- **apps/web/**: Main Next.js 15 application with App Router
- **packages/ui/**: Shared UI components built with shadcn/ui and Radix UI
- **packages/emails/**: Email templates and functionality
- **packages/validators/**: Shared Zod validation schemas
- **tooling/**: Shared tooling configuration (ESLint, Prettier, TypeScript)

### Content Management

- Uses **Content Collections** for managing blog posts and projects
- MDX files in `apps/web/content/` for blog and project content
- Configuration in `apps/web/content-collections.ts`
- Blog posts: `content/blog/`
- Projects: `content/projects/`

### Component Architecture

The app uses a **multi-theme component system** located in `apps/web/src/components/sections/`:

- **compact/**: Minimal, space-efficient layouts
- **cozy/**: More spacious, comfortable layouts
- **modern/**: Contemporary, feature-rich layouts
- **minimal/**: Ultra-minimal designs

Each section (hero, about, projects, contact, etc.) has variants across these themes.

### Key Technologies

- **Next.js 15** with App Router and React 19
- **TypeScript** with strict configuration
- **TailwindCSS** for styling with custom configuration
- **shadcn/ui** + **Radix UI** for accessible components
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **Resend** for email functionality
- **Turnstile** for form protection

### Environment & Deployment

- **Node.js 22.11.0+** required
- **pnpm** as package manager
- Deployed to **Sevalla.com**
- Branch strategy: `main` → `develop` → `production` (auto-deploys)

### Important Files

- `apps/web/src/app/config.ts`: Site metadata and configuration
- `apps/web/content-collections.ts`: Content management configuration
- `turbo.json`: Turborepo task configuration
- `pnpm-workspace.yaml`: Workspace configuration

## Development Notes

### Adding New Content

- Blog posts go in `apps/web/content/blog/` as `.mdx` files
- Projects go in `apps/web/content/projects/` as `.mdx` files
- Both require frontmatter with title, description, date, etc.

### Working with Components

- UI components are in the `@repo/ui` package
- Section components have theme variants (compact/cozy/modern)
- Use existing patterns when adding new components
- Follow the established TypeScript and styling conventions

### Environment Variables

Key environment variables for local development:

- `EMAIL_FROM`, `EMAIL_TO`, `RESEND_API_KEY` for contact form
- `NEXT_PUBLIC_CONTACT_FORM_ENABLED` for feature flags
- See `.env.example` for full list

### Testing & Quality Assurance

- Always run `pnpm lint` and `pnpm typecheck` before committing
- Use `pnpm format:fix` to ensure consistent code formatting
- The project uses lint-staged with Husky for pre-commit hooks
