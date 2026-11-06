import { useEffect } from 'react';
import { MEALS, POOL, INGREDIENTS } from '../data/godDiet';

export const SITE = 'The God Diet';
export const TAGLINE = 'One weekly pool. 21 meals. Nothing else.';
export const EMAIL = 'cartermoyer75@gmail.com';

export const allMeals = MEALS;
export const mealById = (id) => MEALS.find((m) => m.id === id) || null;
export const mealsForDay = (day) => MEALS.filter((m) => m.day === day);
export const getPool = () => POOL;
export const getIngredients = () => INGREDIENTS;

export function mealIngredients(meal) {
  const rows = [];
  if (meal.beef > 0) rows.push({ item: 'Beef organ blend', oz: meal.beef });
  if (meal.egg > 0) rows.push({ item: 'Egg', oz: meal.egg });
  rows.push({ item: 'Sardines', oz: meal.sardines });
  if (meal.cheese > 0) rows.push({ item: 'Cheese', oz: meal.cheese });
  rows.push({ item: meal.fruit, oz: meal.fruitOz });
  return rows;
}

export function recipeText(meal) {
  const L = [`${meal.name} (Day ${meal.day}, ${meal.slot})`, meal.description, '', 'Ingredients (ounces, weighed):'];
  for (const i of mealIngredients(meal)) L.push(`- ${i.item}: ${i.oz} oz`);
  L.push(`- Beef tallow: ${meal.tallow === 'no' ? 'none' : meal.tallow === 'double' ? 'double share, from the week\'s 4 oz' : meal.tallow === 'light' ? 'a light greasing, from the week\'s 4 oz' : 'a share of the week\'s 4 oz'}`);
  L.push('- Celtic sea salt, water', '', 'Steps:');
  meal.steps.forEach((s, i) => L.push(`${i + 1}. ${s}`));
  L.push('', `From ${SITE}: one of 21 meals that together use exactly the weekly pool.`);
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
