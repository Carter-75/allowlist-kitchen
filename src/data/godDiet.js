// The God Diet: one weekly pool, 21 meals, nothing else.
// All amounts are ounces, weighed. The week is the lock: individual meals
// swing, but the 21 meals together drain the pool exactly.

export const POOL = [
  { item: 'Beef organ blend', oz: 80, note: 'US Wellness 75% lean ground beef with heart, kidney and liver. About 5 lb.' },
  { item: 'Egg', oz: 74, note: 'About 42 eggs at 1.75 oz out of shell. Certified organic and pasture-raised.' },
  { item: 'Sardines', oz: 21, note: '7 tins, about 3 oz drained each. 1 oz per meal.' },
  { item: 'Banana', oz: 28, note: 'About 7 bananas. The morning fruit, 4 oz per morning meal.' },
  { item: 'Kiwi', oz: 35, note: 'About 14 kiwis. The midday fruit, 5 oz per midday meal.' },
  { item: 'Avocado', oz: 28, note: 'About 7 avocados. The evening fruit, 4 oz per evening meal.' },
  { item: 'Cheese', oz: 10, note: 'Pasteurized 100% grass-fed pressed cheese. See the cheese note on the Ingredients page.' },
  { item: 'Beef tallow', oz: 4, note: 'US Wellness. The only cooking fat, and only at meals where the beef cooks.' },
  { item: 'Celtic sea salt', oz: null, note: 'On the beef while it cooks. No set weight.' },
  { item: 'Water', oz: null, note: 'The drink. No set weight.' },
];

export const INGREDIENTS = [
  {
    name: 'Beef organ blend',
    weeklyOz: 80,
    source: 'US Wellness Meats',
    detail: '75% lean ground beef blended with heart, kidney and liver. This is the base of 20 of the 21 meals. Nothing else is substituted for it.',
  },
  {
    name: 'Eggs',
    weeklyOz: 74,
    source: 'OrgaNICK Pastures at Woodman\'s, $5.39 a dozen',
    detail: 'Certified organic and pasture-raised, with no exceptions. About 42 eggs a week. Buy 4 dozen and there are spares.',
  },
  {
    name: 'Sardines',
    weeklyOz: 21,
    source: 'King Oscar sardines in water, 7 tins a week',
    detail: '1 oz, about a third of a tin (3 to 4 fish), at every single meal: on the side, mashed into fillings, or crisped into cakes. This is the in-water tin that passes in the checked database (ingredients: sardines, water). Wild Planet\'s passing tin is packed in olive oil, which is not part of this diet, and the lightly smoked versions fail, so neither is used here.',
  },
  {
    name: 'Cheese',
    weeklyOz: 10,
    source: 'Miller\'s Bio Farm pasteurized pressed cheese line',
    detail: 'Pasteurized and 100% grass-fed is the pass. Cheddar has no passing source, so cheddar is never used here, and raw or 95% grass-fed cheddar is not a substitute.',
  },
  {
    name: 'Beef tallow',
    weeklyOz: 4,
    source: 'US Wellness Meats',
    detail: 'The only cooking fat on the diet. Used only where the beef cooks. Soups, the baked meatloaf, and the one no-beef meal use none.',
  },
  {
    name: 'Banana',
    weeklyOz: 28,
    source: 'Any store, weighed',
    detail: 'The morning fruit. 4 oz at each of the 7 morning meals, on the side or cooked into the meal, like the banana pancakes.',
  },
  {
    name: 'Kiwi',
    weeklyOz: 35,
    source: 'Any store, weighed',
    detail: 'The midday fruit. 5 oz at each of the 7 midday meals, always on the side.',
  },
  {
    name: 'Avocado',
    weeklyOz: 28,
    source: 'Any store, weighed',
    detail: 'The evening fruit. 4 oz at each of the 7 evening meals, sliced, mashed as a sauce, or folded into a filling.',
  },
  {
    name: 'Celtic sea salt',
    weeklyOz: null,
    source: 'Celtic sea salt',
    detail: 'Goes on the beef while it cooks, and on avocado or eggs when the meal calls for it. That is the whole seasoning plan.',
  },
  {
    name: 'Water',
    weeklyOz: null,
    source: 'Water',
    detail: 'The drink at every meal, and the cooking liquid for the soups.',
  },
];

// tallow: 'yes' | 'double' | 'light' | 'no'
// Amounts are ounces for this meal. fruitOz is banana 4 / kiwi 5 / avocado 4 by slot.
export const MEALS = [
  { id: 'smash-patties-fried-eggs', day: 1, slot: 'Morning', name: 'Smash Patties and Fried Eggs', minutes: 20,
    description: 'Beef patties smashed thin and crisped in tallow, cheese melted over, eggs fried in the same pan. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes',
    steps: ['Heat tallow in a heavy pan. Smash the beef into two thin patties, salt them, and fry until the edges crisp.', 'Lay the cheese over the patties to melt. Fry the eggs in the same pan in the beef fat.', 'Plate the patties and eggs with the sardines and the banana on the side.'] },
  { id: 'beef-egg-scramble', day: 1, slot: 'Midday', name: 'Beef and Egg Scramble', minutes: 15,
    description: 'Beef crumbled and scrambled with eggs in tallow, cheese folded in at the end. Sardines and kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Brown the beef crumbles in tallow with salt, breaking them small.', 'Pour in the beaten eggs and scramble soft. Fold the cheese in off the heat.', 'Serve with the sardines and the kiwi on the side.'] },
  { id: 'guac-burger-plate', day: 1, slot: 'Evening', name: 'Guac Burger Plate', minutes: 20,
    description: 'A tallow-fried patty with avocado mashed with salt as the sauce, soft eggs over the top, sardines on the side. No cheese at this meal.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 4, tallow: 'yes',
    steps: ['Mash the avocado with salt into a rough guacamole.', 'Fry the beef as one patty in tallow, salted as it cooks.', 'Cook the eggs soft in the same pan. Plate the patty, spoon the avocado over, top with the eggs, sardines on the side.'] },
  { id: 'scotch-eggs', day: 2, slot: 'Morning', name: 'Scotch Eggs', minutes: 30,
    description: 'Eggs wrapped in beef and fried in tallow, a double tallow meal, with cheese melted over. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'double',
    steps: ['Boil the eggs until just set, cool and peel them.', 'Flatten the beef into sheets, salt, and wrap each egg fully. Fry in a double share of tallow, turning until crisp all over.', 'Melt the cheese over the top. Serve with the sardines and the banana.'] },
  { id: 'egg-wrap-burrito', day: 2, slot: 'Midday', name: 'Egg Wrap Burrito', minutes: 20,
    description: 'A thin omelet is the wrap. Inside: tallow-seared beef, cheese, and sardine pieces. Kiwi on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Cook the beaten eggs as one thin omelet sheet in tallow and set it flat.', 'Sear the beef strips in tallow with salt. Break the sardines into pieces.', 'Fill the omelet with beef, cheese and sardines, roll it tight, and serve with the kiwi.'] },
  { id: 'meatballs-avocado', day: 2, slot: 'Evening', name: 'Meatballs with Avocado', minutes: 25,
    description: 'Beef meatballs fried in tallow with cheese grated over, avocado slices and sardines on the plate. The one meal of the week with no egg.',
    beef: 4, egg: 0, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes',
    steps: ['Roll the beef into meatballs with salt and fry them in tallow until browned through.', 'Grate the cheese over the hot meatballs so it melts into them.', 'Serve with the avocado slices and the sardines.'] },
  { id: 'banana-pancakes-breakfast-patties', day: 3, slot: 'Morning', name: 'Banana Pancakes and Breakfast Patties', minutes: 25,
    description: 'Pancakes made from just banana and egg, griddled in tallow, next to beef breakfast patties with cheese melted on. Sardines on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes',
    steps: ['Mash the banana with the eggs into a batter. Griddle small pancakes in tallow.', 'Form the beef into breakfast patties, salt, and fry in tallow. Melt the cheese on them.', 'Serve the pancakes and patties together with the sardines on the side.'] },
  { id: 'beef-pizza', day: 3, slot: 'Midday', name: 'Beef Pizza', minutes: 25,
    description: 'Beef pressed flat and crisped in tallow is the crust. Cheese, sardine pieces, and an egg on top. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Press the beef into a thin round in a hot tallow pan and crisp it like a crust, salted.', 'Top with the cheese and sardine pieces and let the cheese melt.', 'Fry or bake the egg and set it on top. Serve with the kiwi.'] },
  { id: 'deviled-eggs-patty', day: 3, slot: 'Evening', name: 'Deviled Eggs and a Cheese Patty', minutes: 30,
    description: 'Deviled eggs with the yolks mashed with sardines and avocado, next to a tallow beef patty with cheese.',
    beef: 4, egg: 4.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes',
    steps: ['Boil the eggs, halve them, and mash the yolks with the sardines and avocado and a pinch of salt. Fill the whites.', 'Fry the beef patty in tallow and melt the cheese over it.', 'Plate the deviled eggs next to the patty.'] },
  { id: 'egg-drop-beef-soup', day: 4, slot: 'Morning', name: 'Egg Drop Beef Soup', minutes: 20,
    description: 'No tallow. Beef simmered in salted water, egg ribbons stirred through, sardines in the bowl, cheese grated over. Banana on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no',
    steps: ['Simmer the beef in salted water until it gives up its flavor, breaking it into small pieces.', 'Swirl the water and drizzle in the beaten eggs so they set as ribbons. Add the sardines.', 'Ladle into a bowl, grate the cheese over, and serve with the banana.'] },
  { id: 'cheese-crisps-sardine-pate', day: 4, slot: 'Midday', name: 'Cheese Crisps with Sardine Pate', minutes: 20,
    description: 'A double cheese meal: crisps from half the cheese, sardines mashed as a pate to scoop with them, plus a tallow beef patty and fried eggs. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 1, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Bake or fry small piles of the cheese until crisp and golden. Mash the sardines into a pate with salt.', 'Fry the beef patty in tallow and fry the eggs in the same pan.', 'Serve the crisps and pate with the patty and eggs, kiwi on the side.'] },
  { id: 'open-face-egg-salad-stack', day: 4, slot: 'Evening', name: 'Open-Face Egg Salad Stack', minutes: 25,
    description: 'Chopped eggs and sardines mashed with avocado, stacked on tallow-seared patties with cheese melted under. A beef-heavy plate to balance the light soup morning.',
    beef: 5, egg: 4.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes',
    steps: ['Sear thick beef patties in tallow with salt and melt the cheese on them.', 'Chop the cooked eggs and mash with the sardines and avocado into an egg salad.', 'Stack the egg salad on the patties and serve.'] },
  { id: 'the-no-beef-meal', day: 5, slot: 'Morning', name: 'The No-Beef Meal', minutes: 15,
    description: 'The one meal with no beef and no tallow: eggs, sardines, and cheese crisps, with banana. Its beef moves to tonight\'s meatloaf.',
    beef: 0, egg: 5.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no',
    steps: ['Crisp the cheese into crisps in a dry pan.', 'Cook the eggs any way you like, in a dry or lightly beef-fat-free pan, salted.', 'Serve the eggs, sardines and cheese crisps with the banana.'] },
  { id: 'cheese-stuffed-beef-rolls', day: 5, slot: 'Midday', name: 'Cheese-Stuffed Beef Rolls', minutes: 25,
    description: 'Beef rolled around cheese and seared in tallow, with poached eggs. Sardines and kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Flatten the beef, lay the cheese in the middle, roll tight and pin with a toothpick if needed. Salt the outside.', 'Sear the rolls in tallow, turning until browned and the cheese melts inside.', 'Poach the eggs. Serve the rolls and eggs with the sardines and kiwi.'] },
  { id: 'mini-meatloaf', day: 5, slot: 'Evening', name: 'Mini Meatloaf', minutes: 40,
    description: 'Double beef, including the beef the no-beef morning gave up. Baked in its own fat, no tallow, with avocado mash, eggs, and sardines. No cheese at this meal.',
    beef: 8, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 4, tallow: 'no',
    steps: ['Form the beef into a small loaf with salt and bake it in its own fat until cooked through. Rest it before slicing.', 'Mash the avocado with salt. Cook the eggs to go with it.', 'Slice the meatloaf and serve with the avocado mash, eggs and sardines.'] },
  { id: 'loaded-omelet', day: 6, slot: 'Morning', name: 'Loaded Omelet', minutes: 15,
    description: 'An omelet cooked in tallow with beef crumbles and cheese folded in, sardines on top. Banana on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes',
    steps: ['Brown the beef crumbles in tallow with salt.', 'Add the beaten eggs, cook the omelet around the beef, and fold the cheese inside.', 'Slide it out, lay the sardines on top, and serve with the banana.'] },
  { id: 'sardine-beef-cakes', day: 6, slot: 'Midday', name: 'Sardine and Beef Cakes', minutes: 25,
    description: 'Sardines and beef mixed into cakes and fried crisp in tallow, a double tallow meal, with a fried egg on top and cheese melted over. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'double',
    steps: ['Mash the sardines into the beef with salt and form flat cakes.', 'Fry the cakes in a double share of tallow until deeply crisp on both sides.', 'Fry the egg, set it on the cakes, and melt the cheese over everything. Serve with the kiwi.'] },
  { id: 'meatball-soup', day: 6, slot: 'Evening', name: 'Meatball Soup', minutes: 30,
    description: 'No tallow. Meatballs simmered in salted water with egg ribbons, cheese stirred in, sardines in the bowl. Avocado on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'no',
    steps: ['Roll small meatballs from the salted beef and simmer them in salted water.', 'Swirl in the beaten eggs as ribbons, add the sardines, and stir the cheese in until it melts.', 'Serve in bowls with the avocado on the side.'] },
  { id: 'egg-muffins', day: 7, slot: 'Morning', name: 'Egg Muffins', minutes: 30,
    description: 'Beef pressed into muffin cups with eggs baked inside, the tin greased with tallow, cheese on top. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'light',
    steps: ['Grease a muffin tin with tallow. Press the beef into cups, salt them, and crack the eggs into the cups.', 'Bake until the eggs are set. Put the cheese on top for the last minutes so it melts.', 'Serve with the sardines and the banana.'] },
  { id: 'fried-rice-plate', day: 7, slot: 'Midday', name: 'Fried "Rice" Plate', minutes: 20,
    description: 'Beef crumbled small and fried hard in tallow until it eats like rice, eggs scrambled in pieces through it, cheese folded in. Sardines and kiwi on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Crumble the beef very small and fry it hard in tallow with salt until browned and rice-like.', 'Scramble the eggs in pieces through the beef.', 'Fold the cheese in off the heat. Serve with the sardines and kiwi.'] },
  { id: 'the-diner-plate', day: 7, slot: 'Evening', name: 'The Diner Plate', minutes: 25,
    description: 'A thick beef slab seared in tallow like a steak, sunny eggs cooked in the same fat, cheese on the beef, sardines on the side, avocado sliced with salt. Then the week loops back to Day 1.',
    beef: 5, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes',
    steps: ['Sear the thick beef slab in tallow with salt like a steak, resting it a few minutes.', 'Fry the eggs sunny in the same fat. Melt the cheese over the beef.', 'Plate with the sardines and the avocado sliced with salt.'] },
];

export const SLOTS = ['Morning', 'Midday', 'Evening'];
export const TALLOW_LABEL = { yes: 'Tallow', double: 'Double tallow', light: 'Tallow (greased tin)', no: 'No tallow' };
export const TALLOW_TSP = { yes: 'about 1 1/2 tsp', double: 'about 1 tbsp', light: 'about 3/4 tsp', no: 'none' };

// Where to buy each ingredient. Woodman's links use the storefront search
// pattern the Woodman's (Onalaska) online store itself uses.
const wm = (term) => `https://shopwoodmans.com/store/woodmans-food-markets/s?k=${encodeURIComponent(term).replace(/%20/g, '+')}`;
export const BUY = {
  'Beef organ blend': { label: 'US Wellness Meats', url: 'https://grasslandbeef.com/search?q=ground+beef+heart+kidney+liver' },
  'Beef tallow': { label: 'US Wellness Meats', url: 'https://grasslandbeef.com/collections/kitchen-favorites' },
  'Egg': { label: "Woodman's (OrgaNICK Pastures)", url: wm('OrgaNICK Pastures eggs') },
  'Eggs': { label: "Woodman's (OrgaNICK Pastures)", url: wm('OrgaNICK Pastures eggs') },
  'Sardines': { label: "Woodman's (King Oscar, in water)", url: wm('King Oscar sardines in water') },
  'Cheese': { label: "Miller's Bio Farm (pressed cheese)", url: 'https://millersbiofarm.com/store/cheese-1' },
  'Banana': { label: "Woodman's", url: wm('bananas') },
  'Kiwi': { label: "Woodman's", url: wm('kiwi') },
  'Avocado': { label: "Woodman's", url: wm('avocado') },
  'Celtic sea salt': { label: "Woodman's", url: wm('Celtic sea salt') },
  'Water': null,
};

// Estimated costs. Prices checked November 5, 2026. These are estimates for
// planning, not quotes: store prices move, and Miller's shows its exact
// cheese prices only after a free signup, so cheese is estimated from the
// Miller's cheese prices on record (about $2.00/oz).
export const PRICE = {
  beefPerOz: 13.42 / 16,        // US Wellness organ blend, $13.42 per 1 lb pack
  eggPerOz: (5.39 / 12) / 1.75, // OrgaNICK Pastures, $5.39/dozen at Woodman's
  sardinesPerOz: 4.59 / 3,      // King Oscar in water, $4.59 per tin, about 3 oz drained
  cheesePerOz: 2.0,             // Miller's Bio Farm pressed cheese, estimated
  tallowPerOz: 17.46 / 27.2,    // US Wellness small pail, $17.46 per 1.7 lb
  fruitPerOz: { Banana: 0.35 / 4, Kiwi: 0.70 / 2.5, Avocado: 1.25 / 4 }, // typical Woodman's piece prices
};
export const PRICE_BASIS = [
  'Beef organ blend: $13.42/lb at US Wellness (single 1 lb packs). The 25 lb bundle at $11.41/lb would cut the weekly beef cost by about $10.',
  'Eggs: $5.39 a dozen for OrgaNICK Pastures at Woodman\'s.',
  'Sardines: $4.59 a tin for King Oscar sardines in water, the in-water tin that passes in the checked database.',
  'Beef tallow: $17.46 for the 1.7 lb small pail at US Wellness.',
  'Cheese: estimated at $2.00/oz. Miller\'s Bio Farm shows exact prices only after a free signup, so this uses the Miller\'s cheese prices already on record.',
  'Banana, kiwi and avocado: typical Woodman\'s piece prices (about $0.35, $0.70 and $1.25 each).',
  'Celtic sea salt and water: a few cents a week, counted as $0.',
];

const TALLOW_UNITS = { yes: 1, double: 2, light: 0.5, no: 0 };
export const TALLOW_TOTAL_UNITS = MEALS.reduce((s, m) => s + TALLOW_UNITS[m.tallow], 0);
const TALLOW_UNIT_COST = (4 * PRICE.tallowPerOz) / TALLOW_TOTAL_UNITS;

export function mealCost(m) {
  return m.beef * PRICE.beefPerOz
    + m.egg * PRICE.eggPerOz
    + m.sardines * PRICE.sardinesPerOz
    + m.cheese * PRICE.cheesePerOz
    + m.fruitOz * PRICE.fruitPerOz[m.fruit]
    + TALLOW_UNITS[m.tallow] * TALLOW_UNIT_COST;
}
export function ingredientWeekCost(key) {
  const t = {
    'Beef organ blend': 80 * PRICE.beefPerOz,
    'Eggs': 74 * PRICE.eggPerOz,
    'Sardines': 21 * PRICE.sardinesPerOz,
    'Cheese': 10 * PRICE.cheesePerOz,
    'Beef tallow': 4 * PRICE.tallowPerOz,
    'Banana': 28 * PRICE.fruitPerOz.Banana,
    'Kiwi': 35 * PRICE.fruitPerOz.Kiwi,
    'Avocado': 28 * PRICE.fruitPerOz.Avocado,
    'Celtic sea salt': 0,
    'Water': 0,
  };
  return t[key] ?? null;
}
export const WEEK_COST = MEALS.reduce((s, m) => s + mealCost(m), 0);
export const money = (n) => `$${n.toFixed(2)}`;
