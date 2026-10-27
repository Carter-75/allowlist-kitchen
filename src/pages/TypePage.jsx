import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MealTile from '../components/MealTile';
import Missing from './Missing';
import { getType, mealsOfType, useHead } from '../lib/store';

export default function TypePage() {
  const { typeId } = useParams();
  const t = getType(typeId);
  useHead({ title: t ? `${t.plural} - Allowlist Kitchen` : 'Allowlist Kitchen', description: t ? t.blurb : '' });
  if (!t) return <Missing />;
  const meals = mealsOfType(typeId);
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <Link to="/" className="text-sm font-bold text-pine-700 hover:underline">All meals</Link>
      <h1 className="mt-3 font-display text-4xl font-black md:text-5xl">{t.plural}</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">{t.blurb}</p>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-ink/40">{meals.length} meals, every ingredient on the list</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{meals.map((m) => <MealTile key={m.id} meal={m} />)}</div>
    </div>
  );
}
