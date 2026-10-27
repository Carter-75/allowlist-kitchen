import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import { SITE, TYPES } from '../lib/store';

const linkCls = ({ isActive }) =>
  `px-3 py-2 text-sm font-semibold rounded-lg transition ${isActive ? 'bg-pine-800 text-white' : 'text-ink/80 hover:bg-pine-50'}`;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-ink/10 bg-cream/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-pine-800 text-white"><ChefHat size={20} /></span>
            <span className="leading-none">
              <span className="block font-display text-xl font-black tracking-tight">{SITE}</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">If it is not on the list, it is not in the meal</span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {TYPES.map((t) => <NavLink key={t.id} to={`/meals/${t.id}`} className={linkCls}>{t.plural}</NavLink>)}
            <NavLink to="/pantry" className={linkCls}>The List</NavLink>
            <NavLink to="/about" className={linkCls}>About</NavLink>
          </nav>
          <button className="ml-auto rounded-lg p-2 hover:bg-pine-50 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 pb-4 md:hidden">
            {TYPES.map((t) => <NavLink key={t.id} to={`/meals/${t.id}`} className={linkCls} onClick={() => setOpen(false)}>{t.plural}</NavLink>)}
            <NavLink to="/pantry" className={linkCls} onClick={() => setOpen(false)}>The List</NavLink>
            <NavLink to="/about" className={linkCls} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={linkCls} onClick={() => setOpen(false)}>Contact</NavLink>
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
            A family recipe site with one rule: every ingredient comes from a checked allowlist of real foods. No sugar, no seed oils, no soy, no corn, no dyes, no shortcuts. A personal project by Carter Moyer.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="font-display font-bold">Meals</span>
          {TYPES.map((t) => <Link key={t.id} to={`/meals/${t.id}`} className="text-pine-100/80 hover:text-white hover:underline">{t.plural}</Link>)}
        </nav>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="font-display font-bold">The project</span>
          <Link to="/pantry" className="text-pine-100/80 hover:text-white hover:underline">The allowlist</Link>
          <Link to="/about" className="text-pine-100/80 hover:text-white hover:underline">How it works</Link>
          <Link to="/contact" className="text-pine-100/80 hover:text-white hover:underline">Contact</Link>
          <Link to="/privacy" className="text-pine-100/80 hover:text-white hover:underline">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
