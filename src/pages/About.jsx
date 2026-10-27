import React from 'react';
import { EMAIL, useHead } from '../lib/store';

export default function About() {
  useHead({ title: 'About - Allowlist Kitchen', description: 'How Allowlist Kitchen works: family meals built only from a checked allowlist of ingredients.' });
  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">How this kitchen works</h1>
      <div className="mt-6 space-y-5 leading-relaxed text-ink/75">
        <p>
          Allowlist Kitchen is a personal project by Carter Moyer. It exists to answer a practical question: what does a family actually eat if every single ingredient has to earn its place on a checked list first?
        </p>
        <p>
          The list behind the site is a database of hundreds of checked items: foods, ingredients, and specific store products, each with a verdict and the reasoning behind it. The verdicts come from a corpus of food investigation videos, worked through item by item. Where the corpus says nothing about an ingredient, the item stays unapproved until it is checked against health evidence, with the same standard applied every time: safe at real food amounts, with no serious organ-specific harm signal. Items that fail get a banned verdict with the reason recorded, the way cassia cinnamon failed on its liver load while Ceylon cinnamon passed.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">The house rules</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Beef is 100% grass-fed and grass-finished. Chicken is certified organic. Eggs are organic and pasture-raised. Fish is wild-caught.</li>
          <li>Sweet means raw honey or whole fruit. Sugar in every form is out, along with syrups, stevia, and every artificial sweetener. Frosting here is honey butter, and it is softer than bakery frosting. That is the honest trade.</li>
          <li>Cooking fats are beef tallow, butter, duck fat, cold-pressed olive oil, and coconut oil. Seed oils do not exist in this kitchen.</li>
          <li>No soy, no corn, no chocolate, no food dyes, no MSG, no natural flavors, no protein powder.</li>
          <li>Chocolate is banned by the list, so the brownies are carob and are labeled carob. Carob is a whole fruit pod, zero caffeine, and it passed on the same basis as dates, which were already on the list.</li>
          <li>Macros are estimated from USDA reference values for the exact amounts in each recipe and labeled as estimates. If a number cannot be derived, it is left off.</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-ink">What this is not</h2>
        <p>
          It is not medical advice and it does not claim the list is the final word on nutrition. It is one family's eating system, applied without exceptions and shown in the open, list and all, so anyone can check a meal against the same database it was built from. Questions or corrections: {EMAIL}.
        </p>
      </div>
    </div>
  );
}
