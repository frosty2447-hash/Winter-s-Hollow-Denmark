import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navigateTo = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-application-footer" className="bg-navy-dark text-slate-100 border-t border-navy-light/35 py-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/Slogan Column */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold tracking-widest text-[#f8fafc] uppercase">
              WINTER'S HOLLOW
            </h3>
            <p className="font-serif-sub text-base text-slate-400 leading-relaxed italic">
              "A hidden winter sanctuary where forest fire meets ocean ice. Designed for sensory dining, craft mixology, and memorable date nights."
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded bg-navy-dark border border-navy-light/50 flex items-center justify-center text-slate-400 hover:text-gold-matte hover:border-gold-matte transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded bg-navy-dark border border-navy-light/50 flex items-center justify-center text-slate-400 hover:text-gold-matte hover:border-gold-matte transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-gold-matte mb-6">
              Explore the Hollow
            </h3>
            <ul className="space-y-3 font-mono text-xs text-slate-400">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-gold-light hover:underline underline-offset-4 text-left transition-colors"
                >
                  Welcome Main
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('menu')}
                  className="hover:text-gold-light hover:underline underline-offset-4 text-left transition-colors"
                >
                  The Culinary Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('cocktails')}
                  className="hover:text-gold-light hover:underline underline-offset-4 text-left transition-colors"
                >
                  Signature Libations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('gallery')}
                  className="hover:text-gold-light hover:underline underline-offset-4 text-left transition-colors"
                >
                  Visual Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('specials')}
                  className="hover:text-gold-light hover:underline underline-offset-4 text-left transition-colors"
                >
                  Solstice & Late Nights
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('events')}
                  className="hover:text-gold-light hover:underline underline-offset-4 text-left transition-colors"
                >
                  Private Gatherings
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-gold-matte mb-6">
              Ritual Hours
            </h3>
            <ul className="space-y-3 font-serif-sub text-base text-slate-350">
              <li className="flex justify-between border-b border-navy-light/20 pb-2">
                <span>Wednesday & Thursday</span>
                <span className="font-mono text-xs text-slate-400">5:00 PM — 10:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-navy-light/20 pb-2">
                <span>Friday & Saturday</span>
                <span className="font-mono text-xs text-slate-400">5:00 PM — 12:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-navy-light/20 pb-2">
                <span>Sunday Feast</span>
                <span className="font-mono text-xs text-slate-400">12:00 PM — 4:00 PM</span>
              </li>
              <li className="flex justify-between text-slate-500 pb-2 italic">
                <span>Monday & Tuesday</span>
                <span className="font-mono text-xs text-slate-650">Resting the flames</span>
              </li>
            </ul>
          </div>

          {/* "Hear The Call" Column */}
          <div>
            <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-gold-matte mb-6">
              Hear The Call
            </h3>
            <p className="font-sans text-xs text-slate-400 mb-4 leading-relaxed">
              Join the inner circle for winter solstice invitations, limited cask-release dinners, and private reservations.
            </p>
            {subscribed ? (
              <div className="p-4 bg-navy-light/20 border border-gold-matte/20 rounded text-center">
                <span className="text-gold-light font-serif-sub text-sm italic">
                  You have been summoned. Welcome.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-navy-dark border border-navy-light/80 rounded px-3 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold-matte focus:ring-1 focus:ring-gold-matte transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-gold-matte hover:bg-gold-light text-navy-deep text-xs font-mono font-semibold tracking-widest uppercase py-2.5 transition-all rounded shadow-md cursor-pointer"
                >
                  Join Circular
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-b border-navy-light/35 text-xs font-mono text-slate-400 mb-8">
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-gold-matte flex-shrink-0" />
            <span>35 Holling Road, Denmark, Western Australia 6333</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-gold-matte flex-shrink-0" />
            <span>+61 (08) 9848 1022</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-gold-matte flex-shrink-0" />
            <span>reservations@wintershollow.com.au</span>
          </div>
        </div>

        {/* Copyright block */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-slate-450 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Winter's Hollow Denmark. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">
              Reservations powered securely via NowBookIt Integration
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded border border-navy-light/50 flex items-center justify-center hover:text-gold-matte hover:border-gold-matte transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
