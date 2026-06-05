import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Calendar, Users, Clock, HelpCircle, ArrowRight } from 'lucide-react';

export default function BookingsView() {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    guests: '2',
    time: '18:30',
    seatingArea: 'Main Candlelit Chamber',
    name: '',
    email: '',
    phone: '',
    specialRequest: ''
  });

  const [bookingStep, setBookingStep] = useState<'form' | 'loading' | 'confirmed'>('form');

  const chambers = [
    {
      name: "Main Candlelit Chamber",
      desc: "Central high-contrast dining under organic beeswax chandeliers.",
      premium: false
    },
    {
      name: "Cozy Fireside Booths",
      desc: "Plush leather seating, heavy knit blanket accents, immediate embers view.",
      premium: true
    },
    {
      name: "The Timber Whiskey Bar Rail",
      desc: "Up close with the mixologists. Watch premium elixirs crafted.",
      premium: false
    }
  ];

  const presets = {
    sunset: ["17:00", "17:30", "18:00", "18:30"],
    embers: ["20:00", "20:30", "21:00", "21:30"],
    sundayLunch: ["12:00", "12:30", "13:00", "13:30"]
  };

  const isSunday = new Date(formData.date).getDay() === 0;
  const timeOptions = isSunday ? presets.sundayLunch : [...presets.sunset, ...presets.embers];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('loading');
    setTimeout(() => {
      setBookingStep('confirmed');
    }, 2000);
  };

  return (
    <div className="py-28 bg-navy-deep min-h-screen relative" id="bookings-view">
      {/* Glow ambient background filter */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header segment */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Secure Sanctuary Seating
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-widest text-slate-100 uppercase mb-4">
            TABLE RESERVATIONS
          </h1>
          <p className="font-serif-sub text-lg text-slate-350 italic">
            "Every sitting is a dedicated 2-hour experience. Powered securely by NowBookIt system integration."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Form and Warning Overlay Container */}
        <AnimatePresence mode="wait">
          {bookingStep === 'form' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-navy-dark rounded-lg border border-navy-light/60 overflow-hidden shadow-2xl relative"
            >
              
              {/* Header inside form */}
              <div className="bg-gradient-to-r from-navy-light/40 to-navy-medium p-6 border-b border-navy-light/40 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-amber-candle animate-pulse" />
                  <span className="font-mono text-xs text-slate-200 uppercase tracking-widest">
                    Winters Hollow Live Seats Planner
                  </span>
                </div>
                <span className="font-mono text-[10px] text-amber-glow bg-amber-candle/10 px-2 py-0.5 rounded border border-amber-candle/30 uppercase tracking-widest font-semibold">
                  NOT OPEN YET
                </span>
              </div>

              {/* BOOKINGS DISABLED OVERLAY ELEMENT */}
              <div className="absolute inset-x-0 bottom-0 top-[69px] bg-navy-dark/95 backdrop-blur-md z-30 flex flex-col justify-center items-center p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-amber-candle/10 border-2 border-dashed border-amber-glow rounded-full flex items-center justify-center animate-pulse">
                  <Flame className="w-8 h-8 text-amber-candle" />
                </div>
                
                <h3 className="font-display text-2xl font-black tracking-widest text-[#f8fafc] uppercase">
                  DO NOT MAKE BOOKINGS
                </h3>
                <p className="font-mono text-xs sm:text-sm text-amber-candle font-black uppercase tracking-widest max-w-md">
                  ★ RESERVATION SYSTEM NOT OPEN YET ★
                </p>
                
                <div className="w-16 h-[1.5px] bg-gold-matte" />
                
                <p className="font-serif-sub text-base text-slate-350 italic max-w-lg leading-relaxed">
                  "Winter's Hollow is currently under active development. The reservation portal is locked and not open yet as we prepare our sanctuary's space in Denmark, WA."
                </p>

                <div className="pt-4 max-w-md">
                  <span className="inline-block border border-dashed border-amber-glow/60 bg-amber-glow/5 px-4 py-2.5 font-mono text-[11px] text-amber-candle rounded uppercase tracking-wider font-semibold">
                    🔒 SYSTEM PREPARATION IN PROGRESS • SITTING OFF-LINE
                  </span>
                </div>
              </div>

              {/* Underlying Form structure (Rendered underneath with low opacity) */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6 opacity-35 pointer-events-none select-none">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Select Date */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-gold-matte uppercase tracking-wider flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>SELECT DATE:</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-navy-deep border border-navy-light/80 rounded px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-gold-matte transition-colors font-mono"
                    />
                  </div>

                  {/* Select Guests */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-gold-matte uppercase tracking-wider flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>GUEST COUNT:</span>
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-navy-deep border border-navy-light/80 rounded px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-gold-matte transition-colors font-mono"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                        <option key={g} value={g}>{g} {g === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">Private Group (9+ Seekers)</option>
                    </select>
                  </div>

                  {/* Desired Time */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-gold-matte uppercase tracking-wider flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>DESIRED TIME:</span>
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-navy-deep border border-navy-light/80 rounded px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-gold-matte transition-colors font-mono"
                    >
                      {timeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Chamber Preference */}
                <div className="space-y-3">
                  <span className="font-mono text-xs text-gold-matte uppercase tracking-widest block font-bold">
                    CHAMBER PREFERENCE:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {chambers.map((ch) => {
                      const isSelected = formData.seatingArea === ch.name;
                      return (
                        <button
                          key={ch.name}
                          type="button"
                          onClick={() => setFormData({ ...formData, seatingArea: ch.name })}
                          className={`p-4 rounded border text-left flex flex-col justify-between transition-all duration-300 relative ${
                            isSelected
                              ? 'bg-navy-light/40 border-gold-matte shadow-md'
                              : 'bg-navy-deep border-navy-light/50 hover:bg-navy-light/10'
                          }`}
                        >
                          <div>
                            <span className={`font-display text-sm font-semibold tracking-wider block ${isSelected ? 'text-gold-light' : 'text-slate-200'}`}>
                              {ch.name}
                            </span>
                            <span className="font-sans text-[11px] text-slate-400 mt-1 leading-relaxed block">
                              {ch.desc}
                            </span>
                          </div>
                          {ch.premium && (
                            <span className="font-mono text-[8px] bg-amber-candle/15 text-amber-glow border border-amber-candle/30 px-1.5 py-0.5 rounded uppercase mt-3 self-start tracking-wider font-semibold">
                              Immediate Embers view
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </form>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom instructions panel */}
        <div className="mt-12 text-center max-w-lg mx-auto">
          <p className="text-xxs font-mono text-slate-500 uppercase tracking-widest">
            Fidelity Service • NowBookIt Secure System Integration
          </p>
        </div>

      </div>
    </div>
  );
}
