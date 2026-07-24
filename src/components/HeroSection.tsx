import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  onOpenStudio: () => void;
  onOpenAnalysis: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenStudio, onOpenAnalysis }) => {
  const roles = [
    'Freelance Developer',
    'E-Commerce Specialist',
    'Civil-Tech Builder',
    'Amazon / Flipkart SEO Expert',
    'Digital Solutions Guy 🤙',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[roleIndex].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1800);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 70
    );

    return () => clearTimeout(timeout);
  }, [subIndex, roleIndex, reverse]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 min-h-[90vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Available for Freelance Projects & Remote Contracts</span>
        </motion.div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-space tracking-tight leading-[1.05]">
          Mukesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400">M.</span>
        </h1>

        {/* Typewriter Role */}
        <div className="text-lg sm:text-2xl md:text-3xl font-medium font-space text-slate-300 mt-3 h-10 flex items-center">
          <span>I'm a </span>
          <span className="text-orange-400 ml-2 border-r-2 border-orange-400 pr-1 animate-pulse font-mono">
            {roles[roleIndex].substring(0, subIndex)}
          </span>
        </div>

        {/* Hero Narrative */}
        <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed mt-4 font-inter">
          Civil Engineer turned Digital Specialist — building high-ranking e-commerce catalogs (Amazon, Flipkart, Meesho), web portals, and civil-tech estimator tools for contractors in Tamil Nadu and across India.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:brightness-110 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Let's Work Together
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#projects"
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm backdrop-blur-md transition-all hover:border-amber-500/40"
          >
            🗂 View Work Showcase
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenAnalysis}
            className="px-5 py-3.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-400" /> Read 3D Portfolio Audit Tips
          </motion.button>
        </div>

        {/* Quick Tech Chips */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
          {[
            'Amazon SEO',
            'Civil-Tech Tools',
            'Flipkart & Meesho Catalog',
            'React / Three.js',
            'Tamil Nadu Based',
            'PWA & Web Apps',
          ].map((chip) => (
            <motion.span
              whileHover={{ y: -2, scale: 1.05 }}
              key={chip}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 hover:text-amber-300 hover:border-amber-500/30 transition-colors cursor-default"
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
