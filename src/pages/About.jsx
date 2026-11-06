import React from 'react';
import { EMAIL, useHead } from '../lib/store';

export default function About() {
  useHead({ title: 'About - The God Diet', description: 'How The God Diet works: one weekly pool, weighed in ounces, 21 meals, then loop.' });
  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">How The God Diet works</h1>
      <div className="mt-6 space-y-5 leading-relaxed text-ink/75">
        <p>
          The God Diet is Carter Moyer's fixed personal eating plan, built on November 5, 2026. It replaced the old Allowlist Kitchen site, which covered hundreds of checked ingredients and dozens of family meals. This site is only the diet: the weekly pool, the 10 ingredients, and the 21 meals. Nothing else.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">The rules</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Three meals a day, about 2,000 calories a day, 7 days, then the week loops.</li>
          <li>Everything is measured one way: ounces, weighed. Eggs and fruit are weighed too, at their average weights, so nothing is counted in pieces, cups, or tablespoons.</li>
          <li>The week is the lock. Individual meals can be big or light, but the 21 meals together must use exactly the weekly pool: 80 oz beef organ blend, 74 oz egg, 21 oz sardines, 10 oz cheese, 28 oz banana, 35 oz kiwi, 28 oz avocado, 4 oz beef tallow, plus Celtic sea salt and water.</li>
          <li>Fruit rotates by time of day: banana in the morning, kiwi at midday, avocado in the evening.</li>
          <li>Beef tallow is the only cooking fat, and only at meals where the beef cooks. The soups simmer in salted water, the meatloaf bakes in its own fat, and the one no-beef meal uses no fat at all.</li>
          <li>Salt goes on the beef while it cooks. That is the seasoning plan for the whole diet.</li>
        </ul>
        <h2 className="font-display text-2xl font-bold text-ink">The sources</h2>
        <p>
          Every ingredient has one passing source, checked against the same rulebook this kitchen has always used: a database of verdicts drawn from the Jake Tran video corpus. Carter follows those videos, he does not write the list. The beef organ blend and tallow come from US Wellness Meats, the eggs are OrgaNICK Pastures at Woodman's ($5.39 a dozen, certified organic and pasture-raised), and the cheese is Miller's Bio Farm's pasteurized pressed line, which is pasteurized and 100% grass-fed. Cheddar has no passing source, so there is no cheddar anywhere on this site.
        </p>
        <h2 className="font-display text-2xl font-bold text-ink">What this is not</h2>
        <p>
          It is not medical advice and it is not a plan written for anyone else. It is one person's fixed diet, shown in full so the week can be shopped, weighed, and cooked exactly as written. Questions: {EMAIL}.
        </p>
      </div>
    </div>
  );
}
