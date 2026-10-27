import React from 'react';

const Row = ({ label, value, unit }) => (
  <div className="flex items-baseline justify-between border-b border-stone-100 py-2 last:border-0">
    <span className="text-sm text-stone-600">{label}</span>
    <span className="font-serif text-lg text-stone-900">{value === null || value === undefined ? 'N/A' : `${value}${unit}`}</span>
  </div>
);

const NutritionCard = ({ nutrition }) => (
  <div className="rounded-2xl border border-stone-200 bg-white p-5">
    <h2 className="font-serif text-lg text-stone-900">Nutrition per serving</h2>
    {nutrition ? (
      <>
        <div className="mt-2">
          <Row label="Calories" value={nutrition.calories} unit="" />
          <Row label="Protein" value={nutrition.protein} unit="g" />
          <Row label="Carbs" value={nutrition.carbs} unit="g" />
          <Row label="Fat" value={nutrition.fat} unit="g" />
          <Row label="Fiber" value={nutrition.fiber} unit="g" />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-stone-500">Estimated from USDA standard reference values for the listed ingredients and amounts. Your brands and portions will shift the real numbers.</p>
      </>
    ) : (
      <p className="mt-2 text-sm text-stone-600">Not published for this meal. Numbers go up only when they can be derived from reference data, never invented.</p>
    )}
  </div>
);

export default NutritionCard;
