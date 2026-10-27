import React from 'react';
import Seo from '../components/Seo';
import { SITE_NAME } from '../utils/meals';

const AboutPage = () => (
  <div className="max-w-3xl">
    <Seo title={`About - ${SITE_NAME}`} description="How Allowlist Kitchen works: a meals site where every ingredient is checked against a 513-item allowlist database before it can appear in a recipe." canonicalPath="/about" />
    <h1 className="font-serif text-4xl font-bold">How this site works</h1>
    <div className="mt-6 space-y-5 leading-relaxed text-stone-700">
      <p>
        {SITE_NAME} is a personal project by Carter Moyer. It started as a question: what can you actually cook if you take one strict food rulebook seriously, ingredient by ingredient, with no exceptions and no hand-waving?
      </p>
      <p>
        The rulebook comes from a corpus of food investigation videos, distilled into a database of 513 checked items: foods, ingredients, and specific store products, each with a verdict and the reasoning behind it. The standing rule is simple. If an item is not in the database, it is not approved, and it does not go in a meal here.
      </p>
      <h2 className="font-serif text-2xl font-bold text-stone-900">The standards every meal meets</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Beef is 100% grass-fed and grass-finished, from named producers. Chicken is certified organic. Eggs are organic and pasture-raised.</li>
        <li>Fish is wild-caught. Canned fish is limited to the specific labels that pass, because most canned tuna is packed in soybean oil.</li>
        <li>Cooking fats are beef tallow, butter, duck fat, cold-pressed olive oil, and coconut oil. Seed oils are out entirely.</li>
        <li>Sweet means raw honey or whole fruit. Sugar in every form, syrups, stevia, and artificial sweeteners are banned, which is why the frosting here is honey butter and the sprinkles are crushed freeze-dried strawberries.</li>
        <li>No soy, no corn, no food dyes, no MSG, no natural flavors, no protein powder, no chocolate.</li>
        <li>Flour, when it appears at all, is certified organic and unenriched. Pasta is single-ingredient organic lentil penne or quality Italian organic pasta.</li>
      </ul>
      <h2 className="font-serif text-2xl font-bold text-stone-900">Honest numbers</h2>
      <p>
        Nutrition panels are estimated from USDA standard reference values for the exact ingredients and amounts in each recipe, and they are labeled as estimates. Where a number cannot be derived credibly, it is left off rather than invented. Meal counts and averages on this site are computed from the meal data itself, so they cannot drift from reality.
      </p>
      <h2 className="font-serif text-2xl font-bold text-stone-900">What this site is not</h2>
      <p>
        It is not medical advice, and it does not claim the rulebook is right about everything. It is one person's eating system, applied consistently and in the open, so anyone can check a meal against the same database the meals were built from.
      </p>
    </div>
  </div>
);

export default AboutPage;
