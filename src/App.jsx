import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const MealDetailPage = lazy(() => import('./pages/MealDetailPage'));
const ShoppingListPage = lazy(() => import('./pages/ShoppingListPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const Fallback = () => (
  <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-live="polite">
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">Loading</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/meal/:mealId" element={<MealDetailPage />} />
              <Route path="/shopping-list" element={<ShoppingListPage />} />
              <Route path="/all-ingredients" element={<Navigate to="/shopping-list" replace />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
