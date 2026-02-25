# hanzo.bot

Landing page and documentation for [Hanzo Bot](https://hanzo.bot) — your AI team in a box.

**Live**: [hanzo.bot](https://hanzo.bot)

## Pages

- `/` — Main landing with Quick Start, features, and testimonials
- `/skills` — 600+ skills grid with search
- `/integrations` — Chat providers, AI models, platforms, and tools
- `/pricing` — Plans and comparison table
- `/showcase` — What people are building
- `/shoutouts` — Community testimonials
- `/playground` — Visual agent builder
- `/solutions/*` — Solution pages (engineering, sales, marketing, operations, support)
- `/platform` — Architecture overview
- `/get-started` — Quick start guide
- `/docs/*` — Full documentation (275 MDX pages)

## Tech Stack

- [Next.js 16](https://nextjs.org/) — Static export
- [@hanzo/ui](https://www.npmjs.com/package/@hanzo/ui) — Marketing UI components
- [@hanzo/docs-base-ui](https://www.npmjs.com/package/@hanzo/docs-base-ui) — Docs layouts
- [Tailwind CSS v4](https://tailwindcss.com/) — Styling
- Docker + nginx — Production serving
- GitHub Pages + GHCR — CI/CD

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build     # pre-build (MDX) + next build (static export) + post-build
```

Output goes to `out/`.

## Deploy

Automatically deployed on push to `main`:
- **GitHub Pages** — Static site hosting
- **Docker Release** — Image pushed to `ghcr.io/hanzobot/site:latest`
- **K8s** — Deployment at `hanzo.bot` and `skills.hanzo.bot`

## Install Scripts

The landing page hosts installer scripts:

- **macOS/Linux**: `curl -fsSL --proto '=https' --tlsv1.2 https://hanzo.bot/install.sh | bash`
- **macOS/Linux (CLI only)**: `curl -fsSL --proto '=https' --tlsv1.2 https://hanzo.bot/install-cli.sh | bash`
- **Windows**: `iwr -useb https://hanzo.bot/install.ps1 | iex`
