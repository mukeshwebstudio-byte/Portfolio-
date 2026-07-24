import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mail, Github, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0A1225] via-[#070D1C] to-[#04070F] border border-amber-500/30 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">// Get in Touch</span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-space mt-2">
            Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Great?</span>
          </h2>

          <p className="text-slate-300 text-sm max-w-lg mx-auto mt-3 leading-relaxed">
            E-commerce listing வேணுமா? Website வேணுமா? Civil estimator tool வேணுமா?<br />
            Just WhatsApp பண்ணுங்க, நேரடியா பேசலாம்! 🤙
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/91935XXXXXXX?text=Hi%20Mukesh%2C%20I%20saw%20your%20portfolio%20and%20need%20your%20help%20with%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:brightness-110 transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5" /> Chat Directly on WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:mukimukesh935@gmail.com"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-amber-400" /> Send Email Inquiry
            </motion.a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <a
              href="https://github.com/mukesh-muk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub / mukesh-muk
            </a>

            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400" /> Sivagangai & Madurai, Tamil Nadu
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
