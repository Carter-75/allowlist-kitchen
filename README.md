# Delish Healthy Food 🍳

A modern, responsive recipe website featuring high-protein meals for fitness enthusiasts.

## About

This is a personal project: a React-based recipe website showcasing protein-rich dishes with complete nutrition information. The site features smooth animations, dynamic color themes, and a mobile-friendly design. It is a static, client-only app - there are no accounts, and the contact form simply opens the visitor's own email app.

## Features

- 🎨 Beautiful gradient backgrounds and glassmorphism effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌈 Color-coded recipe categories with dynamic themes
- 📊 Detailed nutrition information for every recipe
- ⚡ Route-based code splitting and fast performance with React + Vite
- 🍽️ 148 high-protein recipes across 6 categories (13 chicken omelette variations, 9 protein bowls, 65 desserts, 27 protein snacks, 21 quick lunches, 13 smoothie bowls)
- 📋 Easy-to-follow instructions with cooking times
- 🧾 Searchable master shopping list for ingredients
- 🧭 Accessible navigation with skip links and focus styling

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Configuration

Copy `.env.example` to `.env` and provide your AdSense values when you are ready to enable auto ads:

- `VITE_ADSENSE_CLIENT_ID` - your AdSense client identifier (for example `ca-pub-xxxxxxxxxxxxxxxx`)
- `VITE_ADSENSE_TEST_MODE` - optional; leave as `on` for safe local testing or remove for production

If the variables are missing or the script fails to load, auto ads remain disabled and a descriptive error appears in the browser console to help with setup.

## Privacy Policy

This site includes a dedicated privacy policy page at `/privacy` covering data collection, cookies, and AdSense disclosures.

## AdSense Policy Notes

- Keep `public/ads.txt` updated with your AdSense publisher ID.
- Auto ads are disabled on localhost unless `VITE_ADSENSE_TEST_MODE` is set.

## Deployment

This site is ready to deploy to Vercel:
1. Visit [vercel.com](https://vercel.com)
2. Import this repository
3. Click Deploy

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

## Architecture

- Client-only React SPA using React Router
- Data served from JSON under public/data with a resilient loader
- Theme system loaded at runtime with per-category styling
- SEO component for per-route metadata and canonical URLs

---


How to add content
- **New recipe:** append the recipe object to the relevant aggregated file (e.g. `public/data/recipes/desserts.json`, `smoothie-bowls.json`, etc.). The aggregated files are the only recipe data source - there are no per-recipe files. No JS updates needed - the loader and counts pick it up automatically. Keep the `totalRecipes` and count in the description of `public/data/recipes/recipe-categories.json` in sync with the file you edited.
- **New category:** add one entry to `public/data/recipes/recipe-categories.json` defining its `data` paths and icon, drop the recipes JSON it references, and add a matching theme key to both `public/data/themes/color-themes.json` and the bundled fallback `src/data/colorThemes.json` for colors. The UI, counts, and ingredient list will all wire themselves up.

Next step: run `npm run dev` and click through each category - including the shopping list - to confirm everything renders with the refreshed counts and data.

---

Built with ❤️ for healthy eating
