import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

// Let's find index where "currentView" or "setCurrentView" is matches near app routing.
// Let's print out code in index range 335000 to 338500
const startIdx = Math.max(0, 336000);
const endIdx = Math.min(bundle.length, 338500);
console.log("=== APP ROUTING SECTION ===");
console.log(bundle.substring(startIdx, endIdx));
