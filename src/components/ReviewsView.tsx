/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data';
import { ReviewItem } from '../types';
import { Star, Check, Award, Flame, MessageSquare, Plus, CheckCircle } from 'lucide-react';

export default function ReviewsView() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [ratingFilter, setRatingFilter] = useState<'all' | 'Atmosphere' | 'Cuisine' | 'Mixology' | 'Service'>('all');
  
  // Submit state draft
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newCategory, setNewCategory] = useState<'Atmosphere' | 'Cuisine' | 'Mixology' | 'Service'>('Atmosphere');
  const [newText, setNewText] = useState('');

  const filteredReviews = ratingFilter === 'all' 
    ? reviewsList 
    : reviewsList.filter(r => r.category === ratingFilter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newReview: ReviewItem = {
      id: `review_user_${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      text: newText,
      date: 'Today',
      source: 'Guest Book',
      category: newCategory
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
    setNewAuthor('');
    setNewText('');
    setNewRating(5);
    
    // Auto collapse after delay
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
    }, 2500);
  };

  return (
    <div id="reviews-community-root" className="min-h-screen bg-neutral-950 pt-28 pb-24 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reviews Headers */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <span className="text-xs uppercase text-amber-500 font-mono tracking-widest block mb-1">
            Community Voices
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif font-light tracking-wide uppercase italic">
            Guest <span className="text-amber-500 not-italic">Board</span>
          </h1>
          <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
            Real feedback from regional and traveling diners who have shared a candlelit night inside Winter's Hollow Denmark.
          </p>
        </div>

        {/* Customer Scorecard Indicators */}
        <section id="reviews-summary-dashboard" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-neutral-900 border border-blue-950/40 p-6 rounded-sm text-center space-y-2">
            <span className="text-xxs uppercase tracking-widest font-mono text-neutral-400">Google Rating</span>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-3xl font-bold font-sans text-white">5.0</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4.5 w-4.5 fill-current" />)}
              </div>
            </div>
            <p className="text-xxs text-neutral-500 font-mono">130+ Unified verified feedback forms</p>
          </div>

          <div className="bg-neutral-900 border border-blue-950/40 p-6 rounded-sm text-center space-y-2">
            <span className="text-xxs uppercase tracking-widest font-mono text-[#F9C04D]">Atmosphere Goal</span>
            <div className="text-3xl font-bold font-sans text-white">100%</div>
            <p className="text-xxs text-neutral-500 font-mono font-sans">Cozy rating on lighting & layout</p>
          </div>

          <div className="bg-neutral-900 border border-blue-950/40 p-6 rounded-sm text-center space-y-2">
            <span className="text-xxs uppercase tracking-widest font-mono text-neutral-400">Region Score</span>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-3xl font-bold font-sans text-amber-400 font-sans">#1</span>
              <span className="text-xs uppercase font-sans font-semibold text-white">Cocktail Hub</span>
            </div>
            <p className="text-xxs text-neutral-500 font-mono">Denmark, WA boutique rankings</p>
          </div>
        </section>

        {/* Categories toggler & Add Review trigger */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-blue-950/30">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xxs uppercase font-mono tracking-wider text-neutral-500">Filter experience:</span>
            {['all', 'Atmosphere', 'Cuisine', 'Mixology', 'Service'].map((cat) => (
              <button
                key={cat}
                onClick={() => setRatingFilter(cat as any)}
                className={`text-[10px] uppercase tracking-wider font-mono px-3.5 py-1.5 rounded-xs border transition-all ${
                  ratingFilter === cat
                    ? 'bg-amber-500 border-amber-500 text-neutral-950 font-bold'
                    : 'border-blue-950/40 bg-neutral-950 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat === 'all' ? 'All Reviews' : cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setFormOpen(!formOpen)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-500/20 text-amber-400 border border-amber-500/30 text-xs px-5 py-2.5 rounded-sm hover:bg-amber-500/30 transition-all font-semibold uppercase tracking-widest"
          >
            <Plus className="h-4 w-4" />
            <span>Write Guestbook Note</span>
          </button>
        </div>

        {/* Dynamic Guest Submission form dropdown */}
        {formOpen && (
          <div className="max-w-2xl mx-auto bg-neutral-900 border border-blue-950/50 rounded-sm p-6 mb-12 shadow-2xl animate-fade-in relative">
            <h3 className="text-xs uppercase tracking-widest font-sans text-white mb-4 pb-2 border-b border-blue-950/20">
              Submit Your Guestbook Review
            </h3>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle className="h-10 w-10 text-lime-500 mx-auto animate-bounce" />
                <h4 className="text-sm uppercase text-white font-semibold">Review Added Successfully</h4>
                <p className="text-xxs text-neutral-400">
                  Thank you! Your feedback has been registered and is now displayed on the Guest Board.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Henderson"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white uppercase tracking-wider focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  
                  <div>
                    <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Experience Focus</label>
                    <select
                      value={newCategory}
                      onChange={(e: any) => setNewCategory(e.target.value)}
                      className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Atmosphere">Atmosphere (Interior & Light)</option>
                      <option value="Cuisine">Cuisine (Gastronomy Plates)</option>
                      <option value="Mixology">Mixology (Cocktails & Grapes)</option>
                      <option value="Service">Service (Staff attention)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-neutral-950 p-3 rounded-xs border border-blue-950/40">
                  <span className="text-neutral-500 text-[9.5px] uppercase font-mono tracking-wider">Star Rating:</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="p-1 hover:scale-110 transition-transform animate-pulse"
                      >
                        <Star 
                          className={`h-5 w-5 ${
                            star <= newRating ? 'text-amber-400 fill-current' : 'text-neutral-700'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-neutral-500 text-[9px] uppercase font-mono block mb-1">Your Comments</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe your candle-lit experiences, table highlights, and drink selections..."
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    className="w-full text-xs bg-neutral-950 border border-blue-950/60 p-3 rounded-xs text-white focus:outline-none focus:border-amber-500 resize-none placeholder-neutral-600"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setFormOpen(false)}
                    className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-400 text-[10px] uppercase font-bold tracking-widest rounded-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 text-[10px] uppercase font-bold tracking-widest rounded-xs transition-colors"
                  >
                    Register Note
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Verified reviews collection lists */}
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-neutral-900 border border-blue-950/30 p-6 rounded-sm space-y-4 hover:border-amber-500/10 transition-all duration-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-950/20 pb-3">
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-blue-950/20 border border-blue-900/40 text-amber-400 font-sans font-extrabold flex items-center justify-center text-xs">
                    {review.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-xs font-sans uppercase tracking-widest text-white font-bold flex items-center gap-1.5">
                      <span>{review.author}</span>
                      {review.source === 'Google' && (
                        <span className="text-[9px] font-mono border border-blue-550/30 bg-blue-950/25 text-blue-300 px-1 rounded-xs uppercase">
                          Google Verified
                        </span>
                      )}
                    </h4>
                    <span className="text-[10px] text-neutral-500 font-mono block mt-0.5">
                      Date: {review.date} • Category: <strong className="text-blue-300 font-medium font-mono">{review.category}</strong>
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400 shrink-0">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xs leading-relaxed text-neutral-300 font-sans tracking-wide">
                "{review.text}"
              </blockquote>
            </div>
          ))}

          {filteredReviews.length === 0 && (
            <div className="text-center py-12 text-xs text-neutral-500 font-mono">
              No testimonials fit this criteria yet. Write our first guestbook note above!
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
