import mealsData from '../data/meals.json';

export const SITE_NAME = 'Allowlist Kitchen';
export const CONTACT_EMAIL = 'cartermoyer75@gmail.com';

export const CATEGORIES = [
  { id: 'beef-red-meat', name: 'Beef & Red Meat', blurb: 'Grass-fed and grass-finished beef, bison, lamb, pork, venison, duck and turkey, cooked in tallow, butter or duck fat.', badge: 'bg-red-100 text-red-900', bar: 'bg-red-700', ring: 'hover:border-red-300' },
  { id: 'chicken-eggs', name: 'Chicken & Eggs', blurb: 'Certified organic chicken and organic pasture-raised eggs, from a whole roast bird to a five-minute omelette.', badge: 'bg-amber-100 text-amber-900', bar: 'bg-amber-600', ring: 'hover:border-amber-300' },
  { id: 'seafood', name: 'Seafood', blurb: 'Wild-caught fish and shellfish only, plus the two canned-fish labels that pass the rulebook.', badge: 'bg-sky-100 text-sky-900', bar: 'bg-sky-700', ring: 'hover:border-sky-300' },
  { id: 'pasta-grains', name: 'Pasta & Grains', blurb: 'Single-ingredient lentil penne, Italian organic pasta, soaked white rice and organic oats. No US fortified flour anywhere.', badge: 'bg-orange-100 text-orange-900', bar: 'bg-orange-600', ring: 'hover:border-orange-300' },
  { id: 'wraps-handhelds', name: 'Wraps & Handhelds', blurb: 'Built on NUCO coconut wraps, the only wrap that passes: three ingredients, no gums, no seed oils.', badge: 'bg-emerald-100 text-emerald-900', bar: 'bg-emerald-700', ring: 'hover:border-emerald-300' },
  { id: 'sweets-snacks', name: 'Sweets & Snacks', blurb: 'Sweetened only with raw honey or whole fruit. No sugar in any form, no stevia, no syrups, no chocolate.', badge: 'bg-pink-100 text-pink-900', bar: 'bg-pink-600', ring: 'hover:border-pink-300' },
];

const categoryByName = Object.fromEntries(CATEGORIES.map((c) => [c.name, c]));
const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

export const getCategoryById = (id) => categoryById[id] || null;
export const getCategoryForMeal = (meal) => categoryByName[meal.category] || null;

export const getAllMeals = () => mealsData;

export const getMealsByCategory = (categoryId) => {
  const cat = getCategoryById(categoryId);
  if (!cat) return null;
  return mealsData.filter((m) => m.category === cat.name);
};

export const getMealById = (id) => mealsData.find((m) => m.id === id) || null;

export const searchMeals = (query) => {
  const q = (query || '').trim().toLowerCase();
  if (!q) return mealsData;
  return mealsData.filter((m) => {
    const hay = [
      m.name,
      m.category,
      m.description,
      ...(m.tags || []),
      ...m.ingredients.map((i) => i.item),
      ...m.ingredients.map((i) => i.dbItem),
    ].join(' ').toLowerCase();
    return q.split(/\s+/).every((word) => hay.includes(word));
  });
};

export const getStats = () => {
  const withProtein = mealsData.filter((m) => m.nutrition && typeof m.nutrition.protein === 'number');
  const avgProtein = withProtein.length
    ? Math.round((withProtein.reduce((sum, m) => sum + m.nutrition.protein, 0) / withProtein.length) * 10) / 10
    : null;
  return {
    totalMeals: mealsData.length,
    categoryCount: CATEGORIES.length,
    avgProtein,
    ingredientCount: getShoppingList().length,
  };
};

// Master shopping list: every distinct allowlist item used by any meal,
// grouped by its database reference, with the meals that use it.
export const getShoppingList = () => {
  const map = new Map();
  for (const meal of mealsData) {
    for (const ing of meal.ingredients) {
      const key = ing.dbItem;
      if (!map.has(key)) map.set(key, { dbItem: key, items: new Set(), meals: new Set() });
      const entry = map.get(key);
      entry.items.add(ing.item);
      entry.meals.add(meal.id);
    }
  }
  return [...map.values()]
    .map((e) => ({ dbItem: e.dbItem, items: [...e.items], mealCount: e.meals.size, mealIds: [...e.meals] }))
    .sort((a, b) => b.mealCount - a.mealCount || a.dbItem.localeCompare(b.dbItem));
};

export const mealToText = (meal) => {
  const lines = [];
  lines.push(meal.name);
  lines.push(meal.description);
  lines.push('');
  lines.push(`Serves ${meal.servings} | Prep ${meal.time.prep} min | Cook ${meal.time.cook} min | Total ${meal.time.total} min | ${meal.difficulty}`);
  lines.push('');
  lines.push('Ingredients:');
  for (const ing of meal.ingredients) lines.push(`- ${ing.amount} ${ing.item}${ing.note ? ` (${ing.note})` : ''}`);
  lines.push('');
  lines.push('Steps:');
  meal.steps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
  if (meal.nutrition) {
    lines.push('');
    lines.push(`Nutrition per serving (estimated from USDA reference values): ${meal.nutrition.calories} cal, ${meal.nutrition.protein}g protein, ${meal.nutrition.carbs}g carbs, ${meal.nutrition.fat}g fat, ${meal.nutrition.fiber}g fiber`);
  }
  return lines.join('\n');
};
