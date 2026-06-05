/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menus' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Private Functions' },
    { id: 'about', label: 'Our Story' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-blue-950/50 py-3 shadow-lg'
          : 'bg-gradient-to-b from-neutral-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Brand */}
          <div
            id="navbar-logo-branding"
            className="flex flex-col cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-serif tracking-[0.2em] text-amber-500 uppercase font-light group-hover:text-amber-400 transition-colors">
                WINTER'S HOLLOW
              </span>
              <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
            </div>
            <span className="text-[10px] tracking-[0.4em] text-white/60 uppercase -mt-0.5 ml-1 self-start">
              Denmark, Western Australia
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-xs uppercase tracking-widest transition-colors duration-200 py-1 ${
                  currentView === item.id
                    ? 'text-amber-500 font-medium'
                    : 'text-neutral-300 hover:text-amber-500'
                }`}
              >
                {item.label}
                {currentView === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Table Reservation Button */}
          <div className="hidden md:flex items-center">
            <button
              id="desktop-reserve-cta-btn"
              onClick={() => handleNavClick('bookings')}
              className="border border-amber-500 px-6 py-2 text-[10px] uppercase tracking-widest text-amber-500 hover:bg-amber-500 hover:text-[#050B18] transition-all bg-transparent cursor-pointer font-medium"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="flex lg:hidden">
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white p-1 hover:bg-neutral-900/60 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Foldout */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-0 top-[56px] z-40 bg-neutral-950/95 backdrop-blur-lg flex flex-col justify-start pt-10 px-6 border-t border-blue-950/50 transition-all duration-300 animate-fade-in"
        >
          <div className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base uppercase tracking-widest py-2 border-b border-blue-950/30 ${
                  currentView === item.id
                    ? 'text-amber-500 font-medium pl-2 border-amber-500/50'
                    : 'text-neutral-300 hover:text-amber-500 pl-0'
                } transition-all duration-150`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-nav-booking-cta-btn"
              onClick={() => handleNavClick('bookings')}
              className="w-full mt-4 flex items-center justify-center space-x-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-[#050B18] text-sm uppercase tracking-widest font-semibold py-3.5 rounded-sm transition-all bg-transparent"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Table Now</span>
            </button>
          </div>
          <div className="mt-auto mb-10 text-center flex flex-col space-y-1">
            <span className="text-[10px] text-neutral-500 tracking-widest uppercase">
              WINTER'S HOLLOW DENMARK
            </span>
            <span className="text-[9px] text-amber-500/70 font-mono">
              0482 040 956 • Denmark, WA
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
