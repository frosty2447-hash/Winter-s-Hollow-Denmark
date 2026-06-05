/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinksByView = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menus' },
    { id: 'bookings', label: 'Reservation Desk' },
    { id: 'gallery', label: 'Visual Experience' },
    { id: 'events', label: 'Private Functions' },
    { id: 'about', label: 'Philosophy' },
    { id: 'reviews', label: 'Guest Feedback' },
    { id: 'contact', label: 'Get In Touch' },
  ];

  return (
    <footer id="global-application-footer" className="bg-[#03070E] text-[#F0F0F0]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand/Slogan Column */}
          <div id="footer-brand-column" className="flex flex-col space-y-4">
            <h3 className="text-xl font-serif tracking-[0.2em] text-amber-500 uppercase font-light">
              WINTER'S HOLLOW
            </h3>
            <p className="text-xs leading-relaxed text-slate-400 font-light">
              An atmosphere-driven dining experience and artisan cocktail bar in Denmark, Western Australia. Embracing cool climates, premium local ingredients, and intimate coastal hospitality.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com/wintershollowdenmark"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                aria-label="Facebook Profile"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div id="footer-hours-column" className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold border-b border-blue-950/30 pb-2">
              Operating Hours
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex justify-between">
                <span>Thursday</span>
                <span className="text-white font-mono">5:00 PM — Late</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span className="text-white font-mono">5:00 PM — Late</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-mono">5:00 PM — Late</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-mono">5:00 PM — Late</span>
              </li>
              <li className="flex justify-between text-neutral-500">
                <span>Mon — Wed</span>
                <span className="font-mono">Closed</span>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div id="footer-navigation-column" className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold border-b border-blue-950/30 pb-2">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinksByView.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-xs hover:text-white transition-colors text-neutral-400 py-0.5"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts Column */}
          <div id="footer-contacts-column" className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold border-b border-blue-950/30 pb-2">
              The Venue
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Denmark, Western Australia (Great Southern Region)</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="tel:0482040956" className="hover:text-white transition-colors font-mono">
                  0482 040 956
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="mailto:wintershollowdenmark@gmail.com" className="hover:text-white transition-colors break-all">
                  wintershollowdenmark@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Local SEO Targets and Copyright footer note */}
        <div id="footer-seo-credits-row" className="mt-16 pt-8 border-t border-blue-950/30 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xxs tracking-wider uppercase text-neutral-500">
          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-600">
            <span>#RestaurantDenmarkWA</span>
            <span>#CocktailBarDenmarkWA</span>
            <span>#DiningDenmarkWA</span>
            <span>#BestRestaurantDenmarkWA</span>
          </div>

          <div className="flex items-center space-x-6">
            <span>
              &copy; {new Date().getFullYear()} Winter's Hollow Denmark. All rights reserved.
            </span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 border border-white/10 hover:border-amber-500 hover:text-amber-500 rounded-full transition-all group bg-white/5 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
