/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { VENUE_INTERIOR, HERO_BG_BACKUP } from '../data';
import { Award, ShieldCheck, Leaf, Compass } from 'lucide-react';

export default function AboutView() {
  const suppliers = [
    {
      name: "Denmark Karri Forest Honey",
      product: "Dense forest raw honey nectar",
      location: "Denmark Hills"
    },
    {
      name: "Albany Rock Oyster Co.",
      product: "Pristine deep-sea rock oysters",
      location: "Albany Inlet"
    },
    {
      name: "Great Southern Cool-Glass Vineyards",
      product: "Pinot Noir barrel vintages",
      location: "Mount Barker slopes"
    },
    {
      name: "Manjimup Truffle Fields",
      product: "A Grade winter black truffles",
      location: "Manjimup Valleys"
    }
  ];

  return (
    <div id="about-story-root" className="min-h-screen bg-neutral-950 pt-28 pb-24 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Heading Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block mb-1">
            Our Philosophy
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-wide uppercase italic">
            Our <span className="text-amber-500 not-italic">Story</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            The narrative of a warm sanctuary built to mirror the majestic landscapes, misty winds, and cool culinary bounty of regional Western Australia.
          </p>
        </div>

        {/* Story Section 1: The Hollow Core Vibe */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <Compass className="h-4 w-4 text-amber-500" />
              <span className="text-xxs uppercase tracking-widest font-mono text-neutral-400 font-bold">
                MIST & CANDLELIGHT
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-white leading-snug italic">
              Envisioning the <span className="text-amber-500 not-italic">Blue & Gold Sanctuary</span>
            </h2>
            <p className="text-xs leading-relaxed text-neutral-400">
              Denmark, Western Australia is a place of breathtaking dramatic dualities. It is where raw Southern Ocean currents wash over ancient granite headlands, and where massive soaring Karri forest canopies catch the whispering winter mist.
            </p>
            <p className="text-xs leading-relaxed text-neutral-400">
              Winter’s Hollow was conceived to translate this beautiful outdoor theatre into an indoor shelter. We painted our walls an deep, velvety navy-blue to echo the quiet coastal evening sky, framing them with custom gold detailing that catch the dancing candle flame like glowing charcoal ashes.
            </p>
            <p className="text-xs leading-relaxed text-neutral-400">
              Our venue isn't just about dining; it is a meticulously styled room made to encourage conversation, slow down breathing, and host moments that you remember long after the night fades.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-sm overflow-hidden border border-blue-950/40 shadow-2xl relative pointer-events-none">
              <img
                src={VENUE_INTERIOR}
                alt="Inside Winters Hollow Denmark lounge"
                className="w-full h-auto object-cover max-h-[440px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/15" />
            </div>
          </div>
        </section>

        {/* Story Section 2: Culinary Integrity & Botanical Focus */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="h-4 w-4 text-amber-500" />
              <span className="text-xxs uppercase tracking-widest font-mono text-neutral-400 font-bold">
                NATIVE INTEGRITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-white leading-snug italic">
              Respecting the Produce of the <span className="text-amber-500 not-italic">Great Southern</span>
            </h2>
            <p className="text-xs leading-relaxed text-neutral-400">
              The regional identity of our food and beverage programs is paramount. We believe Western Australia produces some of the most complex, pristine fruits, cattle grazing lands, and deep-sea aquatic treasures in the world.
            </p>
            <p className="text-xs leading-relaxed text-neutral-400">
              Our Head Chef maps our recipes directly to the local seasons. Starters are kept vibrant and clean—highlighting oysters and wild sea parsley—while our coal-fired mains boast the earthy depth of red gum charcoal embers, forest pine vapor, and native mountain pepperberries.
            </p>
            <div className="p-4 rounded-sm bg-neutral-900 border border-blue-950/30 flex items-start space-x-3 text-xs text-neutral-400">
              <Award className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-sans mb-1 uppercase text-xxs tracking-wider">Zero-compromise Ethos</strong>
                We never use imported synthetics or mass-produced ingredients inside our kitchen or bar. Every cordial, reduction syrup, and smoked cedar block is crafted by hand in-house.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="rounded-sm overflow-hidden border border-blue-950/40 shadow-2xl relative pointer-events-none">
              <img
                src={HERO_BG_BACKUP}
                alt="Moody spirit bar back detailing"
                className="w-full h-auto object-cover max-h-[440px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/20" />
            </div>
          </div>
        </section>

        {/* Partnerships & Collaborator Cards to Build Trust */}
        <section id="story-suppliers-showcase" className="border-t border-blue-950/40 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-lg uppercase text-white tracking-widest font-sans">
              Our Local Community Partnerships
            </h3>
            <p className="text-xxs text-neutral-500 leading-relaxed mt-2 uppercase tracking-wide">
              We collaborate proudly with regional farmers, sustainable fisheries, and cool climate vigneron stewards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suppliers.map((sup, index) => (
              <div
                key={index}
                className="bg-neutral-900/40 border border-blue-950/35 p-5 rounded-sm hover:border-amber-500/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-950/15 border border-blue-900/35 flex items-center justify-center text-amber-400 font-mono text-[10px] mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-xs uppercase font-sans tracking-wide text-white font-semibold">
                  {sup.name}
                </h4>
                <p className="text-xxs text-neutral-400 mt-1.5">
                  {sup.product}
                </p>
                <span className="text-[10px] font-mono text-[#F9C04D]/80 block mt-3 font-semibold uppercase">
                  📍 {sup.location}, WA
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
