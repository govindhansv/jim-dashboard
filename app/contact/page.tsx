"use client";

import { Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
        <p className="mt-1 text-slate-400">Get in touch with the team</p>
      </div>

      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-8 ">
        {sent ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="rounded-full bg-emerald-100 p-4">
              <Send className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Message sent!</h2>
            <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
            <button
              onClick={() => setSent(false)}
              className="mt-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-sm text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <User className="h-4 w-4" /> Name
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none transition-colors focus:border-blue-400/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <Mail className="h-4 w-4" /> Email
              </label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none transition-colors focus:border-blue-400/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <MessageSquare className="h-4 w-4" /> Message
              </label>
              <textarea
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none transition-colors focus:border-blue-400/50"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-blue-500"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
