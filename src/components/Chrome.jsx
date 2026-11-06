import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Beef, Menu, X } from 'lucide-react';
import { SITE, TAGLINE } from '../lib/store';
import { PLAN_TIERS, setTier, useTier } from '../lib/plan';

export function PlanSwitcher({ dark = false }) {
  const tier = useTier();
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Plan size">
      <span className={`text-[11px] font-bold uppercase tracking-wide ${dark ? 'text-pine-50/70' : 'text-ink/50'}`}>Plan</span>
      {PLAN_TIERS.map((t) => (
        <button
          key={t}
          onClick={() => setTier(t)}
          aria-pressed={tier === t}
          className={`rounded-full px-3 py-1 text-xs font-bold transition ${tier === t ? 'bg-pine-800 text-white' : dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'}`}
        >
          {t.toLocaleString()}
        </button>
      ))}
      <span className={`hidden text-[11px] font-semibold sm:inline ${dark ? 'text-pine-50/70' : 'text-ink/50'}`}>cal / day</span>
    </div>
  );
}

const linkCls = ({ isActive }) =>
  `px-3 py-2 text-sm font-semibold rounded-lg transition ${isActive ? 'bg-pine-800 text-white' : 'text-ink/80 hover:bg-pine-50'}`;

const NAV = [
  { to: '/', label: 'The Week' },
  { to: '/meals', label: '21 Meals' },
  { to: '/ingredients', label: 'Ingredients' },
  { to: '/orders', label: 'Orders' },
  { to: '/about', label: 'About' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-ink/10 bg-cream/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-pine-800 text-white"><Beef size={20} /></span>
            <span className="leading-none">
              <span className="block font-display text-xl font-black tracking-tight">{SITE}</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">{TAGLINE}</span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} className={linkCls}>{n.label}</NavLink>)}
          </nav>
          <button className="ml-auto rounded-lg p-2 hover:bg-pine-50 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-ink/5 py-2">
          <span className="text-[11px] font-semibold text-ink/50">Same 21 meals, three sizes. Pick yours:</span>
          <PlanSwitcher />
        </div>
        {open && (
          <nav className="flex flex-col gap-1 pb-4 md:hidden">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} className={linkCls} onClick={() => setOpen(false)}>{n.label}</NavLink>)}
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-pine-900 text-pine-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold">{SITE}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-pine-100/80">
            One fixed weekly pool of ingredients, weighed in ounces, made into 21 different meals, then the week loops. Three sizes of the same week: about 1,500, 2,000, or 2,500 calories a day. A personal project by Carter Moyer.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="font-display font-bold">The diet</span>
          <Link to="/" className="text-pine-100/80 hover:text-white hover:underline">The weekly pool</Link>
          <Link to="/meals" className="text-pine-100/80 hover:text-white hover:underline">All 21 meals</Link>
          <Link to="/ingredients" className="text-pine-100/80 hover:text-white hover:underline">Ingredients and sources</Link>
          <Link to="/orders" className="text-pine-100/80 hover:text-white hover:underline">Order calendar</Link>
        </nav>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="font-display font-bold">The project</span>
          <Link to="/about" className="text-pine-100/80 hover:text-white hover:underline">How it works</Link>
          <Link to="/privacy" className="text-pine-100/80 hover:text-white hover:underline">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
