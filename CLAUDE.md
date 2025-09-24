# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Avid Signs & Wraps, built with TypeScript, React 19, and Tailwind CSS 4. The project uses Turbopack for faster builds and development.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 (using PostCSS)
- **TypeScript**: Strict mode enabled
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Path aliases**: `@/*` maps to project root

### Project Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Homepage component
- `public/` - Static assets (SVG icons)
- `content/` - Content directory (currently empty)

### Key Configuration Files

- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript configuration with strict mode
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `next-sitemap` dependency available for SEO