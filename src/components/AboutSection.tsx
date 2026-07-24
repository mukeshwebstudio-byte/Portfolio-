import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, PackageCheck, HardHat, Globe2, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#070D1C]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">// About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-space mt-1">
            Civil Engineer Turned <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Digital Builder</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Combining structural engineering precision with modern software development and e-commerce SEO strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Bio Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4 text-slate-300 text-sm leading-relaxed"
          >
            <p className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/20 transition-colors">
              Anna University-ல <b>BE Civil Engineering</b> முடிச்சேன் — but my core drive was always building tools in code. Today, I bridge the physical construction world and the digital web economy.
            </p>

            <p>
              I help e-commerce brands rank higher and convert more buyers on <b>Amazon, Flipkart, and Meesho</b>. Simultaneously, I create specialized civil-tech calculators and billing web apps designed for contractors across Tamil Nadu.
            </p>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 space-y-2">
              <div className="font-bold font-mono text-amber-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-400" /> Based in Sivagangai / Madurai Region, Tamil Nadu
              </div>
              <div>Working 100% remotely for clients across India with fast turnaround times and direct WhatsApp communication.</div>
            </div>
          </motion.div>

          {/* Key Highlights Card Stack */}
          <div className="space-y-3">
            {[
              {
                icon: GraduationCap,
                title: 'BE Civil Engineering',
                sub: 'Anna University Graduate • Structural & Estimation background',
              },
              {
                icon: PackageCheck,
                title: 'E-Commerce Marketplace Specialist',
                sub: 'Amazon, Flipkart & Meesho SEO • A+ Content & Cataloging',
              },
              {
                icon: HardHat,
                title: 'Civil-Tech Web App Developer',
                sub: '50+ Civil Formulas • GST Stage Billing • Tamil/English UI',
              },
              {
                icon: Globe2,
                title: 'Web Application Craftsman',
                sub: 'React, Three.js 3D WebGL, Tailwind CSS v4, PWAs',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all flex items-center gap-4 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-space">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
