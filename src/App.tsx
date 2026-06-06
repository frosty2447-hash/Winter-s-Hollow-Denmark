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
import EventsView from './components/EventsView'; // Private Functions
import SpecialsView from './components/SpecialsView'; // Solstice & Late Nights Specials
import ContactView from './components/ContactView';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');

  React.useEffect(() => {
    document.title = "Winter's Hollow Denmark | Food • Wine • Cocktails";
  }, []);

  const renderCurrentView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={setActiveView} />;
      case 'menu':
        return <MenuView />;
      case 'cocktails':
        return <HomeView onNavigate={setActiveView} />; // maps to cocktails scroll, or we have CocktailsView?
        // Wait! In LT switches:
        // case "cocktails": return u.jsx(DT, {}) which is CocktailsView!
        // Oh! CocktailsView is a separate view component!
        // Currently, we don't have a CocktailsView file. Let's call it CocktailsView and make sure we create it!
        // Yes, CocktailsView is DT! Let's import it and map it here!
      case 'about':
        return <AboutView />;
      case 'bookings':
        return <BookingsView />;
      case 'events':
        return <EventsView />;
      case 'gallery':
        return <GalleryView />;
      case 'reviews':
        return <ReviewsView />;
      case 'specials':
        return <SpecialsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="bg-navy-deep min-h-screen text-slate-100 flex flex-col justify-between selection:bg-gold-matte selection:text-navy-deep antialiased relative overflow-x-hidden">
      
      {/* Dynamic ambient radial gradients casting soft, high-luxury lighting */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none z-0" 
        style={{
          background: "radial-gradient(circle at 71% 29%, #1e293b 0%, transparent 60%), radial-gradient(circle at 21% 81%, #0c4a6e 0%, transparent 50%)",
          filter: "blur(80px)"
        }} 
      />

      {/* Fixed header navbar */}
      <Navbar currentView={activeView} onNavigate={setActiveView} />

      {/* Main Container */}
      <main className="flex-grow pt-[77px] relative z-10">
        <AnimatePresence mode="wait">
          {/* We must render a view switcher that has unique key to animate cleanly */}
          {activeView === 'cocktails' ? (
            // Import and render CocktailsView directly when selected! Let's check below.
            <React.Suspense fallback={<div className="min-h-screen" />}>
              <motion.div
                key="cocktails"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <CocktailsViewWrapper />
              </motion.div>
            </React.Suspense>
          ) : (
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {renderCurrentView()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Common Footer */}
      <Footer onNavigate={setActiveView} />

    </div>
  );
}

// Lazy load CocktailsView to prevent circular or early bundle sizes if needed, or simple import!
// Let's create CocktailsView in a separate file next.
import CocktailsView from './components/CocktailsView';
function CocktailsViewWrapper() {
  return <CocktailsView />;
}
