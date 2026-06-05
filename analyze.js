import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

console.log("=== SCANNING FOR STRINGS AND BRANDING ===");
// Find any title or main headings
const matches = bundle.match(/"[^"]*Denmark[^"]*"/g) || [];
console.log("Denmark matches:", matches.slice(0, 10));

// Let's print out all sections of code that look like food menu items, drink items, or reviews.
// We can find objects with 'price:' or 'category:' or 'description:'
// Let's write a small scanner to find potential menu items.
const foodKeywords = ['Oysters', 'Trouts', 'Ribeye', 'Lamb', 'Beetroot', 'Mushrooms', 'Venison', 'Duck', 'Pork', 'Polenta', 'Gnocchi'];
console.log("\n=== FOOD KEYWORD SEARCH ===");
foodKeywords.forEach(kw => {
  const idx = bundle.indexOf(kw);
  if (idx !== -1) {
    console.log(`Keyword: ${kw} found at index ${idx}`);
    // Print around the index
    console.log("Context:", bundle.substring(idx - 150, idx + 250));
  }
});

// Let's scan for reviews or testimonials
console.log("\n=== REVIEWS / REVIEWERS KEYWORD SEARCH ===");
const reviewerKeywords = ['Vance', 'Jenkins', 'Brody', 'Eleanor', 'Sarah', 'Thorne', 'Google', 'TripAdvisor', 'Yelp'];
reviewerKeywords.forEach(kw => {
  const idx = bundle.indexOf(kw);
  if (idx !== -1) {
    console.log(`Developer Reviewer: ${kw} found at index ${idx}`);
    console.log("Context:", bundle.substring(idx - 100, idx + 250));
  }
});

// Let's search inside the javascript bundle for all strings longer than 30 chars that might be paragraphs
const lgStrings = bundle.match(/"[^"]{40,300}"|'[^']{40,300}'/g) || [];
fs.writeFileSync('extracted-strings.txt', lgStrings.join('\n'));
console.log(`Saved ${lgStrings.length} long strings to extracted-strings.txt`);
