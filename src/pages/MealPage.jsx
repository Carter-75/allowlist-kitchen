import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Clock3, Copy } from 'lucide-react';
import Missing from './Missing';
import { TALLOW_LABEL } from '../data/godDiet';
import { allMeals, mealById, mealIngredients, recipeText, useHead } from '../lib/store';

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
            <h2 className="font-display text-xl font-bold">This meal, in ounces</h2>
            <p className="mt-1 text-sm text-ink/55">Weighed. These amounts are this meal's share of the weekly pool.</p>
            <ul className="mt-4 divide-y divide-ink/10">
              {mealIngredients(meal).map((i) => (
                <li key={i.item} className="flex items-baseline justify-between py-2.5">
                  <span className="font-semibold">{i.item}</span>
                  <span className="font-display text-lg font-black text-pine-700">{i.oz} oz</span>
                </li>
              ))}
              <li className="flex items-baseline justify-between py-2.5">
                <span className="font-semibold">Beef tallow</span>
                <span className="text-sm font-bold text-ink/60">{meal.tallow === 'no' ? 'None' : meal.tallow === 'double' ? 'Double share' : meal.tallow === 'light' ? 'Greasing only' : 'Share'} of the week's 4 oz</span>
              </li>
              <li className="flex items-baseline justify-between py-2.5">
                <span className="font-semibold">Celtic sea salt</span>
                <span className="text-sm font-bold text-ink/60">On the beef as it cooks</span>
              </li>
              <li className="flex items-baseline justify-between py-2.5">
                <span className="font-semibold">Water</span>
                <span className="text-sm font-bold text-ink/60">To drink</span>
              </li>
            </ul>
            <Link to="/ingredients" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-pine-700 hover:underline">Where each ingredient comes from <ArrowRight size={15} /></Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
