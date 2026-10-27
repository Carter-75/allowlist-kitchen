import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer, Header } from './components/Chrome';

const Home = lazy(() => import('./pages/Home'));
const TypePage = lazy(() => import('./pages/TypePage'));
const MealPage = lazy(() => import('./pages/MealPage'));
const PantryPage = lazy(() => import('./pages/PantryPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
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
              <Route path="/meals/:typeId" element={<TypePage />} />
              <Route path="/meal/:mealId" element={<MealPage />} />
              <Route path="/pantry" element={<PantryPage />} />
              <Route path="/shopping-list" element={<Navigate to="/pantry" replace />} />
              <Route path="/all-ingredients" element={<Navigate to="/pantry" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
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
