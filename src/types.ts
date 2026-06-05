/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'sides' | 'desserts';
  price: number;
  description: string;
  tags: ('GF' | 'V' | 'VG' | 'DF' | 'NF' | 'Signature')[];
  featured: boolean;
  photo?: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  category: 'signature' | 'classics' | 'beer-wine' | 'non-alcoholic';
  price: number;
  description: string;
  signature: boolean;
  notes?: string;
  photo?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  date: string;
  source: 'Google' | 'Guest Book';
  category: 'Atmosphere' | 'Cuisine' | 'Mixology' | 'Service';
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'venue' | 'food' | 'cocktails';
}

export interface FunctionPackage {
  id: string;
  title: string;
  minSpend: number;
  capacity: string;
  description: string;
  highlights: string[];
}
