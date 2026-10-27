import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MealCard from '../components/MealCard';
import Seo from '../components/Seo';
import NotFoundPage from './NotFoundPage';
import { getCategoryById, getMealsByCategory, SITE_NAME } from '../utils/meals';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const cat = getCategoryById(categoryId);
  if (!cat) return <NotFoundPage />;
  const meals = getMealsByCategory(categoryId) || [];
  return (
    <div>
      <Seo title={`${cat.name} - ${SITE_NAME}`} description={cat.blurb} canonicalPath={`/category/${cat.id}`} />
      <Link to="/" className="text-sm font-medium text-emerald-900 hover:underline">Back to all meals</Link>
      <div className={`mt-4 h-1.5 w-12 rounded-full ${cat.bar}`} />
      <h1 className="mt-3 font-serif text-4xl font-bold">{cat.name}</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-stone-600">{cat.blurb}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-stone-500">{meals.length} meals, every ingredient allowlisted</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {meals.map((m) => <MealCard key={m.id} meal={m} />)}
      </div>
    </div>
  );
};

export default CategoryPage;
