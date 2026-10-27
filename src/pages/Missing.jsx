import React from 'react';
import { Link } from 'react-router-dom';
import { useHead } from '../lib/store';

export default function Missing() {
  useHead({ title: 'Not on the list - Allowlist Kitchen', description: 'That page does not exist.' });
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <p className="font-display text-7xl font-black text-ink/15">404</p>
      <h1 className="mt-2 font-display text-3xl font-black">That page is not on the list.</h1>
      <p className="mx-auto mt-3 max-w-md text-ink/60">And things that are not on the list do not get served here. Everything that does exist starts at the front page.</p>
      <Link to="/" className="mt-7 inline-block rounded-full bg-pine-800 px-6 py-2.5 text-sm font-bold text-white hover:bg-pine-900">Back to the meals</Link>
    </div>
  );
}
