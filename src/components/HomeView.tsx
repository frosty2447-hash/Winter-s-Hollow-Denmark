import React from 'react';
import { motion } from 'motion/react';
import { 
  HERO_ATMOSPHERE, 
  SIGNATURE_COCKTAIL_OLD, 
  GOURMET_DISH_OLD, 
  COZY_HOLLOW, 
  REVIEWS_DATA 
} from '../data';
import { Flame, Star, Compass, ArrowRight, ShieldAlert, Sparkles, MapPin } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const cornerstones = [
    {
      title: "The Hearth Kitchen",
      subtitle: "SEASONAL WINTER DINING",
      desc: "Artisanal preparation, slow-cooked over premium local Karri wood. Our kitchen crafted menu handles hand-harvested Great Southern meats, salt-baked root cellars, and coastal brine.",
      image: GOURMET_DISH_OLD,
      cta: "The Culinary Menu",
      target: "menu"
    },
    {
      title: "The Libation Ritual",
      subtitle: "FINE COCKTAILS",
      desc: "Experience 'The Hollow's Breath' and the stunning 'Blue Hollow Sour' from our visual series. Custom-smoked or velvety-shaken for long, moody nights in Western Australia.",
      image: SIGNATURE_COCKTAIL_OLD,
      cta: "Explore Cocktails",
      target: "cocktails"
    },
    {
      title: "Cozy Fireside Sanctum",
      subtitle: "THE ATMOSPHERE",
      desc: "Plush leather booths, heavy dark-blue knit blankets, flickering beeswax candles, and double-glazed windows framing ancient towering blue-gum forest twilights.",
      image: COZY_HOLLOW,
      cta: "About the Sanctuary",
      target: "about"
    }
  ];

  return (
    <div className="relative font-sans text-slate-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero-section">
        {/* Cinematic Backdrop layers */}
        <div className="absolute inset-0 bg-navy-deep">
          <img
            src={HERO_ATMOSPHERE}
            alt="Winter's Hollow Interior Atmosphere"
            className="w-full h-full object-cover opacity-35 scale-105 filter blur-[0.5px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-transparent to-navy-deep/80" />
          <div className="absolute inset-0 bg-black/10 backdrop-brightness-[0.95]" />
        </div>

        {/* Ambient candle flame glow filter */}
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-amber-candle/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Core Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          
          {/* DEVELOPMENT STATUS WARNING BANNER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8 p-4 bg-yellow-400/5 border border-yellow-500/40 rounded-sm max-w-2xl mx-auto backdrop-blur-md relative"
          >
            <div className="border border-dashed border-yellow-500/20 p-2 text-center">
              <span className="font-mono text-xs sm:text-sm tracking-[0.2em] text-[#fef3c7] font-bold uppercase block mb-1">
                ⚠️ WEBSITE IS IN DEVELOPMENT ⚠️
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-[#fef3c7]/85 uppercase tracking-widest font-semibold block">
                DO NOT MAKE BOOKINGS — WE ARE NOT OPEN YET!
              </span>
            </div>
          </motion.div>

          {/* Sub Location Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-navy-light/20 backdrop-blur-md rounded-full border border-white/10 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-candle animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.25em] text-slate-300 uppercase">
              A Hidden Sanctuary • Denmark WA
            </span>
          </motion.div>

          {/* Title Branding Display */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl sm:text-6xl md:text-[66px] font-extrabold tracking-[0.16em] text-[#f8fafc] uppercase leading-[1.15] mb-10"
          >
            WHERE THE WILD <br />
            <span className="text-[#C5A059]">COLD</span> DRIFTS, <br />
            THE SANCTUARY <br />
            GLOWS.
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-serif-sub text-base sm:text-lg text-slate-300 italic max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            “A curated candlelit refuge. Slip away from the howling winds into Denmark’s premier winter culinary escape.”
          </motion.p>

          {/* Buttons Navigation CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <button
              onClick={() => onNavigate('bookings')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#fef3c7] hover:bg-[#fff9e6] text-navy-deep font-mono text-xs font-bold tracking-[0.25em] uppercase rounded-sm transition-all shadow-md cursor-pointer"
            >
              Enter the Hollow
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/50 text-slate-100 font-mono text-xs font-bold tracking-[0.25em] uppercase rounded-sm transition-all cursor-pointer"
            >
              Examine Menus
            </button>
          </motion.div>

        </div>

        {/* Descending scroll pointer */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-10 pointer-events-none">
          <span className="font-mono text-[9px] text-slate-500 tracking-[0.3em] uppercase">Scroll to descend</span>
          <div className="w-1 h-12 bg-gradient-to-b from-amber-candle/80 to-transparent rounded-full animate-bounce" />
        </div>
      </section>

      {/* 2. THE ATMOSPHERIC LAW & RESERVATION PREVIEW */}
      <section className="py-24 bg-navy-dark relative border-b border-navy-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Descriptive brand column */}
            <div className="lg:col-span-7 space-y-8">
              <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block">
                The Atmospheric Experience
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-widest text-slate-100 uppercase leading-snug">
                WE SELL ATMOSPHERE,<br />FINE SPIRITS & WINTER HEARTH.
              </h2>
              <p className="font-serif-sub text-lg sm:text-xl text-slate-350 italic leading-relaxed">
                "Winter’s Hollow was born from the ancient towering karri trees and cold southerly gusts of Denmark, WA. We designed this chamber as a physical refuge—heavy thick timbers, velvet curtained shadows, amber candlelight, and winter warmth that captures the intense romance of the dark months."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center text-slate-400 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold-matte flex-shrink-0" />
                  <span>3/27 Strickland Street, Denmark WA 6333</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-candle animate-pulse" />
                  <span>Limited: 42 Seats Nightly</span>
                </div>
              </div>
            </div>

            {/* NowBookIt Closed Status card */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-navy-medium border border-navy-light/60 p-8 sm:p-10 rounded shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-glow/5 rounded-full blur-2xl group-hover:bg-amber-glow/10 transition-colors" />
                
                <h3 className="font-display text-xl text-slate-100 font-bold mb-4 tracking-wider">
                  NOWBOOKIT RESERVED
                </h3>
                <p className="font-sans text-xs text-slate-300 leading-relaxed mb-6">
                  Our intimate layout accommodates single tables, secluded dining alcoves, and bar counters. Standard bookings are routed through our premier local partner.
                </p>
                
                <ul className="space-y-3 font-mono text-xs text-slate-400 mb-8">
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-gold-matte" />
                    <span>Real-time Secure Confirmation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-amber-candle" />
                    <span>Seating style preferences welcome</span>
                  </li>
                </ul>

                <button
                  onClick={() => onNavigate('bookings')}
                  className="w-full py-3.5 bg-navy-dark/80 hover:bg-navy-light text-amber-candle border border-amber-candle/40 hover:border-amber-glow font-mono text-xs font-semibold tracking-widest uppercase transition-all rounded font-bold cursor-pointer"
                >
                  Bookings Closed (Not Open Yet)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE THREE CORNERSTONES */}
      <section className="py-24 bg-navy-deep relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3 animate-pulse">
              Descend into Details
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-widest text-[#f8fafc] uppercase">
              THE THREE CORNERSTONES
            </h2>
            <div className="w-20 h-[1px] bg-gold-matte mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {cornerstones.map((stone, o) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: o * 0.1 }}
                className="bg-navy-dark/60 rounded border border-navy-light/40 hover:border-gold-matte/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={stone.image}
                    alt={stone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-gold-matte uppercase block mb-2">
                      {stone.subtitle}
                    </span>
                    <h3 className="font-display text-xl text-slate-100 font-bold mb-4 tracking-wider">
                      {stone.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6 h-24 overflow-hidden">
                      {stone.desc}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => onNavigate(stone.target)}
                    className="flex items-center space-x-2 font-mono text-xs text-gold-light hover:text-gold-matte transition-colors group/btn cursor-pointer"
                  >
                    <span>{stone.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SLOW DINING HEADING SECTION */}
      <section className="py-28 relative overflow-hidden border-t border-b border-navy-light/40 bg-navy-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,26,54,0.3)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-gold-matte uppercase block mb-4">
            A Great Southern Solstice
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-widest text-[#f8fafc] mb-6 uppercase">
            WE DARE TO DO DINING SLOWLY.
          </h2>
          <p className="font-serif-sub text-base sm:text-lg text-slate-300 italic leading-relaxed max-w-2xl mx-auto mb-8">
            “No rushed sittings. No generic noise. We dim the house lights, light the beautiful beeswax candles, and prepare beautifully crafted winter culinary stories. Denmark WA has never felt so intimate.”
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <span className="bg-navy-light/40 px-3 py-1.5 border border-navy-light/60 rounded">42 Seats Only</span>
            <span className="bg-navy-light/40 px-3 py-1.5 border border-navy-light/60 rounded">Premium Mixology</span>
            <span className="bg-navy-light/40 px-3 py-1.5 border border-navy-light/60 rounded">NowBookIt Partner</span>
          </div>
        </div>
      </section>

      {/* 5. GUEST FEEDBACK & VERDICT */}
      <section className="py-24 bg-navy-deep relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block">
                Loved by Travelers & Locals
              </span>
              <h2 className="font-display text-2xl sm:text-3.5xl font-bold tracking-widest text-slate-100 uppercase">
                THE HOLLOW VERDICT
              </h2>
              <p className="font-sans text-xs text-slate-400 leading-relaxed">
                Read direct reviews from visiting date nights, Western Australian foodies, and international culinary travelers.
              </p>
              <button
                onClick={() => onNavigate('reviews')}
                className="px-6 py-3 bg-navy-light border border-navy-light/80 text-gold-light hover:border-gold-matte hover:text-gold-matte text-xs font-mono tracking-widest uppercase transition-all rounded cursor-pointer"
              >
                View Selected Reviews
              </button>
            </div>

            {/* Quick reviews grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIEWS_DATA.slice(0, 2).map((review) => (
                <div
                  key={review.id}
                  className="bg-navy-dark border border-navy-light/40 p-8 rounded shadow-xl relative"
                >
                  <div className="flex items-center space-x-1 text-amber-candle mb-4">
                    {[...Array(review.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 text-amber-candle fill-current" />
                    ))}
                  </div>
                  <p className="font-serif-sub text-base text-slate-300 italic leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                      {review.author}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-500">
                      Source: {review.source} • {review.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
