# The God Diet

One weekly pool. 21 meals. Nothing else.

Live site: https://thegoddiet.vercel.app/
Repository: https://github.com/Carter-75/the-god-diet

## The idea

The God Diet is Carter Moyer's fixed personal eating plan, built November 5, 2026. It replaced Allowlist Kitchen on this repository. The site contains only the diet: the weekly pool, the 10 ingredients with their passing sources, and the 21 meals that use the pool up exactly. Nothing else from the old general site survives here.

## The diet

Three meals a day, about 2,000 calories a day, 7 days, then loop. Everything is measured in ounces, weighed.

Weekly pool (the lock):

- Beef organ blend (US Wellness, 75% lean with heart, kidney, liver): 80 oz
- Egg (certified organic, pasture-raised): 74 oz, about 42 eggs
- Sardines: 21 oz, 7 tins
- Banana: 28 oz (morning fruit)
- Kiwi: 35 oz (midday fruit)
- Avocado: 28 oz (evening fruit)
- Cheese (pasteurized, 100% grass-fed, Miller's Bio Farm pressed line): 10 oz. Cheddar has no passing source and is never used.
- Beef tallow (US Wellness): 4 oz, only at meals where the beef cooks
- Celtic sea salt and water

Individual meals swing in size, but the 21 meals together drain the pool exactly. The per-meal amounts in `src/data/godDiet.js` are checked against these totals: beef 80, egg 74, sardines 21, cheese 10, banana 28, kiwi 35, avocado 28.

Ingredient verdicts and sources follow the checked rulebook built from the Jake Tran video corpus. Carter follows the videos; he does not write the list.

## Tech

React 18 + Vite 5 + Tailwind 3 + React Router 6, client-only. All content lives in `src/data/godDiet.js`. No backend, no accounts, no analytics, no ads, and no AI assistant (the old Ask the List route and its OpenAI key setup were removed with the rebuild).

## Develop

```bash
npm install
npm run dev
npm run build
npm run preview
```

Deploys run through Vercel from this repository. `vercel.json` holds the SPA rewrites and frame headers.
