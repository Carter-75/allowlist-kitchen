import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, ListChecks, WheatOff } from 'lucide-react';
import MealCard from '../components/MealCard';
import Seo from '../components/Seo';
import { CATEGORIES, getAllMeals, getMealsByCategory, getStats, searchMeals, SITE_NAME } from '../utils/meals';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const stats = getStats();
  const results = useMemo(() => searchMeals(query), [query]);
  const searching = query.trim().length > 0;

  return (
    <div>
      <Seo title={`${SITE_NAME} - Meals built only from allowlisted ingredients`} description="Fifty real meals built only from ingredients that pass a strict checked rulebook: grass-fed meats, pasture eggs, wild fish, raw honey, no sugar, no seed oils, no soy, no corn." canonicalPath="/" />
      <section className="rounded-3xl bg-emerald-900 px-6 py-12 text-white md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">The rule is the recipe</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl font-bold leading-tight md:text-5xl">Meals built only from ingredients that pass.</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-emerald-100">
          Every ingredient in every meal on this site has been checked against a 513-item allowlist database built from a strict food rulebook. If an ingredient is not in the database, it is not in the food. No sugar in any form, no seed oils, no soy, no corn, no dyes, no natural flavors.
        </p>
        <div className="mt-6 flex max-w-xl items-center gap-2 rounded-full bg-white p-1.5 shadow">
          <Search className="ml-2 text-stone-400" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search meals or ingredients, try salmon, honey, tallow..."
            className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400"
            aria-label="Search meals"
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <div><span className="font-serif text-2xl font-bold">{stats.totalMeals}</span><span className="ml-2 text-emerald-200">meals</span></div>
          <div><span className="font-serif text-2xl font-bold">{stats.ingredientCount}</span><span className="ml-2 text-emerald-200">allowlisted items used</span></div>
          {stats.avgProtein !== null && <div><span className="font-serif text-2xl font-bold">{stats.avgProtein}g</span><span className="ml-2 text-emerald-200">average protein per serving</span></div>}
          <div><span className="font-serif text-2xl font-bold">0</span><span className="ml-2 text-emerald-200">banned ingredients</span></div>
        </div>
      </section>

      {searching ? (
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold">{results.length} {results.length === 1 ? 'meal' : 'meals'} matching "{query}"</h2>
          {results.length === 0 ? (
            <p className="mt-4 text-stone-600">Nothing matched. If the ingredient you want is not on the allowlist, it cannot be cooked here, and that is the point of the site.</p>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((m) => <MealCard key={m.id} meal={m} />)}
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <ShieldCheck className="text-emerald-800" size={22} />
              <h3 className="mt-2 font-serif text-lg font-bold">Checked, not vibes</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">Each ingredient maps to a verdict in the database: approved, or conditional with its condition met by the exact product named in the recipe.</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <WheatOff className="text-emerald-800" size={22} />
              <h3 className="mt-2 font-serif text-lg font-bold">The hard lines</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">Beef is 100% grass-fed and grass-finished. Eggs are organic and pasture-raised. Fish is wild-caught. Sweet means raw honey or whole fruit, nothing else.</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <ListChecks className="text-emerald-800" size={22} />
              <h3 className="mt-2 font-serif text-lg font-bold">One shopping list</h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">All fifty meals draw from one pantry. The <Link to="/shopping-list" className="font-medium text-emerald-900 underline">master shopping list</Link> is generated from the meals themselves, so it can never drift from the recipes.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-bold">Browse by category</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((c) => {
                const meals = getMealsByCategory(c.id) || [];
                return (
                  <Link key={c.id} to={`/category/${c.id}`} className={`group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md ${c.ring}`}>
                    <div className={`h-1.5 w-10 rounded-full ${c.bar}`} />
                    <h3 className="mt-3 font-serif text-xl font-bold group-hover:underline">{c.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{c.blurb}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-stone-500">{meals.length} meals</p>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-2xl font-bold">Every meal</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {getAllMeals().map((m) => <MealCard key={m.id} meal={m} />)}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
