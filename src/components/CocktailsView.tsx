import React from 'react';
import { DRINKS_MENU } from '../data';
import { Flame, Film, Wine } from 'lucide-react';

export default function CocktailsView() {
  return (
    <div className="py-28 bg-navy-deep min-h-screen relative" id="cocktails-view">
      {/* Soft golden light backdrop filter */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header segment */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Pure Liquid Sensory Theatre
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-widest text-slate-100 uppercase mb-4">
            THE SIGNATURE LIBATIONS
          </h1>
          <p className="font-serif-sub text-lg text-slate-350 italic">
            "Smoked woods, cold-pressed forest herbs, aged single-barrel spirits, and hand-cut ice. Every cocktail is composed as a liquid winter escape."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Highlighted Signature Cocktails section */}
        {DRINKS_MENU.filter((item) => item.highlight).map((item) => (
          <div
            key={item.id}
            className="mb-24 bg-gradient-to-br from-navy-dark via-navy-dark to-navy-medium border border-gold-matte/20 rounded-lg overflow-hidden shadow-2xl relative"
          >
            {/* Soft background candle flare */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-candle/10 rounded-full blur-3xl" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Image & Theater Badges section */}
              <div className="lg:col-span-6 h-80 lg:h-[480px] relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual gradients to make text read clean */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-dark/95 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-transparent to-transparent lg:hidden" />
                
                {/* Specific theatre badge on the image */}
                <div className="absolute bottom-6 left-6 bg-navy-deep/80 backdrop-blur-md px-4 py-2 border border-gold-matte/30 rounded flex items-center space-x-2">
                  {item.id === "c6" ? (
                    <>
                      <Film className="w-4 h-4 text-amber-candle animate-pulse" />
                      <span className="font-mono text-[10px] tracking-wider text-slate-250 uppercase">
                        As Seen in Visual Series
                      </span>
                    </>
                  ) : (
                    <>
                      <Flame className="w-4 h-4 text-amber-candle animate-pulse" />
                      <span className="font-mono text-[10px] tracking-wider text-slate-250 uppercase">
                        Smoked Table Theatre
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Content and Ingredients column */}
              <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-xs tracking-[0.2em] text-amber-candle uppercase font-semibold flex items-center space-x-1.5 mb-2">
                    {item.id === "c6" ? (
                      <>
                        <Film className="w-3.5 h-3.5 animate-pulse" />
                        <span>Cinematic Video Highlight</span>
                      </>
                    ) : (
                      <>
                        <Flame className="w-3.5 h-3.5 animate-pulse" />
                        <span>Hollow Masterpiece Ritual</span>
                      </>
                    )}
                  </span>
                  
                  <div className="flex justify-between items-baseline">
                    <h2 className="font-display text-2xl sm:text-4.5xl font-extrabold text-[#f8fafc] tracking-wider uppercase">
                      {item.name}
                    </h2>
                    <span className="font-mono text-xl font-bold text-gold-matte">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 py-2 border-b border-t border-navy-light/40">
                  <span className="font-mono text-xs text-slate-400">Flavor profile: </span>
                  <span className="font-mono text-xs text-gold-light font-medium">{item.profile}</span>
                </div>

                <p className="font-serif-sub text-lg text-slate-300 italic leading-relaxed">
                  {item.description}
                </p>

                {/* Constituents list */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-gold-matte uppercase tracking-widest">
                    CONSTITUENTS:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-slate-405">
                    {item.ingredients.map((ing, ingIdx) => (
                      <li key={ingIdx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-amber-candle rounded-full animate-pulse flex-shrink-0" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Serving Vessels or cinematic details warning */}
                <div className="p-4 bg-navy-light/20 rounded border border-navy-light/40 flex items-center space-x-3 text-xs text-slate-300">
                  <Wine className="w-5 h-5 text-gold-matte flex-shrink-0" />
                  <span>
                    {item.id === "c6"
                      ? "A vibrant botanical sour shaken using premium blue Curaçao, cold-pressed lemon oils, and hand-dripped aromatic bitters."
                      : "Served exclusive in custom lead-free crystal with our proprietary 3.5cm clear-cut Ice Obelisk."}
                  </span>
                </div>

              </div>

            </div>
          </div>
        ))}

        {/* Supporting Liquid Flights section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-widest text-slate-100 uppercase">
            ADDITIONAL LIQUID FLIGHTS
          </h2>
          <div className="w-12 h-[1px] bg-gold-matte mx-auto mt-3" />
        </div>

        {/* Regular list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {DRINKS_MENU.filter((item) => !item.highlight).map((item) => (
            <div
              key={item.id}
              className="bg-navy-dark rounded border border-navy-light/40 overflow-hidden hover:border-gold-matte/30 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="h-60 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
              </div>

              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 tracking-wider group-hover:text-gold-light transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-mono text-sm font-semibold text-gold-matte">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                      Aroma PROFILE:
                    </span>
                    <span className="font-mono text-[9px] font-semibold text-amber-candle uppercase tracking-wider bg-amber-candle/5 px-2 py-0.5 border border-amber-candle/15 rounded">
                      {item.profile}
                    </span>
                  </div>

                  <p className="font-serif-sub text-base text-slate-400 italic leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-light/30 mt-4">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-2">
                    Structure:
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-slate-400 italic">
                    {item.ingredients.map((ing, ingIdx) => (
                      <span key={ingIdx} className="after:content-[',_'] last:after:content-[''] font-light">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
