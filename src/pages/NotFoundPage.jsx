import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const NotFoundPage = () => (
  <div className="py-16 text-center">
    <Seo title="Page not found" description="That page does not exist." canonicalPath="/404" />
    <p className="font-serif text-6xl font-bold text-stone-300">404</p>
    <h1 className="mt-3 font-serif text-3xl font-bold">That page is not on the allowlist.</h1>
    <p className="mx-auto mt-3 max-w-md text-stone-600">The page you asked for does not exist. Everything that does exist starts from the home page.</p>
    <Link to="/" className="mt-6 inline-block rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900">Back to the meals</Link>
  </div>
);

export default NotFoundPage;
