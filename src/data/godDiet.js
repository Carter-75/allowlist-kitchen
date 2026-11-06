// The God Diet: one weekly pool, 21 meals, nothing else.
// All amounts are ounces, weighed. The week is the lock: individual meals
// swing, but the 21 meals together drain the pool exactly.

export const POOL = [
  { item: 'Beef organ blend', oz: 80, note: 'US Wellness 75% lean ground beef with heart, kidney and liver. About 5 lb.' },
  { item: 'Egg', oz: 73.5, note: 'Exactly 42 eggs at 1.75 oz out of shell. Certified organic and pasture-raised.' },
  { item: 'Sardines', oz: 19, note: 'About 6 1/3 tins, about 3 oz drained each. 1 oz at 19 of the 21 meals; wild salmon covers the other 2.' },
  { item: 'Wild sockeye salmon', oz: 2, note: 'Wild Planet canned wild sockeye. 1 oz at 2 meals, swapped in for the sardines. Farmed salmon is banned; wild is the pass.' },
  { item: 'Wild blueberries', oz: 4, note: 'Wyman\'s frozen wild blueberries. 2 oz at 2 morning meals.' },
  { item: 'Broccoli (cooked)', oz: 6, note: 'Cooked only, always: raw crucifers are denied on this diet, they can block the thyroid. 3 oz at 2 evening meals.' },
  { item: 'Coconut water', oz: 24, note: 'Harmless Harvest plain. 8 oz to drink at 3 midday meals.' },
  { item: 'Beef bone broth', oz: 32, note: 'Homemade from US Wellness beef soup bones. The base of both soups, 16 oz each. It brings the glycine and collagen that muscle meat is short on.' },
  { item: 'Ground flaxseed', oz: 2, note: 'Evidence add, not a video verdict: the Oct 25, 2026 literature check in the database found flax very good (richest plant ALA source, richest lignan source, about 27% fiber). 0.5 oz in 4 meals.' },
  { item: 'Banana', oz: 28, note: 'About 7 bananas. The morning fruit, 4 oz per morning meal.' },
  { item: 'Kiwi', oz: 52.5, note: 'About 21 kiwis. The midday fruit, 7.5 oz per midday meal. Raised Nov 5, 2026 for fiber.' },
  { item: 'Avocado', oz: 56, note: 'About 14 avocados. The evening fruit, 8 oz per evening meal. Doubled Nov 5, 2026 for fiber: avocado carries most of the diet\'s fiber.' },
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
    weeklyOz: 19,
    source: 'King Oscar sardines in water, shipped in 12-tin cases',
    detail: '1 oz, a third of a tin, 4 fish, at 19 of the 21 meals: on the side, mashed into fillings, or crisped into cakes. Wild sockeye salmon takes the sardines\' place at the other 2 meals. This is the in-water tin that passes in the checked database (ingredients: sardines, water). Wild Planet\'s passing tin is packed in olive oil, which is not part of this diet, and the lightly smoked versions fail, so neither is used here.',
  },
  {
    name: 'Wild sockeye salmon',
    weeklyOz: 2,
    source: 'Wild Planet canned wild sockeye salmon',
    detail: 'Wild-caught Alaskan sockeye, approved in the checked database. Farmed salmon is banned (fed synthetic dye to color the meat), so canned wild salmon is the form that passes. It swaps in for the sardines at 2 meals: the salmon pate and the salmon and beef cakes, 1 oz each.',
  },
  {
    name: 'Wild blueberries',
    weeklyOz: 4,
    source: "Wyman's frozen wild blueberries",
    detail: 'Single ingredient, approved in the checked database. 2 oz folded into the banana pancakes and 2 oz with the egg muffins. They also carry fiber, about 0.7g an ounce.',
  },
  {
    name: 'Broccoli (cooked)',
    weeklyOz: 6,
    source: 'Shipped in the fresh box',
    detail: 'Only cooked crucifers are used on this diet. Raw kale and raw broccoli are denied here: raw crucifers can block the thyroid, and the best diet does not carry a food that fights a gland. Cooking removes the problem completely, so the broccoli is always steamed. 3 oz, at the meatloaf and the diner plate.',
  },
  {
    name: 'Coconut water',
    weeklyOz: 24,
    source: 'Harmless Harvest Organic Coconut Water, plain original',
    detail: 'Single ingredient and approved in the checked database. 8 oz to drink at 3 of the midday meals. Only the plain original passes; flavored versions were not checked and are not assumed to pass.',
  },
  {
    name: 'Ground flaxseed',
    weeklyOz: 2,
    source: 'Organic ground flaxseed (meal), shipped',
    detail: 'An evidence add under Carter\'s Nov 5, 2026 rule: a food with no video verdict can join when real-world evidence shows it is very good for you. Flax was literature-checked on Oct 25, 2026 in Carter\'s own database: among the richest plant sources of ALA omega-3, the richest common lignan source, about 27% fiber, with meta-analyses showing modest LDL, blood pressure, and blood sugar improvements. It must be ground: whole seeds pass through undigested. ALA complements the sardines and salmon, it does not replace marine omega-3. 0.5 oz (2 tablespoons) in the pancakes, egg muffins, omelet, and meatballs.',
  },
  {
    name: 'Beef bone broth',
    weeklyOz: 32,
    source: 'Homemade from US Wellness beef soup bones',
    detail: 'An evidence add under Carter\'s Nov 5, 2026 rule. Both soups used to cook in salted water; bone broth is strictly better in the same slot: it brings collagen, gelatin, and glycine, the amino acid a muscle-meat-heavy diet runs short on, plus minerals from the bones. The honest limit: broth itself has modest trial evidence, it earns its place as the nutrient-carrying base of the soups, not as a miracle. Bones simmer with water and salt, nothing else; the broth is jarred and frozen in soup-sized portions. A bottled broth would have to be bones, water, and salt only to take its place.',
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
    weeklyOz: 52.5,
    source: 'Shipped in the fresh box, weighed',
    detail: 'The midday fruit. 7.5 oz (3 kiwis) at each of the 7 midday meals, always on the side. Raised from 5 oz on Nov 5, 2026 to lift the day\'s fiber.',
  },
  {
    name: 'Avocado',
    weeklyOz: 56,
    source: 'Shipped in the fresh box, weighed',
    detail: 'The evening fruit. 8 oz (2 avocados) at each of the 7 evening meals, sliced, mashed as a sauce, or folded into a filling. Doubled from 4 oz on Nov 5, 2026: avocado is the diet\'s biggest fiber source at 1.9g per ounce.',
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
    detail: 'The drink at every meal. The soups cook in bone broth, not water.  Glass bottles only: plastic does not pass, and aluminum bottles are resin-lined, so the water sits against a liner instead of the bottle. The accepted waters: Mountain Valley still (the water Carter settled on Oct 21, 2026, and one of the three brands the videos name as passing, with S.Pellegrino and Lauretana), and Saratoga spring water in the 28 oz glass bottle, still or sparkling (the bottle from Carter\'s photo; it passes by the same spring-water-in-glass rule and he ruled both versions fine on Nov 1, 2026). Nothing flavored, nothing sweetened, nothing added.',
  },
];

// tallow: 'yes' | 'double' | 'light' | 'no'
// Amounts are ounces for this meal. fruitOz is banana 4 / kiwi 5 / avocado 4 by slot.
export const MEALS = [
  { id: 'smash-patties-fried-eggs', day: 1, slot: 'Morning', name: 'Smash Patties and Fried Eggs', minutes: 20,
    description: 'Beef patties smashed thin and crisped in tallow, cheese melted over, eggs fried in the same pan. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes', ketchup: 1, pickles: 2,
    steps: ['Heat tallow in a heavy pan. Smash the beef into two thin patties, salt them, and fry until the edges crisp.', 'Lay the cheese over the patties to melt. Fry the eggs in the same pan in the beef fat.', 'Plate the patties and eggs with the sardines, the pickle spears, and the banana on the side, and the ketchup for the patties.'] },
  { id: 'beef-egg-scramble', day: 1, slot: 'Midday', name: 'Beef and Egg Scramble', minutes: 15,
    description: 'Beef crumbled and scrambled with eggs in tallow, cheese folded in at the end. Sardines and kiwi on the side, coconut water to drink.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes', coconutWater: 8, psyllium: 1,
    steps: ['Brown the beef crumbles in tallow with salt, breaking them small.', 'Pour in the beaten eggs and scramble soft. Fold the cheese in off the heat.', 'Serve with the sardines and the kiwi on the side.', 'Stir the psyllium into the coconut water and drink it with the meal.'] },
  { id: 'guac-burger-plate', day: 1, slot: 'Evening', name: 'Guac Burger Plate', minutes: 20,
    description: 'A tallow-fried patty with avocado mashed with salt as the sauce, soft eggs over the top, sardines on the side. No cheese at this meal.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 8, tallow: 'yes', ketchup: 1, oliveOil: 1,
    steps: ['Mash the avocado with salt and the olive oil into a rough guacamole.', 'Fry the beef as one patty in tallow, salted as it cooks.', 'Cook the eggs soft in the same pan. Plate the patty, spoon the avocado over, top with the eggs, sardines on the side, and the ketchup for the patty.'] },
  { id: 'scotch-eggs', day: 2, slot: 'Morning', name: 'Scotch Eggs', minutes: 30,
    description: 'Eggs wrapped in beef and fried in tallow, a double tallow meal, with cheese melted over. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'double',
    steps: ['Boil the eggs until just set, cool and peel them.', 'Flatten the beef into sheets, salt, and wrap each egg fully. Fry in a double share of tallow, turning until crisp all over.', 'Melt the cheese over the top. Serve with the sardines and the banana.'] },
  { id: 'egg-wrap-burrito', day: 2, slot: 'Midday', name: 'Egg Wrap Burrito', minutes: 20,
    description: 'A thin omelet is the wrap. Inside: tallow-seared beef, cheese, and sardine pieces. Kiwi on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes',
    steps: ['Cook the beaten eggs as one thin omelet sheet in tallow and set it flat.', 'Sear the beef strips in tallow with salt. Break the sardines into pieces.', 'Fill the omelet with beef, cheese and sardines, roll it tight, and serve with the kiwi.'] },
  { id: 'meatballs-avocado', day: 2, slot: 'Evening', name: 'Meatballs with Avocado', minutes: 25,
    description: 'Beef meatballs fried in tallow with cheese grated over, avocado slices and sardines on the plate. The one meal of the week with no egg.',
    beef: 4, egg: 0, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes', ketchup: 1, flax: 0.5,
    steps: ['Mix the ground flax into the beef, roll it into meatballs with salt, and fry them in tallow until browned through.', 'Grate the cheese over the hot meatballs so it melts into them.', 'Serve with the avocado slices, the sardines, and the ketchup for dipping.'] },
  { id: 'banana-pancakes-breakfast-patties', day: 3, slot: 'Morning', name: 'Banana Pancakes and Breakfast Patties', minutes: 25,
    description: 'Pancakes made from just banana and egg with wild blueberries folded in and raw honey drizzled over, griddled in tallow, next to beef breakfast patties with cheese melted on. Sardines on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes', blueberries: 2, honey: 2, flax: 0.5, psyllium: 1,
    seasoning: 'Cinnamon', steps: ['Mash the banana with the eggs and the cinnamon into a batter, whisk in the ground flax and the psyllium, and fold in the blueberries. Griddle small pancakes in tallow.', 'Form the beef into breakfast patties, salt, and fry in tallow. Melt the cheese on them.', 'Drizzle the honey over the pancakes. Serve the pancakes and patties together with the sardines on the side.'] },
  { id: 'beef-pizza', day: 3, slot: 'Midday', name: 'Beef Pizza', minutes: 25,
    description: 'Beef pressed flat and crisped in tallow is the crust. Cheese, sardine pieces, and an egg on top. Kiwi on the side, coconut water to drink.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes', coconutWater: 8, psyllium: 1,
    steps: ['Press the beef into a thin round in a hot tallow pan and crisp it like a crust, salted.', 'Top with the cheese and sardine pieces and let the cheese melt.', 'Fry or bake the egg and set it on top. Serve with the kiwi.', 'Stir the psyllium into the coconut water and drink it with the meal.'] },
  { id: 'deviled-eggs-patty', day: 3, slot: 'Evening', name: 'Deviled Eggs and a Cheese Patty', minutes: 30,
    description: 'Deviled eggs with the yolks mashed with sardines and avocado, next to a tallow beef patty with cheese.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes',
    mayo: 1, mustard: 1, seasoning: 'Paprika', steps: ['Boil the eggs, halve them, and mash the yolks with the sardines, avocado, homemade mayo and mustard and a pinch of salt. Fill the whites.', 'Fry the beef patty in tallow and melt the cheese over it.', 'Dust the deviled eggs with paprika and plate them next to the patty.'] },
  { id: 'egg-drop-beef-soup', day: 4, slot: 'Morning', name: 'Egg Drop Beef Soup', minutes: 20,
    description: 'No tallow. Beef simmered in beef bone broth, egg ribbons stirred through, sardines in the bowl, cheese grated over. Banana on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no', broth: 16,
    seasoning: 'Turmeric', steps: ['Simmer the beef in the bone broth until it gives up its flavor, breaking it into small pieces.', 'Swirl the water and drizzle in the beaten eggs so they set as ribbons. Add the sardines.', 'Ladle into a bowl, grate the cheese over, and serve with the banana.'] },
  { id: 'cheese-crisps-sardine-pate', day: 4, slot: 'Midday', name: 'Cheese Crisps with Salmon Pate', minutes: 20,
    description: 'A double cheese meal: crisps from half the cheese, wild salmon mashed as a pate to scoop with them, plus a tallow beef patty and fried eggs. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 0, salmon: 1, cheese: 1, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes',
    mayo: 1, steps: ['Bake or fry small piles of the cheese until crisp and golden. Mash the salmon with the homemade mayo and a pinch of salt into a pate.', 'Fry the beef patty in tallow and fry the eggs in the same pan.', 'Serve the crisps and pate with the patty and eggs, kiwi on the side.'] },
  { id: 'open-face-egg-salad-stack', day: 4, slot: 'Evening', name: 'Open-Face Egg Salad Stack', minutes: 25,
    description: 'Chopped eggs and sardines mashed with avocado, stacked on tallow-seared patties with cheese melted under. A beef-heavy plate to balance the light soup morning.',
    beef: 5, egg: 5.25, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes',
    mayo: 1, mustard: 1, steps: ['Sear thick beef patties in tallow with salt and melt the cheese on them.', 'Chop the cooked eggs and mash with the sardines, avocado, homemade mayo and mustard into an egg salad.', 'Stack the egg salad on the patties and serve.'] },
  { id: 'the-no-beef-meal', day: 5, slot: 'Morning', name: 'The No-Beef Meal', minutes: 15,
    description: 'The one meal with no beef and no tallow: eggs, sardines, and cheese crisps, with banana. Its beef moves to tonight\'s meatloaf.',
    beef: 0, egg: 5.25, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no',
    steps: ['Crisp the cheese into crisps in a dry pan.', 'Cook the eggs any way you like, in a dry or lightly beef-fat-free pan, salted.', 'Serve the eggs, sardines and cheese crisps with the banana.'] },
  { id: 'cheese-stuffed-beef-rolls', day: 5, slot: 'Midday', name: 'Cheese-Stuffed Beef Rolls', minutes: 25,
    description: 'Beef rolled around cheese and seared in tallow, with poached eggs. Sardines and kiwi on the side, coconut water to drink.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes', coconutWater: 8, psyllium: 1,
    steps: ['Flatten the beef, lay the cheese in the middle, roll tight and pin with a toothpick if needed. Salt the outside.', 'Sear the rolls in tallow, turning until browned and the cheese melts inside.', 'Poach the eggs. Serve the rolls and eggs with the sardines and kiwi.', 'Stir the psyllium into the coconut water and drink it with the meal.'] },
  { id: 'mini-meatloaf', day: 5, slot: 'Evening', name: 'Mini Meatloaf', minutes: 40,
    description: 'Double beef, including the beef the no-beef morning gave up. Baked in its own fat, no tallow, with avocado mash, eggs, sardines, and steamed broccoli. No cheese at this meal.',
    beef: 8, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 8, tallow: 'no', broccoli: 3,
    ketchup: 1, steps: ['Form the beef into a small loaf with salt, spread the ketchup over the top as a glaze, and bake it in its own fat until cooked through. Rest it before slicing.', 'Mash the avocado with salt. Steam the broccoli until tender. Cook the eggs to go with it.', 'Slice the meatloaf and serve with the avocado mash, eggs, sardines and broccoli.'] },
  { id: 'loaded-omelet', day: 6, slot: 'Morning', name: 'Loaded Omelet', minutes: 15,
    description: 'An omelet cooked in tallow with beef crumbles and cheese folded in, sardines on top. Banana on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes', flax: 0.5,
    seasoning: 'Turmeric', steps: ['Brown the beef crumbles in tallow with salt.', 'Stir the ground flax and turmeric into the beaten eggs, add them, cook the omelet around the beef, and fold the cheese inside.', 'Slide it out, lay the sardines on top, and serve with the banana.'] },
  { id: 'sardine-beef-cakes', day: 6, slot: 'Midday', name: 'Salmon and Beef Cakes', minutes: 25,
    description: 'Wild salmon and beef mixed into cakes and fried crisp in tallow, a double tallow meal, with a fried egg on top and cheese melted over. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 0, salmon: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'double',
    steps: ['Mash the salmon into the beef with salt and form flat cakes.', 'Fry the cakes in a double share of tallow until deeply crisp on both sides.', 'Fry the egg, set it on the cakes, and melt the cheese over everything. Serve with the kiwi.'] },
  { id: 'meatball-soup', day: 6, slot: 'Evening', name: 'Meatball Soup', minutes: 30,
    description: 'No tallow. Meatballs simmered in beef bone broth with egg ribbons, cheese stirred in, sardines in the bowl. Avocado on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'no', broth: 16,
    seasoning: 'Ginger', steps: ['Roll small meatballs from the salted beef and simmer them in the bone broth.', 'Swirl in the beaten eggs as ribbons, add the sardines, and stir the cheese in until it melts.', 'Serve in bowls with the avocado on the side.'] },
  { id: 'egg-muffins', day: 7, slot: 'Morning', name: 'Egg Muffins', minutes: 30,
    description: 'Beef pressed into muffin cups with eggs baked inside, the tin greased with tallow, cheese on top. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'light', blueberries: 2, flax: 0.5,
    steps: ['Grease a muffin tin with tallow. Press the beef into cups, salt them, stir the ground flax into the beaten eggs, and pour the eggs into the cups.', 'Bake until the eggs are set. Put the cheese on top for the last minutes so it melts.', 'Serve with the sardines, the banana, and the blueberries.'] },
  { id: 'fried-rice-plate', day: 7, slot: 'Midday', name: 'Fried "Rice" Plate', minutes: 20,
    description: 'Beef crumbled small and fried hard in tallow until it eats like rice, eggs scrambled in pieces through it, cheese folded in. Sardines and kiwi on the side.',
    beef: 3, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes',
    steps: ['Crumble the beef very small and fry it hard in tallow with salt until browned and rice-like.', 'Scramble the eggs in pieces through the beef.', 'Fold the cheese in off the heat. Serve with the sardines and kiwi.'] },
  { id: 'the-diner-plate', day: 7, slot: 'Evening', name: 'The Diner Plate', minutes: 25,
    description: 'A thick beef slab seared in tallow like a steak, sunny eggs cooked in the same fat, cheese on the beef, sardines on the side, avocado sliced with salt and olive oil, pickle spears and steamed broccoli. Then the week loops back to Day 1.',
    beef: 5, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes', ketchup: 1, oliveOil: 1, pickles: 2, broccoli: 3,
    steps: ['Sear the thick beef slab in tallow with salt like a steak, resting it a few minutes.', 'Fry the eggs sunny in the same fat. Melt the cheese over the beef.', 'Steam the broccoli. Plate with the sardines, the avocado sliced with salt and the olive oil drizzled over, the pickle spears, the broccoli, and the ketchup for the beef.'] },
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
  'Wild sockeye salmon': { label: 'Amazon (Wild Planet sockeye)', url: 'https://www.amazon.com/s?k=Wild+Planet+wild+sockeye+salmon' },
  'Wild blueberries': { label: "Amazon (Wyman's frozen wild blueberries)", url: 'https://www.amazon.com/s?k=Wymans+frozen+wild+blueberries' },
  'Broccoli (cooked)': { label: 'Shipped fresh box', url: 'https://www.misfitsmarket.com/egg-delivery' },
  'Coconut water': { label: 'Amazon (Harmless Harvest plain)', url: 'https://www.amazon.com/s?k=Harmless+Harvest+organic+coconut+water' },
  'Raw honey': { label: 'Amazon (Wedderspoon raw manuka)', url: 'https://www.amazon.com/s?k=Wedderspoon+raw+manuka+honey' },
  'Olive oil': { label: 'Amazon (California Olive Ranch 100% California)', url: 'https://www.amazon.com/s?k=California+Olive+Ranch+100%25+California+extra+virgin+olive+oil' },
  'Pickles': { label: "Amazon (Bubbies Kosher Dill)", url: 'https://www.amazon.com/s?k=Bubbies+kosher+dill+pickles' },
  'Ground flaxseed': { label: 'Amazon (organic ground flaxseed)', url: 'https://www.amazon.com/s?k=organic+ground+flaxseed' },
  'Psyllium husk': { label: 'Amazon (psyllium husk powder)', url: 'https://www.amazon.com/s?k=psyllium+husk+powder' },
  'Beef bone broth': { label: 'US Wellness Meats (soup bones)', url: 'https://grasslandbeef.com/search?q=soup+bones' },
};

// Estimated costs. Prices checked November 5, 2026. These are estimates for
// planning, not quotes: store prices move, and Miller's shows its exact
// cheese prices only after a free signup, so cheese is estimated from the
// Miller's cheese prices on record (about $2.00/oz).
export const PRICE = {
  beefPerOz: 285.25 / (25 * 16), // US Wellness Organ Blend 25 lb bundle, $285.25 on sale ($11.41/lb)
  eggPerOz: (5.39 / 12) / 1.75, // OrgaNICK Pastures, $5.39/dozen at Woodman's
  sardinesPerOz: 4.59 / 3,      // King Oscar in water, $4.59 per tin, about 3 oz drained
  salmonPerOz: 1.0,             // Wild Planet canned wild sockeye, about $6 per 6 oz can, estimated
  blueberriesPerOz: 0.25,       // Wyman's frozen wild, 3 lb bag, estimated
  flaxPerOz: 0.35,              // organic ground flaxseed, estimated
  brothPerOz: 0.30,             // homemade from soup bones, estimated
  broccoliPerOz: 0.15,          // fresh broccoli, estimated
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
  'Wild sockeye salmon: about $6 for a 6 oz can of Wild Planet, estimated. 2 oz a week.',
  'Wild blueberries: Wyman\'s frozen wild, estimated at $0.25 an ounce. 4 oz a week.',
  'Broccoli: fresh, estimated at $0.15 an ounce. 6 oz a week, always cooked.',
  'Coconut water: Harmless Harvest plain, about $0.31 an ounce. 24 oz a week.',
  'Raw honey: Wedderspoon raw manuka, about $0.85 a teaspoon. 2 teaspoons a week.',
  'Olive oil: California Olive Ranch 100% California, about $0.12 a teaspoon. 2 teaspoons a week.',
  'Pickles: Bubbies Kosher Dill, about $0.35 a spear. 4 spears a week.',
  'Ground flaxseed: organic, estimated at $0.35 an ounce. 2 oz a week. Psyllium husk: estimated at $0.40 a tablespoon, 4 tablespoons a week.',
  'Beef bone broth: homemade from US Wellness soup bones, estimated at $0.30 an ounce for the bones. 32 oz a week.',
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
  salmon: { kcal: 50, protein: 6.5, fat: 2, carbs: 0, fiber: 0 },
  blueberries: { kcal: 16, protein: 0.2, fat: 0.1, carbs: 4.1, fiber: 0.7 },
  flax: { kcal: 150, protein: 5.2, fat: 12, carbs: 8.2, fiber: 7.7 },
  broth: { kcal: 6, protein: 1.2, fat: 0, carbs: 0, fiber: 0 },
  broccoli: { kcal: 10, protein: 0.8, fat: 0.1, carbs: 1.9, fiber: 0.7 },
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
  honey: { kcal: 21, protein: 0, fat: 0, carbs: 5.7, fiber: 0 }, // per teaspoon, raw honey
  oliveOil: { kcal: 40, protein: 0, fat: 4.5, carbs: 0, fiber: 0 }, // per teaspoon, extra virgin olive oil
  coconutWater: { kcal: 6, protein: 0.1, fat: 0, carbs: 1.4, fiber: 0.1 }, // per ounce, plain coconut water
  pickles: { kcal: 5, protein: 0, fat: 0, carbs: 1, fiber: 0.3 }, // per spear, fermented dill
  psyllium: { kcal: 18, protein: 0, fat: 0, carbs: 5, fiber: 4.5 }, // per tablespoon, husk powder
};
export const CONDIMENT_PRICE = {
  ketchup: 8.79 / 37, // 18.5 oz squeeze bottle $8.79 at Woodman's, about 37 tbsp
  mayo: 0.25,         // homemade: about $4.25 a batch (1 cup avocado oil, 1 yolk, lemon), about 17 tbsp
  mustard: 0.05,      // per teaspoon, from a plain prepared mustard bottle
  honey: 0.85,        // per teaspoon, Wedderspoon raw manuka, estimated
  oliveOil: 0.12,     // per teaspoon, California Olive Ranch 100% California
  coconutWater: 0.31, // per ounce, Harmless Harvest plain
  pickles: 0.35,      // per spear, Bubbies Kosher Dill
  psyllium: 0.40,     // per tablespoon, husk powder, estimated
};
export const CONDIMENT_KEYS = ['ketchup', 'mayo', 'mustard', 'honey', 'oliveOil', 'coconutWater', 'pickles', 'psyllium'];
export function condimentNutrition(m) {
  const out = { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 };
  for (const k of CONDIMENT_KEYS) {
    const n = CONDIMENT_NUTRITION[k], amt = m[k] || 0;
    out.kcal += n.kcal * amt; out.protein += n.protein * amt; out.fat += n.fat * amt; out.carbs += n.carbs * amt; out.fiber += (n.fiber || 0) * amt;
  }
  return out;
}
export function condimentCost(m) {
  return CONDIMENT_KEYS.reduce((s, k) => s + (m[k] || 0) * CONDIMENT_PRICE[k], 0);
}

export function mealNutrition(m) {
  const tallowOz = (TALLOW_UNITS[m.tallow] / TALLOW_TOTAL_UNITS) * 4;
  const parts = [
    [NUTRITION_PER_OZ.beef, m.beef],
    [NUTRITION_PER_OZ.egg, m.egg],
    [NUTRITION_PER_OZ.sardines, m.sardines],
    [NUTRITION_PER_OZ.salmon, m.salmon || 0],
    [NUTRITION_PER_OZ.blueberries, m.blueberries || 0],
    [NUTRITION_PER_OZ.flax, m.flax || 0],
    [NUTRITION_PER_OZ.broth, m.broth || 0],
    [NUTRITION_PER_OZ.broccoli, m.broccoli || 0],
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
    + (m.salmon || 0) * PRICE.salmonPerOz
    + (m.blueberries || 0) * PRICE.blueberriesPerOz
    + (m.flax || 0) * PRICE.flaxPerOz
    + (m.broth || 0) * PRICE.brothPerOz
    + (m.broccoli || 0) * PRICE.broccoliPerOz
    + m.cheese * PRICE.cheesePerOz
    + m.fruitOz * PRICE.fruitPerOz[m.fruit]
    + TALLOW_UNITS[m.tallow] * TALLOW_UNIT_COST
    + condimentCost(m);
}
export function ingredientWeekCost(key) {
  const t = {
    'Beef organ blend': 80 * PRICE.beefPerOz,
    'Eggs': 73.5 * PRICE.eggPerOz,
    'Sardines': 19 * PRICE.sardinesPerOz,
    'Wild sockeye salmon': 2 * PRICE.salmonPerOz,
    'Wild blueberries': 4 * PRICE.blueberriesPerOz,
    'Broccoli (cooked)': 6 * PRICE.broccoliPerOz,
    'Coconut water': MEALS.reduce((s, m) => s + (m.coconutWater || 0), 0) * CONDIMENT_PRICE.coconutWater,
    'Ground flaxseed': 2 * PRICE.flaxPerOz,
    'Beef bone broth': 32 * PRICE.brothPerOz,
    'Psyllium husk': MEALS.reduce((s, m) => s + (m.psyllium || 0), 0) * CONDIMENT_PRICE.psyllium,
    'Cheese': 10 * PRICE.cheesePerOz,
    'Beef tallow': 4 * PRICE.tallowPerOz,
    'Banana': 28 * PRICE.fruitPerOz.Banana,
    'Kiwi': 52.5 * PRICE.fruitPerOz.Kiwi,
    'Avocado': 56 * PRICE.fruitPerOz.Avocado,
    'Celtic sea salt': 0,
    'Water': 0,
    'Ketchup': MEALS.reduce((s, m) => s + (m.ketchup || 0), 0) * CONDIMENT_PRICE.ketchup,
    'Homemade mayo': MEALS.reduce((s, m) => s + (m.mayo || 0), 0) * CONDIMENT_PRICE.mayo,
    'Mustard': MEALS.reduce((s, m) => s + (m.mustard || 0), 0) * CONDIMENT_PRICE.mustard,
    'Raw honey': MEALS.reduce((s, m) => s + (m.honey || 0), 0) * CONDIMENT_PRICE.honey,
    'Extra virgin olive oil': MEALS.reduce((s, m) => s + (m.oliveOil || 0), 0) * CONDIMENT_PRICE.oliveOil,
    'Fermented pickles': MEALS.reduce((s, m) => s + (m.pickles || 0), 0) * CONDIMENT_PRICE.pickles,
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
    detail: 'No bottled mayo passes. Every bottled brand fails the egg rule, which has no exceptions (eggs in any product must be certified organic AND pasture-raised); Primal Kitchen mayo was removed from the approved list on Oct 27, 2026 because its eggs are cage-free only. So the mayo is homemade from one of the diet\'s own eggs, whisked with avocado oil (ruled fine Oct 25, 2026), lemon, mustard and salt. One batch is about 17 tablespoons, roughly five to six weeks of mayo at 3 tablespoons a week. It goes in the deviled eggs, the salmon pate, and the egg salad. Every mayo ingredient is covered: the yolk comes from the egg cartons, and the avocado oil and lemons are counted per batch in the order plan below.',
  },
  {
    name: 'Mustard',
    amount: '1 teaspoon in 2 meals a week',
    source: 'Plain prepared mustard: mustard seed, vinegar, water, salt, and nothing else',
    detail: 'Plain prepared mustard is on the list under the rulebook ruling Carter reviewed Oct 27, 2026: seed, vinegar, water and salt, with no sugar, honey, or flavorings added. It goes in the deviled eggs and the egg salad, a teaspoon each.',
  },
  {
    name: 'Raw honey',
    amount: '2 teaspoons on 1 meal a week',
    source: 'Wedderspoon Raw Manuka Honey, the plain jar',
    detail: 'Raw honey is one of only two approved sweeteners in the rulebook (whole fruit is the other), and manuka is the one the videos praise. It is drizzled over the banana pancakes. The Manuka Honey Drops from the same brand fail on cane sugar, so it is the plain jar only.',
  },
  {
    name: 'Extra virgin olive oil',
    amount: '1 teaspoon on 2 meals a week',
    source: 'California Olive Ranch, ONLY the 100% California bottle',
    detail: 'Extra virgin olive oil is an approved fat in the rulebook. The 100% California bottle is the verified one; the same brand\'s Global Blend and avocado-blend bottles are different products and were not verified. A teaspoon is whisked into the guacamole and a teaspoon is drizzled over the diner plate avocado.',
  },
  {
    name: 'Fermented pickles',
    amount: '2 spears on 2 meals a week',
    source: 'Bubbies Kosher Dill Pickles',
    detail: 'Naturally fermented, no vinegar, no preservatives, no dyes: cucumbers, water, salt, garlic, dill, spices, mustard seed, calcium chloride. They sit next to the two burger plates, the smash patties and the diner plate.',
  },
  {
    name: 'Psyllium husk',
    amount: '1 tablespoon on 4 meals a week',
    source: 'Psyllium husk powder, shipped',
    detail: 'An evidence add under Carter\'s Nov 5, 2026 rule. Psyllium was literature-checked on Oct 25, 2026 in Carter\'s own database: one of the best-studied fibers in existence, with a meta-analysis of 28 trials showing LDL down about 7% at around 10 g a day, an FDA-authorized heart-health claim, and systematic reviews behind it for regularity and gut bacteria. One tablespoon is whisked into the pancake batter and one is stirred into the coconut water at each of the 3 midday meals that carry it. It gels hard, so it is always taken with its drink, never dry.',
  },
  {
    name: 'Seasonings',
    amount: 'To taste, no set amount',
    source: 'Plain single spices: paprika, cinnamon, turmeric, ginger, garlic powder, onion powder, black pepper',
    detail: 'Seasonings are to taste and are not counted in the calories or macros. Paprika dusts the deviled eggs, cinnamon goes in the banana pancake batter, and garlic powder, onion powder and black pepper are there for the beef when a meal wants them. Turmeric seasons the egg drop soup and the omelet, and ginger the meatball soup: both are evidence adds at food amounts, turmeric for its curcumin and ginger as the classic stomach settler.',
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
  const sardineOzUsed = weeks * 19;
  const sardineTins = Math.ceil(sardineOzUsed / 3);
  const sardineCases = Math.ceil(sardineTins / 12);
  const salmonOzUsed = weeks * 2;
  const salmonCans = Math.ceil(salmonOzUsed / 6);
  const blueberryOzUsed = weeks * 4;
  const blueberryBags = Math.ceil(blueberryOzUsed / 48);
  const broccoliOzUsed = weeks * 6;
  const coconutWaterBottles = (weeks / 2) * 3;
  const honeyUsed = weeks * 2;
  const honeyJars = Math.ceil(honeyUsed / 50);
  const pickleSpearsUsed = weeks * 4;
  const pickleJars = Math.ceil(pickleSpearsUsed / 12);
  const flaxOzUsed = weeks * 2;
  const flaxBags = Math.ceil(flaxOzUsed / 16);
  const psylliumUsed = weeks * 4;
  const ketchupUsed = weeks * 5;
  const ketchupBottles = Math.ceil(ketchupUsed / 37);
  const mayoUsed = weeks * 3;
  const mayoBatches = Math.ceil(mayoUsed / 17);
  const mustardUsed = weeks * 2;
  const totals = [
    `${weeks} weeks = ${weeks * 21} meals`,
    `Beef organ blend: ${beefUsedLb} lb`,
    `Eggs: ${eggsUsed}`,
    `Sardines: ${sardineTins} tins (19 oz a week; salmon covers 2 meals)`,
    `Wild sockeye salmon: ${salmonOzUsed} oz`,
    `Wild blueberries: ${blueberryOzUsed} oz`,
    `Broccoli: ${broccoliOzUsed} oz (cooked)`,
    `Coconut water: ${weeks * 24} oz`,
    `Ground flaxseed: ${flaxOzUsed} oz`,
    `Psyllium husk: ${psylliumUsed} tbsp`,
    `Cheese: ${cheeseUsedOz} oz`,
    `Beef tallow: ${tallowUsedOz} oz`,
    `Fruit: ${weeks * 7} bananas, ${weeks * 21} kiwis, ${weeks * 14} avocados`,
    `Condiments: ${ketchupUsed} tbsp ketchup, ${mayoUsed} tbsp homemade mayo, ${mustardUsed} tsp mustard, ${honeyUsed} tsp raw honey, ${weeks * 2} tsp olive oil, ${pickleSpearsUsed} pickle spears`,
  ];
  const sources = [
    {
      shipper: 'US Wellness Meats',
      cadence: `1 bundle order every 5 weeks · ${beefBundles} orders in this block`,
      url: 'https://grasslandbeef.com/collections/sample-farm-bundles',
      items: [
        `Organ Blend bundle: ${beefBundles} x 25 lb = ${beefUsedLb} lb, exactly ${weeks} weeks at 5 lb a week. ${money(beefBundles * BEEF_BUNDLE_PRICE)} at the $285.25 sale price, and free shipping at this size.`,
        `Beef tallow: ${tallowPails} small pails (1.7 lb each) across the block, added to the first ${tallowPails} bundle orders: ${roll(tallowPails * 27.2, tallowUsedOz, 'oz')}.`,
        'Beef soup bones for the bone broth: about 4 lb rides with each bundle order. One bones batch makes roughly 5 quarts of broth, the soup base for the 5 weeks between bundle orders. Simmer with water and salt, jar it, freeze it in 16 oz portions.',
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
        `Fruit: ${fruitShipments} shipments, each with 14 bananas, 42 kiwis, 28 avocados, 12 oz of broccoli, and 3 bottles (16 oz each) of plain coconut water (2 weeks at a time, because bananas and avocados cannot sit longer). Block totals: ${weeks * 7} bananas, ${weeks * 21} kiwis, ${weeks * 14} avocados. Order by count and check the weight at the door: about 4 oz of banana, 2.5 oz per kiwi and 4 oz of avocado per piece is the planning average.`,
        `Eggs: ${eggShipments} shipments of 7 cartons x ${eggPackSize} eggs = ${eggPacks} cartons (${eggsBought} eggs) for ${eggsUsed} used${eggsBought === eggsUsed ? ', an exact fit' : `, ${eggsBought - eggsUsed} eggs roll into the next block`}. Seven cartons is the magic number either way: 7 x 12 = 84 eggs = exactly 2 weeks, 7 x 18 = 126 eggs = exactly 3 weeks. The cartons must say certified organic AND pasture-raised; OrgaNICK Pastures is the reference egg.`,
      ],
    },
    {
      shipper: 'Pantry bulk shipment (cases and bottles)',
      cadence: '1 bulk order per block · shelf-stable',
      url: 'https://restaurantandmore.com/king-oscar-skinless-boneless-sardines-in-water-4-23-ounce-12-per-case.html',
      items: [
        `King Oscar sardines in water: ${sardineCases} cases of 12 = ${sardineCases * 12} tins for ${sardineTins} tins needed (${sardineOzUsed} oz across the block)${sardineCases * 12 === sardineTins ? ', an exact fit' : `, ${sardineCases * 12 - sardineTins} tins roll into the next block`}`,
        `Wild sockeye salmon: ${salmonCans} cans (6 oz each, Wild Planet) = ${salmonCans * 6} oz for ${salmonOzUsed} oz used${salmonCans * 6 === salmonOzUsed ? ', an exact fit' : `, ${salmonCans * 6 - salmonOzUsed} oz rolls forward in the fridge`}`,
        `Wild blueberries: ${blueberryBags} frozen 3 lb bags (48 oz, Wyman's) = ${blueberryBags * 48} oz for ${blueberryOzUsed} oz used, the rest stays frozen for the next block`,
        `Ground flaxseed: ${flaxBags} bags (1 lb, organic ground) = ${flaxBags * 16} oz for ${flaxOzUsed} oz used, the rest stays sealed for the next block. Psyllium husk: 1 canister covers the block at ${psylliumUsed} tablespoons. Raw manuka honey: ${honeyJars} plain jar${honeyJars === 1 ? '' : 's'} (Wedderspoon) for ${honeyUsed} tsp across the block. Extra virgin olive oil: 1 bottle of California Olive Ranch 100% California covers the block at 2 tsp a week. Fermented pickles: ${pickleJars} jars of Bubbies Kosher Dill (about 12 spears a jar) for ${pickleSpearsUsed} spears used`,
        `Primal Kitchen Organic Unsweetened Ketchup: ${ketchupBottles} squeeze bottles (18.5 oz, about 37 tbsp each): ${roll(ketchupBottles * 37, ketchupUsed, 'tbsp')}.`,
        `Homemade mayo supplies: ${mayoBatches} batches across the block, so ${mayoBatches} cups of 100% avocado oil (1 cup per batch, about 17 tbsp of mayo per batch): ${roll(mayoBatches * 17, mayoUsed, 'tbsp')}. The yolks come from the egg cartons above, and the whites get folded into that week's eggs so no egg is wasted.`,
        `Plain prepared mustard: ${mustardUsed} tsp used in the block, so one plain bottle (mustard seed, vinegar, water, salt, nothing else) covers many blocks. Celtic sea salt and the plain spices (paprika, cinnamon, garlic powder, onion powder, black pepper) ride along as they run low.`,
        `Lemons for the mayo: ${mayoBatches} across the block (1 per batch, for the juice), riding along with the fresh fruit shipments. Mustard and Celtic sea salt for the mayo come from the pantry bottles above, and each batch's yolk comes out of the egg cartons, so every mayo ingredient is accounted for in this plan and in the meal costs.`,
        'Drinks: spring water in glass bottles only, by the case as needed (no set weekly amount): Mountain Valley still, Saratoga still or sparkling in the 28 oz glass bottle, S.Pellegrino, or Lauretana. Plastic bottles and aluminum bottles do not pass.',
      ],
    },
  ];
  return { totals, sources };
}

// The order calendar: every order event for a year, with the exact contents
// of that single order. Cycles: fresh every 2 weeks, eggs every 2 weeks
// (12-count cartons) or 3 weeks (18-count), US Wellness every 5 weeks,
// Miller's every 8 weeks, pantry once per block. Events on the same day
// from the same shipper merge into one order.
export const SHIPPER_ORDER = ['US Wellness Meats', "Miller's Bio Farm", 'Fresh shipments', 'Pantry bulk shipment'];
export const SHIPPER_URL = {
  'US Wellness Meats': 'https://grasslandbeef.com/collections/sample-farm-bundles',
  "Miller's Bio Farm": 'https://millersbiofarm.com/store/cheese-1',
  'Fresh shipments': 'https://www.misfitsmarket.com/egg-delivery',
  'Pantry bulk shipment': 'https://restaurantandmore.com/king-oscar-skinless-boneless-sardines-in-water-4-23-ounce-12-per-case.html',
};

export function orderSchedule(blockWeeks = 10, eggPackSize = 12, horizonWeeks = 52) {
  const byKey = new Map();
  const add = (week, shipper, cadence, items) => {
    const key = `${week}|${shipper}`;
    if (!byKey.has(key)) byKey.set(key, { id: key, weekOffset: week, shipper, cadence, url: SHIPPER_URL[shipper], items: [] });
    byKey.get(key).items.push(...items);
  };
  // Mayo batches start about every 17/3 weeks; the lemon for a batch rides
  // with the fresh shipment whose 2-week window contains the batch start.
  const batchStarts = [];
  for (let t = 0; t < horizonWeeks; t += 17 / 3) batchStarts.push(t);
  const lemonsInWindow = (w) => batchStarts.filter((t) => t >= w && t < w + 2).length;

  for (let w = 0; w < horizonWeeks; w += 2) {
    const items = [
      '14 bananas (about 56 oz)',
      '42 kiwis (about 105 oz)',
      '28 avocados (about 112 oz)',
      'Broccoli: 12 oz (for 2 weeks of cooked sides)',
      'Coconut water, plain (Harmless Harvest): 3 bottles, 16 oz each',
    ];
    const lemons = lemonsInWindow(w);
    if (lemons) items.push(lemons === 1 ? '1 lemon (for the next batch of homemade mayo)' : `${lemons} lemons (for the homemade mayo batches)`);
    add(w, 'Fresh shipments', 'Every 2 weeks', items);
  }
  const eggInterval = eggPackSize === 18 ? 3 : 2;
  for (let w = 0; w < horizonWeeks; w += eggInterval) {
    add(w, 'Fresh shipments', `Eggs every ${eggInterval} weeks`, [
      `Eggs: 7 cartons of ${eggPackSize} (${eggPackSize === 18 ? 126 : 84} eggs, exactly ${eggInterval} weeks). Cartons must say certified organic AND pasture-raised`,
    ]);
  }
  let tallowSupply = 0;
  for (let w = 0; w < horizonWeeks; w += 5) {
    const need = 20; // 4 oz a week for the 5 weeks until the next bundle order
    const pails = Math.max(0, Math.ceil((need - tallowSupply) / 27.2));
    tallowSupply += pails * 27.2 - need;
    const items = ['Organ Blend bundle: 1 x 25 lb (exactly 5 weeks of beef)', 'Beef soup bones: about 4 lb (for the bone broth batches)'];
    if (pails) items.push(`Beef tallow: ${pails} small pail${pails === 1 ? '' : 's'} (1.7 lb each)`);
    add(w, 'US Wellness Meats', 'Every 5 weeks', items);
  }
  for (let w = 0; w < horizonWeeks; w += 8) {
    add(w, "Miller's Bio Farm", 'Every 8 weeks', [
      'Pasteurized pressed mozzarella: 1 x 10-pack (ten 8 oz blocks, 80 oz, exactly 8 weeks of cheese)',
    ]);
  }
  for (let w = 0; w < horizonWeeks; w += blockWeeks) {
    const sardineTins = Math.ceil((blockWeeks * 19) / 3);
    const sardineCases = Math.ceil(sardineTins / 12);
    const salmonCans = Math.ceil((blockWeeks * 2) / 6);
    const blueberryBags = Math.ceil((blockWeeks * 4) / 48);
    const flaxBags = Math.ceil((blockWeeks * 2) / 16);
    const ketchupBottles = Math.ceil((blockWeeks * 5) / 37);
    const mayoBatches = Math.ceil((blockWeeks * 3) / 17);
    const pickleJars = Math.ceil((blockWeeks * 4) / 12);
    const honeyJars = Math.ceil((blockWeeks * 2) / 50);
    add(w, 'Pantry bulk shipment', `Once per ${blockWeeks}-week block`, [
      `King Oscar sardines in water: ${sardineCases} cases of 12 (${sardineCases * 12} tins)`,
      `Wild Planet wild sockeye salmon: ${salmonCans} cans (6 oz)`,
      `Wyman's frozen wild blueberries: ${blueberryBags} bags (3 lb)`,
      `Organic ground flaxseed: ${flaxBags} bags (1 lb)`,
      'Psyllium husk powder: 1 canister',
      `Primal Kitchen Organic Unsweetened Ketchup: ${ketchupBottles} squeeze bottles (18.5 oz)`,
      `100% avocado oil: ${mayoBatches} cups (1 per batch of homemade mayo)`,
      `Wedderspoon raw manuka honey: ${honeyJars} plain jar${honeyJars === 1 ? '' : 's'}`,
      'California Olive Ranch extra virgin olive oil: 1 bottle (ONLY the 100% California bottle)',
      `Bubbies Kosher Dill pickles: ${pickleJars} jars`,
      'Plain prepared mustard, Celtic sea salt, plain spices (paprika, cinnamon, turmeric, ginger, garlic powder, onion powder, black pepper): 1 each, they cover many blocks',
      'Glass-bottle spring water (Mountain Valley / Saratoga / S.Pellegrino / Lauretana): cases as needed',
    ]);
  }
  return [...byKey.values()].sort((a, b) => a.weekOffset - b.weekOffset || SHIPPER_ORDER.indexOf(a.shipper) - SHIPPER_ORDER.indexOf(b.shipper));
}
