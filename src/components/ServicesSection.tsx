import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/portfolioData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">// Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-space mt-1">
            End-to-End Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            From Amazon SEO catalogs to civil engineering billing software and 3D web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((svc, idx) => (
            <motion.a
              key={svc.id}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all group flex flex-col justify-between backdrop-blur-xl cursor-pointer block"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {svc.icon}
                  </div>
                  {svc.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {svc.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-space group-hover:text-amber-300 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {svc.desc}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-300 pt-4 border-t border-white/5">
                  {svc.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-amber-400 group-hover:text-amber-300">
                <span>Inquire Custom Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
