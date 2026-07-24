import React, { useState } from 'react';
import { Calculator, Download, MessageSquare, Check, Sparkles, Languages, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CivilTechToolDemo: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'TA'>('TA');
  const [buildArea, setBuildArea] = useState<number>(1200); // sq ft
  const [floors, setFloors] = useState<number>(1);
  const [ratePerSqFt, setRatePerSqFt] = useState<number>(2100);
  const [includeGst, setIncludeGst] = useState<boolean>(true);

  // Estimations
  const totalSqFt = buildArea * floors;
  const baseCost = totalSqFt * ratePerSqFt;
  const gstAmount = includeGst ? baseCost * 0.18 : 0;
  const grandTotal = baseCost + gstAmount;

  // Material Breakdown
  const cementBags = Math.round(totalSqFt * 0.4);
  const steelTons = (totalSqFt * 0.0028).toFixed(2);
  const sandUnits = (totalSqFt * 0.018).toFixed(1);
  const aggregateUnits = (totalSqFt * 0.016).toFixed(1);
  const bricksCount = Math.round(totalSqFt * 14.5);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#E9A520', '#F97316', '#8B7CF6']
    });
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Mukesh! I used your Civil Calculator Pro tool. Here is my project estimate:%0A- Builtup Area: ${totalSqFt} sq.ft (${floors} floors)%0A- Est. Budget: ₹${grandTotal.toLocaleString('en-IN')}%0A- Cement: ${cementBags} bags%0A- Steel: ${steelTons} tons%0ACan we discuss this construction estimate?`;
    window.open(`https://wa.me/91935XXXXXXX?text=${text}`, '_blank');
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#070D1C] to-[#0A1225] border border-amber-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
            <Calculator className="w-3.5 h-3.5" /> Live Project Demo #1
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-space">
            Civil Material & Cost Estimator Pro
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            {lang === 'TA'
              ? 'தமிழ்நாடு கட்டிட ஒப்பந்ததாரர்களுக்கான உடனடி கணிப்பான்'
              : 'Instant construction estimator tailored for Tamil Nadu civil contractors.'}
          </p>
        </div>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === 'EN' ? 'TA' : 'EN')}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-amber-300 transition-all self-start sm:self-center"
        >
          <Languages className="w-4 h-4 text-amber-400" />
          <span>Language: <strong className="text-white">{lang === 'TA' ? 'தமிழ் (Tamil)' : 'English'}</strong></span>
        </button>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <div>
          <label className="text-xs font-mono text-slate-300 mb-2 block">
            {lang === 'TA' ? 'கட்டிட பரப்பு (Area Sq.Ft)' : 'Builtup Area per floor (Sq.Ft)'}
          </label>
          <input
            type="number"
            value={buildArea}
            onChange={(e) => setBuildArea(Math.max(100, parseInt(e.target.value) || 0))}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white font-mono text-sm focus:border-amber-500 focus:outline-none"
          />
          <input
            type="range"
            min="300"
            max="5000"
            step="50"
            value={buildArea}
            onChange={(e) => setBuildArea(parseInt(e.target.value))}
            className="w-full mt-2 accent-amber-500"
          />
        </div>

        <div>
          <label className="text-xs font-mono text-slate-300 mb-2 block">
            {lang === 'TA' ? 'தளங்கள் எண்ணிக்கை (Floors)' : 'Number of Floors (G+N)'}
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((f) => (
              <button
                key={f}
                onClick={() => setFloors(f)}
                className={`flex-1 py-2.5 rounded-xl font-mono text-xs font-bold border transition-all ${
                  floors === f
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                G+{f - 1}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-mono text-slate-300 mb-2 block">
            {lang === 'TA' ? 'சதுரடி வீதம் (Rate / Sq.Ft)' : 'Estimated Construction Rate'}
          </label>
          <select
            value={ratePerSqFt}
            onChange={(e) => setRatePerSqFt(parseInt(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white font-mono text-sm focus:border-amber-500 focus:outline-none"
          >
            <option value={1850}>Basic Standard (₹1,850/sq.ft)</option>
            <option value={2100}>Premium Structural (₹2,100/sq.ft)</option>
            <option value={2600}>Luxury Villa Specification (₹2,600/sq.ft)</option>
          </select>
        </div>
      </div>

      {/* Results & Material Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Cost Summary Box */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/30 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
              {lang === 'TA' ? 'மொத்த மதிப்பீடு (Total Estimate)' : 'Estimated Total Investment'}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-space tracking-tight">
              ₹ {grandTotal.toLocaleString('en-IN')}
            </div>
            <div className="text-xs text-slate-400 mt-2 font-mono flex items-center gap-2">
              <span>Area: {totalSqFt.toLocaleString()} Sq.Ft</span>
              <span>•</span>
              <span>GST (18%): ₹ {gstAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-amber-500/20 flex flex-wrap gap-2">
            <button
              onClick={() => { triggerConfetti(); generateWhatsAppMessage(); }}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              {lang === 'TA' ? 'WhatsApp மூலம் அனுப்பவும்' : 'Send Quote on WhatsApp'}
            </button>
          </div>
        </div>

        {/* Material Quantities */}
        <div className="p-5 rounded-xl bg-slate-900/80 border border-white/10 space-y-3">
          <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center justify-between">
            <span>{lang === 'TA' ? 'தேவையான பொருட்கள் (Materials Required)' : 'Material Quantity Breakdown'}</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-slate-400 block text-[10px]">{lang === 'TA' ? 'சிமெண்ட் மூடைகள்' : 'Cement Bags'}</span>
              <span className="text-white font-bold text-sm">{cementBags} Bags</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-slate-400 block text-[10px]">{lang === 'TA' ? 'கம்பி (TMT Steel)' : 'TMT Steel Fe550'}</span>
              <span className="text-amber-300 font-bold text-sm">{steelTons} Tons</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-slate-400 block text-[10px]">{lang === 'TA' ? 'மணல் / M-Sand' : 'M-Sand / P-Sand'}</span>
              <span className="text-white font-bold text-sm">{sandUnits} Units</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-slate-400 block text-[10px]">{lang === 'TA' ? 'செங்கல் (Red Bricks)' : 'Red Bricks'}</span>
              <span className="text-orange-300 font-bold text-sm">{bricksCount.toLocaleString()} Pcs</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[11px] text-slate-500 font-mono text-center">
        * Estimated based on standard Tamil Nadu PWD & structural engineering formulas.
      </div>
    </div>
  );
};
