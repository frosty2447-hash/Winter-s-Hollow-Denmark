/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Compass, ArrowRight, ShieldCheck, GlassWater, Trophy, Heart, Award, ArrowRightCircle, Instagram, Facebook } from 'lucide-react';
import { 
  VENUE_INTERIOR, 
  SIGNATURE_COCKTAIL, 
  GOURMET_DISH, 
  DRINKS_MENU, 
  FOOD_MENU, 
  REVIEWS_DATA 
} from '../data';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const signatureCocktails = DRINKS_MENU.filter(d => d.signature).slice(0, 3);
  const featuredFoods = FOOD_MENU.filter(f => f.featured).slice(0, 3);

  // Simulated live Instagram posts with actual Denmark WA tags and styled visual blocks
  const instagramMockPosts = [
    {
      id: 'i1',
      likes: '482',
      comments: '34',
      tag: '#WinterIsComing',
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=405',
    },
    {
      id: 'i2',
      likes: '351',
      comments: '21',
      tag: '#OystersAndWine',
      img: 'https://images.unsplash.com/photo-1534080391025-497c0302c3e6?auto=format&fit=crop&q=80&w=405',
    },
    {
      id: 'i3',
      likes: '512',
      comments: '41',
      tag: '#WintersHollowDen',
      img: VENUE_INTERIOR,
    },
    {
      id: 'i4',
      likes: '394',
      comments: '18',
      tag: '#WAFoodies',
      img: GOURMET_DISH,
    },
  ];

  return (
    <div id="homepage-root-section" className="relative text-neutral-200">
      
      {/* Dynamic Cinematic Hero Section */}
      <section id="homepage-hero-banner" className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image/Video Fallback Stack */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/80 z-10" />
          
          {/* Autoplay Ambient Low-light Video with Background Image Fallback */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.05] filter brightness-[0.55] saturate-[0.8]"
            poster={VENUE_INTERIOR}
          >
            {/* Dark moody aesthetic food & drink liquid motion, or soft firelight loops */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-close-up-11883-large.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-whisky-poured-into-a-glass-with-ice-42442-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content Overlays */}
        <div className="relative z-20 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-12 animate-fade-in">
          <span className="text-amber-500 font-serif text-sm uppercase tracking-[0.4em] mb-4 inline-block font-light">
            Denmark, Western Australia
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white tracking-[0.1em] font-extralight uppercase leading-tight mb-2">
            WINTER'S HOLLOW
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-400 font-serif italic tracking-[0.2em] font-light max-w-2xl mx-auto mb-12">
            Intimate Sanctuary • Wood-fired Plates • Smoky Infusions
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 max-w-md mx-auto">
            <button
              id="hero-book-now-cta"
              onClick={() => onNavigate('bookings')}
              className="w-full sm:w-auto bg-amber-500 text-[#050B18] px-10 py-4 text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-3 transition-colors duration-300 hover:bg-amber-600 shadow-xl cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Make a Reservation</span>
            </button>
            <button
              id="hero-view-menus-cta"
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto bg-transparent border border-white/20 px-10 py-4 text-xs uppercase font-bold tracking-widest text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <Compass className="h-4 w-4 text-amber-500" />
              <span>View Food Menu</span>
            </button>
          </div>
        </div>

        {/* Scroll down mouse indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center space-y-1.5 opacity-60">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">Discover</span>
          <div className="w-5 h-8 border border-neutral-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Atmospheric Introduction (Bento Grid Style) */}
      <section id="homepage-atmosphere-intro" className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text description container */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold text-amber-500 tracking-[0.2em] uppercase font-mono block">
                The Physical Venue
              </span>
              <h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight font-light leading-tight italic">
                An Intimate <span className="text-amber-500 not-italic">Sanctuary</span>
              </h2>
              <div className="border-l-2 border-amber-500 pl-6 space-y-4">
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Step inside Winter's Hollow and leave the world behind. Designed as an atmosphere-driven dining hideaway, the space wraps you in rich navy-blue wall plaster, matte-black wood furniture sets, and soft golden fixtures that glow like embers against the Western Australian night.
                </p>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  Whether celebrating milestones or sharing a warm, spontaneous evening by the coast, every element of our table pairing, acoustics, and seasonal culinary vision has been curated with absolute precision.
                </p>
              </div>

              {/* Distinguishing badges */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-950/40">
                <div className="flex items-start space-x-2.5">
                  <div className="p-2 bg-blue-950/20 text-amber-400 border border-blue-950/30 rounded-full shrink-0">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs text-white font-semibold">Premium Craft</h4>
                    <p className="text-[10px] text-neutral-500">Fine local ingredients</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="p-2 bg-blue-950/20 text-amber-400 border border-blue-950/30 rounded-full shrink-0">
                    <GlassWater className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs text-white font-semibold">Artisan Sips</h4>
                    <p className="text-[10px] text-neutral-500">Bespoke smoky infusions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual bento gallery */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4">
              <div className="col-span-12 pointer-events-none rounded-sm overflow-hidden border border-blue-950/40 shadow-2xl relative group max-h-[350px]">
                <img
                  src={VENUE_INTERIOR}
                  alt="Winters Hollow Denmark Intimate Dining Interior"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/20" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[9px] uppercase tracking-widest font-mono text-amber-400 bg-neutral-950/80 px-2.5 py-1 rounded-sm border border-blue-900/40">
                    Main Dining Lounge
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Mixology Showpiece */}
      <section id="homepage-cocktails-spotlight" className="py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative border-t border-blue-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase text-amber-500 font-mono tracking-widest">Liquid Poetry</span>
            <h2 className="text-3xl md:text-4xl text-white tracking-tight mt-2">
              The Alchemy of our Signature Pour
            </h2>
            <p className="text-xs text-neutral-400 mt-3">
              We take mixology seriously. Inspired by the dense Karri trees and mist of the Great Southern, our cocktail list relies on native forest extracts, house-burned smoke infusions, and local boutique whiskeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureCocktails.map((cocktail) => (
              <div
                key={cocktail.id}
                className="bg-neutral-950/60 rounded-sm overflow-hidden border border-blue-950/25 flex flex-col hover:border-amber-500/20 transition-all duration-300 hover:translate-y-[-4px] group"
              >
                {cocktail.photo ? (
                  <div className="h-56 overflow-hidden pointer-events-none relative">
                    <img
                      src={cocktail.photo}
                      alt={cocktail.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-blue-950/15 to-neutral-900 flex items-center justify-center p-6 border-b border-blue-950/20">
                    <GlassWater className="h-10 w-10 text-amber-500/40" />
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2 border-b border-white/5 pb-2">
                      <h3 className="text-xl font-serif italic text-white group-hover:text-amber-500 transition-colors">
                        {cocktail.name}
                      </h3>
                      <span className="text-sm font-mono text-amber-500">${cocktail.price}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-light mb-4 leading-relaxed">{cocktail.description}</p>
                    {cocktail.notes && (
                      <p className="text-[11px] italic text-blue-300 bg-blue-950/20 px-3 py-2 rounded-sm border border-blue-900/20 font-mono">
                        {cocktail.notes}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-amber-400 hover:text-white transition-colors group"
            >
              <span>Explore Complete Cocktail Menu</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Plates */}
      <section id="homepage-cuisine-spotlight" className="py-24 bg-neutral-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Seared Trout or Gourmet Plating main card */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-sm overflow-hidden border border-blue-950/40 shadow-2xl">
                <img
                  src={GOURMET_DISH}
                  alt="Gourmet Dining Plating at Winters Hollow Denmark"
                  className="w-full object-cover max-h-[460px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-2 mb-1">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                      Head Chef Recommendation
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl text-white font-serif italic border-b border-white/10 pb-2 mb-2">
                    Seared Southern Ocean Trout
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 max-w-lg mb-3 leading-relaxed font-light">
                    Delivered fresh from local Southern waters, seared perfectly on saltbush bed and completed with a wild Great Southern local finger lemon emulsion.
                  </p>
                  <span className="text-xs font-mono text-white bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-sm">
                    $46 • Allergen Safe: Gluten Free
                  </span>
                </div>
              </div>
            </div>

            {/* Cuisine details and highlights listing */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block">Culinary Roots</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight italic">
                Denmark's Bounty on <span className="text-amber-500 not-italic">Your Plate</span>
              </h2>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Our kitchen marries the rich cool-climate harvests of Denmark, Western Australia with modern, wood-fire touched culinary techniques. We source lamb from Albany valleys, pristine oysters, and hand-foraged native forest saltbush.
              </p>

              <div className="space-y-4 pt-2">
                {featuredFoods.slice(0, 2).map((food) => (
                  <div 
                    key={food.id}
                    className="p-4 rounded-sm bg-neutral-900/40 border border-translucent hover:border-amber-500/10 transition-colors"
                  >
                    <div className="flex justify-between items-baseline mb-1 border-b border-white/5 pb-1">
                      <h4 className="text-sm font-serif italic text-white">{food.name}</h4>
                      <span className="text-sm font-mono text-amber-500">${food.price}</span>
                    </div>
                    <p className="text-xxs text-slate-400 font-light mt-1.5 leading-relaxed">{food.description}</p>
                    <div className="flex gap-1.5 mt-2">
                      {food.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono border border-blue-950 bg-blue-950/10 px-1.5 text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#F9C04D] hover:text-white transition-colors"
                >
                  <Compass className="h-4 w-4" />
                  <span>Browse Our Complete Dining Menu</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Review Highlight Frame */}
      <section id="homepage-reviews-highlight" className="py-20 bg-neutral-950 border-t border-b border-blue-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase text-lime-500 font-mono tracking-wider font-semibold mb-2 inline-block">
            Verified Dining Feedback
          </span>
          
          <div className="relative py-4">
            <p className="text-sm md:text-base text-white leading-relaxed font-sans tracking-wide italic px-8">
              "{REVIEWS_DATA[activeTestimonial].text}"
            </p>
            <div className="mt-6 flex flex-col items-center justify-center space-y-1">
              <span className="text-xs text-amber-400 font-sans tracking-widest uppercase font-semibold">
                — {REVIEWS_DATA[activeTestimonial].author}
              </span>
              <span className="text-[10px] text-neutral-500 font-mono">
                {REVIEWS_DATA[activeTestimonial].category} Experience • Source: {REVIEWS_DATA[activeTestimonial].source}
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  idx === activeTestimonial ? 'bg-amber-400 w-6' : 'bg-neutral-700 hover:bg-neutral-500'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Private Events Showcase & Functions Block */}
      <section id="homepage-events-teaser" className="py-24 bg-neutral-900 border-b border-blue-950/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm bg-neutral-950 p-8 sm:p-12 lg:p-16 border border-blue-950/50 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F9C04D]">
                Exclusivity & Celebrations
              </span>
              <h3 className="text-2xl sm:text-3xl text-white font-sans uppercase tracking-wider">
                Reserving Winter's Hollow for Yourself
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Planning a special milestone, corporate retreat, or micro-wedding in Western Australia? Offer your guests a candle-lit culinary takeover. Winter's Hollow Denmark is available for single night full-venue takeover hire with completely customized gastronomy menus, sound styling, and signature cocktail pairings.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-[10px] tracking-wide font-mono uppercase text-neutral-400">
                <span className="bg-blue-950/20 px-3 py-1 border border-blue-900/20 text-blue-300">
                  Capacity: Up to 55 Seated
                </span>
                <span className="bg-blue-950/20 px-3 py-1 border border-blue-900/20 text-blue-300">
                  Exclusive Bar Packages
                </span>
              </div>
            </div>

            <div className="shrink-0 relative z-10 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('events')}
                className="w-full lg:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-sm shadow-xl transition-all"
              >
                <span>Functions Packages & Calculator</span>
                <ArrowRightCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Interactive Simulated Social & Instagram Feed */}
      <section id="homepage-social-media" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase text-[#F9C04D] font-mono tracking-widest">Connect with Us</span>
            <h2 className="text-2xl font-sans text-white tracking-tight mt-1">@wintershollowdenmark</h2>
            <p className="text-xs text-neutral-500 mt-2">
              Follow our journey, view seasonal kitchen behind-the-scenes, and learn about Western Australian organic vineyards.
            </p>
            <div className="mt-4 flex justify-center space-x-3">
              <a
                href="https://instagram.com/wintershollowdenmark"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] uppercase tracking-widest px-4 py-2 border border-blue-950/30 rounded-sm transition-colors"
              >
                <Instagram className="h-3.5 w-3.5 text-amber-500" />
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] uppercase tracking-widest px-4 py-2 border border-blue-950/30 rounded-sm transition-colors"
              >
                <Facebook className="h-3.5 w-3.5 text-blue-400" />
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramMockPosts.map((post) => (
              <div
                key={post.id}
                className="relative rounded-sm overflow-hidden aspect-square border border-blue-950/30 group shadow-lg pointer-events-auto cursor-pointer"
              >
                <img
                  src={post.img}
                  alt="Simulated Instagram feed view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-2 text-center p-4">
                  <span className="text-xs font-mono text-amber-400">{post.tag}</span>
                  <div className="flex space-x-4 text-xs font-mono text-white pt-1">
                    <span className="flex items-center space-x-1">
                      <Heart className="h-3.5 w-3.5 text-red-500 fill-current" />
                      <span>{post.likes}</span>
                    </span>
                    <span>
                      💬 {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book A Table Quick CTA Banner */}
      <section id="homepage-bottom-cta" className="py-20 bg-gradient-to-r from-blue-950/40 via-neutral-950 to-neutral-950 border-t border-blue-950/30 relative text-center">
        <div className="max-w-2xl mx-auto px-4 z-10 relative">
          <h2 className="text-2xl sm:text-3xl text-white font-sans uppercase tracking-widest mb-3">
            Ready to Discover Winter's Hollow?
          </h2>
          <p className="text-xs text-neutral-400 mb-8 max-w-md mx-auto">
            Bookings are strongly recommended, especially during weekend dinner services. Enjoy regional Western Australian gastronomy at its peak.
          </p>
          <button
            onClick={() => onNavigate('bookings')}
            className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-sm shadow-xl transition-all hover:scale-[1.03]"
          >
            <Calendar className="h-4 w-4" />
            <span>Secure Your Secure Booking</span>
          </button>
        </div>
      </section>

    </div>
  );
}
