import React from 'react';
import { EMAIL, useHead } from '../lib/store';

export default function Privacy() {
  useHead({ title: 'Privacy Policy - Allowlist Kitchen', description: 'Allowlist Kitchen collects nothing: no accounts, no analytics, no ads, no stored form submissions.' });
  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black">Privacy policy</h1>
      <div className="mt-6 space-y-5 leading-relaxed text-ink/75">
        <p>Last updated: October 26, 2026.</p>
        <p>Allowlist Kitchen is a static personal website. It has no user accounts and stores nothing about its visitors.</p>
        <h2 className="font-display text-2xl font-bold text-ink">What is collected</h2>
        <p>Nothing by the site itself. There is no analytics, no advertising, and no tracking in the code. The contact form does not send anything to a server: it opens your own email app, so a message travels as ordinary email between you and {EMAIL}.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Hosting and fonts</h2>
        <p>The site is hosted on Vercel, which may process standard request data such as IP addresses in its server logs to deliver pages and protect the service, under Vercel's own privacy policy. Pages also load fonts from Google Fonts, so your browser requests those files from Google. No other third-party services are loaded.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
        <p>Questions about this policy: {EMAIL}.</p>
      </div>
    </div>
  );
}
