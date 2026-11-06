// The God Diet: one weekly pool, 21 meals, nothing else.
// All amounts are ounces, weighed. The week is the lock: individual meals
// swing, but the 21 meals together drain the pool exactly.

export const POOL = [
  { item: 'Beef organ blend', oz: 80, note: 'US Wellness 75% lean ground beef with heart, kidney and liver. About 5 lb.' },
  { item: 'Egg', oz: 73.5, note: 'Exactly 42 eggs at 1.75 oz out of shell. Certified organic and pasture-raised.' },
  { item: 'Sardines', oz: 21, note: '7 tins, about 3 oz drained each. 1 oz per meal.' },
  { item: 'Banana', oz: 28, note: 'About 7 bananas. The morning fruit, 4 oz per morning meal.' },
  { item: 'Kiwi', oz: 35, note: 'About 14 kiwis. The midday fruit, 5 oz per midday meal.' },
  { item: 'Avocado', oz: 28, note: 'About 7 avocados. The evening fruit, 4 oz per evening meal.' },
  { item: 'Cheese', oz: 10, note: 'Pasteurized 100% grass-fed pressed cheese. See the cheese note on the Ingredients page.' },
  { item: 'Beef tallow', oz: 4, note: 'US Wellness. The only cooking fat, and only at meals where the beef cooks.' },
  { item: 'Celtic sea salt', oz: null, note: 'On the beef while it cooks. No set weight.' },
  { item: 'Water', oz: null, note: 'Spring water in glass bottles only, still or sparkling. No set weight.' },
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
    weeklyOz: 73.5,
    source: 'OrgaNICK Pastures at Woodman\'s, $5.39 a dozen',
    detail: 'Certified organic and pasture-raised, with no exceptions. Exactly 42 eggs a week, always whole eggs in every meal, never halves. They ship in whole cartons only, never fractional packs: seven 12-count cartons cover exactly 2 weeks, or seven 18-count cartons cover exactly 3 weeks. Whatever brand ships, the carton must carry both certifications.',
  },
  {
    name: 'Sardines',
    weeklyOz: 21,
    source: 'King Oscar sardines in water, 7 tins a week, shipped in 12-tin cases',
    detail: '1 oz, a third of a tin, 4 fish, at every single meal: on the side, mashed into fillings, or crisped into cakes. This is the in-water tin that passes in the checked database (ingredients: sardines, water). Wild Planet\'s passing tin is packed in olive oil, which is not part of this diet, and the lightly smoked versions fail, so neither is used here.',
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
    source: 'Shipped in the fresh box, weighed',
    detail: 'The morning fruit. 4 oz at each of the 7 morning meals, on the side or cooked into the meal, like the banana pancakes.',
  },
  {
    name: 'Kiwi',
    weeklyOz: 35,
    source: 'Shipped in the fresh box, weighed',
    detail: 'The midday fruit. 5 oz at each of the 7 midday meals, always on the side.',
  },
  {
    name: 'Avocado',
    weeklyOz: 28,
    source: 'Shipped in the fresh box, weighed',
    detail: 'The evening fruit. 4 oz at each of the 7 evening meals, sliced, mashed as a sauce, or folded into a filling.',
  },
  {
    name: 'Celtic sea salt',
    weeklyOz: null,
    source: 'Celtic sea salt',
    detail: 'Goes on the beef while it cooks, and on avocado or eggs when the meal calls for it. The separate spice shelf (paprika, cinnamon, garlic powder, onion powder, black pepper) is listed with the condiments below.',
  },
  {
    name: 'Water',
    weeklyOz: null,
    source: 'Glass-bottle spring water: Mountain Valley, Saratoga, S.Pellegrino, Lauretana',
    detail: 'The drink at every meal, and the cooking liquid for the soups. Glass bottles only: plastic does not pass, and aluminum bottles are resin-lined, so the water sits against a liner instead of the bottle. The accepted waters: Mountain Valley still (the water Carter settled on Oct 21, 2026, and one of the three brands the videos name as passing, with S.Pellegrino and Lauretana), and Saratoga spring water in the 28 oz glass bottle, still or sparkling (the bottle from Carter's photo; it passes by the same spring-water-in-glass rule and he ruled both versions fine on Nov 1, 2026). Nothing flavored, nothing sweetened, nothing added.',
  },
];

// tallow: 'yes' | 'double' | 'light' | 'no'
// Amounts are ounces for this meal. fruitOz is banana 4 / kiwi 5 / avocado 4 by slot.
export const MEALS = [
  { id: 'smash-patties-fried-eggs', day: 1, slot: 'Morning', name: 'Smash Patties and Fried Eggs', minutes: 20,
    description: 'Beef patties smashed thin and crisped in tallow, cheese melted over, eggs fried in the same pan. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes', ketchup: 1,
    steps: ['Heat tallow in a heavy pan. Smash the beef into two thin patties, salt them, and fry until the edges crisp.', 'Lay the cheese over the patties to melt. Fry the eggs in the same pan in the beef fat.', 'Plate the patties and eggs with the sardines and the banana on the side, and the ketchup for the patties.'] },
  { id: 'beef-egg-scramble', day: 1, slot: 'Midday', name: 'Beef and Egg Scramble', minutes: 15,
    description: 'Beef crumbled and scrambled with eggs in tallow, cheese folded in at the end. Sardines and kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Brown the beef crumbles in tallow with salt, breaking them small.', 'Pour in the beaten eggs and scramble soft. Fold the cheese in off the heat.', 'Serve with the sardines and the kiwi on the side.'] },
  { id: 'guac-burger-plate', day: 1, slot: 'Evening', name: 'Guac Burger Plate', minutes: 20,
    description: 'A tallow-fried patty with avocado mashed with salt as the sauce, soft eggs over the top, sardines on the side. No cheese at this meal.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 4, tallow: 'yes', ketchup: 1,
    steps: ['Mash the avocado with salt into a rough guacamole.', 'Fry the beef as one patty in tallow, salted as it cooks.', 'Cook the eggs soft in the same pan. Plate the patty, spoon the avocado over, top with the eggs, sardines on the side, and the ketchup for the patty.'] },
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
    beef: 4, egg: 0, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes', ketchup: 1,
    steps: ['Roll the beef into meatballs with salt and fry them in tallow until browned through.', 'Grate the cheese over the hot meatballs so it melts into them.', 'Serve with the avocado slices, the sardines, and the ketchup for dipping.'] },
  { id: 'banana-pancakes-breakfast-patties', day: 3, slot: 'Morning', name: 'Banana Pancakes and Breakfast Patties', minutes: 25,
    description: 'Pancakes made from just banana and egg, griddled in tallow, next to beef breakfast patties with cheese melted on. Sardines on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes',
    seasoning: 'Cinnamon', steps: ['Mash the banana with the eggs and the cinnamon into a batter. Griddle small pancakes in tallow.', 'Form the beef into breakfast patties, salt, and fry in tallow. Melt the cheese on them.', 'Serve the pancakes and patties together with the sardines on the side.'] },
  { id: 'beef-pizza', day: 3, slot: 'Midday', name: 'Beef Pizza', minutes: 25,
    description: 'Beef pressed flat and crisped in tallow is the crust. Cheese, sardine pieces, and an egg on top. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Press the beef into a thin round in a hot tallow pan and crisp it like a crust, salted.', 'Top with the cheese and sardine pieces and let the cheese melt.', 'Fry or bake the egg and set it on top. Serve with the kiwi.'] },
  { id: 'deviled-eggs-patty', day: 3, slot: 'Evening', name: 'Deviled Eggs and a Cheese Patty', minutes: 30,
    description: 'Deviled eggs with the yolks mashed with sardines and avocado, next to a tallow beef patty with cheese.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes',
    mayo: 1, mustard: 1, seasoning: 'Paprika', steps: ['Boil the eggs, halve them, and mash the yolks with the sardines, avocado, homemade mayo and mustard and a pinch of salt. Fill the whites.', 'Fry the beef patty in tallow and melt the cheese over it.', 'Dust the deviled eggs with paprika and plate them next to the patty.'] },
  { id: 'egg-drop-beef-soup', day: 4, slot: 'Morning', name: 'Egg Drop Beef Soup', minutes: 20,
    description: 'No tallow. Beef simmered in salted water, egg ribbons stirred through, sardines in the bowl, cheese grated over. Banana on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no',
    steps: ['Simmer the beef in salted water until it gives up its flavor, breaking it into small pieces.', 'Swirl the water and drizzle in the beaten eggs so they set as ribbons. Add the sardines.', 'Ladle into a bowl, grate the cheese over, and serve with the banana.'] },
  { id: 'cheese-crisps-sardine-pate', day: 4, slot: 'Midday', name: 'Cheese Crisps with Sardine Pate', minutes: 20,
    description: 'A double cheese meal: crisps from half the cheese, sardines mashed as a pate to scoop with them, plus a tallow beef patty and fried eggs. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 1, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    mayo: 1, steps: ['Bake or fry small piles of the cheese until crisp and golden. Mash the sardines with the homemade mayo and a pinch of salt into a pate.', 'Fry the beef patty in tallow and fry the eggs in the same pan.', 'Serve the crisps and pate with the patty and eggs, kiwi on the side.'] },
  { id: 'open-face-egg-salad-stack', day: 4, slot: 'Evening', name: 'Open-Face Egg Salad Stack', minutes: 25,
    description: 'Chopped eggs and sardines mashed with avocado, stacked on tallow-seared patties with cheese melted under. A beef-heavy plate to balance the light soup morning.',
    beef: 5, egg: 5.25, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes',
    mayo: 1, mustard: 1, steps: ['Sear thick beef patties in tallow with salt and melt the cheese on them.', 'Chop the cooked eggs and mash with the sardines, avocado, homemade mayo and mustard into an egg salad.', 'Stack the egg salad on the patties and serve.'] },
  { id: 'the-no-beef-meal', day: 5, slot: 'Morning', name: 'The No-Beef Meal', minutes: 15,
    description: 'The one meal with no beef and no tallow: eggs, sardines, and cheese crisps, with banana. Its beef moves to tonight\'s meatloaf.',
    beef: 0, egg: 5.25, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no',
    steps: ['Crisp the cheese into crisps in a dry pan.', 'Cook the eggs any way you like, in a dry or lightly beef-fat-free pan, salted.', 'Serve the eggs, sardines and cheese crisps with the banana.'] },
  { id: 'cheese-stuffed-beef-rolls', day: 5, slot: 'Midday', name: 'Cheese-Stuffed Beef Rolls', minutes: 25,
    description: 'Beef rolled around cheese and seared in tallow, with poached eggs. Sardines and kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 5, tallow: 'yes',
    steps: ['Flatten the beef, lay the cheese in the middle, roll tight and pin with a toothpick if needed. Salt the outside.', 'Sear the rolls in tallow, turning until browned and the cheese melts inside.', 'Poach the eggs. Serve the rolls and eggs with the sardines and kiwi.'] },
  { id: 'mini-meatloaf', day: 5, slot: 'Evening', name: 'Mini Meatloaf', minutes: 40,
    description: 'Double beef, including the beef the no-beef morning gave up. Baked in its own fat, no tallow, with avocado mash, eggs, and sardines. No cheese at this meal.',
    beef: 8, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 4, tallow: 'no',
    ketchup: 1, steps: ['Form the beef into a small loaf with salt, spread the ketchup over the top as a glaze, and bake it in its own fat until cooked through. Rest it before slicing.', 'Mash the avocado with salt. Cook the eggs to go with it.', 'Slice the meatloaf and serve with the avocado mash, eggs and sardines.'] },
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
    beef: 5, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 4, tallow: 'yes', ketchup: 1,
    steps: ['Sear the thick beef slab in tallow with salt like a steak, resting it a few minutes.', 'Fry the eggs sunny in the same fat. Melt the cheese over the beef.', 'Plate with the sardines, the avocado sliced with salt, and the ketchup for the beef.'] },
];

export const SLOTS = ['Morning', 'Midday', 'Evening'];
export const TALLOW_LABEL = { yes: 'Tallow', double: 'Double tallow', light: 'Tallow (greased tin)', no: 'No tallow' };
export const TALLOW_TSP = { yes: '1 teaspoon', double: '2 teaspoons', light: '1 teaspoon, to grease the tin', no: 'none' };

// Where to buy each ingredient. Woodman's links use the storefront search
// pattern the Woodman's (Onalaska) online store itself uses.
const wm = (term) => `https://shopwoodmans.com/store/woodmans-food-markets/s?k=${encodeURIComponent(term).replace(/%20/g, '+')}`;
export const BUY = {
  'Beef organ blend': { label: 'US Wellness Meats', url: 'https://grasslandbeef.com/search?q=ground+beef+heart+kidney+liver' },
  'Beef tallow': { label: 'US Wellness Meats', url: 'https://grasslandbeef.com/collections/kitchen-favorites' },
  'Egg': { label: 'Shipped fresh box (certified organic, pasture-raised)', url: 'https://www.misfitsmarket.com/egg-delivery' },
  'Eggs': { label: 'Shipped fresh box (certified organic, pasture-raised)', url: 'https://www.misfitsmarket.com/egg-delivery' },
  'Sardines': { label: 'Restaurant & More (12-tin case)', url: 'https://restaurantandmore.com/king-oscar-skinless-boneless-sardines-in-water-4-23-ounce-12-per-case.html' },
  'Cheese': { label: "Miller's Bio Farm (pressed cheese)", url: 'https://millersbiofarm.com/store/cheese-1' },
  'Banana': { label: 'Shipped fresh box', url: 'https://www.misfitsmarket.com/egg-delivery' },
  'Kiwi': { label: 'Shipped fresh box', url: 'https://www.misfitsmarket.com/egg-delivery' },
  'Avocado': { label: 'Shipped fresh box', url: 'https://www.misfitsmarket.com/egg-delivery' },
  'Celtic sea salt': { label: 'Amazon (Celtic Sea Salt)', url: 'https://www.amazon.com/s?k=Celtic+Sea+Salt' },
  'Ketchup': { label: 'Amazon (Primal Kitchen)', url: 'https://www.amazon.com/s?k=Primal+Kitchen+Organic+Unsweetened+Ketchup' },
  'Mustard': { label: 'Amazon (plain prepared mustard)', url: 'https://www.amazon.com/s?k=plain+organic+yellow+mustard' },
  'Mayo (homemade)': { label: 'Amazon (100% avocado oil, for homemade mayo)', url: 'https://www.amazon.com/s?k=100%25+pure+avocado+oil' },
  'Seasonings': { label: 'Amazon (plain single spices)', url: 'https://www.amazon.com/s?k=organic+paprika+cinnamon+garlic+powder' },
  'Water': { label: 'Amazon (Mountain Valley, glass bottles)', url: 'https://www.amazon.com/s?k=Mountain+Valley+spring+water+glass+bottles' },
};

// Estimated costs. Prices checked November 5, 2026. These are estimates for
// planning, not quotes: store prices move, and Miller's shows its exact
// cheese prices only after a free signup, so cheese is estimated from the
// Miller's cheese prices on record (about $2.00/oz).
export const PRICE = {
  beefPerOz: 285.25 / (25 * 16), // US Wellness Organ Blend 25 lb bundle, $285.25 on sale ($11.41/lb)
  eggPerOz: (5.39 / 12) / 1.75, // OrgaNICK Pastures, $5.39/dozen at Woodman's
  sardinesPerOz: 4.59 / 3,      // King Oscar in water, $4.59 per tin, about 3 oz drained
  cheesePerOz: 2.0,             // Miller's Bio Farm pressed cheese, estimated
  tallowPerOz: 17.46 / 27.2,    // US Wellness small pail, $17.46 per 1.7 lb
  fruitPerOz: { Banana: 0.35 / 4, Kiwi: 0.70 / 2.5, Avocado: 1.25 / 4 }, // typical Woodman's piece prices
};
export const PRICE_BASIS = [
  'Beef organ blend: costs use the US Wellness Organ Blend 25 lb bundle at $285.25 on sale ($11.41/lb). One bundle is exactly 5 weeks of beef. Single 1 lb packs are $13.42/lb and would add about $10.05 a week.',
  'Eggs: $5.39 a dozen for OrgaNICK Pastures at Woodman\'s.',
  'Sardines: ordered in 12-tin cases, but the estimate still uses $4.59 a tin (the single-tin price on record) until a delivered case price is locked, so the bulk saving is not overstated.',
  'Beef tallow: $17.46 for the 1.7 lb small pail at US Wellness.',
  'Cheese: estimated at $2.00/oz. Miller\'s Bio Farm shows exact prices only after a free signup, so this uses the Miller\'s cheese prices already on record.',
  'Banana, kiwi and avocado: typical Woodman\'s piece prices (about $0.35, $0.70 and $1.25 each).',
  'Celtic sea salt and water: a few cents a week, counted as $0.',
  'Ketchup: Primal Kitchen Organic Unsweetened, $8.79 for the 18.5 oz squeeze bottle at Woodman\'s, about $0.24 a tablespoon. 5 tablespoons a week.',
  'Homemade mayo: about $4.25 a batch (a cup of avocado oil, one of the diet\'s own egg yolks, lemon, mustard, salt) making about 17 tablespoons, about $0.25 a tablespoon. 3 tablespoons a week.',
  'Mustard: plain prepared mustard, about $0.05 a teaspoon. 2 teaspoons a week.',
];

const TALLOW_UNITS = { yes: 1, double: 2, light: 0.5, no: 0 };
export const TALLOW_TOTAL_UNITS = MEALS.reduce((s, m) => s + TALLOW_UNITS[m.tallow], 0);
const TALLOW_UNIT_COST = (4 * PRICE.tallowPerOz) / TALLOW_TOTAL_UNITS;

// Nutrition estimates per ounce, from USDA reference values for these foods.
// Estimates, not lab numbers: the organ blend varies pack to pack.
export const NUTRITION_PER_OZ = {
  beef: { kcal: 75, protein: 5.5, fat: 5.7, carbs: 0, fiber: 0 },
  egg: { kcal: 40, protein: 3.4, fat: 2.9, carbs: 0.2, fiber: 0 },
  sardines: { kcal: 60, protein: 7, fat: 3.3, carbs: 0, fiber: 0 },
  cheese: { kcal: 85, protein: 6, fat: 6.5, carbs: 1, fiber: 0 },
  tallow: { kcal: 250, protein: 0, fat: 28, carbs: 0, fiber: 0 },
  fruit: {
    Banana: { kcal: 25, protein: 0.3, fat: 0.1, carbs: 6.4, fiber: 0.7 },
    Kiwi: { kcal: 17, protein: 0.3, fat: 0.1, carbs: 4.2, fiber: 0.9 },
    Avocado: { kcal: 45, protein: 0.6, fat: 4.2, carbs: 2.4, fiber: 1.9 },
  },
};

// Condiments sit outside the weekly pool: small set amounts on the meals
// that call for them. Ketchup is Primal Kitchen Organic Unsweetened (the
// bottle that passes in the checked database). Mayo is homemade only:
// every bottled mayo fails, because no bottled brand's eggs are certified
// organic AND pasture-raised (Primal Kitchen mayo was removed Oct 27, 2026
// for exactly that). Mustard is plain prepared mustard per the rulebook
// ruling of Oct 27, 2026 (mustard seed, vinegar, water, salt, nothing else).
export const CONDIMENT_NUTRITION = {
  ketchup: { kcal: 15, protein: 0, fat: 0, carbs: 3, fiber: 0 }, // per tablespoon
  mayo: { kcal: 100, protein: 0, fat: 11, carbs: 0, fiber: 0 }, // per tablespoon, avocado oil mayo
  mustard: { kcal: 3, protein: 0, fat: 0, carbs: 0, fiber: 0 }, // per teaspoon
};
export const CONDIMENT_PRICE = {
  ketchup: 8.79 / 37, // 18.5 oz squeeze bottle $8.79 at Woodman's, about 37 tbsp
  mayo: 0.25,         // homemade: about $4.25 a batch (1 cup avocado oil, 1 yolk, lemon), about 17 tbsp
  mustard: 0.05,      // per teaspoon, from a plain prepared mustard bottle
};
export function condimentNutrition(m) {
  const out = { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 };
  for (const k of ['ketchup', 'mayo', 'mustard']) {
    const n = CONDIMENT_NUTRITION[k], amt = m[k] || 0;
    out.kcal += n.kcal * amt; out.protein += n.protein * amt; out.fat += n.fat * amt; out.carbs += n.carbs * amt; out.fiber += (n.fiber || 0) * amt;
  }
  return out;
}
export function condimentCost(m) {
  return (m.ketchup || 0) * CONDIMENT_PRICE.ketchup + (m.mayo || 0) * CONDIMENT_PRICE.mayo + (m.mustard || 0) * CONDIMENT_PRICE.mustard;
}

export function mealNutrition(m) {
  const tallowOz = (TALLOW_UNITS[m.tallow] / TALLOW_TOTAL_UNITS) * 4;
  const parts = [
    [NUTRITION_PER_OZ.beef, m.beef],
    [NUTRITION_PER_OZ.egg, m.egg],
    [NUTRITION_PER_OZ.sardines, m.sardines],
    [NUTRITION_PER_OZ.cheese, m.cheese],
    [NUTRITION_PER_OZ.fruit[m.fruit], m.fruitOz],
    [NUTRITION_PER_OZ.tallow, tallowOz],
  ];
  const out = { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 };
  for (const [n, oz] of parts) {
    out.kcal += n.kcal * oz;
    out.protein += n.protein * oz;
    out.fat += n.fat * oz;
    out.carbs += n.carbs * oz;
    out.fiber += n.fiber * oz;
  }
  const c = condimentNutrition(m);
  out.kcal += c.kcal; out.protein += c.protein; out.fat += c.fat; out.carbs += c.carbs; out.fiber += c.fiber;
  out.kcal = Math.round(out.kcal);
  out.protein = Math.round(out.protein);
  out.fat = Math.round(out.fat);
  out.carbs = Math.round(out.carbs);
  out.fiber = Math.round(out.fiber * 10) / 10;
  return out;
}

export const WEEK_NUTRITION = MEALS.reduce((acc, m) => {
  const n = mealNutrition(m);
  acc.kcal += n.kcal; acc.protein += n.protein; acc.fat += n.fat; acc.carbs += n.carbs; acc.fiber += n.fiber;
  return acc;
}, { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 });
export const DAY_NUTRITION = {
  kcal: Math.round(WEEK_NUTRITION.kcal / 7),
  protein: Math.round(WEEK_NUTRITION.protein / 7),
  fat: Math.round(WEEK_NUTRITION.fat / 7),
  carbs: Math.round(WEEK_NUTRITION.carbs / 7),
  fiber: Math.round((WEEK_NUTRITION.fiber / 7) * 10) / 10,
};

export function mealCost(m) {
  return m.beef * PRICE.beefPerOz
    + m.egg * PRICE.eggPerOz
    + m.sardines * PRICE.sardinesPerOz
    + m.cheese * PRICE.cheesePerOz
    + m.fruitOz * PRICE.fruitPerOz[m.fruit]
    + TALLOW_UNITS[m.tallow] * TALLOW_UNIT_COST
    + condimentCost(m);
}
export function ingredientWeekCost(key) {
  const t = {
    'Beef organ blend': 80 * PRICE.beefPerOz,
    'Eggs': 73.5 * PRICE.eggPerOz,
    'Sardines': 21 * PRICE.sardinesPerOz,
    'Cheese': 10 * PRICE.cheesePerOz,
    'Beef tallow': 4 * PRICE.tallowPerOz,
    'Banana': 28 * PRICE.fruitPerOz.Banana,
    'Kiwi': 35 * PRICE.fruitPerOz.Kiwi,
    'Avocado': 28 * PRICE.fruitPerOz.Avocado,
    'Celtic sea salt': 0,
    'Water': 0,
    'Ketchup': MEALS.reduce((s, m) => s + (m.ketchup || 0), 0) * CONDIMENT_PRICE.ketchup,
    'Homemade mayo': MEALS.reduce((s, m) => s + (m.mayo || 0), 0) * CONDIMENT_PRICE.mayo,
    'Mustard': MEALS.reduce((s, m) => s + (m.mustard || 0), 0) * CONDIMENT_PRICE.mustard,
  };
  return t[key] ?? null;
}
export const WEEK_COST = MEALS.reduce((s, m) => s + mealCost(m), 0);
export const money = (n) => `$${n.toFixed(2)}`;

// The condiment shelf: outside the weekly pool, in set whole-spoon amounts.
export const CONDIMENTS = [
  {
    name: 'Ketchup',
    amount: '1 tablespoon on 5 meals a week',
    source: 'Primal Kitchen Organic Unsweetened, at Woodman\'s (11.3 oz $6.49, squeeze 18.5 oz $8.79)',
    detail: 'The ketchup that passes in the checked database and the one already in the cart history: organic tomato concentrate, balsamic vinegar, salt, onion and garlic powder, spices, 0g added sugar. It goes on the burger-style meals: smash patties, the guac burger, meatballs, the meatloaf glaze, and the diner plate.',
  },
  {
    name: 'Mayo (homemade)',
    amount: '1 tablespoon on 3 meals a week',
    source: 'Made at home: 1 egg yolk, 1 cup avocado oil, lemon, mustard, salt',
    detail: 'No bottled mayo passes. Every bottled brand fails the egg rule, which has no exceptions (eggs in any product must be certified organic AND pasture-raised); Primal Kitchen mayo was removed from the approved list on Oct 27, 2026 because its eggs are cage-free only. So the mayo is homemade from one of the diet\'s own eggs, whisked with avocado oil (ruled fine Oct 25, 2026), lemon, mustard and salt. One batch is about 17 tablespoons, roughly five to six weeks of mayo at 3 tablespoons a week. It goes in the deviled eggs, the sardine pate, and the egg salad.',
  },
  {
    name: 'Mustard',
    amount: '1 teaspoon in 2 meals a week',
    source: 'Plain prepared mustard: mustard seed, vinegar, water, salt, and nothing else',
    detail: 'Plain prepared mustard is on the list under the rulebook ruling Carter reviewed Oct 27, 2026: seed, vinegar, water and salt, with no sugar, honey, or flavorings added. It goes in the deviled eggs and the egg salad, a teaspoon each.',
  },
  {
    name: 'Seasonings',
    amount: 'To taste, no set amount',
    source: 'Plain single spices: paprika, cinnamon, garlic powder, onion powder, black pepper',
    detail: 'Seasonings are to taste and are not counted in the calories or macros. Paprika dusts the deviled eggs, cinnamon goes in the banana pancake batter, and garlic powder, onion powder and black pepper are there for the beef when a meal wants them.',
  },
];

// Bulk ordering is built in whole weeks and whole packs only. There are no
// calendar-month quantities anywhere: a week is always 7 days, so every
// source repeats on a whole-week rhythm, packages are never fractional, and
// whatever a pack leaves over rolls into the next block instead of changing
// the diet. Egg cartons drive their own rhythm: 7 cartons of 12 cover
// exactly 2 weeks (84 eggs), and 7 cartons of 18 cover exactly 3 weeks
// (126 eggs). Either way it is a whole number of cartons and a whole
// number of weeks.
export const ORDER_WEEK_OPTIONS = [10, 20, 30, 40];
export const BEEF_BUNDLE_PRICE = 285.25;
export const BEEF_SINGLE_PACK_PRICE = 13.42;
export const BEEF_BUNDLE_SAVINGS_PER_WEEK = 5 * (BEEF_SINGLE_PACK_PRICE - BEEF_BUNDLE_PRICE / 25);

const roll = (bought, used, unit) => bought === used
  ? `exactly ${used} ${unit} used, nothing left over`
  : `${bought} ${unit} bought for ${used} ${unit} used, ${Math.round((bought - used) * 10) / 10} ${unit} rolls into the next block`;

export function bulkOrder(weeks, eggPackSize = 12) {
  const beefBundles = weeks / 5;
  const beefUsedLb = weeks * 5;
  const tallowUsedOz = weeks * 4;
  const tallowPails = Math.ceil(tallowUsedOz / 27.2);
  const cheeseUsedOz = weeks * 10;
  const cheesePacks = Math.ceil(cheeseUsedOz / 80); // one 10-pack = ten 8 oz blocks = 80 oz
  const fruitShipments = weeks / 2;
  const eggInterval = eggPackSize === 18 ? 3 : 2;
  const eggShipments = Math.ceil(weeks / eggInterval);
  const eggPacks = eggShipments * 7;
  const eggsUsed = weeks * 42;
  const eggsBought = eggPacks * eggPackSize;
  const sardinesUsed = weeks * 7;
  const sardineCases = Math.ceil(sardinesUsed / 12);
  const ketchupUsed = weeks * 5;
  const ketchupBottles = Math.ceil(ketchupUsed / 37);
  const mayoUsed = weeks * 3;
  const mayoBatches = Math.ceil(mayoUsed / 17);
  const mustardUsed = weeks * 2;
  const totals = [
    `${weeks} weeks = ${weeks * 21} meals`,
    `Beef organ blend: ${beefUsedLb} lb`,
    `Eggs: ${eggsUsed}`,
    `Sardines: ${sardinesUsed} tins`,
    `Cheese: ${cheeseUsedOz} oz`,
    `Beef tallow: ${tallowUsedOz} oz`,
    `Fruit: ${weeks * 7} bananas, ${weeks * 14} kiwis, ${weeks * 7} avocados`,
    `Condiments: ${ketchupUsed} tbsp ketchup, ${mayoUsed} tbsp homemade mayo, ${mustardUsed} tsp mustard`,
  ];
  const sources = [
    {
      shipper: 'US Wellness Meats',
      cadence: `1 bundle order every 5 weeks · ${beefBundles} orders in this block`,
      url: 'https://grasslandbeef.com/collections/sample-farm-bundles',
      items: [
        `Organ Blend bundle: ${beefBundles} x 25 lb = ${beefUsedLb} lb, exactly ${weeks} weeks at 5 lb a week. ${money(beefBundles * BEEF_BUNDLE_PRICE)} at the $285.25 sale price, and free shipping at this size.`,
        `Beef tallow: ${tallowPails} small pails (1.7 lb each) across the block, added to the first ${tallowPails} bundle orders: ${roll(tallowPails * 27.2, tallowUsedOz, 'oz')}.`,
      ],
    },
    {
      shipper: "Miller's Bio Farm",
      cadence: `1 bulk cheese order about every 8 weeks · ${cheesePacks} orders in this block`,
      url: 'https://millersbiofarm.com/store/cheese-1',
      items: [
        `Pasteurized pressed mozzarella 10-packs (ten 8 oz blocks, 80 oz per pack): ${cheesePacks} packs, ${roll(cheesePacks * 80, cheeseUsedOz, 'oz')}. Keep sealed blocks refrigerated (they hold 1 to 2 months) and freeze any block that has to wait longer.`,
      ],
    },
    {
      shipper: 'Fresh shipments (shipped grocery, e.g. Misfits Market)',
      cadence: `Fruit every 2 weeks · eggs every ${eggInterval} weeks`,
      url: 'https://www.misfitsmarket.com/egg-delivery',
      items: [
        `Fruit: ${fruitShipments} shipments, each with 14 bananas, 28 kiwis and 14 avocados (2 weeks at a time, because bananas and avocados cannot sit longer). Block totals: ${weeks * 7} bananas, ${weeks * 14} kiwis, ${weeks * 7} avocados. Order by count and check the weight at the door: about 4 oz of banana, 2.5 oz per kiwi and 4 oz of avocado per piece is the planning average.`,
        `Eggs: ${eggShipments} shipments of 7 cartons x ${eggPackSize} eggs = ${eggPacks} cartons (${eggsBought} eggs) for ${eggsUsed} used${eggsBought === eggsUsed ? ', an exact fit' : `, ${eggsBought - eggsUsed} eggs roll into the next block`}. Seven cartons is the magic number either way: 7 x 12 = 84 eggs = exactly 2 weeks, 7 x 18 = 126 eggs = exactly 3 weeks. The cartons must say certified organic AND pasture-raised; OrgaNICK Pastures is the reference egg.`,
      ],
    },
    {
      shipper: 'Pantry bulk shipment (cases and bottles)',
      cadence: '1 bulk order per block · shelf-stable',
      url: 'https://restaurantandmore.com/king-oscar-skinless-boneless-sardines-in-water-4-23-ounce-12-per-case.html',
      items: [
        `King Oscar sardines in water: ${sardineCases} cases of 12 = ${sardineCases * 12} tins for ${sardinesUsed} used${sardineCases * 12 === sardinesUsed ? ', an exact fit' : `, ${sardineCases * 12 - sardinesUsed} tins roll into the next block`}.`,
        `Primal Kitchen Organic Unsweetened Ketchup: ${ketchupBottles} squeeze bottles (18.5 oz, about 37 tbsp each): ${roll(ketchupBottles * 37, ketchupUsed, 'tbsp')}.`,
        `Homemade mayo supplies: ${mayoBatches} batches across the block, so ${mayoBatches} cups of 100% avocado oil (1 cup per batch, about 17 tbsp of mayo per batch): ${roll(mayoBatches * 17, mayoUsed, 'tbsp')}. The yolks come from the egg cartons above, and the whites get folded into that week's eggs so no egg is wasted.`,
        `Plain prepared mustard: ${mustardUsed} tsp used in the block, so one plain bottle (mustard seed, vinegar, water, salt, nothing else) covers many blocks. Celtic sea salt and the plain spices (paprika, cinnamon, garlic powder, onion powder, black pepper) ride along as they run low.`,
        'Drinks: spring water in glass bottles only, by the case as needed (no set weekly amount): Mountain Valley still, Saratoga still or sparkling in the 28 oz glass bottle, S.Pellegrino, or Lauretana. Plastic bottles and aluminum bottles do not pass.',
      ],
    },
  ];
  return { totals, sources };
}
