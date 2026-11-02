import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircleQuestion, Send, Sparkles } from 'lucide-react';
import { useHead } from '../lib/store';

const STARTERS = [
  'Can I eat Kerrygold butter?',
  'Does oat milk pass?',
  'What can I make with ground beef?',
  'Is honey allowed?',
  'Why is brown rice out?',
];

export default function AskPage() {
  useHead({
    title: 'Ask the List - Allowlist Kitchen',
    description: 'Ask whether a food, ingredient, or product passes the allowlist, and get meal ideas built only from allowed items.',
  });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const listRef = useRef(null);

  async function ask(question) {
    const q = (question || '').trim();
    if (!q || busy) return;
    setError('');
    setInput('');
    const history = messages.slice(-8).map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, { role: 'user', content: q }]);
    setBusy(true);
    try {
      const r = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, history }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setError(data.message || data.error || 'The assistant could not answer just now. Try again in a moment.');
        return;
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.answer }]);
      setTimeout(() => {
        if (listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 60);
    } catch {
      setError('The assistant could not be reached. Check your connection and try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-pine-700 text-paper">
          <MessageCircleQuestion className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h1 className="text-3xl font-bold leading-tight">Ask the List</h1>
          <p className="text-sm text-ink/60">Verdicts from the allowlist and the rulebook, nothing else.</p>
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
        Ask whether a food, an ingredient, or a store product passes, or ask for a meal idea.
        Answers come from this site&apos;s <Link to="/pantry" className="font-semibold text-pine-700 underline">Full List</Link> and
        the rulebook behind it. If something is not in the database, you get a rule-based judgment
        from its ingredients, labeled as one. Absence from the list is never treated as a fail by itself.
      </p>

      {messages.length === 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {STARTERS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => ask(s)}
              className="rounded-full border border-pine-700/30 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-pine-800 transition hover:border-pine-700 hover:bg-white"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div ref={listRef} className="mt-8 flex flex-col gap-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === 'user'
                ? 'ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-pine-700 px-4 py-3 text-[15px] leading-relaxed text-paper'
                : 'mr-auto max-w-[92%] rounded-2xl rounded-bl-md border border-ink/10 bg-white/70 px-4 py-3 text-[15px] leading-relaxed text-ink shadow-sm'
            }
          >
            {m.role === 'assistant' && (
              <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-pine-700">
                <Sparkles className="h-3.5 w-3.5" aria-hidden /> The List
              </p>
            )}
            <p className="whitespace-pre-wrap">{m.content}</p>
          </div>
        ))}
        {busy && (
          <div className="mr-auto rounded-2xl rounded-bl-md border border-ink/10 bg-white/70 px-4 py-3 text-sm text-ink/60" role="status">
            Checking the list...
          </div>
        )}
      </div>

      {error && (
        <p className="mt-5 rounded-xl border border-red-900/20 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
          {error}
        </p>
      )}

      <form
        className="sticky bottom-4 mt-8 flex items-end gap-2 rounded-2xl border border-ink/15 bg-white/90 p-2 shadow-lg backdrop-blur"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <label htmlFor="ask-input" className="sr-only">Ask about a food, ingredient, product, or meal idea</label>
        <textarea
          id="ask-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              ask(input);
            }
          }}
          rows={1}
          maxLength={600}
          placeholder="Can I eat this? Ask about any food or product..."
          className="max-h-32 flex-1 resize-none bg-transparent px-3 py-2 text-[15px] outline-none placeholder:text-ink/40"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pine-700 text-paper transition hover:bg-pine-800 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send question"
        >
          <Send className="h-4.5 w-4.5" aria-hidden />
        </button>
      </form>
      <p className="mt-3 pb-8 text-center text-xs text-ink/50">
        The assistant reads the same list you can browse. For anything personal about your health, talk to your doctor.
      </p>
    </div>
  );
}
