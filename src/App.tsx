/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Sub views
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import BookingsView from './components/BookingsView';
import GalleryView from './components/GalleryView';
import AboutView from './components/AboutView';
import ReviewsView from './components/ReviewsView';
import EventsView from './components/EventsView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');

  const renderCurrentView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={setActiveView} />;
      case 'menu':
        return <MenuView />;
      case 'bookings':
        return <BookingsView />;
      case 'gallery':
        return <GalleryView />;
      case 'about':
        return <AboutView />;
      case 'reviews':
        return <ReviewsView />;
      case 'events':
        return <EventsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={setActiveView} />;
    }
  };

  return (
    <div id="application-container-wrapper" className="min-h-screen bg-neutral-950 flex flex-col justify-between selection:bg-amber-500 selection:text-neutral-950">
      
      {/* Header Nav bar */}
      <Navbar currentView={activeView} onNavigate={setActiveView} />

      {/* Animated Main Content Stage */}
      <main id="animated-main-view-stage" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Common footer */}
      <Footer onNavigate={setActiveView} />

    </div>
  );
}
