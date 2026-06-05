import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, ChevronDown, Car, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactView() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you cater for dietary requirements?",
      a: "Yes, our wood-fired hearth kitchen provides comprehensive Gluten-Free, Vegetarian, and Vegan options (sign-posted as GF, V, VE on our physical cards). Please notify your dedicated host of any severe clinical allergies upon arrival."
    },
    {
      q: "Can I host private events or takeover functions?",
      a: "Absolutely. We offer complete takeover and custom dining flight options for birthdays, corporate retreats, and intimate winter gatherings. Speak with our team directly via functions@wintershollow.com.au to receive our pricing brochure."
    },
    {
      q: "Are children permitted in the dining room?",
      a: "To preserve our slow-paced, deeply silent, and highly romantic escape ambiance, our dining room is curated primarily for adult guests. However, guests of all ages are welcome for our early afternoon seating times."
    },
    {
      q: "How do I edit or cancel my scheduled reservation?",
      a: "All dining holdings are facilitated securely through our premium NowBookIt system. You can modify or withdraw your table booking directly via your email confirmation link, or by transmitting a request to reservations@wintershollow.com.au."
    }
  ];

  return (
    <div className="py-28 bg-[#02050a] min-h-screen relative overflow-hidden text-slate-250" id="contact-view">
      {/* Visual background atmospheric lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-candle/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-navy-light/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Caption Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeIn">
          <span className="font-mono text-xs tracking-[0.25em] text-[#C5A059] uppercase block mb-3 font-semibold">
            FIND THE SANCTUARY
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-widest text-slate-100 uppercase mb-4">
            CONTACT & DIRECTIONS
          </h1>
          <p className="font-serif-sub text-lg text-slate-400 italic">
            "Settle your route to the Great Southern coast. Slipped away from the winds inside Denmark, WA."
          </p>
          <div className="w-16 h-[1.5px] bg-[#C5A059] mx-auto mt-6" />
        </div>

        {/* Coordinates + Map Parallel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto mb-24">
          
          {/* L. Coordinates Card */}
          <div className="lg:col-span-5 bg-[#03070E] border border-gold-matte/20 p-8 rounded-sm select-none flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] border-b border-white/5 pb-3 font-bold">
                DIRECT CONTACT COORDINATES
              </h3>

              <div className="space-y-6 text-xs font-mono">
                {/* Physical Location */}
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
                    <MapPin className="h-4 w-4 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[9px] tracking-widest uppercase font-bold">Physical Location</span>
                    <span className="text-slate-100 text-sm font-serif-sub block italic">35 Holling Road, Denmark,</span>
                    <span className="text-slate-100 text-sm font-serif-sub block italic">Western Australia, 6333</span>
                  </div>
                </div>

                {/* Phone Channels */}
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
                    <Phone className="h-4 w-4 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[9px] tracking-widest uppercase font-bold">Phone Channels</span>
                    <a href="tel:+610898481022" className="text-slate-100 hover:text-[#C5A059] transition-colors text-sm font-serif-sub block italic font-medium">
                      +61 (08) 9848 1022
                    </a>
                    <span className="text-[9px] text-slate-500 block">Wednesday — Sunday (from 3 PM)</span>
                  </div>
                </div>

                {/* Correspondence */}
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/5">
                    <Mail className="h-4 w-4 text-[#C5A059]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[9px] tracking-widest uppercase font-bold">Email Correspondence</span>
                    <a href="mailto:reservations@wintershollow.com.au" className="text-slate-100 hover:text-[#C5A059] transition-colors text-[11px] block break-all font-medium">
                      reservations@wintershollow.com.au
                    </a>
                    <a href="mailto:functions@wintershollow.com.au" className="text-slate-100 hover:text-[#C5A059] transition-colors text-[11px] block break-all font-medium">
                      functions@wintershollow.com.au
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Advice Box / Styled Muted Tinted container */}
            <div className="mt-8 p-4 bg-navy-light/10 border border-white/10 rounded-sm flex items-start space-x-3 text-[10px] font-mono leading-relaxed">
              <Car className="h-5 w-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="text-slate-400 uppercase tracking-widest font-medium">
                <span className="text-slate-200 font-bold block mb-1">PARKING ADVICE:</span>
                Private underground bays are available for guests behind the sanctuary grove. Free street parking along Holling Road.
              </div>
            </div>
          </div>

          {/* R. Map Blueprint Card */}
          <div className="lg:col-span-7 bg-[#03070E] border border-gold-matte/20 rounded-sm relative overflow-hidden flex flex-col justify-between p-8 min-h-[420px]">
            {/* Grid graphic backdrop blueprint layout */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="h-full w-full grid grid-cols-12 grid-rows-6">
                {[...Array(72)].map((_, i) => (
                  <div key={i} className="border-r border-b border-[#C5A059]/40" />
                ))}
              </div>
            </div>

            {/* Corner styling accents */}
            <div className="absolute top-2 left-2 font-mono text-[9px] text-[#C5A059]/40">NW/6333</div>
            <div className="absolute top-2 right-2 font-mono text-[9px] text-[#C5A059]/40">HOLLING RD</div>

            {/* Glowing Map Pin beacon in the center */}
            <div className="my-auto flex flex-col items-center justify-center text-center space-y-3 relative z-10">
              <div className="relative flex h-6 w-6 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fef3c7] opacity-60" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-candle border-2 border-[#C5A059]" />
              </div>

              <div className="bg-[#03070E] border border-[#C5A059]/40 p-3 sm:px-5 sm:py-3.5 rounded shadow-2xl space-y-1">
                <span className="font-display text-xs tracking-[0.25em] text-[#C5A059] uppercase block font-extrabold">
                  WINTER'S HOLLOW
                </span>
                <span className="font-mono text-[9px] text-slate-450 uppercase tracking-widest block">
                  35 Holling Road, Denmark WA
                </span>
              </div>
            </div>

            {/* Blueprint bottom parameters bar */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mt-auto border-t border-white/5 pt-4 z-10">
              <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <Compass className="h-4 w-4 text-[#C5A059]/50 animate-spin" style={{ animationDuration: '40s' }} />
                <span>Coordinate: 34.9594° S, 117.3514° E</span>
              </div>
              <div>
                <a
                  href="https://maps.google.com/?q=35+Holling+Road+Denmark+WA+6333"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-[9px] font-mono text-[#C5A059] hover:text-[#fff9e6] font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  <span>External Google Maps directions</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions Section */}
        <section className="max-w-4xl mx-auto pt-16 border-t border-white/10" id="faq-section">
          
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#C5A059] uppercase block mb-2 font-medium">
              Hollow Knowledge
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-widest text-[#f8fafc] uppercase mb-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#03070E] border border-white/5 hover:border-gold-matte/10 rounded-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center bg-transparent border-none cursor-pointer focus:outline-none"
                  >
                    <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-slate-100 font-semibold">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#C5A059] transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-40 border-t border-white/5' : 'max-h-0'
                    }`}
                  >
                    <p className="p-5 sm:p-6 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </section>

      </div>
    </div>
  );
}
