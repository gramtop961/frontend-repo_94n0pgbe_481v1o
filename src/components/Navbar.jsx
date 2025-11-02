import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 text-white shadow-sm">
            <Rocket size={18} />
          </span>
          <span className="text-lg">Refine Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#work" className="hover:text-slate-900 transition">Our Work</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium border border-slate-200 text-slate-700 hover:bg-slate-50 transition">Talk to us</a>
          <a href="#cta" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition">Get started</a>
        </div>
      </div>
    </header>
  );
}
