import { useEffect, useState } from 'react';
import { PLAN_TIERS } from '../data/godDiet';

// The selected plan size (daily calorie target) is shared across every page
// and remembered in localStorage. A window event keeps the header switcher
// and the page in sync without a router change.
const KEY = 'goddiet-tier';
export const TIER_EVENT = 'goddiet-tier-change';

export function getTier() {
  try {
    const v = Number(window.localStorage.getItem(KEY));
    return PLAN_TIERS.includes(v) ? v : 2500;
  } catch { return 2500; }
}

export function setTier(t) {
  try { window.localStorage.setItem(KEY, String(t)); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent(TIER_EVENT, { detail: t }));
}

export function useTier() {
  const [tier, set] = useState(getTier);
  useEffect(() => {
    const onChange = (e) => set(typeof e.detail === 'number' ? e.detail : getTier());
    window.addEventListener(TIER_EVENT, onChange);
    return () => window.removeEventListener(TIER_EVENT, onChange);
  }, []);
  return tier;
}

export { PLAN_TIERS };

// The snack setting (guac and chips): off, every other day, or daily.
// Same pattern as the plan size: remembered in localStorage, shared across
// every page through a window event.
const SNACK_KEY = 'goddiet-snack';
export const SNACK_EVENT = 'goddiet-snack-change';
export const SNACK_MODES = [
  { id: 'off', label: 'Off' },
  { id: 'eod', label: 'Every other day' },
  { id: 'daily', label: 'Daily' },
];

export function getSnack() {
  try {
    const v = window.localStorage.getItem(SNACK_KEY);
    return SNACK_MODES.some((m) => m.id === v) ? v : 'eod';
  } catch { return 'eod'; }
}

export function setSnack(v) {
  try { window.localStorage.setItem(SNACK_KEY, v); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent(SNACK_EVENT, { detail: v }));
}

export function useSnack() {
  const [snack, set] = useState(getSnack);
  useEffect(() => {
    const onChange = (e) => set(typeof e.detail === 'string' ? e.detail : getSnack());
    window.addEventListener(SNACK_EVENT, onChange);
    return () => window.removeEventListener(SNACK_EVENT, onChange);
  }, []);
  return snack;
}
