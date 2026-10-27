import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BadgeCheck, Check, Clock3, Copy, AlertTriangle, ExternalLink, Users } from 'lucide-react';
import Missing from './Missing';
import { mealById, recipeText, typeOf, useHead, woodmansUrl } from '../lib/store';

export default function MealPage() {
  const { mealId } = useParams();
  const meal = mealById(mealId);
  const [copied, setCopied] = useState(false);
  useHead({ title: meal ? `${meal.name} - Allowlist Kitchen` : 'Allowlist Kitchen', description: meal ? meal.description : '' });
  if (!meal) return <Missing />;
  const t = typeOf(meal);
  const n = meal.nutrition;
  const hasMustard = meal.ingredients.some((i) => /mustard/i.test(i.item) || /mustard/i.test(i.dbItem));

  const copy = async () => {
    try { await navigator.clipboard.writeText(recipeText(meal)); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      {t && <Link to={`/meals/${t.id}`} className="text-sm font-bold text-pine-700 hover:underline">Back to {t.plural}</Link>}
      <div className="mt-4 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div>
          {t && <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${t.tint}`}><span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />{t.name}</span>}
          <h1 className="mt-3 font-display text-4xl font-black leading-tight md:text-5xl">{meal.name}</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">{meal.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-ink/70 ring-1 ring-ink/10"><Clock3 size={13} /> Prep {meal.time.prep} min</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-ink/70 ring-1 ring-ink/10"><Clock3 size={13} /> Cook {meal.time.cook} min</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-ink/70 ring-1 ring-ink/10"><Users size={13} /> Serves {meal.servings}</span>
            <button onClick={copy} className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-pine-900">{copied ? <Check size={13} /> : <Copy size={13} />} {copied ? 'Copied' : 'Copy recipe'}</button>
          </div>

          <h2 className="mt-10 font-display text-2xl font-bold">Ingredients</h2>
          <p className="mt-1 text-sm text-ink/55">Every line names the allowlist entry it was checked against: tap it to open that exact item on the full list, or use the Woodman's link to find it at the store. Nothing else is in this meal.</p>
          <ul className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-cream">
            {meal.ingredients.map((ing, i) => (
              <li key={i} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink/5 px-5 py-3 last:border-0">
                <span className="text-[15px]"><span className="font-bold">{ing.amount}</span> {ing.item}{ing.note ? <span className="text-ink/50"> ({ing.note})</span> : null}</span>
                <span className="inline-flex items-center gap-3">
                  <Link to={`/pantry#${ing.anchor || ''}`} className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-pine-700 hover:underline"><BadgeCheck size={12} /> {ing.dbItem}</Link>
                  <a href={woodmansUrl(ing.wm || ing.dbItem)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-ink/50 hover:text-pine-700 hover:underline">Woodman's <ExternalLink size={11} /></a>
                </span>
              </li>
            ))}
          </ul>
          {hasMustard && (
            <p className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-200"><AlertTriangle size={16} className="mt-0.5 shrink-0" /> Allergen: this meal contains mustard, a major allergen. It is declared here the same way its allowlist entry requires.</p>
          )}

          <h2 className="mt-10 font-display text-2xl font-bold">Method</h2>
          <ol className="mt-4 space-y-5">
            {meal.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-honey-400 font-display text-sm font-black text-pine-900">{i + 1}</span>
                <p className="pt-1.5 leading-relaxed text-ink/80">{step}</p>
              </li>
            ))}
          </ol>
          {meal.tags && meal.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">{meal.tags.map((tag) => <span key={tag} className="rounded-full bg-pine-50 px-3 py-1 text-xs font-semibold text-pine-800">{tag}</span>)}</div>
          )}
        </div>

        <aside className="lg:pt-24">
          <div className="rounded-2xl border border-ink/10 bg-cream p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-bold">Macros per serving</h2>
            {n ? (
              <>
                <div className="mt-4 space-y-3">
                  {[['Calories', n.calories, ''], ['Protein', n.protein, 'g'], ['Carbs', n.carbs, 'g'], ['Fat', n.fat, 'g'], ['Fiber', n.fiber, 'g']].map(([label, v, u]) => (
                    <div key={label} className="flex items-baseline justify-between border-b border-dashed border-ink/10 pb-2 last:border-0">
                      <span className="text-sm text-ink/60">{label}</span>
                      <span className="font-display text-xl font-bold">{v}{u}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink/50">Estimated from USDA standard reference values for these exact ingredients and amounts. Your brands and portions move the real numbers a little.</p>
              </>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-ink/60">Not published for this meal. A number appears here only when it can be derived from reference data for the listed amounts, never as a guess.</p>
            )}
            <div className="mt-5 rounded-xl bg-paper p-4">
              <p className="text-sm font-bold">The rule behind this meal</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">Every ingredient was checked against the allowlist database before this recipe was written. Sweet means raw honey or whole fruit. Fat means tallow, butter, duck fat, olive oil or coconut oil. That is the whole trick.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
