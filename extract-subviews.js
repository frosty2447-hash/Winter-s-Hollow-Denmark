import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

// Print around index 339000
const startIdx = Math.max(0, 338500);
const endIdx = Math.min(bundle.length, 340500);
console.log("=== NAV STRUCTURE CODE SECTION ===");
console.log(bundle.substring(startIdx, endIdx));
