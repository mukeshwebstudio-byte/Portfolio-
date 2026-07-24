import React, { useState } from 'react';
import { PORTFOLIO_TIPS } from '../data/portfolioData';
import { PortfolioTip } from '../types';
import { Sparkles, CheckCircle, Code, Layers, Zap, X, ChevronRight, Award, ShieldCheck, Cpu } from 'lucide-react';

interface PortfolioAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyTipDemo?: (tipId: string) => void;
}

export const PortfolioAnalysisModal: React.FC<PortfolioAnalysisModalProps> = ({
  isOpen,
  onClose,
  onApplyTipDemo,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ['All', '3D Animations', 'Visual Design', 'E-Commerce Tech', 'Conversion & UX'];

  const filteredTips = activeCategory === 'All'
    ? PORTFOLIO_TIPS
    : PORTFOLIO_TIPS.filter(t => t.category === activeCategory);

  const handleCopyCode = (snippet: string, id: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#070D1C] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-purple-500/10 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono mb-1">
                <Cpu className="w-3.5 h-3.5" /> Comprehensive 3D Portfolio Audit & Strategy
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Mukesh M Portfolio Analysis & 3D Upgrade Roadmap
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Tailored recommendations to elevate your civil-tech & e-commerce portfolio into a top 1% WebGL showcase.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* Executive Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-amber-400 text-xs font-mono uppercase mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Current Strengths
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Strong localized positioning for Tamil Nadu civil contractors & Indian e-commerce marketplaces (Amazon, Flipkart, Meesho) with dark luxury aesthetic.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-orange-400 text-xs font-mono uppercase mb-1 flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> 3D Gap Analysis
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Current Three.js canvas is static. Needs particle morphing, scroll camera interpolation, interactive 3D model previews, and dynamic light reflections.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-purple-400 text-xs font-mono uppercase mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Impact Potential
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Adding interactive working tool demos (Civil Estimator & E-Commerce SEO Score) will boost conversion rates by 300%+ for remote clients.
              </p>
            </div>
          </div>

          {/* Category Tabs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono text-amber-400">
                Actionable 3D & Tech Tips
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {filteredTips.length} Recommendations Available
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tips Grid */}
            <div className="space-y-4">
              {filteredTips.map((tip) => (
                <div
                  key={tip.id}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase ${
                        tip.impactLevel === 'Game Changer'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : tip.impactLevel === 'High'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {tip.impactLevel}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">[{tip.category}]</span>
                    </div>

                    {tip.status === 'in_demo' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <CheckCircle className="w-3 h-3" /> Implemented Live Below
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-white">{tip.title}</h4>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">{tip.description}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/60 border border-white/5 space-y-2">
                    <div className="text-amber-400/90 text-xs font-mono font-medium">Action Step:</div>
                    <div className="text-slate-300 text-xs">{tip.actionItem}</div>

                    {tip.codeSnippet && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                          <span className="flex items-center gap-1"><Code className="w-3 h-3" /> Implementation Snippet</span>
                          <button
                            onClick={() => handleCopyCode(tip.codeSnippet!, tip.id)}
                            className="text-amber-400 hover:underline"
                          >
                            {copiedSnippetId === tip.id ? 'Copied!' : 'Copy Code'}
                          </button>
                        </div>
                        <pre className="p-2.5 rounded bg-slate-900 border border-white/5 text-[11px] font-mono text-amber-200/90 overflow-x-auto">
                          {tip.codeSnippet}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tiered Roadmap Section */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-amber-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Recommended 3D Tier Progression
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                <div className="font-bold text-amber-300 mb-1">Level 1: Particle & Camera Motion</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Add 3D shape morphing on scroll, smooth parallax camera rotation, and theme color customizer (built live in this app).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                <div className="font-bold text-orange-300 mb-1">Level 2: Live Tool Demonstrators</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Embed working civil material estimators and Amazon SEO analyzer widgets right into the portfolio to show real utility.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                <div className="font-bold text-purple-300 mb-1">Level 3: Custom Shaders & 3D Objects</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Load GLTF 3D civil building wireframes and 3D e-commerce package models with dynamic lighting in individual project cards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-950 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Designed for Mukesh M · Freelance Developer & Digital Specialist
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs hover:brightness-110 transition-all flex items-center gap-1.5"
          >
            Explore Live Enhanced Portfolio <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
