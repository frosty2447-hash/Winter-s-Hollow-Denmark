import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: 'home' },
    { label: 'The Food', view: 'menu' },
    { label: 'The Libations', view: 'cocktails' },
    { label: 'Our Story', view: 'about' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'Specials', view: 'specials' },
    { label: 'Reviews', view: 'reviews' },
    { label: 'Functions', view: 'events' }, // maps to events view state
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-navy-deep/90 backdrop-blur-md py-4 border-navy-light/40 shadow-lg shadow-black/20'
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-left focus:outline-none group cursor-pointer bg-transparent border-0 p-0"
          >
            <div className="relative">
              <Sparkles className="w-6 h-6 text-amber-candle animate-pulse group-hover:text-amber-glow transition-colors" />
              <div className="absolute inset-0 bg-amber-candle/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col select-none">
              <span className="font-display block text-xxs font-medium tracking-[0.35em] text-slate-100 uppercase leading-[1.1]">
                WINTER'S
              </span>
              <span className="font-display block text-base font-extrabold tracking-[0.22em] text-slate-100 uppercase leading-none mt-0.5">
                HOLLOW
              </span>
              <span className="font-mono text-[7px] block text-gold-matte/80 tracking-[0.2em] uppercase mt-1 leading-none">
                DENMARK • WESTERN AUSTRALIA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link Array */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 relative rounded cursor-pointer ${
                    isActive
                      ? 'text-gold-light font-medium'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-navy-light/10'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[1px] bg-gold-matte"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA - Reservations Blocked Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('bookings')}
              className="px-5 py-2.5 bg-amber-candle/10 border border-amber-candle/30 hover:border-amber-glow text-amber-candle text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded font-semibold cursor-pointer"
            >
              Bookings Closed
            </button>
          </div>

          {/* Mobile Hamburguer Trigger */}
          <div className="lg:hidden">
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer bg-transparent border-0"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Foldout */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-45 bg-navy-deep/95 backdrop-blur-lg flex flex-col justify-start pt-8 px-6 border-t border-navy-light/40 transition-all duration-300 overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`text-left text-sm font-mono uppercase tracking-widest py-3 border-b border-navy-light/20 ${
                    isActive
                      ? 'text-gold-light pl-2 font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  } transition-all duration-150`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('bookings')}
              className="w-full mt-6 py-3.5 bg-amber-candle/10 border border-amber-candle/30 hover:border-amber-glow text-amber-candle text-sm font-mono tracking-widest uppercase transition-all duration-300 rounded font-semibold text-center cursor-pointer"
            >
              Bookings Closed
            </button>
          </div>
          <div className="mt-auto mb-12 text-center flex flex-col space-y-1">
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">
              WINTER'S HOLLOW DENMARK
            </span>
            <span className="text-[9px] text-[#C5A059] font-mono">
              3/27 Strickland Street, Denmark • WA
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
