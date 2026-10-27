import React from 'react';
import { Link } from 'react-router-dom';
import { Clock3, Users } from 'lucide-react';
import { typeOf } from '../lib/store';

export default function MealTile({ meal }) {
  const t = typeOf(meal);
  const n = meal.nutrition;
  return (
    <Link to={`/meal/${meal.id}`} className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-cream shadow-[0_1px_0_rgba(34,48,31,0.06)] transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center justify-between px-5 pt-4">
        {t && <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${t.tint}`}><span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />{t.name}</span>}
        <span className="text-[11px] font-bold uppercase tracking-wide text-ink/40">{meal.difficulty}</span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
        <h3 className="font-display text-[1.35rem] font-bold leading-snug group-hover:underline">{meal.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink/65">{meal.description}</p>
        {n && (
          <div className="mt-4 grid grid-cols-4 divide-x divide-ink/10 rounded-xl bg-paper py-2 text-center">
            <div><p className="font-display text-base font-bold leading-none">{n.protein}g</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-ink/45">protein</p></div>
            <div><p className="font-display text-base font-bold leading-none">{n.calories}</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-ink/45">cal</p></div>
            <div><p className="font-display text-base font-bold leading-none">{n.carbs}g</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-ink/45">carbs</p></div>
            <div><p className="font-display text-base font-bold leading-none">{n.fat}g</p><p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-ink/45">fat</p></div>
          </div>
        )}
        <div className="mt-4 flex items-center gap-4 text-xs font-medium text-ink/55">
          <span className="inline-flex items-center gap-1"><Clock3 size={13} /> {meal.time.total} min</span>
          <span className="inline-flex items-center gap-1"><Users size={13} /> Serves {meal.servings}</span>
          <span className="ml-auto font-bold text-pine-700">Cook it</span>
        </div>
      </div>
    </Link>
  );
}
