/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, User, Clock, Check, AlertCircle, Phone, HelpCircle, ExternalLink } from 'lucide-react';
import { VENUE_INTERIOR } from '../data';

export default function BookingsView() {
  const [selectedDate, setSelectedDate] = useState('2026-06-05');
  const [guestCount, setGuestCount] = useState('2');
  const [selectedTime, setSelectedTime] = useState('18:30');
  const [preference, setPreference] = useState('main'); // booth, bar, main
  const [notes, setNotes] = useState('');
  
  // NowBookIt simulator states
  const [isCallingNowBookIt, setIsCallingNowBookIt] = useState(false);
  const [nowBookItOpened, setNowBookItOpened] = useState(false);

  // Hardcoded real-feel NowBookIt default routing URL
  const [nowBookItUrl, setNowBookItUrl] = useState('https://www.nowbookit.com/bootcamp/booking?id=wintershollowexample');

  const guestCountPresets = ['2', '3', '4', '6', '8', '10+'];
  
  const timePresets = [
    { value: '17:15', label: '5:15 PM' },
    { value: '17:45', label: '5:45 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:45', label: '7:45 PM' },
    { value: '20:15', label: '8:15 PM' },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCallingNowBookIt(true);
    
    // Simulate loading secure iframe / redirect handoff
    setTimeout(() => {
      setIsCallingNowBookIt(false);
      setNowBookItOpened(true);
    }, 1200);
  };

  return (
    <div id="bookings-desk-view" className="min-h-screen bg-neutral-950 pt-28 pb-24 text-neutral-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reservation Heading Headers */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block mb-1">
            NowBookIt Integration Desk
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-wide uppercase italic">
            Reser<span className="text-amber-500 not-italic">vations</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            Reserve your table in our candle-lit room. Due to our limited seating layouts, we strongly advocate booking in advance. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Booking Configurator Form Column */}
          <div className="lg:col-span-7 bg-neutral-900/60 rounded-sm border border-blue-950/40 p-6 sm:p-8 shadow-2xl relative">
            <h2 className="text-base uppercase font-serif italic text-amber-500 mb-6 pb-2 border-b border-white/5">
              Select Your Seating Details
            </h2>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Guests Count Selector */}
              <div>
                <label className="text-neutral-400 text-xxs uppercase tracking-wider font-mono block mb-2 font-semibold">
                  1. Number of Guests
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {guestCountPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setGuestCount(preset)}
                      className={`py-2 px-3 text-xs font-mono rounded-xs border text-center transition-all ${
                        guestCount === preset
                          ? 'bg-amber-500 border-amber-500 text-neutral-950 font-bold'
                          : 'border-blue-950 bg-neutral-950 hover:border-neutral-700 text-neutral-300'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
                {guestCount === '10+' && (
                  <p className="text-xxs text-amber-500/80 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>Groups over 10 require private banquet menu structures. Please refer to Private Functions page!</span>
                  </p>
                )}
              </div>

              {/* Date & Preference Selections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-neutral-400 text-xxs uppercase tracking-wider font-mono block mb-2 font-semibold">
                    2. Date Select
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-neutral-500">
                      <Calendar className="h-3.5 w-3.5" />
                    </span>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min="2026-06-05"
                      className="w-full text-xs bg-neutral-950 border border-blue-950/60 py-3 pl-10 pr-4 rounded-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-neutral-400 text-xxs uppercase tracking-wider font-mono block mb-2 font-semibold">
                    3. Seating Preference
                  </label>
                  <select
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    className="w-full text-xs bg-neutral-950 border border-blue-950/60 py-3 px-3 rounded-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="main">Main Dining Table</option>
                    <option value="booth">Cozy Plaster Booth</option>
                    <option value="bar">Bar Counter Stool (Near Mixologist)</option>
                    <option value="any">First Available Atmosphere Slot</option>
                  </select>
                </div>
              </div>

              {/* Time Choice Picker */}
              <div>
                <label className="text-neutral-400 text-xxs uppercase tracking-wider font-mono block mb-2 font-semibold">
                  4. Dinner Seating Timeslots
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timePresets.map((time) => (
                    <button
                      key={time.value}
                      type="button"
                      onClick={() => setSelectedTime(time.value)}
                      className={`py-2.5 px-3 text-xxs font-mono rounded-xs border text-center transition-all ${
                        selectedTime === time.value
                          ? 'bg-amber-500 border-amber-500 text-neutral-950 font-bold'
                          : 'border-blue-950 bg-neutral-950 hover:border-neutral-700 text-neutral-400'
                      }`}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional comments/allergens */}
              <div>
                <label className="text-neutral-400 text-xxs uppercase tracking-wider font-mono block mb-2 font-semibold">
                  Comments & Dietary Disclosures (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Peanuts allergy, celebrating birthday anniversary, requiring high chair..."
                  className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 resize-none placeholder-neutral-600"
                />
              </div>

              {/* Master call to action button */}
              <div>
                <button
                  type="submit"
                  disabled={isCallingNowBookIt}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-sans font-bold text-xs uppercase tracking-[0.15em] rounded-sm transition-all hover:from-amber-600 hover:to-amber-700 flex items-center justify-center space-x-2 shadow-xl"
                >
                  {isCallingNowBookIt ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Initiating NowBookIt Portal...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Details to NowBookIt Desk</span>
                      <ExternalLink className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Booking Policies and integration links sidebar column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Policies Check card */}
            <div className="bg-neutral-900 border border-blue-950/40 p-5 rounded-sm">
              <h3 className="text-xs uppercase font-sans tracking-widest text-[#F9C04D] mb-4 flex items-center gap-2 font-semibold">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                <span>Booking Policies</span>
              </h3>
              
              <ul className="space-y-3.5 text-xxs text-neutral-400 leading-relaxed">
                <li className="flex gap-2">
                  <Check className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>
                    <strong>Hearth Seating Hold:</strong> Tables are strictly reserved for 15 minutes after coordinates. Plan for local tourist traffic.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>
                    <strong>Dietary Requirements:</strong> All allergies should are declared inside the form, permitting our kitchen to pre-match broth bases.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-4 w-4 text-amber-500 shrink-0" />
                  <span>
                    <strong>Banquet Requirement:</strong> Reservations for groups of 10 or more require our structural $85 banquet menu config.
                  </span>
                </li>
              </ul>
            </div>

            {/* Simulated Admin Configuration Card for NowBookIt URL setting */}
            <div className="bg-neutral-900/40 border border-blue-950/30 p-5 rounded-sm text-xxs">
              <h4 className="text-neutral-400 tracking-wider font-mono uppercase mb-2 flex items-center gap-1.5 font-bold">
                <HelpCircle className="h-3.5 w-3.5 text-blue-400" />
                <span>NowBookIt Settings Connector</span>
              </h4>
              <p className="text-neutral-500 mb-3 leading-relaxed">
                As configured, this interface directly redirects clients to the NowBookIt restaurant page. Admin can edit this integration endpoint below:
              </p>

              <div id="booking-settings-mock" className="space-y-2 bg-neutral-950 p-3 rounded border border-blue-950/50">
                <label className="text-neutral-500 font-mono text-[9px] uppercase block">Integrated Widget Route URL</label>
                <input
                  type="text"
                  value={nowBookItUrl}
                  onChange={(e) => setNowBookItUrl(e.target.value)}
                  className="w-full text-[10px] font-mono bg-neutral-900 border border-blue-950 p-2 text-amber-400 outline-none rounded-xs"
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xxs text-neutral-500">
                Facing reservation issues? Call us directly at <a href="tel:0482040956" className="text-amber-500/80 hover:underline">0482 040 956</a> or write to <a href="mailto:wintershollowdenmark@gmail.com" className="text-amber-500/80 hover:underline">wintershollowdenmark@gmail.com</a>.
              </p>
            </div>

          </div>
        </div>

        {/* 4. Overlay Widget Launch Handover Frame */}
        {nowBookItOpened && (
          <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-neutral-900 border border-blue-950/80 max-w-lg w-full p-6 sm:p-8 rounded-sm relative shadow-2xl space-y-6">
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <h3 className="text-lg uppercase text-white font-sans tracking-widest font-semibold">
                  Secure NowBookIt Redirection
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We are passing your selected parameters (Date: <strong className="text-amber-400">{selectedDate}</strong>, Size: <strong className="text-amber-400">{guestCount} pax</strong>, Preferred seating: <strong className="text-amber-400">{preference === 'main' ? 'Main dining table' : preference === 'booth' ? 'Cozy Booth' : 'Bar Counter'}</strong>) to our partner Reservation widget.
                </p>
              </div>

              {/* Mock embedded Iframe summary placeholder so user sees it in action */}
              <div className="bg-neutral-950 p-4 rounded border border-blue-950/50 text-center font-mono space-y-1 text-neutral-400">
                <span className="text-[10px] uppercase text-neutral-600 block">Mock NowBookIt API Payload</span>
                <p className="text-xxs text-neutral-400">ID: wintershollowdenmark • Date: {selectedDate}</p>
                <p className="text-xxs text-neutral-400">Guests: {guestCount} • PreferredSection: {preference}</p>
                <span className="text-xxs text-amber-500 mt-2 block break-all font-sans text-[10px]">
                  Navigating to secure booking frame...
                </span>
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setNowBookItOpened(false)}
                  className="bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 uppercase tracking-widest px-5 py-3 rounded-sm transition-colors font-semibold"
                >
                  Close Window
                </button>
                <a
                  href={nowBookItUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-sm transition-all flex items-center space-x-1"
                >
                  <span>Book on NowBookIt</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
