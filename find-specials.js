import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const phrase = '• SEE CHEFS SPECIALS BOARD';
const idx = bundle.indexOf(phrase);
if (idx !== -1) {
  console.log(`Phrase found at index ${idx}`);
  console.log("Context around phrase:", bundle.substring(idx - 200, idx + 400));
}

// Let's also do a general search for "view:\"specials\""
const viewSpecIdx = bundle.indexOf('view:"specials"');
console.log("\nview:\"specials\" index:", viewSpecIdx);

// Let's search for "Specials" or find any occurrence of "_T" or what is near "specials"
const specialsIdxs = [];
let specIdx = bundle.indexOf('specials');
while (specIdx !== -1) {
  specialsIdxs.push(specIdx);
  specIdx = bundle.indexOf('specials', specIdx + 1);
}
console.log("All 'specials' occurrences:", specialsIdxs);
specialsIdxs.forEach((idx, i) => {
  console.log(`\nOccurrence ${i} (index ${idx}):`);
  console.log(bundle.substring(Math.max(0, idx - 100), Math.min(bundle.length, idx + 250)));
});
