import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              We redesign, you grow faster
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              Website redesigns that convert like crazy
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              We combine modern 3D aesthetics with conversion-focused UX to refresh your site, boost credibility, and turn more visitors into customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition">
                Start your redesign
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 hover:bg-slate-50 transition">
                See what we do
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-3">
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/48?img=12" alt="client" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/48?img=24" alt="client" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/48?img=36" alt="client" />
              </div>
              <p><span className="font-medium text-slate-900">200+ teams</span> refreshed their brand with us</p>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_10px_60px_-10px_rgba(30,58,138,0.25)]" />
            <div className="absolute -inset-24 sm:-inset-16 md:-inset-12 pointer-events-none bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/10 blur-3xl" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
