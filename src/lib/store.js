import { useEffect } from 'react';
import meals from '../data/meals.json';
import pantry from '../data/pantry.json';

export const SITE = 'Allowlist Kitchen';
export const EMAIL = 'cartermoyer75@gmail.com';

export const TYPES = [
  { id: 'breakfast', name: 'Breakfast', plural: 'Breakfasts', blurb: 'Pancakes, eggs every way, oat bowls and smoothies. Real food before school and work.', tint: 'bg-amber-100 text-amber-900', dot: 'bg-amber-500' },
  { id: 'lunch', name: 'Lunch', plural: 'Lunches', blurb: 'Wraps, sandwiches and plates built from the same small pantry. Packable, quick, filling.', tint: 'bg-lime-100 text-lime-900', dot: 'bg-lime-600' },
  { id: 'dinner', name: 'Dinner', plural: 'Dinners', blurb: 'Meatloaf, burgers, roast chicken, tenders, pasta and stew. The family table, allowlist edition.', tint: 'bg-orange-100 text-orange-900', dot: 'bg-orange-600' },
  { id: 'treats', name: 'Treat', plural: 'Treats', blurb: 'Cookies, cake, carob brownies and homemade ice cream, sweetened with raw honey or fruit only.', tint: 'bg-rose-100 text-rose-900', dot: 'bg-rose-500' },
];

const typeById = Object.fromEntries(TYPES.map((t) => [t.id, t]));
const typeByName = Object.fromEntries(TYPES.map((t) => [t.name, t]));

export const typeOf = (meal) => typeByName[meal.mealType] || null;
export const getType = (id) => typeById[id] || null;
export const allMeals = meals;
export const mealsOfType = (id) => {
  const t = getType(id);
  return t ? meals.filter((m) => m.mealType === t.name) : [];
};
export const mealById = (id) => meals.find((m) => m.id === id) || null;
export const getPantry = () => pantry;

export function filterMeals({ query = '', typeId = null, maxMinutes = null, minProtein = null } = {}) {
  let out = meals;
  if (typeId) out = mealsOfType(typeId);
  const q = query.trim().toLowerCase();
  if (q) {
    out = out.filter((m) => {
      const hay = [m.name, m.mealType, m.description, ...(m.tags || []),
        ...m.ingredients.map((i) => i.item), ...m.ingredients.map((i) => i.dbItem)].join(' ').toLowerCase();
      return q.split(/\s+/).every((w) => hay.includes(w));
    });
  }
  if (maxMinutes) out = out.filter((m) => m.time.total <= maxMinutes);
  if (minProtein) out = out.filter((m) => m.nutrition && m.nutrition.protein >= minProtein);
  return out;
}

export function stats() {
  const withN = meals.filter((m) => m.nutrition);
  const avg = (key) => Math.round((withN.reduce((s, m) => s + m.nutrition[key], 0) / withN.length) * 10) / 10;
  return {
    meals: meals.length,
    pantryItems: pantry.length,
    avgProtein: avg('protein'),
    quick: meals.filter((m) => m.time.total <= 30).length,
  };
}

export function recipeText(meal) {
  const L = [meal.name, meal.description, '',
    `${meal.mealType} | Serves ${meal.servings} | Prep ${meal.time.prep} min | Cook ${meal.time.cook} min | ${meal.difficulty}`, '',
    'Ingredients:'];
  for (const i of meal.ingredients) L.push(`- ${i.amount} ${i.item}${i.note ? ` (${i.note})` : ''}`);
  L.push('', 'Steps:');
  meal.steps.forEach((s, i) => L.push(`${i + 1}. ${s}`));
  if (meal.nutrition) {
    const n = meal.nutrition;
    L.push('', `Per serving (estimated from USDA reference values): ${n.calories} cal, ${n.protein}g protein, ${n.carbs}g carbs, ${n.fat}g fat, ${n.fiber}g fiber`);
  }
  L.push('', `From ${SITE}: every ingredient is on the allowlist.`);
  return L.join('\n');
}

export function useHead({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', 'description'); document.head.appendChild(tag); }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
