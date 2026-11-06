import React from 'react';
import { ExternalLink } from 'lucide-react';
import { BUY, PRICE_BASIS, WEEK_COST, ingredientWeekCost, money } from '../data/godDiet';
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
        Ten ingredients. That is the whole diet. Each one has an exact weekly amount in ounces and a source that passes the same ingredient checks the meals have always used here: verdicts follow the checked rulebook built from the Jake Tran video corpus, not personal preference. If a source does not pass, it is not swapped in.
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
