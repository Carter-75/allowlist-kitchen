# Allowlist Kitchen

Meals built only from ingredients that pass a strict, checked rulebook.

Allowlist Kitchen is a personal project by Carter Moyer. Every meal on the site is built exclusively from ingredients recorded in a 513-item allowlist database (foods, ingredients, and specific store products, each with an explicit verdict). The standing rule: if an item is not in the database, it is not approved, and it does not appear in a meal.

Live site: https://delish-healthy-food.vercel.app/ (the address changes if the Vercel project is renamed; the site content is the same)

## The standards

- Beef is 100% grass-fed and grass-finished, from named producers. Chicken is certified organic. Eggs are organic and pasture-raised.
- Fish is wild-caught. Canned fish is limited to the specific labels that pass.
- Cooking fats: beef tallow, butter, duck fat, cold-pressed olive oil, coconut oil. No seed oils.
- Sweeteners: raw honey or whole fruit only. No sugar in any form, no syrups, no stevia, no artificial sweeteners.
- No soy, no corn, no food dyes, no MSG, no natural flavors, no protein powder, no chocolate.
- Flour is certified organic and unenriched, and used rarely. Pasta is single-ingredient organic lentil penne or quality Italian organic pasta.
- Nutrition panels are estimated from USDA standard reference values for the listed ingredients and amounts, and are labeled as estimates. Numbers are never invented; if a value cannot be derived, it is omitted.

## Content

50 meals in 6 categories: Beef & Red Meat (15), Chicken & Eggs (8), Seafood (6), Pasta & Grains (8), Wraps & Handhelds (5), Sweets & Snacks (8). Every meal is a complete recipe with amounts, steps, and per-serving nutrition. No two meals are the same dish re-skinned: each differs in core protein, method, cuisine direction, or format.

Pages: home with live search, category pages, meal detail pages (ingredients shown next to the exact allowlist entry each was checked against, steps, nutrition, copy-recipe), a master shopping list generated from the meals themselves, about, contact (opens the visitor's own email app; nothing is stored), and privacy.

## Tech

Client-only React 18 + Vite 5 + Tailwind 3 + React Router 6 single-page app. Meal data lives in `src/data/meals.json` and is bundled at build time; counts, averages, search, and the shopping list are all computed from that data at runtime, so displayed numbers cannot drift from the content. No backend, no accounts, no analytics, no ads.

## Develop

```bash
npm install
npm run dev     # local dev server
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

Deploys run through Vercel from the GitHub repository (see `vercel.json` for rewrites and headers; the frame headers allow the site to be embedded in the portfolio at carter-portfolio.fyi).

## Adding a meal

1. Check every ingredient against the allowlist database first. If an ingredient has no verdict, it does not go in.
2. Add the meal object to `src/data/meals.json` with id, name, category (one of the six names in `src/utils/meals.js`), description, time, servings, difficulty, ingredients (each with `item`, `amount`, and `dbItem`, the exact allowlist entry it was checked against), steps, nutrition (per serving, derived from USDA reference values, or null), and tags.
3. Build and confirm the meal renders, search finds it, and the shopping list picks up its items.
