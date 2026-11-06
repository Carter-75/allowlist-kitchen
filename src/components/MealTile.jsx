import React from 'react';
import { Link } from 'react-router-dom';
import { Clock3 } from 'lucide-react';
import { TALLOW_LABEL, mealCost, money } from '../data/godDiet';

const SLOT_TINT = {
  Morning: 'bg-amber-100 text-amber-900',
  Midday: 'bg-lime-100 text-lime-900',
  Evening: 'bg-orange-100 text-orange-900',
};

export default function MealTile({ meal }) {
  return (
    <Link to={`/meal/${meal.id}`} className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-[0_1px_0_rgba(34,48,31,0.06)] transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center justify-between px-5 pt-4">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${SLOT_TINT[meal.slot]}`}>Day {meal.day} - {meal.slot}</span>
        <span className="text-[11px] font-bold uppercase tracking-wide text-ink/40">{TALLOW_LABEL[meal.tallow]}</span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
        <h3 className="font-display text-[1.35rem] font-bold leading-snug group-hover:underline">{meal.name}</h3>
        <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-ink/65">{meal.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-bold text-ink/60">
          {meal.beef > 0 && <span className="rounded-full bg-paper px-2 py-1">Beef {meal.beef} oz</span>}
          {meal.egg > 0 && <span className="rounded-full bg-paper px-2 py-1">Egg {meal.egg} oz</span>}
          {meal.sardines > 0 && <span className="rounded-full bg-paper px-2 py-1">Sardines {meal.sardines} oz</span>}
          {meal.salmon > 0 && <span className="rounded-full bg-paper px-2 py-1">Salmon {meal.salmon} oz</span>}
          {meal.cheese > 0 && <span className="rounded-full bg-paper px-2 py-1">Cheese {meal.cheese} oz</span>}
          <span className="rounded-full bg-paper px-2 py-1">{meal.fruit} {meal.fruitOz} oz</span>
        </div>
        <div className="mt-4 flex items-center gap-4 text-xs font-medium text-ink/55">
          <span className="inline-flex items-center gap-1"><Clock3 size={13} /> {meal.minutes} min</span>
          <span>Est. {money(mealCost(meal))}</span>
          <span className="ml-auto font-bold text-pine-700">Cook it</span>
        </div>
      </div>
    </Link>
  );
}
