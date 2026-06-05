import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

// Let's search for labels/button-texts that are uppercase, e.g. "HOME", "MENU", "RESERVATIONS", "GALLERY" etc.
const keywords = ['"Home"', '"Menu"', '"Gallery"', '"Reviews"','"About"', '"Bookings"', '"Reservations"'];
keywords.forEach(kw => {
  const idx = bundle.indexOf(kw);
  if (idx !== -1) {
    console.log(`Nav keyword: ${kw} found at index ${idx}`);
    console.log("Context:", bundle.substring(idx - 100, idx + 100));
  }
});

// Let's search for active tabs or views or route changes
const routeMatches = bundle.match(/["'](home|menu|gallery|about|bookings|reviews|contact)["']/g) || [];
console.log("Potential view states found:", [...new Set(routeMatches)]);
