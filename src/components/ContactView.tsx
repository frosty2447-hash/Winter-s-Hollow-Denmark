/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ExternalLink, ShieldAlert } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) return;

    setSubmitting(true);
    
    // Realistic submission lag
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMsg('');
    }, 1200);
  };

  return (
    <div id="contact-us-view-root" className="min-h-screen bg-neutral-950 pt-28 pb-24 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block mb-1">
            Opening Hours & Communication
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-wide uppercase italic">
            Contact <span className="text-amber-500 not-italic">Us</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            Have questions about wine pairings, private hire options, or general reservation holdings? Write to our team or phone us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto mb-16">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in">
            
            {/* Quick Contact Points */}
            <div className="bg-neutral-900 border border-translucent p-6 rounded-sm space-y-6">
              <h3 className="text-xs uppercase font-mono tracking-widest text-amber-500 border-b border-white/5 pb-2 font-semibold">
                Direct Coordinates
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans uppercase text-xxs tracking-wider mb-0.5">Physical Location</strong>
                    <p className="text-neutral-400">Denmark, Western Australia (Great Southern Region)</p>
                    <p className="text-[10px] text-neutral-500 font-mono">Near ancient Karri paths, WA 6333</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans uppercase text-xxs tracking-wider mb-0.5">Phone Channels</strong>
                    <a href="tel:0482040956" className="text-neutral-300 hover:text-white transition-colors font-mono font-semibold">
                      0482 040 956
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-sans uppercase text-xxs tracking-wider mb-0.5">Email Correspondence</strong>
                    <a href="mailto:wintershollowdenmark@gmail.com" className="text-neutral-300 hover:text-white transition-colors font-mono break-all font-semibold">
                      wintershollowdenmark@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating hours reiteration */}
            <div className="bg-neutral-900 border border-blue-950/40 p-6 rounded-sm space-y-4">
              <h3 className="text-xs uppercase font-sans tracking-widest text-neutral-200 border-b border-blue-950/20 pb-2">
                Hearth Opening Hours
              </h3>
              
              <ul className="space-y-2.5 text-xs">
                <li className="flex justify-between items-baseline">
                  <span className="text-neutral-400">Thur — Sun</span>
                  <span className="text-white font-mono font-medium">5:00 PM — LATE</span>
                </li>
                <li className="flex justify-between items-baseline text-neutral-600">
                  <span>Mon — Wed</span>
                  <span className="font-mono">Closed</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right inquiry form column */}
          <div className="lg:col-span-7 bg-neutral-900 border border-blue-950/45 p-6 sm:p-8 rounded-sm shadow-2xl relative">
            <h3 className="text-xs uppercase font-sans tracking-widest text-white border-b border-blue-950/20 pb-3">
              Transmit An Inquiry Node
            </h3>

            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <CheckCircle className="h-12 w-12 text-lime-500 mx-auto animate-bounce" />
                <h4 className="text-sm uppercase text-white font-semibold">Message Dispatched</h4>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  Your communication has been registered and verified. Our host desk typically replies to online inquiries within 2 hours during active service slots.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xxs uppercase tracking-widest text-[#F9C04D] border-b border-[#F9C04D]"
                >
                  Post another letter
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5 text-xs pt-4">
                
                <div>
                  <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Your Representative Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white uppercase tracking-wider focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. liam@sterling-family.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="e.g. 0482 040 956"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Your Detailed Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your culinary comments, table preferences, or questions regarding Great Southern Region wines..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 resize-none placeholder-neutral-600"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-sans font-bold text-xs uppercase tracking-widest rounded-xs hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center space-x-2 shadow-xl"
                  >
                    {submitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting envelope...</span>
                      </div>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

        {/* Custom geographic beautiful design Map mockup */}
        <section id="contact-geographic-interactive-map" className="max-w-5xl mx-auto rounded-sm overflow-hidden border border-blue-950/45 shadow-2xl relative bg-neutral-900 aspect-[16/7]">
          
          {/* Aesthetic Dark Geographic Backdrop mesh simulation */}
          <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center pointer-events-none opacity-85 overflow-hidden">
            
            {/* Custom stylized map lines inside canvas or vector pattern */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0 opacity-20 pointer-events-none">
              {[...Array(72)].map((_, i) => (
                <div key={i} className="border-r border-b border-amber-500/10 hover:bg-blue-950/5 transition-colors" />
              ))}
            </div>

            {/* Glowing gold circles representing Denmark WA coastal ocean shores */}
            <div className="absolute w-[800px] h-[800px] rounded-full border border-blue-900/10 -bottom-80 -left-40 animate-pulse bg-blue-950/5" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-blue-900/15 -bottom-40 -left-20 bg-blue-950/10" />

            {/* Center golden pins */}
            <div className="absolute flex flex-col items-center justify-center text-center space-y-1.5 translate-y-[-10px] pointer-events-auto">
              
              {/* Pulsating golden dot indicator */}
              <div className="relative flex h-5 h-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 border border-amber-300" />
              </div>

              <div className="bg-neutral-900/95 backdrop-blur-md border border-amber-500/30 p-2 px-3.5 rounded-sm shadow-2xl text-[9px] uppercase tracking-widest text-[#F9C04D] tracking-widest font-bold">
                WINTER'S HOLLOW DENMARK
              </div>
              <span className="text-xxs text-neutral-400 font-mono">Coordinates: 34.9580° S, 117.3537° E</span>
            </div>
          </div>

          {/* Quick link button to real Google Maps search for customer */}
          <div className="absolute bottom-4 right-4 z-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Denmark%20Western%20Australia%20Restaurants"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 bg-neutral-900 border border-blue-950 hover:border-amber-500 text-[10px] text-neutral-300 font-semibold uppercase tracking-widest px-4 py-2.5 rounded-sm shadow-xl transition-all"
            >
              <span>Verify direction maps in Google Maps</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

        </section>

      </div>
    </div>
  );
}
