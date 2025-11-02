import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-[0_20px_60px_-20px_rgba(30,58,138,0.25)]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Ready to refresh your website?</h3>
            <p className="mt-3 text-slate-600">Tell us about your goals and we’ll send a tailored plan within 24 hours.</p>
          </div>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-3">
            <input
              type="email"
              required
              placeholder="Your work email"
              className="col-span-1 sm:col-span-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="submit" className="col-span-1 sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800 transition">
              Get my plan
              <ArrowRight className="ml-2" size={18} />
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">By continuing you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
}
