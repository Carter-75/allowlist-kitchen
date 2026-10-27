import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Timer, Beef } from 'lucide-react';
import MealTile from '../components/MealTile';
import { TYPES, filterMeals, mealsOfType, stats, useHead } from '../lib/store';

export default function Home() {
  useHead({ title: 'Allowlist Kitchen - Family Meals from a Checked Ingredient List', description: 'Family meals made only from ingredients on a checked allowlist. No sugar, no seed oils, no soy, no corn.' });
  const s = stats();
  const [query, setQuery] = useState('');
  const [maxMinutes, setMaxMinutes] = useState(null);
  const [highProtein, setHighProtein] = useState(false);
  const results = useMemo(() => filterMeals({ query, maxMinutes, minProtein: highProtein ? 25 : null }), [query, maxMinutes, highProtein]);
  const filtering = query.trim() !== '' || maxMinutes !== null || highProtein;

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="rounded-[2rem] bg-pine-800 px-6 py-12 text-white md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-honey-400">One list. Every meal.</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-black leading-[1.05] md:text-6xl">Family food, checked ingredient by ingredient.</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-pine-50/85">
            Every recipe here is built only from a checked allowlist: grass-fed and grass-finished beef, organic chicken, pasture-raised eggs, wild fish, and sweetness from raw honey or fruit alone. If an ingredient is not on the list, it is not in the meal. Not as a garnish, not as a "just this once."
          </p>
          <div className="mt-7 flex max-w-xl items-center gap-2 rounded-full bg-cream p-1.5">
            <Search size={18} className="ml-2 shrink-0 text-ink/40" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the kitchen: pancakes, meatloaf, honey..." className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40" aria-label="Search meals" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => setMaxMinutes(maxMinutes === 30 ? null : 30)} className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${maxMinutes === 30 ? 'bg-honey-400 text-pine-900' : 'bg-white/10 text-white hover:bg-white/20'}`}><Timer size={13} /> 30 minutes or less</button>
            <button onClick={() => setHighProtein(!highProtein)} className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${highProtein ? 'bg-honey-400 text-pine-900' : 'bg-white/10 text-white hover:bg-white/20'}`}><Beef size={13} /> 25g protein or more</button>
            <Link to="/pantry" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-white/20"><ShieldCheck size={13} /> See the list itself</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            <p><span className="font-display text-3xl font-black">{s.meals}</span> <span className="text-sm text-pine-50/75">family meals</span></p>
            <p><span className="font-display text-3xl font-black">{s.pantryItems}</span> <span className="text-sm text-pine-50/75">items on the full list</span></p>
            <p><span className="font-display text-3xl font-black">{s.avgProtein}g</span> <span className="text-sm text-pine-50/75">average protein</span></p>
            <p><span className="font-display text-3xl font-black">{s.quick}</span> <span className="text-sm text-pine-50/75">meals in 30 min or less</span></p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12">
        {filtering ? (
          <>
            <h2 className="font-display text-2xl font-bold">{results.length} {results.length === 1 ? 'meal' : 'meals'} found</h2>
            {results.length === 0 ? (
              <p className="mt-3 max-w-xl text-ink/65">Nothing on the list matches that. The list is small on purpose, and a meal that needs an unlisted ingredient does not get cooked here.</p>
            ) : (
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map((m) => <MealTile key={m.id} meal={m} />)}</div>
            )}
          </>
        ) : (
          TYPES.map((t) => {
            const meals = mealsOfType(t.id);
            return (
              <div key={t.id} className="mb-14">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="max-w-xl">
                    <h2 className="font-display text-3xl font-black">{t.plural}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{t.blurb}</p>
                  </div>
                  <Link to={`/meals/${t.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-pine-700 hover:underline">All {t.plural.toLowerCase()} <ArrowRight size={15} /></Link>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{meals.slice(0, 3).map((m) => <MealTile key={m.id} meal={m} />)}</div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}
