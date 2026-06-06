import React from 'react';
import { motion } from 'motion/react';
import { SPECIALS_DATA } from '../data';
import { Sparkles } from 'lucide-react';

export default function SpecialsView() {
  return (
    <div className="py-28 bg-navy-deep min-h-screen relative" id="specials-view">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-navy-light/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Elite Exclusive Gatherings
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-widest text-slate-100 uppercase mb-4">
            SOLSTICE & SEASONAL SPECIALS
          </h1>
          <p className="font-serif-sub text-lg text-slate-350 italic">
            "We build seasonal menus aligned with astronomical moments. Celebrate the cold Great Southern months during our exclusive intimate culinary feasts."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Specials Cards List */}
        <div className="space-y-16">
          {SPECIALS_DATA.map((special, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={special.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row gap-10 bg-navy-dark border border-navy-light/50 rounded-lg p-8 relative overflow-hidden shadow-xl hover:border-gold-matte/20 transition-all ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Decorative circle glow */}
                <div className="absolute -bottom-10 right-0 w-32 h-32 bg-amber-candle/5 rounded-full blur-2xl" />

                {/* Left/Content Column */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-amber-candle uppercase tracking-[0.2em] font-semibold flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-amber-candle animate-pulse" />
                      <span>{special.period}</span>
                    </span>
                    <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold text-slate-100 tracking-wider uppercase leading-snug">
                      {special.title}
                    </h3>
                  </div>

                  <p className="font-serif-sub text-base sm:text-lg text-slate-300 italic leading-relaxed">
                    {special.description}
                  </p>

                  <div className="p-4 bg-navy-light/20 border border-gold-matte/15 rounded text-left text-xs font-mono text-gold-light">
                    ⚠️ {special.highlightText}
                  </div>
                </div>

                {/* Right/Inclusions Column */}
                <div className="flex-1 flex flex-col justify-center bg-navy-deep/60 p-6 rounded border border-navy-light/45">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-4">
                    SPECIFIC INCLUSIONS & OUTCOMES:
                  </span>
                  <ul className="space-y-4 font-mono text-xs text-slate-350">
                    {special.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 bg-gold-matte rounded-full mt-1.5 flex-shrink-0 animate-ping" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Notice Block */}
        <div className="mt-16 p-6 bg-navy-dark rounded border border-navy-light/40 flex items-start space-x-4 max-w-3xl mx-auto">
          <Sparkles className="w-5 h-5 text-gold-matte mt-0.5 flex-shrink-0" />
          <div className="text-xs text-slate-400 space-y-1.5">
            <h4 className="font-mono font-bold text-slate-300 uppercase tracking-wider">
              ASTRONOMICAL SYMBOLS & SEATING NOTICES
            </h4>
            <p>
              Our seasonal programs are highly sought-after by Denmark’s travelers, especially during the June Solstice. Seating notifications are dispatched first to subscriber circle members on our mailing registry.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
