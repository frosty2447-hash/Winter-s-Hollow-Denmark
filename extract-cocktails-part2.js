import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const m = 385602;
console.log("=== COCKTAILS VIEW PART 2 ===");
console.log(bundle.substring(m + 4000, m + 8000));
