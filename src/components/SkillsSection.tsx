import React from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-[#070D1C]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">// Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-space mt-1">
            Skills & Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Competencies</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Engineering proficiency across WebGL 3D graphics, civil math estimation, and e-commerce growth strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/20 transition-all space-y-4"
            >
              <h3 className="text-base font-bold text-white font-space flex items-center gap-2 pb-3 border-b border-white/10">
                <Cpu className="w-4 h-4 text-amber-400" />
                {cat.title}
              </h3>

              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300 flex items-center gap-1.5">
                        {skill.name}
                        {skill.is3dOrbital && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            3D / WebGL
                          </span>
                        )}
                      </span>
                      <span className="text-amber-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + sIdx * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
