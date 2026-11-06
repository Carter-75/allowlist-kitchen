import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Repeat, Scale, ShoppingBasket } from 'lucide-react';
import MealTile from '../components/MealTile';
import { WEEK_COST, ingredientWeekCost, money } from '../data/godDiet';
import { getPool, mealsForDay, useHead } from '../lib/store';

export default function Home() {
  useHead({ title: 'The God Diet - One Weekly Pool, 21 Meals', description: 'A fixed diet: one weekly pool of ingredients in ounces, 21 different meals, about 2,000 calories a day, then the week loops.' });
  const pool = getPool();
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="rounded-[2rem] bg-pine-800 px-6 py-12 text-white md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-honey-400">One pool. Every meal.</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-black leading-[1.05] md:text-6xl">The same ingredients, 21 different meals, every week.</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-pine-50/85">
            The God Diet is a fixed eating plan. One weekly pool of ingredients, everything weighed in ounces, made into 21 different meals across 7 days, about 2,000 calories a day. When the week ends, it loops back to Day 1. There is nothing on this site that is not part of that pool.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <Link to="/meals" className="inline-flex items-center gap-1.5 rounded-full bg-honey-400 px-4 py-2 text-sm font-bold text-pine-900 transition hover:bg-honey-500">See the 21 meals <ArrowRight size={15} /></Link>
            <Link to="/ingredients" className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20">Ingredients and sources</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            <p><span className="font-display text-3xl font-black">21</span> <span className="text-sm text-pine-50/75">meals a week</span></p>
            <p><span className="font-display text-3xl font-black">10</span> <span className="text-sm text-pine-50/75">ingredients, total</span></p>
            <p><span className="font-display text-3xl font-black">~2,000</span> <span className="text-sm text-pine-50/75">calories a day</span></p>
            <p><span className="font-display text-3xl font-black">7</span> <span className="text-sm text-pine-50/75">days, then loop</span></p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-black">The weekly pool</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink/60">This is everything you buy and eat in a week. All amounts are ounces, weighed. The 21 meals together use exactly this, no more and no less.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-pine-700"><ShoppingBasket size={16} /> The whole shopping list</span>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-cream">
          {pool.map((p, i) => (
            <div key={p.item} className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 px-5 py-3.5 ${i % 2 ? 'bg-paper/60' : ''}`}>
              <span className="min-w-44 font-display text-lg font-bold">{p.item}</span>
              <span className="font-display text-lg font-black text-pine-700">{p.oz === null ? 'as needed' : `${p.oz} oz`}</span>
              <span className="min-w-52 flex-1 text-sm text-ink/60">{p.note}</span>
              <span className="text-sm font-bold text-ink/50">{ingredientWeekCost(p.item === 'Egg' ? 'Eggs' : p.item) ? `est. ${money(ingredientWeekCost(p.item === 'Egg' ? 'Eggs' : p.item))}/wk` : ''}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-2xl bg-pine-800 px-5 py-4 text-white">
          <strong className="font-display text-xl">Estimated cost of the whole week: {money(WEEK_COST)}</strong>
          <span className="mt-1 block text-sm text-pine-50/80">About {money(WEEK_COST / 7)} a day, {money(WEEK_COST / 21)} a meal, at prices checked Nov 5, 2026. Estimates, not quotes. <Link to="/ingredients" className="font-bold text-honey-400 hover:underline">How each cost is figured</Link></span>
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-ink/10 bg-cream p-5">
            <Scale className="text-pine-700" size={20} />
            <h3 className="mt-2 font-display text-lg font-bold">The week is the lock</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">Meals can swing in size. A light soup morning is balanced by a beef-heavy evening, and the no-beef meal gives its beef to that night's meatloaf. What cannot change is the week total.</p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-cream p-5">
            <Repeat className="text-pine-700" size={20} />
            <h3 className="mt-2 font-display text-lg font-bold">Fruit rotates by slot</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">Banana in the morning, kiwi at midday, avocado in the evening. Every day, every week, the same rotation.</p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-cream p-5">
            <ShoppingBasket className="text-pine-700" size={20} />
            <h3 className="mt-2 font-display text-lg font-bold">Tallow only with beef</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">Beef tallow is the only cooking fat, 4 oz a week, and only at meals where the beef cooks. Soups, the meatloaf, and the no-beef meal use none.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-3xl font-black">The week at a glance</h2>
          <Link to="/meals" className="inline-flex items-center gap-1 text-sm font-bold text-pine-700 hover:underline">All 21 meals <ArrowRight size={15} /></Link>
        </div>
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div key={day} className="mt-8">
            <h3 className="font-display text-xl font-bold text-ink/70">Day {day}</h3>
            <div className="mt-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mealsForDay(day).map((m) => <MealTile key={m.id} meal={m} />)}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
