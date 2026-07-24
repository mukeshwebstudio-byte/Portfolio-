import React, { useState, useEffect } from 'react';
import { Sliders, Sparkles, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenStudio: () => void;
  onOpenAnalysis: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStudio, onOpenAnalysis }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Live Tools', href: '#live-tools' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#04070F]/90 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#04070F] rounded-[10px] flex items-center justify-center font-space font-extrabold text-amber-400 text-lg">
              M.
            </div>
          </div>
          <div>
            <span className="font-space font-extrabold text-base tracking-tight text-white group-hover:text-amber-300 transition-colors">
              Mukesh M.
            </span>
            <span className="text-[10px] font-mono text-amber-400/80 block -mt-1">
              Civil-Tech & E-Com Specialist
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* 3D Studio Trigger */}
          <button
            onClick={onOpenStudio}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-amber-300 flex items-center gap-1.5 transition-all hover:border-amber-500/50"
            title="Open 3D WebGL Studio Customizer"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>3D Controls</span>
          </button>

          {/* Audit Tips Trigger */}
          <button
            onClick={onOpenAnalysis}
            className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-300 flex items-center gap-1.5 transition-all"
            title="View 3D Portfolio Improvement Tips"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>3D Audit Tips</span>
          </button>

          {/* Hire CTA */}
          <a
            href="https://wa.me/91935XXXXXXX?text=Hi%20Mukesh%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you%20for%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center gap-1"
          >
            Hire Me <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070D1C] border-b border-white/10 p-4 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-slate-300 hover:text-amber-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenStudio(); }}
              className="w-full py-2 rounded-xl bg-white/5 border border-white/15 text-xs font-mono text-amber-300 flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4 text-amber-400" /> Open 3D Controls
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAnalysis(); }}
              className="w-full py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> 3D Portfolio Upgrade Guide
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
