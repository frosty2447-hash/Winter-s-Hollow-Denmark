import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const m = 433172;
console.log("=== SPECIALS VIEW COMPONENT DETAILS ===");
// Print from index m up to m + 4000
console.log(bundle.substring(m - 100, m + 4500));
