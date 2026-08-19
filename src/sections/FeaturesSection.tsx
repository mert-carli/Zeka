import React, { useRef } from 'react';
import { Focus, Shield, Sword, Network, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'OFFLINE MODE',
      subtitle: 'Bağımsız çalış.',
      desc: 'İnternet bağlantısı gerektirmez. Tüm verilerin şifrelenmiş olarak cihazında saklanır ve buluta gönderilmez.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10 border-indigo-500/20'
    },
    {
      icon: Focus,
      title: 'DEEP FOCUS',
      subtitle: 'Dikkatini koru.',
      desc: 'Özelleştirilebilir Pomodoro sayacı, ortam sesleri (yağmur, kafe) ve dikkati dağıtan her şeyi engelleyen tam ekran modu.',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20'
    },
    {
      icon: Sword,
      title: 'TASKS + RPG',
      subtitle: 'Üretkenliği oyuna dönüştür.',
      desc: 'Görevleri tamamla XP kazan, seviye atla. Günlük seriler (streak) oluşturarak motivasyonunu her gün yüksek tut.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      icon: Network,
      title: 'KNOWLEDGE SYSTEM',
      subtitle: 'Bilgini kaybetme.',
      desc: 'Markdown destekli not alma, gelişmiş etiketler ve birbirine bağlı sistem ile ikinci beynini inşa et.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: BarChart3,
      title: 'DAILY GOALS',
      subtitle: 'Hedef belirle.',
      desc: 'Günlük odaklanma saatleri ve görev kotaları koy. Ulaştıkça rozetler kazan ve motivasyonunu katla.',
      color: 'text-violet-400',
      bg: 'bg-violet-500/10 border-violet-500/20'
    },
    {
      icon: BarChart3,
      title: 'ANALYTICS',
      subtitle: 'Kendini ölç.',
      desc: 'Odaklanma sürelerin, üretkenlik puanın ve disiplin seviyen. Kendi gelişimini veriyle takip et.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  return (
    <section id="features" className="py-24 relative group/section">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Her Şeyi Tek Bir Yerde <br className="hidden md:block" />
            <span className="text-slate-400">Yönetin.</span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  color: string;
  bg: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, subtitle, desc, color, bg }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      className="relative flex flex-col p-8 rounded-3xl bg-slate-900/40 border border-white/5 overflow-hidden group hover:border-white/10 transition-colors"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Inner Border Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-indigo-500/10"
        style={{
          maskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${bg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        
        <div className={`text-[10px] font-black tracking-widest uppercase mb-2 ${color}`}>
          {title}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">
          {subtitle}
        </h3>
        
        <p className="text-sm text-slate-400 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};
