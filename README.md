# Tokners Landing Page

Tokners Landing Page is a modern, responsive web application built with Next.js and TypeScript. It features custom SASS utilities for scalable styling and a clean, component-based architecture.

## Features

- Next.js 15+ with App Router
- TypeScript for type safety
- Custom SASS architecture (mixins, functions, modular SCSS)
- Responsive design
- Component-based structure
- Easy deployment on Vercel

## Tech Stack

- Next.js
- React
- TypeScript
- SASS/SCSS

### Links

- Live site link: [https://tokners-landing-page.vercel.app](https://tokners-landing-page.vercel.app)
- Source code: [https://github.com/gauravshuklarwit/tokners-landing-page](https://github.com/gauravshuklarwit/tokners-landing-page)

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/gauravshuklarwit/tokners-landing-page
```

Then, install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Folder Structure

```
src/
	app/           # Main app entry, layout, fonts
	components/    # Reusable React components
	scss/
		main.scss    # Main SASS entry
		abstracts/   # SASS utilities (mixins, functions, theme)
		base/        # Base styles (reset, general)
public/          # Static assets
```

## Custom SASS Utilities

The project includes reusable SASS mixins and functions for:

- Responsive media queries
- Pixel-to-rem/em conversion

See `src/scss/abstracts/_mixins.scss` and `src/scss/abstracts/_functions.scss` for details.

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform. See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Author

Built by [Gaurav Shukla](https://github.com/gauravshuklarwit)
