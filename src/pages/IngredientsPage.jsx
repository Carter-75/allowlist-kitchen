import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BUY, CONDIMENTS, PRICE_BASIS, SHIPPING_PLAN, WEEK_COST, ingredientWeekCost, money } from '../data/godDiet';
import { getIngredients, getPool, useHead } from '../lib/store';

export default function IngredientsPage() {
  useHead({ title: 'Ingredients - The God Diet', description: 'The only 10 ingredients on The God Diet, their weekly amounts in ounces, and the exact source that passes for each.' });
  const ingredients = getIngredients();
  const pool = getPool();
  const totalOz = pool.filter((p) => p.oz !== null).reduce((s, p) => s + p.oz, 0);
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">Ingredients</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        Ten ingredients. That is the whole diet, plus a small condiment shelf below. Each one has an exact weekly amount in ounces and a source that passes the same ingredient checks the meals have always used here: verdicts follow the checked rulebook built from the Jake Tran video corpus, not personal preference. If a source does not pass, it is not swapped in.
      </p>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        The weighed ingredients total <strong>{totalOz} oz a week</strong>, plus Celtic sea salt and water as needed.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {ingredients.map((ing) => (
          <article key={ing.name} className="rounded-2xl border border-ink/10 bg-cream p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-bold">{ing.name}</h2>
              <span className="font-display text-xl font-black text-pine-700">{ing.weeklyOz === null ? 'as needed' : `${ing.weeklyOz} oz / week`}</span>
            </div>
            <p className="mt-2 text-sm font-bold text-pine-700">{ing.source}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{ing.detail}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {BUY[ing.name] && <a href={BUY[ing.name].url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-pine-700">Buy: {BUY[ing.name].label} <ExternalLink size={12} /></a>}
              <span className="text-sm font-bold text-ink/55">{ingredientWeekCost(ing.name) ? `Est. ${money(ingredientWeekCost(ing.name))} a week` : 'Est. $0 a week'}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-black">Condiments and seasonings</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-ink/65">Outside the weekly pool, in set whole-spoon amounts on the meals that call for them. Each one passed the same checks as the ten ingredients.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {CONDIMENTS.map((c) => (
            <article key={c.name} className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-bold">{c.name}</h3>
                <span className="text-right font-display text-base font-black text-pine-700">{c.amount}</span>
              </div>
              <p className="mt-2 text-sm font-bold text-pine-700">{c.source}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.detail}</p>
              {BUY[c.name] && <div className="mt-3"><a href={BUY[c.name].url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-pine-700">Buy: {BUY[c.name].label} <ExternalLink size={12} /></a></div>}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-pine-800 p-6 text-pine-50">
        <h2 className="font-display text-2xl font-bold">The monthly shipping plan</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-pine-50/80">Everything on this diet ships. No store trips. Four places cover the whole diet: the frozen and shelf-stable food ships monthly, and the fresh box ships every 2 weeks because bananas and avocados cannot sit for a month.</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {SHIPPING_PLAN.map((sp) => (
            <article key={sp.shipper} className="rounded-2xl bg-pine-900/60 p-5 ring-1 ring-pine-50/15">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-bold">{sp.shipper}</h3>
                <span className="text-right text-xs font-bold uppercase tracking-wide text-honey-400">{sp.cadence}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-pine-50/85">
                {sp.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <a href={sp.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-honey-400 px-3.5 py-1.5 text-xs font-bold text-pine-900 transition hover:bg-honey-300">Order from {sp.shipper} <ExternalLink size={12} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-cream p-6">
        <h2 className="font-display text-2xl font-bold">How the costs are figured</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/65">
          Every meal on this site carries an estimated cost built from these prices, checked November 5, 2026. The whole week totals about <strong className="text-ink">{money(WEEK_COST)}</strong>. Prices move, so treat these as planning estimates, not quotes.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ink/65">
          {PRICE_BASIS.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </section>
    </div>
  );
}
