import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BadgeCheck, AlertCircle, ExternalLink, Search } from 'lucide-react';
import { getAllowlist, mealByName, useHead, woodmansUrl } from '../lib/store';

const KIND_ORDER = ['Product', 'Food', 'Ingredient', 'Farm', 'Brand'];
const KIND_TITLES = {
  Product: 'Products (exact brand and item)',
  Food: 'Foods',
  Ingredient: 'Ingredients',
  Farm: 'Farms and ranches',
  Brand: 'Brands',
};

export default function PantryPage() {
  useHead({ title: 'The Full List - Allowlist Kitchen', description: 'Everything allowed: every approved and conditional food, ingredient, product, brand and farm on the allowlist, each linked to Woodman\'s.' });
  const items = getAllowlist();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [flash, setFlash] = useState('');

  useEffect(() => {
    const id = (location.hash || '').replace('#', '');
    if (!id) return;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) { el.scrollIntoView({ block: 'start', behavior: 'smooth' }); setFlash(id); }
    }, 80);
    return () => clearTimeout(t);
  }, [location.hash]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((p) => (p.name + ' ' + p.kind + ' ' + p.note).toLowerCase().includes(q));
  }, [items, query]);

  const groups = KIND_ORDER.map((kind) => ({ kind, rows: filtered.filter((p) => p.kind === kind) })).filter((g) => g.rows.length > 0);
  const usedCount = items.filter((p) => p.usedIn && p.usedIn.length > 0).length;

  return (
    <div className="mx-auto max-w-4xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">The full list</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        Everything allowed, all of it: {items.length} entries checked one by one against the rulebook, covering foods, ingredients, exact products, brands, and farms. {usedCount} of them are at work in the recipes on this site. Anything that is not on this list is not approved, and that includes everything that was checked and failed. Every entry links out to a Woodman's search for that item.
      </p>
      <div className="relative mt-6 max-w-md">
        <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search the list: eggs, honey, penne..." aria-label="Search the full list" className="w-full rounded-full border border-ink/15 bg-cream py-2.5 pl-10 pr-4 text-sm outline-none ring-pine-600/30 placeholder:text-ink/35 focus:ring-4" />
      </div>
      {groups.length === 0 && <p className="mt-8 text-sm text-ink/60">Nothing on the list matches that search.</p>}
      {groups.map(({ kind, rows }) => (
        <section key={kind} className="mt-10">
          <h2 className="font-display text-2xl font-bold">{KIND_TITLES[kind]} ({rows.length})</h2>
          <ul className="mt-4 divide-y divide-ink/5 overflow-hidden rounded-2xl border border-ink/10 bg-cream">
            {rows.map((p) => (
              <li key={p.anchor} id={p.anchor} className={`scroll-mt-28 px-5 py-4 transition-colors duration-700 ${flash === p.anchor ? 'bg-honey-100' : ''}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="flex items-center gap-2 font-bold">
                    {p.verdict === 'APPROVED' ? <BadgeCheck size={16} className="shrink-0 text-pine-700" /> : <AlertCircle size={16} className="shrink-0 text-honey-600" />}
                    {p.name}
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${p.verdict === 'APPROVED' ? 'bg-pine-50 text-pine-800' : 'bg-amber-100 text-amber-900'}`}>{p.verdict === 'APPROVED' ? 'Approved' : 'Conditional'}</span>
                  </p>
                  <a href={woodmansUrl(p.search)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-pine-700 hover:underline">Woodman's <ExternalLink size={11} /></a>
                </div>
                {p.note && <p className="mt-1 pl-6 text-sm leading-relaxed text-ink/60">{p.note}</p>}
                {p.usedIn && p.usedIn.length > 0 && (
                  <p className="mt-1.5 pl-6 text-xs font-semibold text-ink/45">Used in: {p.usedIn.map((name, i) => {
                    const meal = mealByName(name);
                    return <span key={name}>{i > 0 ? ', ' : ''}{meal ? <Link to={`/meal/${meal.id}`} className="text-pine-700 hover:underline">{name}</Link> : name}</span>;
                  })}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <p className="mt-10 text-sm leading-relaxed text-ink/55">Conditional means cleared only in the exact form stated in the entry. Outside that form, the item is out. The Woodman's links open a search at the Onalaska store; a farm or brand entry searches by name, since those are bought farm-direct or by the product, not off a Woodman's shelf under the farm's own name.</p>
    </div>
  );
}
