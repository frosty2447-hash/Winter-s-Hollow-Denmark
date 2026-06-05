import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

// Find function AT or search for words from footer like "All Rights Reserved" or "35 Holling Road"
const fWord = "All Rights Reserved";
const idx = bundle.indexOf(fWord);
if (idx !== -1) {
  console.log(`Footer signature found at index ${idx}`);
  // Let's find the function declaration of AT. It should be close by before or after.
  let startIdx = idx - 1500;
  let endIdx = idx + 1000;
  console.log("Context around footer text:");
  console.log(bundle.substring(startIdx, endIdx));
}
