import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy } from 'lucide-react';
import Seo from '../components/Seo';
import { getShoppingList, SITE_NAME } from '../utils/meals';

const ShoppingListPage = () => {
  const list = getShoppingList();
  const [copied, setCopied] = useState(false);

  const copyList = async () => {
    const text = list.map((e) => `- ${e.dbItem} (used in ${e.mealCount} meals)`).join('\n');
    try {
      await navigator.clipboard.writeText(`${SITE_NAME} master shopping list\n\n${text}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <Seo title={`Master Shopping List - ${SITE_NAME}`} description="Every allowlisted item used by any meal on the site, generated from the meals themselves." canonicalPath="/shopping-list" />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-bold">Master shopping list</h1>
          <p className="mt-3 leading-relaxed text-stone-600">
            This list is generated from the meals themselves: every distinct allowlist item any recipe uses, with the product forms the recipes call for. Buy these and you can cook everything on the site. Nothing here is stocked for a single recipe unless it earns its place.
          </p>
        </div>
        <button onClick={copyList} className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900">
          {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy list'}
        </button>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-stone-500">{list.length} items across all meals</p>
      <ul className="mt-6 divide-y divide-stone-100 rounded-2xl border border-stone-200 bg-white">
        {list.map((e) => (
          <li key={e.dbItem} className="px-5 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-semibold text-stone-900">{e.dbItem}</span>
              <span className="text-xs font-medium uppercase tracking-wide text-stone-500">used in {e.mealCount} {e.mealCount === 1 ? 'meal' : 'meals'}</span>
            </div>
            <p className="mt-1 text-sm text-stone-600">{e.items.join(' · ')}</p>
            <p className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs">
              {e.mealIds.map((id) => (
                <Link key={id} to={`/meal/${id}`} className="text-emerald-900 hover:underline">{id.replaceAll('-', ' ')}</Link>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingListPage;
