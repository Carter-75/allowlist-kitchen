import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Clock3, Copy, ExternalLink } from 'lucide-react';
import Missing from './Missing';
import { TALLOW_LABEL } from '../data/godDiet';
import { allMeals, mealById, mealCost, mealIngredients, money, recipeText, TALLOW_TSP, useHead } from '../lib/store';

const SLOT_TINT = {
  Morning: 'bg-amber-100 text-amber-900',
  Midday: 'bg-lime-100 text-lime-900',
  Evening: 'bg-orange-100 text-orange-900',
};

export default function MealPage() {
  const { mealId } = useParams();
  const meal = mealById(mealId);
  const [copied, setCopied] = useState(false);
  useHead({ title: meal ? `${meal.name} - The God Diet` : 'The God Diet', description: meal ? meal.description : '' });
  if (!meal) return <Missing />;
  const idx = allMeals.findIndex((m) => m.id === meal.id);
  const prev = allMeals[(idx + allMeals.length - 1) % allMeals.length];
  const next = allMeals[(idx + 1) % allMeals.length];
  const copy = async () => {
    try { await navigator.clipboard.writeText(recipeText(meal)); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); }
  };
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <Link to="/meals" className="text-sm font-bold text-pine-700 hover:underline">Back to the 21 meals</Link>
      <div className="mt-4 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${SLOT_TINT[meal.slot]}`}>Day {meal.day} - {meal.slot}</span>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight md:text-5xl">{meal.name}</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">{meal.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-ink/70 ring-1 ring-ink/10"><Clock3 size={13} /> About {meal.minutes} min</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-ink/70 ring-1 ring-ink/10">{TALLOW_LABEL[meal.tallow]}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-honey-400/70 px-3 py-1.5 text-xs font-bold text-pine-900 ring-1 ring-ink/10">Est. cost {money(mealCost(meal))}</span>
            <button onClick={copy} className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-pine-700">{copied ? <Check size={13} /> : <Copy size={13} />} {copied ? 'Copied' : 'Copy recipe'}</button>
          </div>
          <h2 className="mt-10 font-display text-2xl font-bold">How to make it</h2>
          <ol className="mt-4 space-y-4">
            {meal.steps.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-pine-800 font-display text-sm font-bold text-white">{i + 1}</span>
                <p className="leading-relaxed text-ink/75">{s}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-ink/10 pt-6">
            <Link to={`/meal/${prev.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-pine-700 hover:underline"><ArrowLeft size={15} /> {prev.name}</Link>
            <Link to={`/meal/${next.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-pine-700 hover:underline">{next.name} <ArrowRight size={15} /></Link>
          </div>
        </div>
        <aside>
          <div className="rounded-2xl border border-ink/10 bg-cream p-6">
            <h2 className="font-display text-xl font-bold">What to use</h2>
            <p className="mt-1 text-sm text-ink/55">Ounces first, then the rounded amount to actually grab. This is this meal's share of the weekly pool. Tap a source to buy that ingredient.</p>
            <ul className="mt-4 divide-y divide-ink/10">
              {mealIngredients(meal).map((i) => (
                <li key={i.item} className="py-2.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold">{i.item}</span>
                    <span className="font-display text-lg font-black text-pine-700">{i.oz} oz</span>
                  </div>
                  <div className="mt-0.5 flex items-baseline justify-between gap-2">
                    <span className="text-sm text-ink/60">Use: {i.practical}</span>
                    {i.buy && <a href={i.buy.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-pine-700 hover:underline">Buy: {i.buy.label} <ExternalLink size={11} /></a>}
                  </div>
                </li>
              ))}
              <li className="py-2.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold">Beef tallow</span>
                  <span className="text-sm font-bold text-ink/60">{meal.tallow === 'no' ? 'None at this meal' : `${TALLOW_TSP[meal.tallow]}, from the week's 4 oz`}</span>
                </div>
                {meal.tallow !== 'no' && <div className="mt-0.5 text-right"><a href="https://grasslandbeef.com/collections/kitchen-favorites" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-pine-700 hover:underline">Buy: US Wellness Meats <ExternalLink size={11} /></a></div>}
              </li>
              <li className="flex items-baseline justify-between py-2.5">
                <span className="font-semibold">Celtic sea salt</span>
                <span className="text-sm font-bold text-ink/60">A pinch, on the beef as it cooks</span>
              </li>
              <li className="flex items-baseline justify-between py-2.5">
                <span className="font-semibold">Water</span>
                <span className="text-sm font-bold text-ink/60">To drink</span>
              </li>
            </ul>
            <p className="mt-4 rounded-xl bg-paper px-4 py-3 text-sm leading-relaxed text-ink/65">
              <strong className="text-ink">Estimated cost: {money(mealCost(meal))}</strong> for this meal, from the prices checked Nov 5, 2026. See <Link to="/ingredients" className="font-bold text-pine-700 hover:underline">Ingredients</Link> for how every cost is figured.
            </p>
            <Link to="/ingredients" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-pine-700 hover:underline">Where each ingredient comes from <ArrowRight size={15} /></Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
