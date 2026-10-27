import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check, Clock, Copy, Users, Gauge, ListChecks } from 'lucide-react';
import NutritionCard from '../components/NutritionCard';
import Seo from '../components/Seo';
import NotFoundPage from './NotFoundPage';
import { getCategoryForMeal, getMealById, mealToText, SITE_NAME } from '../utils/meals';

const MealDetailPage = () => {
  const { mealId } = useParams();
  const meal = getMealById(mealId);
  const [copied, setCopied] = useState(false);
  if (!meal) return <NotFoundPage />;
  const cat = getCategoryForMeal(meal);

  const copyRecipe = async () => {
    try {
      await navigator.clipboard.writeText(mealToText(meal));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <Seo title={`${meal.name} - ${SITE_NAME}`} description={meal.description} canonicalPath={`/meal/${meal.id}`} type="article" />
      {cat && <Link to={`/category/${cat.id}`} className="text-sm font-medium text-emerald-900 hover:underline">Back to {cat.name}</Link>}
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          {cat && <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${cat.badge}`}>{cat.name}</span>}
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight">{meal.name}</h1>
          <p className="mt-3 leading-relaxed text-stone-600">{meal.description}</p>
        </div>
        <button onClick={copyRecipe} className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900">
          {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy recipe'}
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-5 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm text-stone-700">
        <span className="inline-flex items-center gap-1.5"><Clock size={15} /> Prep {meal.time.prep} min</span>
        <span className="inline-flex items-center gap-1.5"><Clock size={15} /> Cook {meal.time.cook} min</span>
        <span className="inline-flex items-center gap-1.5"><Clock size={15} /> Total {meal.time.total} min</span>
        <span className="inline-flex items-center gap-1.5"><Users size={15} /> Serves {meal.servings}</span>
        <span className="inline-flex items-center gap-1.5"><Gauge size={15} /> {meal.difficulty}</span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="flex items-center gap-2 font-serif text-2xl font-bold"><ListChecks size={20} /> Ingredients</h2>
          <p className="mt-1 text-sm text-stone-500">The right column is the exact allowlist entry each ingredient was checked against.</p>
          <ul className="mt-4 divide-y divide-stone-100 rounded-2xl border border-stone-200 bg-white">
            {meal.ingredients.map((ing, i) => (
              <li key={i} className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-3">
                <span className="text-sm text-stone-800"><span className="font-semibold">{ing.amount}</span> {ing.item}{ing.note ? <span className="text-stone-500"> ({ing.note})</span> : null}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-emerald-800">{ing.dbItem}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl font-bold">Steps</h2>
          <ol className="mt-4 space-y-4">
            {meal.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-800 font-serif text-sm font-bold text-white">{i + 1}</span>
                <p className="pt-1 leading-relaxed text-stone-700">{step}</p>
              </li>
            ))}
          </ol>

          {meal.tags && meal.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {meal.tags.map((t) => <span key={t} className="rounded-full bg-stone-200/70 px-3 py-1 text-xs font-medium text-stone-700">{t}</span>)}
            </div>
          )}
        </div>
        <aside>
          <NutritionCard nutrition={meal.nutrition} />
        </aside>
      </div>
    </div>
  );
};

export default MealDetailPage;
