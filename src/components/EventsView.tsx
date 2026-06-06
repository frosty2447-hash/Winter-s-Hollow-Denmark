import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Check, Users, FileText, Gift, Mail, Sparkles } from 'lucide-react';

export default function EventsView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Private Date & Celebration",
    duration: "4 Hours",
    guests: "20",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const packages = [
    {
      title: "Intimate Lounge Takeovers",
      capacity: "10 — 20 guests",
      desc: "Complete privacy in our high-end cozy corners. Enjoy dedicated curated cocktail craft and customized sharing dining courses perfectly timed.",
      highlight: "Perfect for milestones & luxury date circles"
    },
    {
      title: "The Solstice Hall Banquet",
      capacity: "25 — 45 guests",
      desc: "The entire mystical chamber is yours. Custom wax candlelight level settings, multi-course chef tastings, specific auditory playlists, and full sensory hospitality.",
      highlight: "Elite celebrations, boutique weddings & corporate feasts"
    },
    {
      title: "Exclusive Libation Crafting",
      capacity: "8 — 15 guests",
      desc: "A hands-on, high-end masterclass with our senior lead mixologists. Discover the secrets of smoking single malts, preparing salines, and clear-ice sculpturing.",
      highlight: "Private cocktail lovers, birthdays & connoisseurs"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-28 bg-navy-deep min-h-screen relative overflow-hidden" id="functions-view">
      {/* Background Soft Blurs */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-navy-light/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Sovereign Private Hire
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-widest text-slate-100 uppercase mb-4">
            FUNCTIONS & PRIVATE GATHERINGS
          </h1>
          <p className="font-serif-sub text-lg text-slate-350 italic">
            "Host your next celebration inside a premium hidden sanctuary. Custom-tailored food menus, sensory cocktail rituals, and dedicated service guides."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Private Dining package Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-navy-dark border border-navy-light/40 p-8 rounded shadow-lg flex flex-col justify-between hover:border-gold-matte/30 transition-all group"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-gold-matte uppercase tracking-[0.2em] block">
                  Capacity: {pkg.capacity}
                </span>
                <h3 className="font-display text-xl font-bold text-slate-100 group-hover:text-gold-light transition-colors tracking-wider uppercase">
                  {pkg.title}
                </h3>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {pkg.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-navy-light/20">
                <span className="font-serif-sub text-xs text-amber-candle/90 italic block">
                  {pkg.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Layout Row split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* L. Features Block Column */}
          <div className="lg:col-span-5 bg-navy-dark border border-navy-light/50 rounded-lg p-8 sm:p-10 flex flex-col justify-between space-y-8 relative">
            <div className="space-y-6">
              <span className="font-mono text-xs text-gold-matte uppercase tracking-widest block">
                Exclusive Amenities
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-100 tracking-wider uppercase">
                Bespoke Experiences
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                We believe that every function is a custom narrative. Rather than uniform buffet packages, we design specific tactile elements for your guests.
              </p>

              <ul className="space-y-4 font-mono text-[11px] uppercase tracking-wider text-slate-405">
                <li className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gold-matte flex-shrink-0" />
                  <span>Custom menu printouts on organic textured papers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gold-matte flex-shrink-0" />
                  <span>Personal host guide & senior mixologist assigned</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-gold-matte flex-shrink-0" />
                  <span>Sensory smoke pairing under crystal bell jars</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-navy-light/25 rounded border border-navy-light/50 text-[11px] font-mono text-slate-300 leading-relaxed">
              • Minimum spend limits apply to absolute whole venue takeovers on weekends. Please submit plans 30 days prior.
            </div>
          </div>

          {/* R. Form dossiers with transition block */}
          <div className="lg:col-span-7 bg-navy-dark border border-navy-light/55 rounded-lg overflow-hidden relative shadow-2xl flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-10 text-center space-y-6"
                >
                  <div className="w-12 h-12 bg-gold-matte/10 border border-gold-matte/30 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-gold-matte" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gold-matte tracking-[0.2em] uppercase block mb-1">
                      Transmission Dispatched
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-100 uppercase tracking-widest">
                      INQUIRY SUBMITTED
                    </h3>
                  </div>
                  <p className="font-serif-sub text-base text-slate-350 italic max-w-md mx-auto leading-relaxed">
                    "We have received your function details. Our host will reach out to you via email within 24 hours to begin mapping out your bespoke culinary event."
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-navy-light/85 text-slate-405 hover:text-gold-light hover:border-gold-matte font-mono text-xs tracking-widest uppercase rounded transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 sm:p-10 space-y-6"
                >
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-amber-candle" />
                    <h3 className="font-display text-lg font-bold text-slate-100 uppercase tracking-widest">
                      INQUIRY DOSSIER
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-navy-deep border border-navy-light/85 rounded px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-matte font-mono"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-navy-deep border border-navy-light/85 rounded px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-matte font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-navy-deep border border-navy-light/85 rounded px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-matte"
                      />
                      
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        className="w-full bg-navy-deep border border-navy-light/85 rounded px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-matte"
                      >
                        <option>Private Date & Celebration</option>
                        <option>Banquet & Whole takeover</option>
                        <option>Masterclass Mixology</option>
                        <option>Corporate Retreat</option>
                      </select>

                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        className="w-full bg-navy-deep border border-navy-light/85 rounded px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-matte"
                      >
                        <option value="10">8 — 12 guests</option>
                        <option value="20">15 — 25 guests</option>
                        <option value="40">30 — 50 guests</option>
                        <option value="50+">50+ (Sole Takeover)</option>
                      </select>
                    </div>

                    <textarea
                      placeholder="Discuss your aesthetic requirements, milestones, preferred dates, food allergy considerations..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-navy-deep border border-navy-light/85 rounded px-4 py-3 text-xs text-slate-100 focus:outline-none focus:border-gold-matte resize-none font-mono"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-amber-glow/90 to-gold-matte text-navy-deep font-mono font-bold text-xs uppercase tracking-widest rounded hover:brightness-105 transition-all cursor-pointer"
                    >
                      Submit Bespoke Inquiry
                    </button>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
}
