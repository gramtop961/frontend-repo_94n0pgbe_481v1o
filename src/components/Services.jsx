import { Palette, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Visual Redesign',
    desc: 'Modern, minimalist UI with glass-morphic touches and refined typography to elevate your brand.',
  },
  {
    icon: Sparkles,
    title: 'Conversion Optimized',
    desc: 'Frictionless flows, persuasive messaging, and clear CTAs designed to lift signups and sales.',
  },
  {
    icon: Shield,
    title: 'Performance & Trust',
    desc: 'Fast, accessible, and secure builds that build credibility and keep visitors engaged.',
  },
];

export default function Services() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need for a winning redesign</h2>
          <p className="mt-3 text-slate-600">From strategy to polish, we ship websites that look beautiful and sell even better.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 text-white shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <div className="absolute inset-x-0 bottom-0 translate-y-1/2 px-6 opacity-0 group-hover:opacity-100 transition">
                <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
