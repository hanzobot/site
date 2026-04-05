'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  MailIcon,
  GiftIcon,
  CheckCircleIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowRightIcon,
  LoaderIcon,
  SparklesIcon,
  TrophyIcon,
  XIcon,
} from 'lucide-react';
import { cn } from '@/lib/cn';

const STORAGE_KEY = 'hanzo-giveaway-entered';

interface EntryState {
  entries: number;
  github: boolean;
  linkedin: boolean;
}

export function GiveawayModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phase, setPhase] = useState<'form' | 'success'>('form');
  const [state, setState] = useState<EntryState>({ entries: 0, github: false, linkedin: false });
  const [loading, setLoading] = useState(false);
  const [bonusLoading, setBonusLoading] = useState<string | null>(null);
  const [error, setError] = useState('');

  // Show modal on mount if user hasn't signed up
  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const timer = setTimeout(() => setOpen(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage unavailable — don't show
    }
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/giveaway', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong');
        return;
      }

      setState({ entries: data.entries, github: data.github, linkedin: data.linkedin });
      setPhase('success');

      try {
        localStorage.setItem(STORAGE_KEY, '1');
      } catch {
        // ignore
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function handleBonus(action: 'github' | 'linkedin', url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
    setBonusLoading(action);

    try {
      const res = await fetch('/api/giveaway', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, action }),
      });

      const data = await res.json();

      if (res.ok) {
        setState({ entries: data.entries, github: data.github, linkedin: data.linkedin });
      }
    } catch {
      // Silently fail — the follow still happened
    } finally {
      setBonusLoading(null);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={close}
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-2xl border border-fd-border bg-[rgba(8,12,22,0.95)] backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] animate-[fadeInUp_0.4s_ease-out]">
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg text-fd-muted-foreground hover:text-fd-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {phase === 'form' ? (
            <>
              {/* Prize badge */}
              <div className="flex justify-center mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#050810] bg-gradient-to-r from-white to-[#d4d4d4] rounded-full">
                  <GiftIcon className="w-3.5 h-3.5" />
                  Limited Time Giveaway
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-center mb-3 leading-[1.15]">
                <span className="bg-gradient-to-br from-fd-foreground via-neutral-400 to-[#a3a3a3] bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_6s_ease_infinite]">
                  Enter to Win Up to
                </span>
                <br />
                <span className="text-fd-foreground">$50,000 in AI Credits</span>
              </h2>

              <p className="text-sm sm:text-base text-fd-muted-foreground text-center max-w-[420px] mx-auto mb-8 leading-relaxed">
                Drop your email for a chance to win Hanzo Cloud credits.
                One entry to start — earn bonus entries by following us.
              </p>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-fd-muted-foreground pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:border-neutral-500 focus:shadow-[0_0_0_3px_rgba(255,255,255,0.05)] transition-all text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 font-semibold text-[#050810] bg-gradient-to-br from-white to-[#d4d4d4] rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(255,255,255,0.45)] shadow-[0_4px_24px_rgba(255,255,255,0.3)] disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <LoaderIcon className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Enter Now
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {error && (
                <p className="mt-3 text-center text-sm text-red-400">{error}</p>
              )}

              <p className="mt-5 text-center text-xs text-fd-muted-foreground">
                No purchase necessary. One entry per email. Winners notified by email.
              </p>
            </>
          ) : (
            <>
              {/* Success header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white to-[#d4d4d4] flex items-center justify-center shadow-[0_4px_24px_rgba(255,255,255,0.3)]">
                      <CheckCircleIcon className="w-7 h-7 text-[#050810]" />
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#050810] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                      {state.entries}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-3xl font-bold text-fd-foreground mb-1.5">
                  You&apos;re Entered
                </h2>
                <p className="text-fd-muted-foreground text-sm">
                  You have <span className="text-white font-semibold">{state.entries} {state.entries === 1 ? 'entry' : 'entries'}</span> so far.
                </p>
              </div>

              {/* Bonus entries */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrophyIcon className="w-4 h-4 text-white" />
                  <h3 className="text-xs font-bold text-fd-foreground uppercase tracking-wider">
                    Bonus Entries
                  </h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  {/* GitHub */}
                  <button
                    type="button"
                    disabled={state.github || bonusLoading === 'github'}
                    onClick={() => handleBonus('github', 'https://github.com/hanzoai')}
                    className={cn(
                      'flex items-center gap-3.5 w-full p-3.5 rounded-xl border backdrop-blur-sm transition-all text-left',
                      state.github
                        ? 'border-neutral-600 bg-[rgba(255,255,255,0.05)]'
                        : 'border-fd-border bg-[rgba(10,15,26,0.6)] hover:-translate-y-0.5 hover:border-neutral-600 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] cursor-pointer',
                    )}
                  >
                    <div className={cn(
                      'w-9 h-9 rounded-lg flex items-center justify-center shrink-0',
                      state.github ? 'bg-white' : 'bg-[rgba(255,255,255,0.08)]',
                    )}>
                      {state.github ? (
                        <CheckCircleIcon className="w-4.5 h-4.5 text-[#050810]" />
                      ) : bonusLoading === 'github' ? (
                        <LoaderIcon className="w-4.5 h-4.5 text-white animate-spin" />
                      ) : (
                        <GithubIcon className="w-4.5 h-4.5 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-fd-foreground">
                        {state.github ? 'Followed on GitHub' : 'Follow Hanzo on GitHub'}
                      </span>
                      <span className="block text-xs text-fd-muted-foreground">
                        {state.github ? 'Bonus entry earned' : '+1 bonus entry'}
                      </span>
                    </div>
                    {!state.github && (
                      <ArrowRightIcon className="w-4 h-4 text-fd-muted-foreground shrink-0" />
                    )}
                  </button>

                  {/* LinkedIn */}
                  <button
                    type="button"
                    disabled={state.linkedin || bonusLoading === 'linkedin'}
                    onClick={() => handleBonus('linkedin', 'https://www.linkedin.com/company/hanaboratory')}
                    className={cn(
                      'flex items-center gap-3.5 w-full p-3.5 rounded-xl border backdrop-blur-sm transition-all text-left',
                      state.linkedin
                        ? 'border-neutral-600 bg-[rgba(255,255,255,0.05)]'
                        : 'border-fd-border bg-[rgba(10,15,26,0.6)] hover:-translate-y-0.5 hover:border-neutral-600 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] cursor-pointer',
                    )}
                  >
                    <div className={cn(
                      'w-9 h-9 rounded-lg flex items-center justify-center shrink-0',
                      state.linkedin ? 'bg-white' : 'bg-[rgba(255,255,255,0.08)]',
                    )}>
                      {state.linkedin ? (
                        <CheckCircleIcon className="w-4.5 h-4.5 text-[#050810]" />
                      ) : bonusLoading === 'linkedin' ? (
                        <LoaderIcon className="w-4.5 h-4.5 text-white animate-spin" />
                      ) : (
                        <LinkedinIcon className="w-4.5 h-4.5 text-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-fd-foreground">
                        {state.linkedin ? 'Followed on LinkedIn' : 'Follow Hanzo on LinkedIn'}
                      </span>
                      <span className="block text-xs text-fd-muted-foreground">
                        {state.linkedin ? 'Bonus entry earned' : '+1 bonus entry'}
                      </span>
                    </div>
                    {!state.linkedin && (
                      <ArrowRightIcon className="w-4 h-4 text-fd-muted-foreground shrink-0" />
                    )}
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mt-5 p-3.5 rounded-xl border border-fd-border bg-[rgba(10,15,26,0.6)] backdrop-blur-sm text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <SparklesIcon className="w-3.5 h-3.5 text-white" />
                    <span className="text-sm font-semibold text-fd-foreground">
                      {state.entries} / 3 entries earned
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[rgba(255,255,255,0.08)] mt-2 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-white to-[#d4d4d4] transition-all duration-500"
                      style={{ width: `${(state.entries / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <p className="mt-4 text-center text-xs text-fd-muted-foreground">
                  Winners will be notified by email. Good luck!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
