import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer, Header } from './components/Chrome';

const Home = lazy(() => import('./pages/Home'));
const MealsPage = lazy(() => import('./pages/MealsPage'));
const MealPage = lazy(() => import('./pages/MealPage'));
const IngredientsPage = lazy(() => import('./pages/IngredientsPage'));
const OrdersPage = lazy(() => import('./pages/OrdersPage'));
const About = lazy(() => import('./pages/About'));
const AskPage = lazy(() => import('./pages/AskPage'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Missing = lazy(() => import('./pages/Missing'));

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const Loading = () => (
  <div className="grid min-h-[40vh] place-items-center" role="status" aria-live="polite">
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/40">Setting the table</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pb-4">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meals" element={<MealsPage />} />
              <Route path="/meal/:mealId" element={<MealPage />} />
              <Route path="/ingredients" element={<IngredientsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/pantry" element={<Navigate to="/ingredients" replace />} />
              <Route path="/shopping-list" element={<Navigate to="/ingredients" replace />} />
              <Route path="/all-ingredients" element={<Navigate to="/ingredients" replace />} />
              <Route path="/ask" element={<AskPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
