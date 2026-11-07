// Ask: the God Diet's chat assistant (added Nov 6, 2026 at Carter's
// request). A smart model (GPT-5) drafts answers and meal changes, but it
// cannot hallucinate the things that matter:
// - Foods: it may only pick meals from the site's meal database (the fixed
//   21 plus the library) or draft a meal from the locked ingredient catalog
//   below. Every proposal is validated here against those lists, and the
//   browser validates it again through mealFromSpec before anything shows.
// - Numbers: the model never computes calories or prices. The browser's
//   nutrition engine computes them and a deterministic rebalancer walks the
//   week back into the plan's calorie range before the user can apply.
// - Links: the model never writes a URL. Buy links live in the site's data.
// The OpenAI key lives only in the OPENAI_API_KEY environment variable
// (this Vercel project's own key). It is never sent to the browser.

import { MEALS, NUTRITION_PER_OZ, CONDIMENT_NUTRITION, PRICE, CONDIMENT_PRICE, TIER_RANGES } from '../src/data/godDiet.js';
import { LIBRARY_MEALS } from '../src/data/library.js';

const MODEL = 'gpt-5';
const MAX_QUESTION_CHARS = 800;
const MAX_HISTORY_ITEMS = 8;

// Best-effort per-IP throttle. Serverless memory is per-instance, so this is
// a speed bump against casual abuse, not a hard quota.
const hits = new Map();
function throttled(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > 30;
}

const ALL_MEALS = [...MEALS, ...LIBRARY_MEALS];
const MEAL_BY_ID = new Map(ALL_MEALS.map((m) => [m.id, m]));

function mealSummary(m) {
  const parts = [];
  const add = (label, v) => { if (v) parts.push(`${label} ${v}`); };
  add('beef', m.beef); add('egg', m.egg); add('sardines', m.sardines); add('salmon', m.salmon || 0);
  add('cheese', m.cheese); parts.push(`${(m.fruit || 'Avocado').toLowerCase()} ${m.fruitOz || 0}`);
  add('blueberries', m.blueberries || 0); add('broccoli', m.broccoli || 0); add('flax', m.flax || 0);
  add('broth', m.broth || 0); add('chips', m.chips || 0); add('bread', m.bread || 0); add('wrap', m.wrap || 0);
  if (m.tallow && m.tallow !== 'no') parts.push(`tallow ${m.tallow}`);
  for (const k of ['ketchup', 'mayo', 'mustard', 'honey', 'oliveOil', 'coconutWater', 'pickles', 'psyllium']) add(k, m[k] || 0);
  return parts.join(', ');
}

const CATALOG_LINES = [
  ['beef', 'beef organ blend, oz', NUTRITION_PER_OZ.beef, PRICE.beefPerOz],
  ['egg', 'egg, oz (1 egg = 1.75 oz)', NUTRITION_PER_OZ.egg, PRICE.eggPerOz],
  ['sardines', 'sardines, oz', NUTRITION_PER_OZ.sardines, PRICE.sardinesPerOz],
  ['salmon', 'wild sockeye salmon, oz', NUTRITION_PER_OZ.salmon, PRICE.salmonPerOz],
  ['cheese', 'Dutch Reserve raw cheddar, oz', NUTRITION_PER_OZ.cheese, PRICE.cheesePerOz],
  ['blueberries', 'wild blueberries, oz', NUTRITION_PER_OZ.blueberries, PRICE.blueberriesPerOz],
  ['broccoli', 'cooked broccoli, oz', NUTRITION_PER_OZ.broccoli, PRICE.broccoliPerOz],
  ['flax', 'ground flaxseed, oz', NUTRITION_PER_OZ.flax, PRICE.flaxPerOz],
  ['broth', 'beef bone broth, oz', NUTRITION_PER_OZ.broth, PRICE.brothPerOz],
  ['chips', 'Boulder Canyon chips, oz', NUTRITION_PER_OZ.chips, PRICE.chipsPerOz],
  ['bread', 'homemade einkorn sourdough, oz', NUTRITION_PER_OZ.bread, PRICE.breadPerOz],
  ['wrap', 'Siete cassava wrap, oz (1 tortilla = 0.88 oz)', NUTRITION_PER_OZ.wrap, PRICE.wrapPerOz],
  ['fruitBanana', 'banana, oz', NUTRITION_PER_OZ.fruit.Banana, PRICE.fruitPerOz.Banana],
  ['fruitKiwi', 'kiwi, oz', NUTRITION_PER_OZ.fruit.Kiwi, PRICE.fruitPerOz.Kiwi],
  ['fruitAvocado', 'avocado, oz', NUTRITION_PER_OZ.fruit.Avocado, PRICE.fruitPerOz.Avocado],
].map(([key, label, n, p]) => `- ${key}: ${label}, ${n.kcal} kcal and ${n.protein}g protein per oz, about $${p.toFixed(2)}/oz`).join('\n');

const CONDIMENT_LINE = Object.entries(CONDIMENT_NUTRITION).map(([k, n]) => {
  const unit = k === 'coconutWater' ? 'oz' : (k === 'ketchup' || k === 'mayo' || k === 'psyllium') ? 'Tbsp' : 'tsp';
  return `${k} (${n.kcal} kcal per ${unit}, $${(CONDIMENT_PRICE[k] || 0).toFixed(2)})`;
}).join('; ');

const RULES = `THE GOD DIET, the only foods that exist here. One weekly pool of ingredients made into 21 meals (3 a day, 7 days), at three sizes: 1,500 (range ${TIER_RANGES[1500][0]}-${TIER_RANGES[1500][1]} cal/day), 2,000 (${TIER_RANGES[2000][0]}-${TIER_RANGES[2000][1]}), 2,500 (${TIER_RANGES[2500][0]}-${TIER_RANGES[2500][1]}). Everything is weighed in ounces.
Hard rules for any meal you draft:
- Ingredients ONLY from the catalog below. Nothing else exists. No chicken, no other breads, no other cheeses, no sauces beyond the condiment shelf.
- Beef is 0, 4, or 8 oz only (quarter-pound portions). Eggs are whole: multiples of 1.75 oz, max 5.25. Sardines 0 or 1 oz. Salmon 0, 1, or 2 oz. Cheese 0, 0.5, or 1 oz.
- One fruit per meal (the items.fruit field): Banana in the morning, Kiwi at midday, Avocado in the evening, fruitOz between 2 and 8.
- Bread (homemade einkorn sourdough) 0 to 4 oz; wrap (Siete cassava tortillas) 0, 0.88, 1.76, or 2.64 oz; chips 0 to 2 oz; blueberries 0 or 2; broccoli 0 or 3; flax 0, 0.5, or 1; broth 0 or 16; coconutWater 0 or 8.
- Tallow is a level, not ounces: 'no', 'light', 'yes', or 'double'. Only at meals where beef cooks, never in soups.
- Condiment shelf, set amounts only: ketchup (Tbsp), homemade mayo (Tbsp), mustard (tsp), raw manuka honey (tsp), olive oil (tsp), pickles (spears), psyllium (Tbsp), each 0 to 2 (pickles 0 to 4).
- Mayo is homemade only (every bottled mayo fails the egg rule). The cheese is only the Dutch Reserve raw cheddar. Salmon is wild only. Crucifers are cooked only.
How proposals work: when the user wants a change, prefer picking a meal from the MEAL DATABASE by its id (libraryId). Draft a custom spec only when no database meal fits (for example a specific sandwich they name). A change replaces one meal at one day and slot (Morning, Midday, or Evening). You may propose several changes at once. The site then rebalances the week into the calorie range and computes every number itself: NEVER state calorie totals, macros, prices, or links in your reply, and never claim a change is applied. Say what you picked and that the site has checked it below. If the user just asks a question, answer it from these rules and the database, set proposal to null, and keep it plain and warm. Never use em dashes.`;

const ITEM_KEYS = ['beef', 'egg', 'sardines', 'salmon', 'cheese', 'fruitOz', 'blueberries', 'broccoli', 'flax', 'broth', 'chips', 'bread', 'wrap', 'coconutWater', 'ketchup', 'mayo', 'mustard', 'honey', 'oliveOil', 'pickles', 'psyllium'];

const SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    reply: { type: 'string' },
    proposal: {
      anyOf: [
        { type: 'null' },
        {
          type: 'object', additionalProperties: false,
          properties: {
            summary: { type: 'string' },
            changes: {
              type: 'array', items: {
                type: 'object', additionalProperties: false,
                properties: {
                  day: { type: 'integer', minimum: 1, maximum: 7 },
                  slot: { type: 'string', enum: ['Morning', 'Midday', 'Evening'] },
                  libraryId: { anyOf: [{ type: 'string' }, { type: 'null' }] },
                  spec: {
                    anyOf: [
                      { type: 'null' },
                      {
                        type: 'object', additionalProperties: false,
                        properties: {
                          name: { type: 'string' }, description: { type: 'string' },
                          steps: { type: 'array', items: { type: 'string' } },
                          minutes: { type: 'number' },
                          seasoning: { anyOf: [{ type: 'string' }, { type: 'null' }] },
                          fruit: { type: 'string', enum: ['Banana', 'Kiwi', 'Avocado'] },
                          tallow: { type: 'string', enum: ['no', 'light', 'yes', 'double'] },
                          items: {
                            type: 'object', additionalProperties: false,
                            properties: Object.fromEntries(ITEM_KEYS.map((k) => [k, { type: 'number' }])),
                            required: ITEM_KEYS,
                          },
                        },
                        required: ['name', 'description', 'steps', 'minutes', 'seasoning', 'fruit', 'tallow', 'items'],
                      },
                    ],
                  },
                },
                required: ['day', 'slot', 'libraryId', 'spec'],
              },
            },
          },
          required: ['summary', 'changes'],
        },
      ],
    },
  },
  required: ['reply', 'proposal'],
};

function specFromMeal(m) {
  const items = {};
  for (const k of ITEM_KEYS) items[k] = k === 'fruitOz' ? (m.fruitOz || 0) : (m[k] || 0);
  return {
    name: m.name, description: m.description || '', steps: m.steps || [], minutes: m.minutes || 20,
    seasoning: m.seasoning || null, fruit: m.fruit || 'Avocado', tallow: m.tallow || 'no', items,
  };
}

function validateProposal(p) {
  if (!p || !Array.isArray(p.changes) || !p.changes.length) return null;
  const changes = [];
  for (const c of p.changes.slice(0, 7)) {
    if (!c || !Number.isInteger(c.day) || c.day < 1 || c.day > 7) continue;
    if (!['Morning', 'Midday', 'Evening'].includes(c.slot)) continue;
    if (c.libraryId && MEAL_BY_ID.has(c.libraryId)) {
      changes.push({ day: c.day, slot: c.slot, spec: specFromMeal(MEAL_BY_ID.get(c.libraryId)), fromLibrary: c.libraryId });
    } else if (c.spec && c.spec.items && typeof c.spec.items === 'object') {
      const items = {};
      let ok = true;
      for (const k of ITEM_KEYS) {
        const v = c.spec.items[k];
        if (typeof v !== 'number' || !Number.isFinite(v) || v < 0) { ok = false; break; }
        items[k] = v;
      }
      if (!ok) continue;
      changes.push({
        day: c.day, slot: c.slot, fromLibrary: null,
        spec: {
          name: String(c.spec.name || 'Custom meal').slice(0, 60),
          description: String(c.spec.description || '').slice(0, 400),
          steps: Array.isArray(c.spec.steps) ? c.spec.steps.slice(0, 6).map((s) => String(s).slice(0, 300)) : [],
          minutes: Math.min(60, Math.max(5, Number(c.spec.minutes) || 20)),
          seasoning: typeof c.spec.seasoning === 'string' ? c.spec.seasoning : null,
          fruit: ['Banana', 'Kiwi', 'Avocado'].includes(c.spec.fruit) ? c.spec.fruit : 'Avocado',
          tallow: ['no', 'light', 'yes', 'double'].includes(c.spec.tallow) ? c.spec.tallow : 'no',
          items,
        },
      });
    }
  }
  if (!changes.length) return null;
  return { summary: String(p.summary || 'A change to your week'), changes };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).json({ error: 'POST only' }); return; }
  const ip = (req.headers['x-forwarded-for'] || 'local').split(',')[0].trim();
  if (throttled(ip)) { res.status(429).json({ error: 'Too many questions in a row. Give it a few minutes.' }); return; }
  const key = process.env.OPENAI_API_KEY;
  if (!key) { res.status(503).json({ error: 'The assistant is not switched on yet: this project needs its OPENAI_API_KEY set in Vercel.' }); return; }

  const body = req.body || {};
  const question = String(body.question || '').slice(0, MAX_QUESTION_CHARS).trim();
  if (!question) { res.status(400).json({ error: 'Ask a question or name a change.' }); return; }
  const history = Array.isArray(body.history) ? body.history.slice(-MAX_HISTORY_ITEMS)
    .filter((h) => h && (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
    .map((h) => ({ role: h.role, content: h.content.slice(0, 600) })) : [];
  const ctx = body.context || {};
  const tier = [1500, 2000, 2500].includes(ctx.tier) ? ctx.tier : 2500;
  const weekLines = Array.isArray(ctx.meals) ? ctx.meals.slice(0, 30).map((m) => `Day ${m.day} ${m.slot}: ${m.name}`).join('\n') : '';

  const system = `${RULES}\n\nINGREDIENT CATALOG (the only ingredients, with label nutrition and price):\n${CATALOG_LINES}\nCondiments: ${CONDIMENT_LINE}.\n\nMEAL DATABASE (pick by id; the 21 with a day are the fixed week, the rest are the library):\n${ALL_MEALS.map((m) => `- ${m.id}: ${m.name} (${m.day ? `Day ${m.day} ` : ''}${m.slot || ''}) [${mealSummary(m)}] ${m.description || ''}`).join('\n')}\n\nCURRENT WEEK on screen (plan size ${tier}, snack ${ctx.snack || 'off'}, day average about ${ctx.dayKcal || '?'} cal by the site's own count):\n${weekLines}`;

  const payload = {
    model: MODEL,
    reasoning_effort: 'medium',
    max_completion_tokens: 9000,
    response_format: { type: 'json_schema', json_schema: { name: 'god_diet_reply', strict: true, schema: SCHEMA } },
    messages: [
      { role: 'system', content: system },
      ...history,
      { role: 'user', content: question },
    ],
  };

  try {
    let parsed = null;
    for (let attempt = 0; attempt < 2 && !parsed; attempt++) {
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const detail = await r.text().catch(() => '');
        console.error('ask: OpenAI error', r.status, detail.slice(0, 300));
        res.status(502).json({ error: 'The assistant could not answer just now. Try again in a moment.' });
        return;
      }
      const data = await r.json();
      const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
      if (content) { try { parsed = JSON.parse(content); } catch { parsed = null; } }
    }
    if (!parsed || typeof parsed.reply !== 'string') {
      res.status(502).json({ error: 'The assistant came back empty. Try asking again.' });
      return;
    }
    res.status(200).json({ reply: parsed.reply, proposal: validateProposal(parsed.proposal) });
  } catch (err) {
    console.error('ask: fetch failed', err && err.message);
    res.status(502).json({ error: 'The assistant could not be reached. Try again in a moment.' });
  }
}
