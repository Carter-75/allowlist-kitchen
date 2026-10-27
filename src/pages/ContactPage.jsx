import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Seo from '../components/Seo';
import { CONTACT_EMAIL, SITE_NAME } from '../utils/meals';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || 'a visitor'} - ${SITE_NAME}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="max-w-2xl">
      <Seo title={`Contact - ${SITE_NAME}`} description="Contact Allowlist Kitchen. The form opens your own email app; this site stores nothing." canonicalPath="/contact" />
      <h1 className="font-serif text-4xl font-bold">Contact</h1>
      <p className="mt-3 leading-relaxed text-stone-600">
        This is a personal project with no accounts and no stored messages. The form below opens your own email app with your message addressed and ready to send. Nothing you type is stored by this site.
      </p>
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-5">
        <Mail className="text-emerald-800" size={22} />
        <div>
          <p className="text-sm text-stone-500">Email</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-emerald-900 hover:underline">{CONTACT_EMAIL}</a>
        </div>
      </div>
      <form onSubmit={submit} className="mt-6 space-y-4 rounded-2xl border border-stone-200 bg-white p-5">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Your name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-emerald-700" placeholder="Name" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Message</span>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-emerald-700" placeholder="A meal idea, an ingredient you want checked, a correction..." />
        </label>
        <button type="submit" className="rounded-full bg-emerald-800 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-900">Open in your email app</button>
        {sent && <p className="text-sm text-emerald-900">Your email app should have opened with the message ready. If it did not, write to {CONTACT_EMAIL} directly.</p>}
      </form>
    </div>
  );
};

export default ContactPage;
