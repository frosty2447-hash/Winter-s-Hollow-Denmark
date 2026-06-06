import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'atmosphere' | 'cocktail' | 'dish' | 'detail'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'atmosphere', label: 'The Atmosphere' },
    { id: 'cocktail', label: 'Mixology & Sips' },
    { id: 'dish', label: 'Seared Cuisine' },
    { id: 'detail', label: 'Details & Accents' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <div className="py-28 bg-navy-deep min-h-screen relative" id="gallery-view">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-navy-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Caption story header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Pure Visual Seduction
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-widest text-[#f8fafc] uppercase mb-4">
            GALLERY
          </h1>
          <p className="font-serif-sub text-lg text-slate-350 italic">
            "A visual window into the dense woods, candlelight shadows, meticulous gastronomy plates, and liquid theatre of Denmark, WA."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Tab categories toggler ribbon */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`text-xs font-mono uppercase tracking-widest px-5 py-2.5 rounded-sm border cursor-pointer transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#fef3c7] border-[#fef3c7] text-[#020617] font-bold shadow-lg shadow-amber-candle/15'
                  : 'border-white/10 hover:border-white/30 bg-navy-dark text-slate-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative group rounded overflow-hidden aspect-[4/3] border border-navy-light/40 cursor-pointer bg-navy-dark shadow-xl"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-navy-deep/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-matte">
                  {item.category === 'atmosphere' ? 'Atmosphere' : item.category === 'cocktail' ? 'Libation' : 'Cuisine'}
                </span>
                <p className="font-serif-sub text-sm sm:text-base text-white italic px-2">
                  "{item.caption}"
                </p>
                <div className="w-8 h-8 rounded-full border border-gold-matte/30 flex items-center justify-center text-gold-matte bg-gold-matte/5">
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting badge container */}
        <div className="mt-16 bg-navy-dark/40 border border-dashed border-navy-light/55 rounded-sm p-8 text-center max-w-md mx-auto">
          <Sparkles className="h-6 w-6 text-gold-matte/50 mx-auto mb-3 animate-pulse" />
          <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200">AUTHENTIC CAPTURES Only</h4>
          <p className="font-sans text-[11px] text-slate-400 leading-relaxed mt-2 uppercase">
            All photography was styled and shot inside our building on Strickland Street under exact nightfall candle conditions.
          </p>
        </div>

        {/* IMAGES LIGHTBOX */}
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox-overlay"
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-md flex flex-col justify-between p-4 cursor-pointer"
          >
            {/* Header toolbar */}
            <div className="flex justify-between items-center py-2 px-4 relative z-10">
              <span className="font-mono text-slate-400 text-xs tracking-widest uppercase">
                IMAGE {lightboxIndex + 1} OF {GALLERY_ITEMS.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 border border-navy-light/80 text-neutral-300 hover:text-white hover:border-[#fef3c7] rounded-full bg-navy-dark transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Slider Viewer Container */}
            <div className="flex-grow flex items-center justify-center relative max-h-[80vh]">
              
              {/* Previous trigger */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 p-3 border border-navy-light/80 bg-navy-dark/60 rounded-full text-slate-350 hover:text-gold-light hover:border-gold-matte transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="max-w-[85vw] max-h-[70vh] relative z-20" onClick={(e) => e.stopPropagation()}>
                <img
                  src={GALLERY_ITEMS[lightboxIndex].url}
                  alt={GALLERY_ITEMS[lightboxIndex].caption}
                  className="max-w-full max-h-[70vh] object-contain rounded border border-navy-light/40 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next trigger */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 p-3 border border-navy-light/80 bg-navy-dark/60 rounded-full text-slate-350 hover:text-gold-light hover:border-gold-matte transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

            </div>

            {/* Caption bar */}
            <div className="text-center py-4 relative z-10" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-serif-sub text-base text-gold-light max-w-xl mx-auto italic px-4">
                "{GALLERY_ITEMS[lightboxIndex].caption}"
              </h3>
              <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                Category: {GALLERY_ITEMS[lightboxIndex].category} EXPERIENCE
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
