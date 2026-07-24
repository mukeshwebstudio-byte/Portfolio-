import React from 'react';
import { motion } from 'motion/react';
import { Award, Layers, Globe, Smile } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    { num: '50+', label: 'Projects Delivered', icon: Layers },
    { num: '3', label: 'E-Com Platforms (AMZ/FK/MS)', icon: Globe },
    { num: '5+', label: 'Years Combined Experience', icon: Award },
    { num: '100%', label: 'Client Satisfaction', icon: Smile },
  ];

  return (
    <div className="relative py-12 bg-[#070D1C]/80 border-y border-white/5 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all text-center group cursor-default"
              >
                <div className="inline-flex p-2 rounded-lg bg-amber-500/10 text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-space">
                  {s.num}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
