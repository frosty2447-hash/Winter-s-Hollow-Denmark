/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { FUNCTION_PACKAGES } from '../data';
import { Calendar, Users, Mail, Phone, Calculator, Check, ArrowRight, HelpCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function EventsView() {
  const [selectedPackage, setSelectedPackage] = useState(FUNCTION_PACKAGES[0].id);
  const [guestsCount, setGuestsCount] = useState(30);
  
  // Interactive additions checkboxes
  const [welcomeDrink, setWelcomeDrink] = useState(false);
  const [oysterShucker, setOysterShucker] = useState(false);
  const [mossDecoration, setMossDecoration] = useState(false);

  // Inquiry form status
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryDate, setInquiryDate] = useState('2026-11-20');
  const [comments, setComments] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittingInquiry, setSubmittingInquiry] = useState(false);

  // Find active package details
  const activePackageData = useMemo(() => {
    return FUNCTION_PACKAGES.find(p => p.id === selectedPackage) || FUNCTION_PACKAGES[0];
  }, [selectedPackage]);

  // Estimate total live cost calculation
  const calculatedOutput = useMemo(() => {
    // Base estimation math
    // Takeovers map to standard $105 per head minimum food banquet. Sovereign maps to $85 per head. Masterclass maps to $115 per head inclusive of drinks.
    let costPerHead = 105;
    if (selectedPackage === 'p2') costPerHead = 85; 
    if (selectedPackage === 'p3') costPerHead = 115;

    let baseFoodCost = guestsCount * costPerHead;
    
    // Addons
    if (welcomeDrink) baseFoodCost += (guestsCount * 18); // $18/head cocktail
    if (oysterShucker) baseFoodCost += (guestsCount * 22); // $22/head fresh shucked
    if (mossDecoration) baseFoodCost += 120; // flat fee

    const requiredMinSpend = activePackageData.minSpend;
    const finalSpend = Math.max(baseFoodCost, requiredMinSpend);
    const differenceToMin = Math.max(0, requiredMinSpend - baseFoodCost);

    return {
      actualFoodBevCost: baseFoodCost,
      finalSpend: finalSpend,
      requiresMinimumAdjustment: baseFoodCost < requiredMinSpend,
      differenceToMin: differenceToMin,
      headEstimation: Math.round(finalSpend / guestsCount)
    };
  }, [selectedPackage, guestsCount, welcomeDrink, oysterShucker, mossDecoration, activePackageData]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryPhone.trim()) return;

    setSubmittingInquiry(true);
    
    setTimeout(() => {
      setSubmittingInquiry(false);
      setFormSubmitted(true);
    }, 1250);
  };

  return (
    <div id="private-functions-root" className="min-h-screen bg-neutral-950 pt-28 pb-24 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Private Events Headers */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block mb-1">
            Exclusivity & Celebrations
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-wide uppercase italic">
            Private <span className="text-amber-500 not-italic">Gatherings</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            Host your wedding banquet, corporate retreat, or private milestone inside our atmospheric candle-lit room. Secure the entire venue or reserve our semi-private sovereign booths.
          </p>
        </div>

        {/* Packages Showcase cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 animate-fade-in">
          {FUNCTION_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`bg-neutral-900 rounded-sm border p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                selectedPackage === pkg.id
                  ? 'border-amber-500 shadow-xl shadow-amber-950/10 bg-neutral-900/90 scale-[1.01]'
                  : 'border-blue-950/40 hover:border-neutral-700 bg-neutral-900/50'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4 border-b border-blue-950/30 pb-3">
                  <h3 className="text-sm font-sans uppercase tracking-widest text-[#F9C04D] font-bold">
                    {pkg.title}
                  </h3>
                  <span className="text-xxs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 border border-amber-500/20 rounded-xs">
                    Min Spend ${pkg.minSpend}
                  </span>
                </div>
                
                <p className="text-xxs text-neutral-400 mb-5 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[9px] uppercase font-mono tracking-wider text-neutral-500 block">Package details includes:</span>
                  {pkg.highlights.map((high, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xxs text-neutral-300">
                      <Check className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-blue-950/20 flex justify-between items-center text-[10px] uppercase tracking-wider font-mono text-neutral-400">
                <span>Hosts: {pkg.capacity}</span>
                {selectedPackage === pkg.id && (
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Selected Box
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Dynamic Spend Cost Calculator */}
          <div className="lg:col-span-6 bg-neutral-900 border border-blue-950/45 p-6 rounded-sm shadow-2xl relative space-y-6">
            <h3 className="text-xs uppercase font-sans tracking-widest text-white border-b border-blue-950/20 pb-2 flex items-center gap-2">
              <Calculator className="h-4 w-4 text-amber-500" />
              <span>Dinner Party Cost Estimator</span>
            </h3>

            <div className="space-y-4 text-xs">
              
              {/* Event Package Select in Calculator */}
              <div>
                <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Select Event Space Package</label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full text-xs bg-neutral-950 border border-blue-950 p-2.5 rounded-xs text-white outline-none"
                >
                  <option value="p1">Exclusive Venue Takeover ($4500 min spend)</option>
                  <option value="p2">The Sovereign Booths ($1500 min spend)</option>
                  <option value="p3">Masterclass Cocktail Dinner ($2800 min spend)</option>
                </select>
              </div>

              {/* Attendance count adjuster */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-neutral-500 text-[9px] uppercase font-mono block">Attending Guests count: <span className="text-amber-400 font-bold">{guestsCount}</span></label>
                  <span className="text-[9px] text-neutral-550 font-mono">Capacity: {activePackageData.capacity}</span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="80"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              {/* Premium Addons Selector Checklist */}
              <div className="space-y-3 bg-neutral-950 p-4 border border-blue-950/50 rounded-xs">
                <span className="text-[9px] uppercase font-mono text-neutral-500 tracking-wider block">Boutique Add-ons</span>
                
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xxs text-neutral-300 flex items-center gap-1.5">
                    <input
                      type="checkbox"
                      checked={welcomeDrink}
                      onChange={(e) => setWelcomeDrink(e.target.checked)}
                      className="text-amber-500 rounded-sm"
                    />
                    <span>Native botanical cocktail welcome reception (+$18/head)</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 font-semibold">+${guestsCount * 18}</span>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xxs text-neutral-300 flex items-center gap-1.5">
                    <input
                      type="checkbox"
                      checked={oysterShucker}
                      onChange={(e) => setOysterShucker(e.target.checked)}
                      className="text-amber-500 rounded-sm"
                    />
                    <span>Live Albany oyster shucking station (+$22/head)</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 font-semibold">+${guestsCount * 22}</span>
                </label>

                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xxs text-neutral-300 flex items-center gap-1.5">
                    <input
                      type="checkbox"
                      checked={mossDecoration}
                      onChange={(e) => setMossDecoration(e.target.checked)}
                      className="text-amber-500 rounded-sm"
                    />
                    <span>Curated forest moss & native flower placemats (Flat)</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 font-semibold">+$120</span>
                </label>
              </div>

              {/* Calculated Outputs result */}
              <div className="bg-neutral-950 p-4 rounded-xs border border-blue-950/80 space-y-3 font-sans">
                <div className="flex justify-between items-baseline">
                  <span className="text-xxs uppercase tracking-wider text-neutral-400">Attending Food & Beverage Cost estimate:</span>
                  <span className="text-xs font-mono font-bold text-white">${calculatedOutput.actualFoodBevCost}</span>
                </div>

                {calculatedOutput.requiresMinimumAdjustment && (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded text-xxs leading-relaxed text-amber-400">
                    Your selections sum up below the space minimum spend limit of <strong>${activePackageData.minSpend}</strong>. The venue minimum spend is applied as our core booking rate. Try adding guests or premium add-ons!
                  </div>
                )}

                <div className="flex justify-between items-end border-t border-blue-950/40 pt-3">
                  <div>
                    <span className="text-xxs uppercase tracking-wider text-[#F9C04D] block font-semibold">Estimated Final Booking Spend:</span>
                    <span className="text-[10px] text-neutral-500 font-mono">Covers spend guarantees</span>
                  </div>
                  <span className="text-2xl font-bold font-sans text-white">${calculatedOutput.finalSpend}</span>
                </div>

                <div className="text-[10px] font-mono text-neutral-500 pt-1 text-right">
                  Roughly averages out to <strong className="text-white">${calculatedOutput.headEstimation} / guest</strong> at current parameters (Required minimum spend applied).
                </div>
              </div>

            </div>
          </div>

          {/* Secure Inquiry submission form */}
          <div className="lg:col-span-6 bg-neutral-900 border border-blue-950/45 p-6 rounded-sm shadow-2xl relative">
            <h3 className="text-xs uppercase font-sans tracking-widest text-[#F9C04D] border-b border-blue-950/20 pb-2 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-amber-500" />
              <span>Inquire About Package Availability</span>
            </h3>

            {formSubmitted ? (
              <div className="py-20 text-center space-y-4 animate-fade-in">
                <CheckCircle className="h-12 w-12 text-lime-500 mx-auto animate-bounce" />
                <h4 className="text-base uppercase text-white font-semibold">Inquiry Lodged Safely</h4>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{inquiryName}</strong>. Your private celebration request is received under Reference ID: <strong className="text-amber-400 font-mono">WH-2026-F{Math.floor(Math.random() * 9000 + 1000)}</strong>. 
                </p>
                <p className="text-xxs text-neutral-500">Our Events team will phone you within 24 business hours to finalize coordinates.</p>
                
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 border border-blue-950/50 hover:border-amber-500 text-xxs text-neutral-300 uppercase tracking-widest"
                >
                  Reset Calculator Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs pt-4">
                
                <div>
                  <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Your Representative Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Collins"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Contact Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jessica@events.com.au"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 animate-fade-in"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0482 040 956"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Preferred Function Date</label>
                  <input
                    type="date"
                    required
                    value={inquiryDate}
                    onChange={(e) => setInquiryDate(e.target.value)}
                    min="2026-06-05"
                    className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Special Preferences / Wine wishes</label>
                  <textarea
                    rows={2}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="e.g. Corporate retreat, interested in pairing local Albany sea food, requiring speeches microphone..."
                    className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 resize-none placeholder-neutral-600"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submittingInquiry}
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-950 text-xs uppercase tracking-widest font-bold rounded-xs shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    {submittingInquiry ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting inquiry logs...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Private Celebration Request</span>
                        <ArrowRight className="h-4 w-4 animate-pulse" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </section>

      </div>
    </div>
  );
}
