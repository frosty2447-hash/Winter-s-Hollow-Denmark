import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data';
import { ReviewItem } from '../types';
import { Star, MessageSquare, Check, Plus, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ReviewsView() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newReview: ReviewItem = {
      id: `review_user_${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      text: newText,
      date: 'Today',
      source: 'Guest Book'
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmitted(true);
    setNewAuthor('');
    setNewText('');
    setNewRating(5);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
    }, 2500);
  };

  return (
    <div className="py-28 bg-navy-deep min-h-screen relative overflow-hidden" id="reviews-view">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-navy-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-matte uppercase block mb-3">
            Community Impressions
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-widest text-[#f8fafc] uppercase mb-4">
            GUEST BOARD
          </h1>
          <p className="font-serif-sub text-lg text-slate-350 italic">
            "Real whispers, critiques, and experiences shared by diners who have spent an evening inside our candlelit room in Denmark."
          </p>
          <div className="w-16 h-[1.5px] bg-gold-matte mx-auto mt-6" />
        </div>

        {/* Unified Statistics dashboards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-navy-dark border border-navy-light/40 p-6 rounded text-center space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-mono text-slate-450">Google Rating</span>
            <div className="flex items-center justify-center space-x-1.5">
              <span className="text-3xl font-bold font-sans text-white">5.0</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4.5 w-4.5 fill-current" />)}
              </div>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">130+ UNIFIED RESPONSE SUBMISSIONS</p>
          </div>

          <div className="bg-navy-dark border border-navy-light/40 p-6 rounded text-center space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-mono text-gold-matte">Atmosphere Goal</span>
            <div className="text-3xl font-semibold font-sans text-slate-200">100%</div>
            <p className="text-[10px] text-slate-500 font-mono">Soft candle candle power only</p>
          </div>

          <div className="bg-navy-dark border border-navy-light/40 p-6 rounded text-center space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-mono text-slate-450">Regional Score</span>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-3xl font-bold font-sans text-amber-500">#1</span>
              <span className="text-xs uppercase font-sans font-semibold text-slate-300">Cocktail Spot</span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono">Denmark, WA boutique rankings</p>
          </div>
        </div>

        {/* Filter bar and CTA switch row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-navy-light/40">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <MessageSquare className="w-4 h-4 text-gold-matte" />
            <span>Guestbook entries from regional and international seekers.</span>
          </div>

          <button
            onClick={() => setFormOpen(!formOpen)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-candle/10 to-amber-candle/20 text-gold-light border border-gold-matte/30 text-xs px-5 py-2.5 rounded hover:bg-amber-candle/30 transition-all font-mono tracking-widest uppercase cursor-pointer"
          >
            <Plus className="h-4 w-4 text-amber-candle" />
            <span>Write Guestbook Note</span>
          </button>
        </div>

        {/* Dynamic sliding guest review input dropdown form */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-navy-dark border border-navy-light/60 rounded-sm p-6 mb-12 shadow-2xl relative"
            >
              <h3 className="font-display text-sm uppercase tracking-widest text-slate-200 mb-4 pb-2 border-b border-navy-light/30">
                Submit Your Guestbook Review
              </h3>

              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <Check className="h-10 w-10 text-gold-matte mx-auto animate-bounce" />
                  <h4 className="font-display text-base uppercase text-slate-100 font-semibold">Review Added Successfully</h4>
                  <p className="font-mono text-[11px] text-slate-400">
                    Thank you! Your feedback has been registered and is now displayed on the Guest Board in real-time.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 text-xs font-mono">
                  <div>
                    <label className="text-slate-400 text-[10px] uppercase block mb-1">Your Name / Representative</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Henderson"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full text-xs bg-navy-deep border border-navy-light/85 p-3 rounded text-slate-100 uppercase tracking-wider focus:outline-none focus:border-gold-matte"
                    />
                  </div>

                  <div className="flex items-center space-x-3 bg-navy-deep p-3 rounded border border-navy-light/50">
                    <span className="text-slate-450 text-[10px] uppercase tracking-wider">Star Rating:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="p-1 hover:scale-105 transition-transform cursor-pointer"
                        >
                          <Star 
                            className={`h-5 w-5 ${
                              star <= newRating ? 'text-amber-candle fill-current' : 'text-slate-650'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-[10px] uppercase block mb-1">Your Comments & Impression</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your candle-lit experiences, table highlights, and drink selections..."
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      className="w-full text-xs bg-navy-deep border border-navy-light/85 p-3 rounded text-slate-200 focus:outline-none focus:border-gold-matte resize-none placeholder-slate-600"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setFormOpen(false)}
                      className="px-5 py-2.5 bg-navy-deep border border-navy-light/80 text-slate-400 hover:text-white text-[11px] uppercase tracking-widest rounded transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-glow to-gold-matte text-navy-deep font-bold text-[11px] uppercase tracking-widest rounded transition-all cursor-pointer"
                    >
                      Register Note
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Real Board listings item cards loops */}
        <div className="space-y-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="bg-navy-dark border border-navy-light/40 p-6 rounded hover:border-gold-matte/20 transition-all duration-300 relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-light/20 pb-4 mb-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-navy-light/30 border border-navy-light/80 text-gold-matte font-display font-extrabold flex items-center justify-center text-xs">
                    {review.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-display uppercase tracking-widest text-[#f8fafc] font-bold flex items-center gap-2">
                      <span>{review.author}</span>
                      {review.source === 'Google Review' && (
                        <span className="text-[9px] font-mono border border-gold-matte/30 bg-gold-matte/5 text-gold-light px-1.5 py-0.5 rounded uppercase">
                          Google Verified
                        </span>
                      )}
                    </h4>
                    <span className="text-[10px] text-slate-405 font-mono block mt-0.5">
                      DATE: {review.date} • SOURCE: {review.source}
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-candle shrink-0 select-none">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="font-serif-sub text-base sm:text-lg italic text-slate-250 leading-relaxed px-2">
                "{review.text}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Bottom indicator text */}
        <div className="mt-14 text-center">
          <p className="text-xxs font-mono text-slate-500 uppercase tracking-widest">
            AUTHENTIFIED HISTORICAL GUESTBOOK • WINTER'S HOLLOW
          </p>
        </div>

      </div>
    </div>
  );
}
