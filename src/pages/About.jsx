import React from 'react';
import { EMAIL, useHead } from '../lib/store';

export default function About() {
  useHead({ title: 'About - The God Diet', description: 'How The God Diet works: one weekly pool, weighed in ounces, 21 meals, then loop.' });
  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">How The God Diet works</h1>
      <div className="mt-6 space-y-5 leading-relaxed text-ink/75">
        <p>
          The God Diet is Carter Moyer's fixed personal eating plan, built on November 5, 2026. It replaced the old Allowlist Kitchen site, which covered hundreds of checked ingredients and dozens of family meals. This site is only the diet: the weekly pool, its ingredients, and the 21 meals. Nothing else.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">The rules</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Three meals a day, 7 days, then the week loops. The week comes in three sizes, about 1,500, 2,000 or 2,500 calories a day: the same 21 meals, with the portions scaled. Beef is always portioned raw in quarter-pound multiples (0.25 lb a meal, 0.5 lb for the meatloaf); at the 1,500 size that means 9 meals carry beef and the rest run on their eggs, sardines, and salmon, with adjusted recipes. The 2,500 size is Carter's own plan.</li>
          <li>Everything is measured one way: ounces, weighed. Eggs and fruit are weighed too, at their average weights, so nothing is counted in pieces, cups, or tablespoons.</li>
          <li>The week is the lock. Individual meals can be big or light, but the 21 meals together must use exactly the weekly pool. At the full 2,500 size that pool is 84 oz beef organ blend, 73.5 oz egg (42 eggs), 19 oz sardines, 10 oz cheese, 28 oz banana, 52.5 oz kiwi, 56 oz avocado, 4 oz beef tallow, plus the small superfood amounts (salmon, blueberries, broccoli, coconut water, flax, bone broth), Celtic sea salt and water. The smaller sizes scale the same pool down.</li>
          <li>Fruit rotates by time of day: banana in the morning, kiwi at midday, avocado in the evening.</li>
          <li>Beef tallow is the only cooking fat, and only at meals where the beef cooks. The soups simmer in beef bone broth, the meatloaf bakes in its own fat, and the one no-beef meal uses no fat at all.</li>
          <li>Salt goes on the beef while it cooks, and a small shelf of plain single spices, plus the checked condiments on the Ingredients page, seasons the rest.</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-ink">The sources</h2>
        <p>
          Every ingredient has one passing source, checked against the same rulebook this kitchen has always used: a database of verdicts drawn from the Jake Tran video corpus. Carter follows those videos, he does not write the list. The beef organ blend and tallow come from US Wellness Meats, the eggs ship in whole cartons and must be certified organic and pasture-raised (OrgaNICK Pastures is the reference egg, $5.39 a dozen at Woodman's), and the cheese is Miller's Bio Farm's pasteurized pressed line, which is pasteurized and 100% grass-fed. Cheddar has no passing source, so there is no cheddar anywhere on this site.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">What this is not</h2>
        <p>
          It is not medical advice and it is not a plan written for anyone else. It is one person's fixed diet, shown in full so the week can be shopped, weighed, and cooked exactly as written. Questions: {EMAIL}.
        </p>
      </div>
    </div>
  );
}
