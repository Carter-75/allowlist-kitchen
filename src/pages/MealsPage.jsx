import React from 'react';
import MealTile from '../components/MealTile';
import { mealsForDay, useHead } from '../lib/store';

export default function MealsPage() {
  useHead({ title: 'The 21 Meals - The God Diet', description: 'All 21 meals of The God Diet: 7 days, morning, midday and evening, built only from the weekly pool.' });
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">The 21 meals</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        Seven days, three meals a day, never the same plate twice in the week. Every meal is built only from the weekly pool, and together the 21 drain it exactly: 80 oz beef organ blend, 74 oz egg, 21 oz sardines, 10 oz cheese, 28 oz banana, 35 oz kiwi, 28 oz avocado, and 4 oz tallow. Finish Day 7 and the week loops back to Day 1.
      </p>
      {[1, 2, 3, 4, 5, 6, 7].map((day) => (
        <div key={day} className="mt-10">
          <h2 className="font-display text-2xl font-bold">Day {day}</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mealsForDay(day).map((m) => <MealTile key={m.id} meal={m} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
