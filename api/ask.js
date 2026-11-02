// Ask the List: server-side assistant for Allowlist Kitchen.
// Answers come only from the site allowlist data, the site recipes, and the
// Jake Tran rulebook core rules embedded below. Items that are not in the
// database get a clearly labeled rule-based judgment, never an invented
// database verdict (absence from the database is not itself a verdict).
// The OpenAI key lives only in the OPENAI_API_KEY environment variable
// (Vercel project settings, Production). It is never sent to the browser.

import allowlist from '../src/data/allowlist.json' with { type: 'json' };
import bannedList from '../src/data/banned.json' with { type: 'json' };
import meals from '../src/data/meals.json' with { type: 'json' };

const MODEL = 'gpt-5-nano';
const MAX_QUESTION_CHARS = 600;
const MAX_HISTORY_ITEMS = 8;
const MAX_HISTORY_CHARS = 900;

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

const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'is', 'it', 'can', 'i', 'eat',
  'what', 'whats', 'does', 'do', 'did', 'you', 'your', 'me', 'my', 'with', 'for',
  'are', 'was', 'were', 'this', 'that', 'have', 'has', 'about', 'from', 'any',
  'some', 'how', 'why', 'when', 'should', 'would', 'could', 'make', 'good',
  'bad', 'ok', 'okay', 'fine', 'allowed', 'allow', 'pass', 'passes', 'fail',
  'fails', 'list', 'give', 'tell', 'show', 'please', 'thanks', 'recipe',
  'recipes', 'meal', 'meals', 'idea', 'ideas', 'dinner', 'lunch', 'breakfast',
]);

function tokens(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
}

function scoreEntry(entry, qtokens, qtext) {
  const name = (entry.name || '').toLowerCase();
  const note = (entry.note || '').toLowerCase();
  let score = 0;
  if (name && qtext.includes(name)) score += 12;
  for (const t of qtokens) {
    if (name.split(/[^a-z0-9]+/).includes(t)) score += 4;
    else if (name.includes(t)) score += 2;
    if (note.includes(t)) score += 1;
  }
  return score;
}

function pickEntries(question) {
  const q = question.toLowerCase();
  const qt = tokens(question);
  return allowlist
    .map((e) => ({ e, s: scoreEntry(e, qt, q) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 18)
    .map((x) => x.e);
}

function pickBanned(question) {
  const q = question.toLowerCase();
  const qt = tokens(question);
  return bannedList
    .map((e) => ({ e, s: scoreEntry(e, qt, q) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 12)
    .map((x) => x.e);
}

// Category questions ("what veggies are bad", "what fruit can I eat") cannot
// be answered by name matching: nothing in the data is called "veggies".
// The generator tags every entry with a group, so a category question pulls
// the group's full verdict list instead.
const GROUP_INTENT = {
  vegetables: ['veggie', 'veggies', 'vegetable', 'vegetables'],
  legumes: ['legume', 'legumes', 'bean', 'beans', 'lentil', 'lentils'],
  fruit: ['fruit', 'fruits'],
  dairy: ['dairy'],
  meat: ['meat', 'meats'],
  grains: ['grain', 'grains'],
  drinks: ['drink', 'drinks', 'beverage', 'beverages'],
  fats: ['fat', 'fats', 'oil', 'oils'],
  sweeteners: ['sweetener', 'sweeteners'],
};

function detectGroups(question) {
  const raw = new Set((question.toLowerCase().match(/[a-z]+/g) || []));
  const found = [];
  for (const [group, aliases] of Object.entries(GROUP_INTENT)) {
    if (aliases.some((a) => raw.has(a))) found.push(group);
  }
  // "Veggies" in everyday speech includes the legume bans (soy above all).
  if (found.includes('vegetables') && !found.includes('legumes')) found.push('legumes');
  return found;
}

const VERDICT_RANK = { BANNED: 0, CONDITIONAL: 1, APPROVED: 2 };

function pickCategory(groups) {
  const all = [...allowlist, ...bannedList].filter((e) => groups.includes(e.group));
  return all
    .sort((a, b) => (VERDICT_RANK[a.verdict] - VERDICT_RANK[b.verdict]) || a.name.localeCompare(b.name))
    .slice(0, 70);
}

function pickMeals(question) {
  const q = question.toLowerCase();
  const qt = tokens(question);
  return meals
    .map((m) => {
      const name = (m.name || '').toLowerCase();
      const ings = (m.ingredients || []).map((i) => (i.item || '').toLowerCase()).join(' ');
      const tags = (m.tags || []).join(' ').toLowerCase();
      let s = 0;
      if (name && q.includes(name)) s += 12;
      for (const t of qt) {
        if (name.includes(t)) s += 3;
        if (ings.includes(t)) s += 2;
        if (tags.includes(t)) s += 1;
        if ((m.mealType || '').toLowerCase().includes(t)) s += 2;
      }
      return { m, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map((x) => x.m);
}

const CORE_RULES = `
CORE RULEBOOK (from the Jake Tran videos; this is the whole basis of the list):
- Banned always: seed oils; sugar in every form (cane sugar, molasses, maple syrup, coconut sugar, agave, corn syrup); soy in any form; corn in any form (including dextrose and cornstarch); dyes; MSG; anything listed as "natural flavors"; maltodextrin; TBHQ, BHA, BHT; phosphates; curing salts (sodium nitrite, nitrates, cultured celery powder or juice); sodium benzoate and potassium benzoate; potassium bromate; benzoyl peroxide; enriched flour.
- The only sweeteners are whole fruit and raw honey. No honey for babies under 12 months.
- Beef must be grass-fed AND grass-finished. Chicken and eggs must be certified organic AND pasture-raised, including eggs baked inside other products, no exceptions.
- Dairy must be 100% grass-fed and grass-finished. Kerrygold fails (about 95% grass-fed).
- Wheat passes only as the old wheats (einkorn, emmer, spelt, traditional Italian durum) prepared the traditional way. Modern wheat fails in every form, even organic and unenriched. Wheat bread needs a sourdough base; commercial yeast is not the passing lane.
- Brown rice is banned. White rice is conditional (traditional preparation preferred). Chocolate and cocoa are banned.
- Cinnamon passes only as Ceylon cinnamon. Cassia is banned, and a label that just says "cinnamon" counts as cassia.
- Juice is fine as a flavoring, banned as a drink. Water of choice: spring water in glass.
- Good oils: beef tallow, olive oil, avocado oil, butter from 100% grass-fed cows.
- Citric acid and plain sea salt are fine. Only fluoridated salt fails.
- Verdicts used by the database: APPROVED, CONDITIONAL (passes with the stated condition), BANNED.
`.trim();

function buildSystemPrompt(question) {
  const entries = pickEntries(question);
  const banned = pickBanned(question);
  const pickedMeals = pickMeals(question);
  const groups = detectGroups(question);
  const category = groups.length ? pickCategory(groups) : [];
  // Split the category list into labeled verdict blocks. A flat mixed list
  // let the model skim past the bans and answer only the conditionals (the
  // veggies bug, Nov 1, 2026), so the blocks and their order do the
  // emphasizing, and a framing note pins down category memberships the
  // model second-guessed (corn and soy are filed here on purpose).
  const categoryText = (() => {
    if (!category.length) return '';
    const blocks = [];
    if (groups.includes('vegetables') || groups.includes('legumes')) {
      blocks.push('Category note: in this system corn in every form and soy in every form are filed under vegetables and legumes on purpose. They are the headline bans of this category and must be named when they appear in the BANNED block.');
    }
    for (const v of ['BANNED', 'CONDITIONAL', 'APPROVED']) {
      const rows = category.filter((e) => e.verdict === v);
      if (!rows.length) continue;
      blocks.push(`${v} in this category:`);
      for (const e of rows) blocks.push(`- [${e.kind}] ${e.name}: ${e.verdict}. ${e.note || ''}`.trim());
    }
    return blocks.join('\n');
  })();
  const entryText = entries.length
    ? entries
        .map((e) => `- [${e.kind}] ${e.name}: ${e.verdict}. ${e.note || ''}`.trim())
        .join('\n')
    : '(no passing database entries matched this question)';
  const bannedText = banned.length
    ? banned
        .map((e) => `- [${e.kind}] ${e.name}: BANNED. ${e.note || ''}`.trim())
        .join('\n')
    : '(no banned database entries matched this question)';
  const mealText = pickedMeals.length
    ? pickedMeals
        .map((m) => {
          const ings = (m.ingredients || [])
            .map((i) => `${i.amount ? i.amount + ' ' : ''}${i.item}`)
            .join('; ');
          return `- ${m.name} (${m.mealType}, ${m.time}, serves ${m.servings}): ${m.description || ''} Ingredients: ${ings}. Page: /meal/${m.id}`;
        })
        .join('\n')
    : '(no site recipes matched this question)';

  const categoryCounts = category.length
    ? ['BANNED', 'CONDITIONAL', 'APPROVED']
        .map((v) => `${category.filter((e) => e.verdict === v).length} ${v.toLowerCase()}`)
        .join(', ')
    : '';

  return [
    'You are the Ask the List assistant on Allowlist Kitchen, a cooking site where every recipe and product follows one strict food rulebook drawn from the Jake Tran videos.',
    'Answer ONLY about food, ingredients, products, verdicts, and the site recipes. If asked about anything else, politely say you only answer food questions about the list.',
    '',
    CORE_RULES,
    '',
    // For a category question the category list below IS the retrieval.
    // The name-match sections are omitted on purpose: their "no match"
    // placeholders contradicted the category list and the model anchored
    // on them (the veggies bug, Nov 1, 2026).
    ...(categoryText
      ? [
          `FULL DATABASE VERDICT LIST FOR THE CATEGORY IN THIS QUESTION (${groups.join(' and ')}; ${categoryCounts}):`,
          categoryText,
          '',
        ]
      : [
          'DATABASE ENTRIES RELEVANT TO THIS QUESTION (the live allowlist database, retrieved for this question):',
          entryText,
          '',
          'DATABASE ENTRIES MARKED BANNED RELEVANT TO THIS QUESTION (same database; these items were checked and failed):',
          bannedText,
          '',
        ]),
    'SITE RECIPES RELEVANT TO THIS QUESTION:',
    mealText,
    '',
    'HOW TO ANSWER:',
    '1. If the item appears in either database section above, give its exact verdict (APPROVED, CONDITIONAL, or BANNED) and the reason from its note. Do not soften or change a database verdict.',
    '2. If the item is in NEITHER database section above, start with "Not in the database." and then judge it from the core rules and its ingredients, and say plainly that this is a rule-based judgment, not a database verdict. Absence from the database is not itself a fail.',
    '3. For meal ideas, build only from APPROVED or CONDITIONAL items and the site recipes above. Name the recipe page path (like /meal/...) when you suggest one.',
    '4. Keep answers short and plain: a verdict first, then one or two sentences of why. Use everyday words. Never use em dashes; use hyphens, commas, or colons instead.',
    '5. Never invent prices, nutrition numbers, brands, or products. If you do not know, say so.',
    '6. Do not give medical advice. If asked about health effects, stick to what the rulebook says and suggest talking to a doctor for personal health questions.',
    '7. If a FULL CATEGORY VERDICT LIST is included above, the question is about that whole category: answer from that list, starting with its BANNED block. Every entry in the BANNED block counts as a member of the category (the system that owns the list filed it there), unless its name plainly belongs to another food group (for example a sausage with garlic in its name is a meat, not a vegetable). Then name the CONDITIONAL ones with their conditions. Never say the category is not in the database when this list is present, never open with "Not in the database" on a category question, and never say nothing in the category is banned when a BANNED block is present.',
  ].join('\n');
}

export { buildSystemPrompt };

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Use POST.' });
    return;
  }
  const ip = (req.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
  if (throttled(ip)) {
    res.status(429).json({ error: 'Too many questions in a row. Give it a few minutes and try again.' });
    return;
  }
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'setup', message: 'The assistant is being set up and is not live yet. Check back soon.' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  const question = ((body && body.question) || '').toString().trim().slice(0, MAX_QUESTION_CHARS);
  if (!question) {
    res.status(400).json({ error: 'Ask a question about a food, an ingredient, a product, or a meal idea.' });
    return;
  }
  const history = Array.isArray(body.history)
    ? body.history
        .filter((h) => h && (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
        .slice(-MAX_HISTORY_ITEMS)
        .map((h) => ({ role: h.role, content: h.content.slice(0, MAX_HISTORY_CHARS) }))
    : [];

  const messages = [
    { role: 'system', content: buildSystemPrompt(question) },
    ...history,
    { role: 'user', content: question },
  ];

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        // gpt-5-nano is a reasoning model: its hidden reasoning counts
        // against max_completion_tokens, so keep the effort low (this is
        // simple grounded lookup, not hard reasoning) and leave real
        // headroom or answers come back empty.
        reasoning_effort: 'low',
        max_completion_tokens: 2500,
      }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!r.ok) {
      const detail = await r.text().catch(() => '');
      console.error('OpenAI error', r.status, detail.slice(0, 300));
      res.status(502).json({ error: 'The assistant could not answer just now. Try again in a moment.' });
      return;
    }
    const data = await r.json();
    const answer = data?.choices?.[0]?.message?.content?.trim();
    if (!answer) {
      res.status(502).json({ error: 'The assistant came back empty. Try asking again.' });
      return;
    }
    res.status(200).json({ answer });
  } catch (err) {
    clearTimeout(timer);
    console.error('Ask handler failed', err && err.message);
    res.status(502).json({ error: 'The assistant could not answer just now. Try again in a moment.' });
  }
}
