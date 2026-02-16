# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aura Custom Packaging — a luxury packaging brand website built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Deployed as a **static export** to GitHub Pages.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (static export to `./out/`)
- `npm run lint` — Run ESLint (eslint-config-next with core web vitals + TypeScript)

No test framework is configured.

## Architecture

**Static site with no backend.** All product/category data lives in `src/lib/data.ts`. Pages use `generateStaticParams()` for SSG of dynamic routes.

**Key paths:**
- `src/app/` — Next.js App Router pages (thin wrappers composing section components)
- `src/components/sections/` — Full-page section components (Hero, Philosophy, Showcases, etc.)
- `src/components/layout/` — Header and Footer
- `src/components/forms/` — RFQForm (3-step wizard with Zod validation)
- `src/components/ui/` — Shadcn/UI-style primitives (CVA-based Button)
- `src/lib/` — Data (`data.ts`), Zod schemas (`schemas.ts`), `cn()` utility (`utils.ts`)
- `src/assets/images/` — Static image imports (used with Next.js `<Image />` for blur placeholders)

**Path alias:** `@/*` maps to `./src/*`.

## Important Configuration

- **Static export:** `next.config.ts` sets `output: "export"` and `basePath: "/Talented-Aura"` for GitHub Pages
- **Images:** `images: { unoptimized: true }` is required for static export. Images in `src/assets/images/` are imported as ES modules (not placed in `public/`)
- **Dark mode:** Always on — root `<html>` has `className="dark"`
- **Fonts:** Playfair Display (`--font-playfair`, serif) and Inter (`--font-inter`, sans) via `next/font/google`
- **Tailwind v4:** Configured via `@tailwindcss/postcss` in `postcss.config.mjs` (no `tailwind.config.js`)
- **All section components are client components** using `"use client"` for Framer Motion animations

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. The `basePath` in `next.config.ts` must match the repository name.
