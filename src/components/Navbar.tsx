import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { DownloadButton } from './DownloadButton';
import { cn } from './DownloadButton';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Özellikler', href: '#features' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 sm:px-6 transition-all duration-500"
    >
      <div 
        className={cn(
          "w-full flex items-center justify-between transition-all duration-500",
          scrolled 
            ? "max-w-5xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-indigo-500/5 rounded-3xl px-5 py-3" 
            : "max-w-7xl bg-transparent border-transparent px-2 py-4"
        )}
      >
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <div className="absolute inset-0 bg-indigo-500/35 blur-lg rounded-2xl pointer-events-none" />
            <img 
              src="/zeka-logo.png" 
              alt="ZEKA" 
              className="relative w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(129,140,248,0.85)]" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-white leading-none">ZEKA</span>
            <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest mt-1">Productivity OS</span>
          </div>
        </a>

        {/* Desktop Links with Sliding Hover */}
        <nav 
          className="hidden md:flex items-center gap-1"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((l, index) => (
            <a 
              key={l.name} 
              href={l.href}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-xl"
            >
              {hoveredIndex === index && (
                <motion.div 
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/5 rounded-xl border border-white/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{l.name}</span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <DownloadButton size="sm">İndir</DownloadButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white bg-white/5 rounded-full border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[calc(100%+12px)] inset-x-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl py-6 px-6 flex flex-col gap-6 shadow-2xl"
          >
          <nav className="flex flex-col gap-4">
            {links.map(l => (
              <a 
                key={l.name} 
                href={l.href} 
                className="text-base font-semibold text-slate-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.name}
              </a>
            ))}
          </nav>
          <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
            <DownloadButton className="w-full" size="md">Windows için İndir</DownloadButton>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
