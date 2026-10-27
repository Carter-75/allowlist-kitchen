import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Gauge } from 'lucide-react';
import { getCategoryForMeal } from '../utils/meals';

const MealCard = ({ meal }) => {
  const cat = getCategoryForMeal(meal);
  return (
    <Link
      to={`/meal/${meal.id}`}
      className={`group flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md ${cat ? cat.ring : ''}`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        {cat && <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${cat.badge}`}>{cat.name}</span>}
        <span className="inline-flex items-center gap-1 text-xs text-stone-500"><Gauge size={13} /> {meal.difficulty}</span>
      </div>
      <h3 className="font-serif text-xl leading-snug text-stone-900 group-hover:underline">{meal.name}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">{meal.description}</p>
      <div className="mt-4 flex items-center gap-4 border-t border-stone-100 pt-3 text-xs text-stone-500">
        <span className="inline-flex items-center gap-1"><Clock size={13} /> {meal.time.total} min</span>
        <span className="inline-flex items-center gap-1"><Users size={13} /> Serves {meal.servings}</span>
        {meal.nutrition && <span className="ml-auto font-semibold text-stone-700">{meal.nutrition.protein}g protein</span>}
      </div>
    </Link>
  );
};

export default MealCard;
