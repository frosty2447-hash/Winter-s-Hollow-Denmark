import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const m = 349415;
console.log("=== FOOTER COLUMN DETAILS ===");
console.log(bundle.substring(m - 3500, m));
