import React from 'react';
import { DownloadButton } from '../components/DownloadButton';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/20" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
          Çalışma sistemini <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-primary-gradient">yeniden tasarla.</span>
        </h2>
        
        <p className="text-xl text-slate-400 font-medium mb-12">
          ZEKA ile odaklan. Üret. Öğren. Seviye atla.
        </p>
        
        <DownloadButton size="lg" showDetails />
      </motion.div>
    </section>
  );
};
