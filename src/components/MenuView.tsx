/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Filter, Check, Eye, Plus, ArrowRight, Upload, Sparkles, BookOpen, Trash2 } from 'lucide-react';
import { FOOD_MENU, DRINKS_MENU } from '../data';
import { MenuItem, DrinkItem } from '../types';

export default function MenuView() {
  const [activeMenuTab, setActiveMenuTab] = useState<'food' | 'drinks'>('food');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Dietary filters
  const [selectedDietaries, setSelectedDietaries] = useState<string[]>([]);
  
  // Custom interactive editable menu items state to simulate dynamic updates!
  const [localFoodMenu, setLocalFoodMenu] = useState<MenuItem[]>(FOOD_MENU);
  const [localDrinksMenu, setLocalDrinksMenu] = useState<DrinkItem[]>(DRINKS_MENU);

  // Administrative mock state for PDF uploads and replacement
  const [showUploader, setShowUploader] = useState(false);
  const [mockPdfFile, setMockPdfFile] = useState<string | null>(null);
  const [editorFormOpen, setEditorFormOpen] = useState(false);
  const [menuNotification, setMenuNotification] = useState<string | null>(null);

  // New item draft states
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodPrice, setNewFoodPrice] = useState(15);
  const [newFoodDesc, setNewFoodDesc] = useState('');
  const [newFoodCategory, setNewFoodCategory] = useState<'starters' | 'mains' | 'sides' | 'desserts'>('starters');
  const [newFoodTags, setNewFoodTags] = useState<string[]>([]);

  const handleDietaryToggle = (tag: string) => {
    if (selectedDietaries.includes(tag)) {
      setSelectedDietaries(selectedDietaries.filter(t => t !== tag));
    } else {
      setSelectedDietaries([...selectedDietaries, tag]);
    }
  };

  // Filter food menu
  const filteredFood = useMemo(() => {
    return localFoodMenu.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDietary = selectedDietaries.every(diet => item.tags.includes(diet as any));
      
      return matchesSearch && matchesDietary;
    });
  }, [localFoodMenu, searchQuery, selectedDietaries]);

  // Filter drinks menu
  const filteredDrinks = useMemo(() => {
    return localDrinksMenu.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Since drink items have fewer tags, we only check for non-alcoholic filter if selected
      const desiresNonAlc = selectedDietaries.includes('Non-Alc');
      const matchesNonAlc = desiresNonAlc ? item.category === 'non-alcoholic' : true;

      return matchesSearch && matchesNonAlc;
    });
  }, [localDrinksMenu, searchQuery, selectedDietaries]);

  const handleAddFoodItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFoodName.trim() || !newFoodDesc.trim()) return;

    const newItem: MenuItem = {
      id: `f_user_${Date.now()}`,
      name: newFoodName,
      category: newFoodCategory,
      price: Number(newFoodPrice),
      description: newFoodDesc,
      tags: newFoodTags as any[],
      featured: false
    };

    setLocalFoodMenu([...localFoodMenu, newItem]);
    
    // Reset draft fields
    setNewFoodName('');
    setNewFoodDesc('');
    setNewFoodPrice(15);
    setNewFoodTags([]);
    setEditorFormOpen(false);
  };

  const handleRemoveFoodItem = (id: string) => {
    setLocalFoodMenu(localFoodMenu.filter(item => item.id !== id));
  };

  const handlePdfMockUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMockPdfFile(file.name);
      setMenuNotification(`Simulated PDF attachment "${file.name}" was uploaded successfully and is now set as the active printable menu format.`);
      setTimeout(() => {
        setMenuNotification(null);
      }, 5000);
    }
  };

  return (
    <div id="menus-view-root" className="min-h-screen bg-neutral-950 pt-28 pb-24 text-neutral-300">
      {menuNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-[#050B18] px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest shadow-2xl animate-bounce glow-gold">
          {menuNotification}
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Slogan Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block mb-2 font-semibold">
            Bespoke Gastronomy Program
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-wide uppercase italic">
            Curated <span className="text-amber-500 not-italic">Menus</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Discover a kitchen and bar dedicated to the pristine flavors, fresh ocean currents, and lush jarrah landscapes of Denmark, Western Australia. All menus are updated weekly with native ingredients.
          </p>

          {/* Master Menu Switcher Tabs */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex bg-neutral-900/80 p-1 rounded-sm border border-blue-950/40">
              <button
                onClick={() => {
                  setActiveMenuTab('food');
                  setSearchQuery('');
                  setSelectedDietaries([]);
                }}
                className={`px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-200 ${
                  activeMenuTab === 'food'
                    ? 'bg-amber-500 text-neutral-950'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cuisine & Desserts
              </button>
              <button
                onClick={() => {
                  setActiveMenuTab('drinks');
                  setSearchQuery('');
                  setSelectedDietaries([]);
                }}
                className={`px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-200 ${
                  activeMenuTab === 'drinks' && mockPdfFile === null
                    ? 'bg-amber-500 text-neutral-950'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cocktails & Cellar
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Filters & Search Command Bar */}
        <div id="menu-search-filters-bar" className="bg-neutral-900/60 rounded-sm border border-blue-950/30 p-5 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3 flex items-center text-neutral-500 pointer-events-none">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder={`Search ${activeMenuTab === 'food' ? 'dishes, side plates, desserts...' : 'gin mixes, local vintages, mocktails...'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-neutral-950 border border-blue-950/45 py-3.5 pl-10 pr-4 rounded-xs text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-neutral-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 flex items-center gap-1 shrink-0">
              <Filter className="h-3 w-3" />
              <span>Filter:</span>
            </span>
            
            {activeMenuTab === 'food' ? (
              // Food specific dietaries
              ['GF', 'VG', 'DF', 'V'].map((diet) => {
                const labelMap: Record<string, string> = {
                  'GF': 'Gluten Free',
                  'VG': 'Vegan',
                  'DF': 'Dairy Free',
                  'V': 'Vegetarian'
                };
                const isSelected = selectedDietaries.includes(diet);
                return (
                  <button
                    key={diet}
                    onClick={() => handleDietaryToggle(diet)}
                    className={`text-[10px] uppercase tracking-wide font-mono py-1.5 px-3 rounded-xs border transition-all ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-semibold'
                        : 'border-blue-950/40 bg-neutral-950/55 hover:border-neutral-700 text-neutral-400'
                    }`}
                  >
                    {labelMap[diet]}
                  </button>
                );
              })
            ) : (
              // Drinks specific filter
              <button
                onClick={() => handleDietaryToggle('Non-Alc')}
                className={`text-[10px] uppercase tracking-wide font-mono py-1.5 px-3 rounded-xs border transition-all ${
                  selectedDietaries.includes('Non-Alc')
                    ? 'bg-amber-500/10 border-amber-500 text-amber-400 font-semibold'
                    : 'border-blue-950/40 bg-neutral-950/55 hover:border-neutral-700 text-neutral-400'
                }`}
              >
                Non-Alcoholic Only
              </button>
            )}
          </div>
        </div>

        {/* 1. Food Menu Presentation Block */}
        {activeMenuTab === 'food' && (
          <div id="food-menu-items-grid" className="space-y-16">
            {['starters', 'mains', 'sides', 'desserts'].map((sectionCategory) => {
              const categoryItems = filteredFood.filter(item => item.category === sectionCategory);
              
              if (categoryItems.length === 0) return null;

              const categoryTitleMap = {
                starters: "To Begin & Small Food Plates",
                mains: "Seared Land, Soil & Water Mains",
                sides: "Accompaniments to Share",
                desserts: "Denmark Valley Sweet Desserts"
              };

              return (
                <div key={sectionCategory} className="animate-fade-in shrink-0">
                  <div className="border-b border-blue-950/40 pb-3 mb-8">
                    <h2 className="text-xs uppercase tracking-[0.25em] text-[#F9C04D] font-mono font-medium">
                      {categoryTitleMap[sectionCategory as keyof typeof categoryTitleMap]}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                    {categoryItems.map((item) => (
                      <div 
                        key={item.id}
                        className="flex flex-col sm:flex-row gap-5 p-4 rounded-sm hover:bg-neutral-900/25 transition-all duration-200 border border-transparent hover:border-blue-950/30 group"
                      >
                        {item.photo && (
                          <div className="sm:w-28 sm:h-28 h-40 w-full shrink-0 overflow-hidden rounded-xs border border-blue-950/30">
                            <img
                              src={item.photo}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-baseline mb-1">
                              <h3 className="text-sm font-sans uppercase tracking-widest text-white group-hover:text-amber-300 transition-colors duration-200">
                                {item.name}
                              </h3>
                              <span className="text-xs font-mono text-white ml-2 font-semibold">
                                ${item.price}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className={`text-[9px] font-mono px-2 py-0.5 border ${
                                  tag === 'Signature'
                                    ? 'border-amber-400 bg-amber-500/10 text-amber-400'
                                    : 'border-blue-950/40 bg-blue-950/15 text-blue-300'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}

                            {/* Self-managed item delete button in interactive template mode */}
                            {item.id.startsWith('f_user_') && (
                              <button
                                onClick={() => handleRemoveFoodItem(item.id)}
                                className="text-[9px] font-mono border border-red-950 bg-red-950/10 px-2 py-0.5 text-red-400 hover:bg-red-950/30 flex items-center gap-1 rounded-xs transition-colors ml-auto"
                              >
                                <Trash2 className="h-3 w-3" />
                                <span>Delete</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredFood.length === 0 && (
              <div className="text-center py-16 bg-neutral-900/20 rounded border border-dashed border-blue-950/30">
                <p className="text-xs text-neutral-500 font-mono">No matching culinary dishes found for current filters.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedDietaries([]); }} 
                  className="mt-3 text-xs text-amber-400 underline hover:text-white"
                >
                  Clear search and dietaries filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. Cocktails & Drinks Menu Presentation Block */}
        {activeMenuTab === 'drinks' && (
          <div id="drinks-menu-items-grid" className="space-y-16">
            {['signature', 'classics', 'beer-wine', 'non-alcoholic'].map((sectionCategory) => {
              const categoryItems = filteredDrinks.filter(item => item.category === sectionCategory);

              if (categoryItems.length === 0) return null;

              const categoryTitleMap = {
                signature: "Hollow Native Alchemy (Signature Cocktails)",
                classics: "Time-Honored Wood Fire Adaptations (Classics)",
                'beer-wine': "Great Southern Breweries & Estates (Wine / Beer)",
                'non-alcoholic': "Forest Canopy Botanical Elixirs (Zero Proof)"
              };

              return (
                <div key={sectionCategory} className="animate-fade-in shrink-0">
                  <div className="border-b border-blue-950/40 pb-3 mb-8">
                    <h2 className="text-xs uppercase tracking-[0.25em] text-[#F9C04D] font-mono font-medium">
                      {categoryTitleMap[sectionCategory as keyof typeof categoryTitleMap]}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {categoryItems.map((item) => (
                      <div 
                        key={item.id}
                        className="flex flex-col sm:flex-row gap-5 p-4 rounded-sm hover:bg-neutral-900/25 transition-all border border-transparent hover:border-blue-950/30 group"
                      >
                        {item.photo && (
                          <div className="sm:w-28 sm:h-28 h-40 w-full shrink-0 overflow-hidden rounded-xs border border-blue-950/30">
                            <img
                              src={item.photo}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-baseline mb-1">
                              <h3 className="text-sm font-sans uppercase tracking-widest text-white group-hover:text-amber-300 transition-colors duration-200">
                                {item.name}
                              </h3>
                              <span className="text-xs font-mono text-white ml-2 font-semibold">
                                ${item.price}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                              {item.description}
                            </p>
                            {item.notes && (
                              <p className="text-[10px] italic text-[#C5D5E4] font-mono mt-1 pt-1 border-t border-blue-950/30">
                                Note: {item.notes}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.signature && (
                              <span className="text-[9px] font-mono px-2 py-0.5 border border-amber-400 bg-amber-500/10 text-amber-400">
                                Signature Hollow Creation
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredDrinks.length === 0 && (
              <div className="text-center py-16 bg-neutral-900/20 rounded border border-dashed border-blue-950/30">
                <p className="text-xs text-neutral-500 font-mono">No matching artisan drinks found.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedDietaries([]); }} 
                  className="mt-3 text-xs text-amber-400 underline hover:text-white"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* 3. Easy Update Module Simulator & Printable PDF Download block */}
        <section id="menu-easy-updater-widget" className="mt-20 pt-10 border-t border-blue-950/30 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-950/20 to-neutral-900/40 border border-blue-950/50 rounded-sm p-6 sm:p-8 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-amber-500" />
                  <span className="text-[10px] tracking-wider uppercase font-mono text-neutral-400 font-bold">
                    PRINTABLE MENUS & ASSET HOOKS
                  </span>
                </div>
                <h3 className="text-lg text-white font-sans uppercase tracking-widest leading-none">
                  Print File & Live Customization Simulator
                </h3>
                <p className="text-xs text-neutral-400 max-w-xl">
                  {mockPdfFile 
                    ? `Currently active customized PDF: "${mockPdfFile}". Handled as a responsive download.`
                    : "Need a physical copy? Download the latest seasonal list or enter the visual manager to test adding custom menu blocks dynamically."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <a
                  href="#download-pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Simulated PDF File downloaded: ${mockPdfFile ? mockPdfFile : "Winters-Hollow-Seasonal-FullMenu-Denmark-2026.pdf"}`);
                  }}
                  className="flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-amber-500/20 text-xs uppercase tracking-widest px-5 py-3 rounded-sm transition-colors text-center"
                >
                  <Eye className="h-4 w-4" />
                  <span>Download PDF</span>
                </a>

                <button
                  onClick={() => setShowUploader(!showUploader)}
                  className="flex items-center justify-center space-x-2 bg-amber-500 text-neutral-950 text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-sm hover:bg-amber-600 transition-colors"
                >
                  <Upload className="h-4 w-4" />
                  <span>Update Menu Asset</span>
                </button>
              </div>
            </div>

            {/* Simulated Live Uploader Widget */}
            {showUploader && (
              <div className="mt-8 pt-6 border-t border-blue-950/30 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in text-xs">
                
                {/* Simulated file uploader */}
                <div className="p-5 rounded bg-neutral-950 border border-blue-950/50">
                  <h4 className="text-[#F9C04D] uppercase font-mono text-[10px] tracking-widest mb-3 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    <span>Structured PDF or Photo Upload</span>
                  </h4>
                  <p className="text-xxs text-neutral-400 mb-4 leading-relaxed">
                    Attach a new PDF draft or menu layout image file (maximum 10MB). In production, this instantly updates the print copies distributed globally.
                  </p>
                  
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-950/55 rounded p-4 text-center cursor-pointer hover:border-amber-500/45 transition-colors">
                    <Upload className="h-6 w-6 text-neutral-500 mb-2" />
                    <span className="text-xxs text-neutral-400 font-semibold mb-1">Click to browse files</span>
                    <span className="text-[10px] text-neutral-600 font-mono">PDF, PNG, JPG supported</span>
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={handlePdfMockUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Structured mock items inserter */}
                <div className="p-5 rounded bg-neutral-950 border border-blue-950/50 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[#F9C04D] uppercase font-mono text-[10px] tracking-widest mb-3">
                      Dynamic Item Inserter
                    </h4>
                    <p className="text-xxs text-neutral-400 mb-4">
                      Simulate adding a new food offering to our active list instantly. Verify how the list searches and formats live.
                    </p>
                  </div>

                  {!editorFormOpen ? (
                    <button
                      onClick={() => setEditorFormOpen(true)}
                      className="w-full py-2.5 text-center bg-blue-950/20 hover:bg-blue-950/45 border border-blue-900/35 uppercase text-[10px] tracking-widest text-[#C5D5E4] rounded-sm transition-colors"
                    >
                      Open Live Item Editor
                    </button>
                  ) : (
                    <form onSubmit={handleAddFoodItem} className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Albany Mud Crab"
                            value={newFoodName}
                            onChange={(e) => setNewFoodName(e.target.value)}
                            className="w-full text-xxs bg-neutral-900 border border-blue-950/50 p-2 text-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Price ($)</label>
                          <input
                            type="number"
                            required
                            min="2"
                            max="300"
                            value={newFoodPrice}
                            onChange={(e) => setNewFoodPrice(Number(e.target.value))}
                            className="w-full text-xxs bg-neutral-900 border border-blue-950/50 p-2 text-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Category</label>
                        <select
                          value={newFoodCategory}
                          onChange={(e: any) => setNewFoodCategory(e.target.value)}
                          className="w-full text-xxs bg-neutral-900 border border-blue-950/50 p-2 text-white focus:outline-none"
                        >
                          <option value="starters">Small Plate / Starter</option>
                          <option value="mains">Main Plake</option>
                          <option value="sides">Side</option>
                          <option value="desserts">Dessert</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Description</label>
                        <textarea
                          required
                          rows={2}
                          placeholder="Short mouth-watering culinary summary..."
                          value={newFoodDesc}
                          onChange={(e) => setNewFoodDesc(e.target.value)}
                          className="w-full text-xxs bg-neutral-900 border border-blue-950/50 p-2 text-white focus:outline-none resize-none"
                        />
                      </div>

                      <div className="flex gap-2">
                        {['GF', 'VG', 'DF', 'V'].map((tag) => (
                          <label key={tag} className="flex items-center space-x-1 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={newFoodTags.includes(tag)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setNewFoodTags([...newFoodTags, tag]);
                                } else {
                                  setNewFoodTags(newFoodTags.filter(t => t !== tag));
                                }
                              }}
                              className="text-amber-500 rounded-sm"
                            />
                            <span className="text-[9px] font-mono text-neutral-400">{tag}</span>
                          </label>
                        ))}
                      </div>

                      <div className="flex justify-end gap-2 pt-1.5">
                        <button
                          type="button"
                          onClick={() => setEditorFormOpen(false)}
                          className="px-3 py-1.5 bg-neutral-900 border border-blue-950 text-neutral-500 text-[9px] uppercase tracking-widest rounded-xs"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-amber-500 text-neutral-950 font-bold text-[9px] uppercase tracking-widest rounded-xs"
                        >
                          Save Item
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </div>
            )}

          </div>
        </section>

      </div>
    </div>
  );
}
