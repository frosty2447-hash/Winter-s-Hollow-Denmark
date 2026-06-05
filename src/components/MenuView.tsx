import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FOOD_MENU } from '../data';
import { MenuItem } from '../types';
import { Sparkles, Download, HelpCircle, Wine, Heart } from 'lucide-react';

export default function MenuView() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starter' | 'main' | 'dessert'>('all');
  const [pdfState, setPdfState] = useState<'idle' | 'loading' | 'done'>('idle');
  const [pdfMessage, setPdfMessage] = useState<string | null>(null);

  const categories = [
    { label: "All Offerings", id: "all" },
    { label: "Something Smaller", id: "starter" },
    { label: "Something Bigger", id: "main" },
    { label: "Something Sweet", id: "dessert" },
  ];

  const filteredItems = activeCategory === 'all' 
    ? FOOD_MENU 
    : FOOD_MENU.filter((item) => item.category === activeCategory);

  const handleDownloadPdf = () => {
    setPdfState('loading');
    setTimeout(() => {
      setPdfState('done');
      setPdfMessage("Winters-Hollow-Printed-Menu.pdf downloaded successfully!");
      
      setTimeout(() => {
        setPdfState('idle');
      }, 2000);
      
      setTimeout(() => {
        setPdfMessage(null);
      }, 4000);
    }, 1200);
  };

  const aperitifs = [
    { name: "Chambord", price: "$12" },
    { name: "Campari", price: "$10" },
    { name: "St Germain", price: "$12" },
    { name: "Vermouth", price: "$10" }
  ];

  const digestives = [
    { name: "Sambuca", price: "$12" },
    { name: "Disaronno", price: "$12" },
    { name: "Frangelico", price: "$9" },
    { name: "Aperol", price: "$7" }
  ];

  const dietaries = [
    { symbol: "GF", label: "Gluten Free" },
    { symbol: "GFO", label: "Gluten Free Option" },
    { symbol: "V", label: "Vegetarian" },
    { symbol: "VO", label: "Vegetarian Option" },
    { symbol: "VE", label: "Vegan" },
    { symbol: "VEO", label: "Vegan Option" },
    { symbol: "ND", label: "No Dairy" },
    { symbol: "NDO", label: "No Dairy Option" },
    { symbol: "A", label: "Alcoholic Content" }
  ];

  return (
    <div className="py-28 bg-navy-deep min-h-screen relative overflow-hidden" id="menu-view">
      {/* Background soft glowing blur effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-navy-light/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-navy-medium/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating dynamic toast notification */}
      <AnimatePresence>
        {pdfMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-24 left-1/2 z-50 bg-amber-candle text-navy-deep px-6 py-3 rounded shadow-2xl font-mono text-xs uppercase tracking-widest font-black"
          >
            {pdfMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Great Southern Terroir
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-widest text-[#f8fafc] uppercase mb-4">
            THE MENU
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-slate-300">
            "A dialogue between raw fire, local premium farming, and the surrounding Southern ocean of Denmark, WA."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Action Header bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
            <Sparkles className="w-4 h-4 text-gold-matte animate-pulse" />
            <span>Produce dynamically synchronized with local Denmark tides and wild karris.</span>
          </div>
          <div>
            <button
              onClick={handleDownloadPdf}
              disabled={pdfState !== 'idle'}
              className="flex items-center space-x-2 px-5 py-2.5 bg-navy-dark border border-navy-light/85 text-gold-light hover:border-gold-matte text-xs font-mono tracking-widest uppercase transition-all rounded shadow-md hover:bg-navy-light/20 disabled:opacity-50 cursor-pointer"
            >
              {pdfState === 'loading' ? (
                <div className="w-4 h-4 border-2 border-gold-matte border-t-transparent rounded-full animate-spin" />
              ) : (
                <Download className="w-4 h-4 text-amber-candle" />
              )}
              <span>
                {pdfState === 'idle' && "Download PDF Menu"}
                {pdfState === 'loading' && "Exporting High-Res..."}
                {pdfState === 'done' && "Saved Successfully"}
              </span>
            </button>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* L. Sidebar Column */}
          <div className="lg:col-span-4 bg-[#03070E] border border-gold-matte/20 p-8 rounded-sm space-y-12">
            
            {/* Center Logo branding inside menu card */}
            <div className="text-center pb-6 border-b border-white/10">
              <span className="text-3xl font-serif tracking-[0.25em] uppercase text-gold-matte block mb-4">
                MENU
              </span>
              <div className="flex items-center justify-center space-x-5 py-2">
                <div className="h-[1px] w-8 bg-gold-matte/45" />
                <div className="relative flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-gold-matte flex items-center justify-center p-2">
                    <div className="w-10 h-10 rounded-full border border-gold-matte/45 border-dashed" />
                  </div>
                  <Wine className="w-4 h-4 text-gold-matte absolute" />
                </div>
                <div className="h-[1px] w-8 bg-gold-matte/45" />
              </div>
            </div>

            {/* Aperitifs block */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white">
                  APERITIFS (30ML POUR)
                </h4>
                <div className="h-[1px] flex-grow bg-white/15 ml-3" />
              </div>
              <div className="space-y-3 font-mono text-[11px] uppercase tracking-widest text-slate-300">
                {aperitifs.map((ap, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{ap.name}</span>
                    <span className="text-gold-matte font-bold">{ap.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Digestives block */}
            <div className="space-y-4">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-white">
                  DIGESTIVS (30ML POUR)
                </h4>
                <div className="h-[1px] flex-grow bg-white/15 ml-3" />
              </div>
              <div className="space-y-3 font-mono text-[11px] uppercase tracking-widest text-slate-300">
                {digestives.map((di, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{di.name}</span>
                    <span className="text-gold-matte font-bold">{di.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dietary Legend */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#fef3c7] mb-4 text-center">
                DIETARY LEGEND
              </h4>
              <div className="grid grid-cols-1 gap-2 font-mono text-[10px] uppercase tracking-wider text-slate-450">
                {dietaries.map((dt, i) => (
                  <div key={i} className="flex items-center space-x-2.5">
                    <span className="w-10 text-right font-bold text-gold-matte">
                      ({dt.symbol})
                    </span>
                    <span className="text-slate-300">{dt.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom standard warning card */}
            <div className="p-4 bg-navy-light/10 rounded border border-white/5 text-[10px] font-mono text-slate-400 leading-relaxed uppercase text-center space-y-1">
              <p>🍽️ Food is served Tapas Style</p>
              <p>In no particular order</p>
            </div>

          </div>

          {/* R. Menu Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Horizontal Filter button ribbon */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end border-b border-white/5 pb-6">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-4 py-2.5 text-[11px] font-mono tracking-wider uppercase transition-all rounded-sm cursor-pointer ${
                      isActive
                        ? 'bg-[#fef3c7] text-[#020617] font-bold shadow-lg shadow-amber-candle/15'
                        : 'bg-navy-dark border border-white/10 text-slate-300 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Filtered food item lists rendering segments */}
            <div className="space-y-12">
              <motion.div layout className="space-y-12">
                
                {/* 1) Something Smaller Segment */}
                {(activeCategory === 'all' || activeCategory === 'starter') && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 mb-8">
                      <span className="text-xl sm:text-2xl font-serif italic text-[#fef3c7] font-normal tracking-wide">
                        something smaller
                      </span>
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-gold-matte/40 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredItems
                        .filter((item) => item.category === 'starter')
                        .map((item) => (
                          <MenuItemCard key={item.id} item={item} />
                        ))}
                    </div>
                  </div>
                )}

                {/* 2) Something Bigger Segment */}
                {(activeCategory === 'all' || activeCategory === 'main') && (
                  <div className="space-y-6 pt-10">
                    <div className="flex items-center space-x-4 mb-8">
                      <span className="text-xl sm:text-2xl font-serif italic text-[#fef3c7] font-normal tracking-wide">
                        something bigger
                      </span>
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-gold-matte/40 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredItems
                        .filter((item) => item.category === 'main')
                        .map((item) => (
                          <MenuItemCard key={item.id} item={item} />
                        ))}
                    </div>
                  </div>
                )}

                {/* 3) Something Sweet Segment */}
                {(activeCategory === 'all' || activeCategory === 'dessert') && (
                  <div className="space-y-6 pt-10">
                    <div className="flex items-center space-x-4 mb-8">
                      <span className="text-xl sm:text-2xl font-serif italic text-[#fef3c7] font-normal tracking-wide">
                        something sweet
                      </span>
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-gold-matte/40 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {filteredItems
                        .filter((item) => item.category === 'dessert')
                        .map((item) => (
                          <MenuItemCard key={item.id} item={item} />
                        ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </div>

            {/* Bottom licensing or information legend */}
            <div className="mt-14 p-6 bg-navy-dark/70 border border-white/5 rounded-sm flex items-start space-x-4">
              <HelpCircle className="w-5 h-5 text-gold-matte flex-shrink-0 mt-0.5" />
              <div className="text-[11px] font-mono text-slate-400 space-y-2 leading-relaxed uppercase tracking-wider">
                <p className="font-bold text-slate-250">IMPORTANT ALLERGY INFORMATION:</p>
                <p>
                  While our culinary system ensures direct sanitation protocols, meals are prepared in a unified wood-fired kitchen environment handling nuts, shellfish, and wheats. Always state preferences to hosts on arrival.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

/* INDIVIDUAL ITEM CARD COMPONENT WITH GRAPHICAL CONNECTOR AND ACCENTS */
function MenuItemCard({ item }: { item: MenuItem; key?: string | number }) {
  const isDietaryTag = (t: string) => 
    ["GF", "GFO", "V", "VO", "VE", "VEO", "ND", "NDO", "A"].includes(t);

  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      {/* Soft overlay gradient on card hover */}
      <div className="absolute -inset-2 bg-gradient-to-r from-amber-glow/5 to-transparent rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative">
        <div className="flex justify-between items-baseline mb-1.5">
          <h3 className="font-serif italic text-base sm:text-lg font-medium text-slate-100 tracking-wide group-hover:text-gold-matte transition-colors flex flex-wrap items-center gap-2">
            <span>{item.name}</span>
            {item.tags?.includes("As Seen in Video") && (
              <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 bg-black border border-white/20 rounded-none text-[8px] font-mono text-slate-355 tracking-wider leading-none">
                <span className="text-[7px]">▶</span>
                <span className="font-bold">VIDEO HIGHLIGHT</span>
              </span>
            )}
          </h3>
          <div className="flex-grow border-b border-dotted border-white/10 mx-3 h-[1px]" />
          <span className="font-mono text-sm font-semibold text-gold-matte">
            ${item.price}
          </span>
        </div>

        <p className="font-sans text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Nutritional tags rendering */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags?.map((tag, idx) => {
            const isDiet = isDietaryTag(tag);
            return (
              <span
                key={idx}
                className="text-[8px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded-none border border-white/10 bg-[#03070E] text-slate-400 font-semibold"
              >
                {tag === "As Seen in Video" ? "AS SEEN IN VIDEO" : tag}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
