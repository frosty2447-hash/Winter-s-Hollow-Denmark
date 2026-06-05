/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'venue' | 'food' | 'cocktails'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'venue', label: 'The Atmosphere' },
    { id: 'food', label: 'Seared Cuisine' },
    { id: 'cocktails', label: 'Mixology' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (id: string) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <div id="gallery-view-section" className="min-h-screen bg-neutral-950 pt-28 pb-24 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block mb-1">
            Visual Storytelling
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-wide uppercase italic">
            The <span className="text-amber-500 not-italic">Gallery</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            A window into the candle-lit energy, meticulous plating, and artisan infusions of Winter's Hollow Denmark. Hover to reveal captions or tap to open immersive lightbox details.
          </p>
        </div>

        {/* Categories toggler */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`text-xxs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-xs border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 border-amber-500 text-neutral-950 font-bold'
                  : 'border-blue-950/40 hover:border-neutral-700 bg-neutral-950/25 text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="relative group rounded-sm overflow-hidden aspect-[4/3] border border-blue-950/30 cursor-pointer bg-neutral-900 overflow-hidden"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay display details upon hover */}
              <div className="absolute inset-0 bg-neutral-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <span className="text-xxs uppercase font-mono tracking-widest text-[#F9C04D]">
                  {item.category === 'venue' ? 'The Venue Atmosphere' : item.category === 'food' ? 'Culinary Plate' : 'Mixology'}
                </span>
                <p className="text-xs text-white uppercase tracking-wider">{item.title}</p>
                <div className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400 bg-amber-500/5">
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future uploads placeholder card */}
        <div className="mt-16 bg-neutral-900/35 border border-dashed border-blue-950/50 rounded-sm p-8 text-center max-w-md mx-auto">
          <Sparkles className="h-6 w-6 text-amber-500/50 mx-auto mb-3" />
          <h4 className="text-xs uppercase font-sans tracking-wider text-white">Dynamic Asset Addition</h4>
          <p className="text-xxs text-neutral-500 leading-relaxed mt-2">
            In partnership with the administrative custodian panel, any newly introduced cuisine or cocktails photography will populate this visual container in real time.
          </p>
        </div>

        {/* Interactive Lightbox Overlay Modal */}
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox-overlay"
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-sm flex flex-col justify-between p-4"
          >
            {/* Header bar of Lightbox with Close action */}
            <div className="flex justify-between items-center text-xs py-2 px-4 relative z-10">
              <span className="font-mono text-neutral-500 text-xxs tracking-widest uppercase">
                Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 border border-blue-950 text-neutral-300 hover:text-white hover:border-amber-500 rounded-full bg-neutral-900 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Middle Main image viewer */}
            <div className="flex-1 flex items-center justify-center relative max-h-[85vh]">
              
              {/* Prev button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 p-3 border border-blue-950 bg-neutral-900/60 rounded-full hover:border-[#F9C04D] hover:text-[#F9C04D] transition-colors"
                aria-label="Previous Image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="max-w-[90vw] max-h-[75vh]" onClick={(e) => e.stopPropagation()}>
                <img
                  src={GALLERY_ITEMS[lightboxIndex].url}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded border border-blue-950/30"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 p-3 border border-blue-950 bg-neutral-900/60 rounded-full hover:border-[#F9C04D] hover:text-[#F9C04D] transition-colors"
                aria-label="Next Image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

            </div>

            {/* Bottom Caption bar representation */}
            <div className="text-center py-4 relative z-10" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-sm uppercase tracking-widest text-[#F9C04D] max-w-xl mx-auto font-sans">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
              <p className="text-xxs text-neutral-500 uppercase tracking-widest font-mono mt-1">
                Category: {GALLERY_ITEMS[lightboxIndex].category} Experience
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
