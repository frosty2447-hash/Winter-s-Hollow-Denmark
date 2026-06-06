import React from 'react';
import { HERO_ATMOSPHERE } from '../data';
import { Wine, Leaf, Sparkles } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="py-28 bg-navy-deep min-h-screen relative overflow-hidden" id="about-view">
      {/* Soft background light */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-navy-light/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Born from Forest & Southerly Gales
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-widest text-slate-100 uppercase mb-4">
            OUR STORY & LANDSCAPE
          </h1>
          <p className="font-serif-sub text-lg text-slate-350 italic max-w-2xl mx-auto">
            "A collision of clean contemporary design and the dark, wet forest landscape of Denmark, Western Australia. Here is how our secret sanctum came to life."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Story Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-center">
          
          {/* Narrative text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-gold-matte uppercase tracking-widest block">
              The Genesis
            </span>
            <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-slate-100 tracking-wider uppercase leading-snug">
              AN ESCAPE HIDDEN IN DENMARK, WA
            </h2>
            <p className="font-serif-sub text-base sm:text-lg text-slate-300 italic leading-relaxed">
              "Denmark, Western Australia is known for some of the tallest karri forests on Earth, howling Southern Ocean winds, and heavy winter rainfall. To us, it represents the raw soul of the natural world—quiet, majestic, and bone-chillingly cold in the dark months."
            </p>
            <p className="font-sans text-sm text-slate-400 leading-relaxed">
              We asked ourselves: how can we celebrate this extreme climate rather than hide from it? The answer was Winter’s Hollow. Drawing inspiration from luxury mountain refuges, we used local matte-finished dark timbers, soft velvet shadows, and elegant candlelight-driven table arrangements to create an immersive dining room that acts as a comforting sanctuary.
            </p>
          </div>

          {/* Visual banner column */}
          <div className="lg:col-span-6 h-96 rounded-lg overflow-hidden shadow-2xl relative group">
            <img
              src={HERO_ATMOSPHERE}
              alt="Founders Interior Vision"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy-deep/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
          </div>

        </div>

        {/* Three Core Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Pillar 1 */}
          <div className="bg-navy-dark border border-navy-light/40 p-8 rounded shadow-lg space-y-4">
            <div className="w-12 h-12 bg-amber-candle/10 border border-amber-candle/30 rounded flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-candle animate-pulse" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100 uppercase tracking-widest">
              PREMIUM CHARCOAL COALS
            </h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              We exclusively roast over regional Karri and Jarrah wood branches. This releases subtle, clean, mineral wood warmth which highlights our locally raised red meats and root crops under charcoal embers.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-navy-dark border border-navy-light/40 p-8 rounded shadow-lg space-y-4">
            <div className="w-12 h-12 bg-gold-matte/10 border border-gold-matte/30 rounded flex items-center justify-center">
              <Wine className="w-6 h-6 text-gold-matte" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100 uppercase tracking-widest">
              SOUTHERN CLIMATIC WINES
            </h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Denmark WA sits on pristine cool-climate terroir. We work directly with boutique local winemakers to obtain intense, slatey Rieslings, ocean-influenced Pinot Noirs, and spicy Syrahs that stand tall alongside rich winter roasts.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-navy-dark border border-navy-light/40 p-8 rounded shadow-lg space-y-4">
            <div className="w-12 h-12 bg-navy-light/50 border border-navy-light/80 rounded flex items-center justify-center">
              <Leaf className="w-6 h-6 text-slate-300" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100 uppercase tracking-widest">
              NATIVE COASTAL HARVESTS
            </h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Every morning we harvest ocean rock samphire, wild beach saltbush, local honey from the trees, and fresh sea herbs. This ensures our guests sample the actual botanical biodiversity of Denmark's forest floor.
            </p>
          </div>

        </div>

        {/* Winter's Hollow Manifesto Card */}
        <div className="bg-navy-dark border border-navy-light/40 rounded-lg p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -bottom-10 right-10 w-40 h-40 bg-amber-candle/10 rounded-full blur-3xl" />
          <Sparkles className="w-8 h-8 text-amber-candle/60 mx-auto mb-6 animate-pulse" />
          <p className="font-serif-sub text-xl sm:text-2xl text-slate-200 italic leading-relaxed max-w-2xl mx-auto">
            "We believe that dining is not just caloric ingestion; it is a primal gathering. It is about the warmth of candlelight falling across dry crystal glasses, the soft glow of the amber candles, and long intimate conversations."
          </p>
          <div className="mt-6 font-mono text-xs text-gold-matte tracking-widest uppercase">
            — THE WINTER'S HOLLOW MANIFESTO
          </div>
        </div>

      </div>
    </div>
  );
}
