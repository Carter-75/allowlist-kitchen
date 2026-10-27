import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChefHat, Menu, X } from 'lucide-react';
import { CATEGORIES, SITE_NAME } from '../utils/meals';

const navLinkClass = ({ isActive }) =>
  `rounded-full px-3 py-1.5 text-sm font-medium transition ${isActive ? 'bg-emerald-800 text-white' : 'text-stone-700 hover:bg-stone-200/70'}`;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-[#faf7f1] text-stone-900">
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#faf7f1]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-white"><ChefHat size={19} /></span>
            <span className="font-serif text-xl font-bold tracking-tight">{SITE_NAME}</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {CATEGORIES.map((c) => (
              <NavLink key={c.id} to={`/category/${c.id}`} className={navLinkClass}>{c.name}</NavLink>
            ))}
            <NavLink to="/shopping-list" className={navLinkClass}>Shopping List</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
          </nav>
          <button className="ml-auto rounded-lg p-2 text-stone-700 hover:bg-stone-200/70 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-stone-200 px-4 py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {CATEGORIES.map((c) => (
                <NavLink key={c.id} to={`/category/${c.id}`} className={navLinkClass} onClick={() => setOpen(false)}>{c.name}</NavLink>
              ))}
              <NavLink to="/shopping-list" className={navLinkClass} onClick={() => setOpen(false)}>Shopping List</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
            </div>
          </nav>
        )}
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-stone-600 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-base font-bold text-stone-900">{SITE_NAME}</p>
            <p className="mt-1 leading-relaxed">Every meal here is built only from ingredients on a checked allowlist: no sugar, no seed oils, no soy, no corn, no dyes, no shortcuts. A personal project by Carter Moyer.</p>
          </div>
          <nav className="flex flex-col gap-1.5">
            <Link to="/shopping-list" className="hover:underline">Master shopping list</Link>
            <Link to="/about" className="hover:underline">How the allowlist works</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
