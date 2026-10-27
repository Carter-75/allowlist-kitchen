import React, { useState } from 'react';
import { MailOpen } from 'lucide-react';
import { EMAIL, useHead } from '../lib/store';

export default function Contact() {
  useHead({ title: 'Contact - Allowlist Kitchen', description: 'Contact Allowlist Kitchen by email. The form opens your own email app; nothing is stored.' });
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [opened, setOpened] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Allowlist Kitchen message from ${name || 'a visitor'}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`;
    setOpened(true);
  };
  return (
    <div className="mx-auto max-w-2xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black">Contact</h1>
      <p className="mt-3 leading-relaxed text-ink/65">No accounts, no stored messages, no form backend. This opens your own email app with the message addressed to the kitchen. A meal idea, an ingredient you want checked, or a correction are all welcome.</p>
      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream p-5">
        <MailOpen className="text-pine-700" size={22} />
        <div><p className="text-xs font-bold uppercase tracking-wide text-ink/45">Email</p><a href={`mailto:${EMAIL}`} className="font-bold text-pine-800 hover:underline">{EMAIL}</a></div>
      </div>
      <form onSubmit={submit} className="mt-6 space-y-4 rounded-2xl border border-ink/10 bg-cream p-5">
        <label className="block"><span className="text-sm font-semibold">Your name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none focus:border-pine-600" placeholder="Name" /></label>
        <label className="block"><span className="text-sm font-semibold">Message</span>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm outline-none focus:border-pine-600" placeholder="What is on your mind?" /></label>
        <button type="submit" className="rounded-full bg-pine-800 px-5 py-2 text-sm font-bold text-white transition hover:bg-pine-900">Open in your email app</button>
        {opened && <p className="text-sm text-pine-800">Your email app should have opened with the message ready to send. If it did not, write to {EMAIL} directly.</p>}
      </form>
    </div>
  );
}
