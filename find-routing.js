import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const m = 446409;
console.log("=== APP COMPONENT RENDER DETAILS ===");
console.log(bundle.substring(m - 1200, m + 400));
