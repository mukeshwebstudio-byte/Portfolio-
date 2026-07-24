import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, CheckCircle, AlertTriangle, TrendingUp, Copy, Check } from 'lucide-react';

export const EcomSeoScorerDemo: React.FC = () => {
  const [platform, setPlatform] = useState<'Amazon' | 'Flipkart' | 'Meesho'>('Amazon');
  const [productTitle, setProductTitle] = useState<string>(
    'Cotton Silk Saree for Women Traditional Kanchipuram Style Zari Work Saree with Unstitched Blouse Piece'
  );
  const [copied, setCopied] = useState<boolean>(false);

  // Analyze title
  const length = productTitle.length;
  const wordCount = productTitle.trim().split(/\s+/).filter(Boolean).length;
  
  let score = 50;
  const issues: string[] = [];
  const strengths: string[] = [];

  // Length checks
  if (platform === 'Amazon') {
    if (length >= 120 && length <= 180) {
      score += 25;
      strengths.push('Optimal Amazon title length (120 - 180 chars)');
    } else if (length < 80) {
      issues.push('Title too short for Amazon search index (< 80 chars)');
    } else if (length > 200) {
      issues.push('Exceeds Amazon 200 char character limit');
    }
  } else if (platform === 'Flipkart') {
    if (length >= 60 && length <= 120) {
      score += 25;
      strengths.push('Ideal Flipkart search title length');
    }
  }

  // Keyword check
  if (/for women|for men|cotton|silk|traditional|style|piece|set/i.test(productTitle)) {
    score += 15;
    strengths.push('Contains key search modifiers (gender, material, style)');
  } else {
    issues.push('Missing search intent modifiers (e.g., material, occasion, gender)');
  }

  if (/[|,-]/i.test(productTitle)) {
    score += 10;
    strengths.push('Uses separators for visual readability');
  } else {
    issues.push('Add pipe "|" or dash "-" to separate brand, style, and features');
  }

  const finalScore = Math.min(100, score);

  const suggestedTitle = `${productTitle.split(' ')[0] || 'Brand'} Premium ${productTitle} | Breathable Fabric | Ideal for Festive & Ethnic Wear`;

  const copySuggested = () => {
    navigator.clipboard.writeText(suggestedTitle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#070D1C] to-[#0A1225] border border-orange-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-2">
            <ShoppingBag className="w-3.5 h-3.5" /> Live Project Demo #2
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-space">
            Marketplace E-Commerce SEO Score Generator
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Test product titles & rank higher on Amazon India, Flipkart, and Meesho search results.
          </p>
        </div>

        {/* Platform Selection */}
        <div className="flex gap-2">
          {(['Amazon', 'Flipkart', 'Meesho'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold border transition-all ${
                platform === p
                  ? 'bg-orange-500 text-slate-950 border-orange-400 shadow-md'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="my-6 space-y-2">
        <label className="text-xs font-mono text-slate-300 flex items-center justify-between">
          <span>Product Title to Analyze ({platform}):</span>
          <span className="text-orange-400">{length} Chars | {wordCount} Words</span>
        </label>
        <textarea
          rows={3}
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white font-mono text-xs sm:text-sm focus:border-orange-500 focus:outline-none"
          placeholder="Enter product title..."
        />
      </div>

      {/* Score and Findings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        {/* Gauge Card */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col items-center justify-center text-center">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            SEO Index Score
          </div>
          <div className={`text-5xl font-extrabold font-space ${
            finalScore >= 80 ? 'text-emerald-400' : finalScore >= 60 ? 'text-amber-400' : 'text-rose-400'
          }`}>
            {finalScore}/100
          </div>
          <div className="text-xs text-slate-400 mt-2 font-mono flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Estimated Search Rank: {finalScore >= 80 ? 'Page 1 Top 5' : 'Page 2-3'}</span>
          </div>
        </div>

        {/* Strengths & Issues */}
        <div className="md:col-span-2 p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
            Analysis Findings
          </div>

          <div className="space-y-1.5 text-xs">
            {strengths.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2 text-emerald-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{s}</span>
              </div>
            ))}
            {issues.map((iss, idx) => (
              <div key={idx} className="flex items-center gap-2 text-rose-300">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{iss}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Optimized Suggestion */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-orange-300 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" /> AI Keyword Boosted Title Suggestion:
          </div>
          <button
            onClick={copySuggested}
            className="text-xs font-mono text-amber-300 hover:text-white flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/10"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <p className="text-xs font-mono text-slate-200 bg-slate-950/80 p-3 rounded-lg border border-white/5 leading-relaxed">
          {suggestedTitle}
        </p>
      </div>
    </div>
  );
};
