import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const m = 349415;
console.log("=== FOOTER START DETAILS ===");
console.log(bundle.substring(m - 5500, m - 3000));
