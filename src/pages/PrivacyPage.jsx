import React from 'react';
import Seo from '../components/Seo';
import { CONTACT_EMAIL, SITE_NAME } from '../utils/meals';

const PrivacyPage = () => (
  <div className="max-w-3xl">
    <Seo title={`Privacy Policy - ${SITE_NAME}`} description="Allowlist Kitchen privacy policy: no accounts, no stored form submissions, no analytics, no ads." canonicalPath="/privacy" />
    <h1 className="font-serif text-4xl font-bold">Privacy policy</h1>
    <div className="mt-6 space-y-5 leading-relaxed text-stone-700">
      <p>Last updated: October 26, 2026.</p>
      <p>
        {SITE_NAME} is a static, personal website. It has no user accounts, no sign-ups, and no server-side storage of anything you do here.
      </p>
      <h2 className="font-serif text-2xl font-bold text-stone-900">What is collected</h2>
      <p>
        Nothing is collected by this site itself. There is no analytics tooling, no advertising, and no tracking pixels in the code. The contact form does not submit to a server: it opens your own email app, so your message travels as ordinary email between you and {CONTACT_EMAIL}.
      </p>
      <h2 className="font-serif text-2xl font-bold text-stone-900">Hosting</h2>
      <p>
        The site is hosted on Vercel. Like any web host, Vercel may process standard request data (such as IP addresses and browser details) in its server logs to deliver the pages and protect the service. That processing is governed by Vercel's own privacy policy.
      </p>
      <h2 className="font-serif text-2xl font-bold text-stone-900">Fonts</h2>
      <p>
        Pages load fonts from Google Fonts, which means your browser requests those files from Google. No other third-party services are loaded.
      </p>
      <h2 className="font-serif text-2xl font-bold text-stone-900">Contact</h2>
      <p>Questions about this policy: {CONTACT_EMAIL}.</p>
    </div>
  </div>
);

export default PrivacyPage;
