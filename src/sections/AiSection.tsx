import React from 'react';
import { Bot, Lock, HardDrive, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export const AiSection: React.FC = () => {
  return (
    <section id="ai" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Chat Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-6 border-indigo-500/20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl" />
          
          <div className="relative space-y-6">
            <div className="flex items-end gap-3 justify-end">
              <div className="bg-slate-800 text-sm text-white p-3 rounded-2xl rounded-br-sm max-w-[80%]">
                Son bir haftada neden daha az verimliydim?
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1 border border-indigo-500/30">
                <Bot className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-100 p-4 rounded-2xl rounded-bl-sm max-w-[85%] leading-relaxed">
                <p className="mb-3">Son 7 günde toplam odak süren <strong className="text-white">18% azaldı</strong>. Özellikle Salı ve Perşembe günleri çalışma seansların daha sık bölündü.</p>
                <p className="mb-3">En verimli olduğun saat: <strong className="text-white">09:00 – 11:30</strong></p>
                <p className="text-indigo-300 font-medium">Önerim:<br/>Yarın ilk Deep Focus seansını 09:00'da başlat.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
            Yapay zeka seni değil, <br />
            <span className="text-indigo-400 text-glow">çalışma sistemini öğrenir.</span>
          </h2>
          
          <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">
            Local LLM (Ollama) entegrasyonu sayesinde ZEKA, görevlerini ve notlarını okuyarak bağlamı anlar. Seni gerçekten tanıyan tek asistan.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <HardDrive className="w-4 h-4 text-indigo-500" /> Local AI
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <Lock className="w-4 h-4 text-emerald-500" /> Private
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <BrainCircuit className="w-4 h-4 text-violet-500" /> Context-aware
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
              <Bot className="w-4 h-4 text-cyan-500" /> Memory-enabled
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
