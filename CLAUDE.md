# hanzo.bot Landing Page

Next.js 16 static site with `@hanzo/ui` for marketing pages and `@hanzo/docs-base-ui` for docs.

## Architecture

```
app/(home)/     → Marketing pages (homepage, skills, pricing, solutions, etc.)
app/docs/       → Documentation (MDX via @hanzo/docs-base-ui + @hanzo/docs-mdx)
content/docs/   → MDX documentation source files
data/           → JSON data (skills, testimonials, showcase, automations)
public/         → Static assets (embed.js, favicons, OG images, install scripts)
lib/            → Shared utilities (cn, metadata, source, layout config)
k8s/            → Kubernetes deployment configs
```

## Build & Deploy

- `pnpm build` → static export to `out/`
- Docker: nginx serves `out/` with SPA fallback
- CI: GitHub Actions → Docker image → GHCR → K8s
- Domains: hanzo.bot, skills.hanzo.bot (redirects / → /skills/)

## Key Dependencies

- `@hanzo/ui` (^5.3.34) — marketing UI components
- `@hanzo/docs-base-ui` (^16.6.5) — docs layouts, sidebar, search
- `@hanzo/docs-mdx` (^14.2.8) — MDX collection generation (pre-build)
- `@hanzo/docs-core` (^16.6.5) — docs source loader, link component
- `lucide-react` — icons throughout

## Data Files

### Showcase (`data/showcase.json`)
- "What People Are Building" page - detailed tweets with projects/workflows
- **Sorted into uniform rows**: all-SHORT rows, all-MED rows, all-LONG rows
- This ensures consistent row heights in the 3-column CSS grid
- Categories: SHORT (<200 chars), MED (200-400), LONG (>400)
- Fields: `id`, `author`, `quote`, `category`, `likes`, `images?` (array of URLs)
- **Important**: `showcase/page.tsx` uses JSON order directly (no re-sorting) — maintain order in JSON

### Testimonials (`data/testimonials.json`)
- Short praise quotes for the shoutouts page
- Sorted by quote length (most detailed/impressive first)
- Deduplicated by author (keep longest quote)
- Backup: `testimonials-backup.json` contains weakest 10% removed

## Maintenance

When adding new tweets:
1. Use `bird read <tweet_id>` to fetch content and like count
2. "Building" tweets → showcase.json (describe what they built)
3. "Praise" tweets → testimonials.json (short praise/reactions)
4. Re-sort after batch additions

Showcase sorting script pattern:
```js
// Group by size for uniform row heights
const longs = sorted.filter(t => t.quote.length > 400);
const meds = sorted.filter(t => t.quote.length > 200 && t.quote.length <= 400);
const shorts = sorted.filter(t => t.quote.length <= 200);
// Alternate: 3 shorts, 3 meds, 3 longs, repeat
// Keeps high-engagement items near top within each category
```
