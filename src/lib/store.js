import { useEffect } from 'react';
import { MEALS, POOL, INGREDIENTS, BUY, DAY_NUTRITION, TALLOW_TSP, mealCost, money } from '../data/godDiet';

export const SITE = 'The God Diet';
export const TAGLINE = 'One weekly pool. 21 meals. Nothing else.';
export const EMAIL = 'cartermoyer75@gmail.com';

export const allMeals = MEALS;
export const mealById = (id) => MEALS.find((m) => m.id === id) || null;
export const mealsForDay = (day) => MEALS.filter((m) => m.day === day);
export const getPool = () => POOL;
export const getIngredients = () => INGREDIENTS;

const EGG_PRACTICAL = { 3.5: '2 eggs', 5.25: '3 eggs' };
const CHEESE_PRACTICAL = { 0.5: 'a thumb-sized piece', 1: 'two thumb-sized pieces' };
const FRUIT_PRACTICAL = { Banana: '1 banana', Kiwi: '2 kiwis', Avocado: '1 small avocado' };
const BEEF_PRACTICAL = { 4: '1/4 lb', 8: '1/2 lb' };

export function mealIngredients(meal) {
  const rows = [];
  if (meal.beef > 0) rows.push({ item: 'Beef organ blend', oz: meal.beef, practical: BEEF_PRACTICAL[meal.beef] || 'weighed', buy: BUY['Beef organ blend'] });
  if (meal.egg > 0) rows.push({ item: 'Egg', oz: meal.egg, practical: EGG_PRACTICAL[meal.egg] || 'weighed', buy: BUY['Egg'] });
  rows.push({ item: 'Sardines', oz: meal.sardines, practical: '1/3 of a tin, 4 fish', buy: BUY['Sardines'] });
  if (meal.cheese > 0) rows.push({ item: 'Cheese', oz: meal.cheese, practical: CHEESE_PRACTICAL[meal.cheese] || 'weighed', buy: BUY['Cheese'] });
  rows.push({ item: meal.fruit, oz: meal.fruitOz, practical: FRUIT_PRACTICAL[meal.fruit], buy: BUY[meal.fruit] });
  if (meal.ketchup) rows.push({ item: 'Ketchup', oz: null, practical: meal.ketchup === 1 ? '1 tablespoon' : `${meal.ketchup} tablespoons`, buy: BUY['Ketchup'] });
  if (meal.mayo) rows.push({ item: 'Mayo (homemade)', oz: null, practical: meal.mayo === 1 ? '1 tablespoon' : `${meal.mayo} tablespoons`, buy: BUY['Mayo (homemade)'] });
  if (meal.mustard) rows.push({ item: 'Mustard', oz: null, practical: meal.mustard === 1 ? '1 teaspoon' : `${meal.mustard} teaspoons`, buy: BUY['Mustard'] });
  if (meal.seasoning) rows.push({ item: meal.seasoning, oz: null, practical: 'to taste', buy: BUY['Seasonings'] });
  return rows;
}

export { mealCost, money, TALLOW_TSP, BUY };

export function recipeText(meal) {
  const L = [`${meal.name} (Day ${meal.day}, ${meal.slot})`, meal.description, '', 'Ingredients (ounces first, then the rounded amount to actually use):'];
  for (const i of mealIngredients(meal)) L.push(i.oz !== null ? `- ${i.item}: ${i.oz} oz (${i.practical})` : `- ${i.item}: ${i.practical}`);
  L.push(`- Beef tallow: ${TALLOW_TSP[meal.tallow]}${meal.tallow === 'no' ? '' : ', from the week\'s 4 oz'}`);
  L.push('- Celtic sea salt: a pinch, on the beef as it cooks', '- Water: to drink', '', 'Steps:');
  meal.steps.forEach((s, i) => L.push(`${i + 1}. ${s}`));
  L.push('', `Estimated cost of this meal: ${money(mealCost(meal))} (estimates, prices checked Nov 5, 2026).`, '', `From ${SITE}: one of 21 meals that together use exactly the weekly pool. Daily average across the week: about ${DAY_NUTRITION.kcal} cal, ${DAY_NUTRITION.protein}g protein, ${DAY_NUTRITION.fat}g fat, ${DAY_NUTRITION.carbs}g carbs (USDA-based estimates).`);
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
