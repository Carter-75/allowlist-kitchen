import React from 'react';
import { BadgeCheck, AlertCircle } from 'lucide-react';
import { getPantry, useHead } from '../lib/store';

export default function PantryPage() {
  useHead({ title: 'The List - Allowlist Kitchen', description: 'The exact allowlist items the meals on this site are built from, with their verdicts and conditions.' });
  const pantry = getPantry();
  const approved = pantry.filter((p) => p.verdict === 'APPROVED');
  const conditional = pantry.filter((p) => p.verdict === 'CONDITIONAL');
  const Section = ({ title, items, blurb }) => (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/60">{blurb}</p>
      <ul className="mt-4 divide-y divide-ink/5 overflow-hidden rounded-2xl border border-ink/10 bg-cream">
        {items.map((p) => (
          <li key={p.name} className="px-5 py-4">
            <p className="flex items-center gap-2 font-bold">{p.verdict === 'APPROVED' ? <BadgeCheck size={16} className="shrink-0 text-pine-700" /> : <AlertCircle size={16} className="shrink-0 text-honey-600" />} {p.name}</p>
            {p.note && <p className="mt-1 pl-6 text-sm leading-relaxed text-ink/60">{p.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
  return (
    <div className="mx-auto max-w-4xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">The list</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        This is the whole pantry the meals draw from: {pantry.length} entries from a checked database of foods, ingredients and specific products. The database itself holds hundreds of verdicts including everything that failed; what is shown here is only what the recipes actually use. An item that is not in the database has no verdict, and no verdict means it does not get cooked.
      </p>
      <Section title={`Approved (${approved.length})`} items={approved} blurb="Checked and cleared as named. The form matters: the eggs are the organic pasture-raised ones, the olive oil is the 100% California bottle, the penne is the 100% lentil box." />
      <Section title={`Conditional (${conditional.length})`} items={conditional} blurb="Cleared only in the exact form stated. Chicken counts when it is certified organic. Cinnamon counts when it is Ceylon. Rice counts when it is soaked white rice. Outside the stated form, the item is out." />
    </div>
  );
}
