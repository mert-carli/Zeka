import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12 bg-slate-950/90 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-indigo-500/30 blur-lg rounded-2xl pointer-events-none" />
            <img 
              src="/zeka-logo.png" 
              alt="ZEKA" 
              className="relative w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(129,140,248,0.85)]" 
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-black tracking-tight text-white leading-none">ZEKA</div>
            <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mt-1">Productivity OS</div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
          <a href="#features" className="hover:text-white hover:underline underline-offset-4 transition-colors">Özellikler</a>
          <a href="#ai" className="hover:text-white hover:underline underline-offset-4 transition-colors">Yapay Zeka</a>
          <a href="#" className="hover:text-white hover:underline underline-offset-4 transition-colors" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>İndir</a>
        </nav>

        {/* Copyright & Info */}
        <div className="text-sm text-slate-300 font-medium text-center md:text-right space-y-1">
          <div className="text-white font-semibold">Derin Odak & Kişisel Üretkenlik</div>
          <div className="text-xs text-slate-400">© {new Date().getFullYear()} ZEKA. Tüm hakları saklıdır.</div>
        </div>

      </div>
    </footer>
  );
};
