# Ploutos Landing Page

The official landing page for **Ploutos**, the premier non-custodial liquidity market protocol on the Hemi Network.

## Overview

This project is a [Next.js](https://nextjs.org) application built with:
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Fetching**: DefiLlama API (for TVL & Stats)
- **Badges**: Custom CredShields Audit Badge

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Responsive Design**: Fully optimized for desktop and mobile.
- **Real-Time Stats**: Fetches live TVL and Borrowed data from DefiLlama.
- **Audit Integration**: Embedded PDF viewer for security audit reports.
- **Dynamic UX**: Animated cycling text and interactive elements.
- **SEO Optimized**: Comprehensive metadata, OpenGraph, and Twitter tags.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (Hero, Features, Stats, etc.).
- `hooks/`: Custom React hooks (e.g., `usePloutosStats`).
- `public/`: Static assets (images, logos).

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
