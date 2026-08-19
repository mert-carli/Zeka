import React from 'react';
import { DownloadButton } from '../components/DownloadButton';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  
  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-violet-600/15 blur-[100px] rounded-full pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Copy */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          <motion.div variants={itemVars} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-indigo-500/30 text-[10px] font-black tracking-widest text-indigo-300 mb-8 uppercase shadow-2xl backdrop-blur-xl">
            <img src="/zeka-logo.png" alt="ZEKA" className="w-4 h-4 object-contain filter drop-shadow-[0_0_6px_rgba(129,140,248,0.9)]" />
            <span>Local-First • Focus Driven • Private</span>
          </motion.div>

          <motion.h1 variants={itemVars} className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white mb-6">
            Çalışma sistemini <br />
            <span className="text-transparent bg-clip-text bg-primary-gradient text-glow">
              bir üst seviyeye taşı.
            </span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-lg lg:text-xl text-slate-400 font-medium mb-10 max-w-xl leading-relaxed">
            ZEKA; görevlerini, notlarını, odaklanma süreni ve çalışma alışkanlıklarını birleştiren, 
            tamamen yerel ve çevrimdışı çalışan kişisel üretkenlik işletim sistemindir.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-6">
            <DownloadButton size="lg" showDetails />
            <a href="#features" className="text-sm font-bold text-slate-300 hover:text-white transition-colors group flex items-center gap-2">
              ZEKA'yı Keşfet
              <span className="transition-transform group-hover:translate-y-1">↓</span>
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVars} className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Local Data</div>
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500" /> Works Offline</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> No Telemetry</div>
          </motion.div>
        </motion.div>

        {/* Right: Premium Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] rounded-3xl p-1 bg-gradient-to-br from-indigo-500/30 to-violet-500/5 glow-border shadow-2xl perspective-1000"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-slate-950 rounded-3xl" 
          />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full bg-[#090d16] rounded-[22px] overflow-hidden border border-white/5 flex flex-col"
          >
            {/* Fake Titlebar */}
            <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#050508]">
              <div className="w-3 h-3 rounded-full bg-rose-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              <div className="mx-auto text-xs font-semibold text-slate-400 flex items-center gap-2">
                <img src="/zeka-logo.png" alt="ZEKA" className="w-4 h-4 object-contain filter drop-shadow-[0_0_6px_rgba(129,140,248,0.8)]" />
                <span>ZEKA Workspace</span>
              </div>
            </div>

            {/* Fake App UI */}
            <div className="flex-1 p-6 grid grid-cols-12 gap-6 relative">
              {/* Sidebar */}
              <div className="col-span-3 border-r border-white/5 space-y-4">
                <div className="flex items-center gap-2">
                  <img src="/zeka-logo.png" alt="ZEKA" className="w-6 h-6 object-contain filter drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                  <span className="text-xs font-extrabold text-white">ZEKA</span>
                </div>
                <div className="w-3/4 h-3 bg-slate-800 rounded mt-6" />
                <div className="w-full h-9 bg-indigo-500/10 border border-indigo-500/20 rounded-xl" />
                <div className="w-full h-9 bg-slate-900 rounded-xl" />
              </div>
              
              {/* Main Content */}
              <div className="col-span-9 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-black text-white">Good morning, Mert 👋</h2>
                    <p className="text-xs text-slate-400">Ready for deep work?</p>
                  </div>
                  <div className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 font-bold text-sm">
                    LEVEL 12
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Task Card */}
                  <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                    <div className="text-xs font-bold text-slate-500 mb-3">BIG 3 TASKS</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> API Integration
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full border-2 border-slate-700" /> Write Tests
                      </div>
                    </div>
                  </div>

                  {/* Pomodoro Card */}
                  <div className="p-4 bg-rose-950/20 rounded-2xl border border-rose-500/20 flex flex-col items-center justify-center">
                    <div className="text-4xl font-black text-rose-400 tracking-tighter">45:00</div>
                    <div className="text-[10px] font-bold text-rose-500 tracking-widest mt-1">DEEP FOCUS</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

