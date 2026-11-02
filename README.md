# Allowlist Kitchen

Family meals made only from ingredients on a checked allowlist.

Live site: https://allowlist-kitchen.vercel.app/
Repository: https://github.com/Carter-75/allowlist-kitchen

## The idea

Every meal on this site is built exclusively from ingredients recorded in a checked allowlist database (foods, ingredients, and specific store products, each with an explicit verdict and reasoning). The standing rule: if an item is not in the database, it is not approved, and it does not appear in a meal. Where the source corpus is silent on an ingredient, it stays unapproved until checked against health evidence under one standard: safe at real food amounts, with no serious organ-specific harm signal.

## The food rules

- Beef is 100% grass-fed and grass-finished. Chicken is certified organic. Eggs are organic and pasture-raised. Fish is wild-caught.
- Sweet means raw honey or whole fruit only. No sugar in any form, no syrups, no stevia, no artificial sweeteners.
- Cooking fats: beef tallow, butter, duck fat, cold-pressed olive oil, coconut oil. No seed oils.
- No soy, no corn, no chocolate, no food dyes, no MSG, no natural flavors, no protein powder.
- Chocolate is banned, so the brownies are carob and are labeled carob. Cinnamon is Ceylon only (cassia is banned for its coumarin liver load). Mustard, when used, is declared as the major allergen it is.
- Macros are estimated from USDA standard reference values for the exact listed amounts and labeled as estimates. Numbers are never invented.

## Content

36 meals: 8 breakfasts, 7 lunches, 12 dinners, 9 treats. Each is a complete family recipe (amounts, steps, per-serving macros) with every ingredient shown next to the exact allowlist entry it was checked against. Pages: home with live search and quick filters, meal-type pages, meal pages with copy-recipe, the pantry page (the exact list items the meals use, with verdicts and conditions), about, contact (opens the visitor's own email app; nothing is stored), privacy.

## Tech

Ground-up rebuild (v2.0.0). Client-only React 18 + Vite 5 + Tailwind 3 + React Router 6. Meal and pantry data are JSON in `src/data/`, bundled at build time; counts, averages, search, and filters are computed from that data at runtime so displayed numbers cannot drift from the content. No backend, no accounts, no analytics, no ads.

## Develop

```bash
npm install
npm run dev
npm run build
npm run preview
```

Deploys run through Vercel from this repository. `vercel.json` holds the SPA rewrites and the frame headers that let the portfolio at carter-portfolio.fyi embed the site.

## Adding a meal

1. Check every ingredient against the allowlist database first. No verdict, no meal.
2. Add the meal to `src/data/meals.json` (id, name, mealType of Breakfast/Lunch/Dinner/Treat, description, time, servings, difficulty, ingredients with item/amount/dbItem, steps, nutrition per serving derived from USDA values or null, tags).
3. If the meal uses a list item not yet shown on the pantry page, regenerate `src/data/pantry.json` from the database so the list page stays exact.
4. Build, check the meal renders, and confirm search and filters find it.

## Ask the List (AI assistant)

The /ask page is a chat assistant powered by OpenAI GPT-5 nano (model gpt-5-nano), added Nov 1, 2026. It answers only from this site's own allowlist data and the rulebook behind it: whether a food, ingredient, or product passes and why, and meal ideas built only from allowed items and the site's recipes.

How it works:
- The browser calls the serverless route at api/ask.js. There is no client-side key and no direct browser-to-OpenAI call.
- For each question the route retrieves the most relevant allowlist entries and recipes from src/data and sends them to the model with the core rulebook rules and strict answering instructions.
- Items that are in the database get their exact database verdict. Items that are not in the database get a clearly labeled rule-based judgment from their ingredients; the assistant must never invent a database verdict, and absence from the database is not treated as a fail.

Required setup: the route reads the key from the OPENAI_API_KEY environment variable in the allowlist-kitchen Vercel project (Production). Without it the endpoint returns a friendly "being set up" response and the page shows that state. The key is entered by Carter in the Vercel dashboard; it never appears in this repo or in chat.
