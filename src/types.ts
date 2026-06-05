/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'starter' | 'main' | 'dessert';
  price: string;
  description: string;
  tags: string[];
}

export interface DrinkItem {
  id: string;
  name: string;
  price: string;
  profile: string;
  ingredients: string[];
  description: string;
  image: string;
  highlight?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  source: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'atmosphere' | 'cocktail' | 'dish' | 'detail';
}

export interface SpecialItem {
  id: string;
  title: string;
  period: string;
  description: string;
  highlightText: string;
  items: string[];
}
