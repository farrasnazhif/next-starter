# Next Starter Kit

Production-oriented Next.js starter built with App Router, shadcn/ui, React Query, Husky pre-commit checks, and SEO metadata routes.

## Features

- Next.js 16 + React 19 + TypeScript + Tailwind CSS v4
- Starter landing page at `/`
- Component sandbox directory at `/sandbox`
- Dedicated sandbox pages:
  - `/sandbox/button`
  - `/sandbox/input`
  - `/sandbox/card`
  - `/sandbox/react-query`
- shadcn/ui initialized and ready to extend
- React Query provider configured globally with Devtools
- Shared Axios API client in `src/lib/api.ts` with request/response interceptors
- Husky + lint-staged pre-commit workflow (`eslint --fix`)
- SEO files:
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`
- Custom 404 page: `src/app/not-found.tsx`

## Tech Stack

- `next@16.2.2`
- `react@19.2.4`
- `typescript@5`
- `tailwindcss@4`
- `@tanstack/react-query`
- `axios`
- `universal-cookie`
- `shadcn`
- `husky` + `lint-staged`

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    robots.ts
    sitemap.ts
    sandbox/
      page.tsx
      button/page.tsx
      input/page.tsx
      card/page.tsx
      react-query/page.tsx
    api/
      sandbox-stats/route.ts
  hooks/
    use-random-quote.ts
  lib/
    api.ts
    cookies.ts
    utils.ts
  types/
    api.ts
  components/
    providers/query-provider.tsx
    sandbox/live-query-card.tsx
    ui/
      button.tsx
      input.tsx
      card.tsx
      ...
```

## Quick Start

1. Clone the repository.
2. Install dependencies:

```bash
pnpm install
```

3. Start development server:

```bash
pnpm dev
```

4. Open `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - run dev server
- `pnpm build` - production build
- `pnpm start` - run production server
- `pnpm lint` - run ESLint

## How To Use This Repo

### 1. Build product pages from the landing starter

- Edit hero/content in `src/app/page.tsx`.
- Keep UI primitives in `src/components/ui` reusable.

### 2. Prototype components safely in sandbox routes

Use sandbox pages before integrating components into main pages:

- `/sandbox/button` for button variants/sizes/states
- `/sandbox/input` for form inputs and common rows
- `/sandbox/card` for card composition patterns
- `/sandbox/react-query` for API fetch + cache/refetch flow

### 3. Add new shadcn components

```bash
pnpm dlx shadcn@latest add <component-name>
```

Example:

```bash
pnpm dlx shadcn@latest add dialog
```

### 4. Use React Query with shared API client

- Global provider is wired in `src/app/layout.tsx` via `QueryProvider`.
- Axios client and interceptors live in `src/lib/api.ts`.
- Token helper lives in `src/lib/cookies.ts` (cookie key: `@next-starter/token`).
- Example query hook and usage:
  - `src/hooks/use-random-quote.ts`
  - `src/components/sandbox/live-query-card.tsx`
  - `src/app/sandbox/react-query/page.tsx`

### 5. Respect commit checks

On commit, Husky runs `lint-staged` and auto-fixes lint issues for staged JS/TS files.

## SEO and Metadata

- `src/app/sitemap.ts` generates the sitemap.
- `src/app/robots.ts` generates robots rules and references sitemap URL.
- Set this env var in production so generated URLs are correct:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If `NEXT_PUBLIC_SITE_URL` is not set, metadata routes fallback to `http://localhost:3000`.

## Environment Variables

Use `.env.example` as your base and create `.env.local` for local development.

```bash
cp .env.example .env.local
```

Available vars:

- `NEXT_PUBLIC_SITE_URL` - used by `robots.ts` and `sitemap.ts`
- `NEXT_PUBLIC_RUN_MODE` - API mode switch (`development` or `production`)
- `NEXT_PUBLIC_API_URL` - explicit API URL (highest priority)
- `NEXT_PUBLIC_API_URL_DEV` - fallback API URL in development mode
- `NEXT_PUBLIC_API_URL_PROD` - fallback API URL in production mode

## Deployment

Deploy on Vercel (recommended) or any Node-compatible platform.

Typical production flow:

1. Set environment variables (at least `NEXT_PUBLIC_SITE_URL`).
2. Run `pnpm build`.
3. Run `pnpm start`.

## Notes

- This project uses Inter as the global sans font via `next/font/google` in `src/app/layout.tsx`.
- Button components that render links use `nativeButton={false}` to preserve proper semantics and avoid Base UI warnings.
