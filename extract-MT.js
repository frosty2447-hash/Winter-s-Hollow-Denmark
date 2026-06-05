import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

// Looking for "MT=[" or similar near the end or around the other arrays.
// Let's do a search for keywords in the specials like: "Double oysters" or "annual intimate multi-course"
const kws = ['annual intimate multi-course', 'Double oysters', 'timber whiskey flights'];
kws.forEach(kw => {
  const idx = bundle.indexOf(kw);
  if (idx !== -1) {
    console.log(`Specials data keyword: ${kw} found at index ${idx}`);
    // Find the surrounding array
    let startIdx = idx;
    while (startIdx > 0 && bundle[startIdx] !== '[') {
      startIdx--;
    }
    let endIdx = idx;
    let bracketCount = 1;
    while (endIdx < bundle.length && bracketCount > 0) {
      endIdx++;
      if (bundle[endIdx] === '[') bracketCount++;
      if (bundle[endIdx] === ']') bracketCount--;
    }
    endIdx++;
    console.log("Enclosing array:", bundle.substring(startIdx, endIdx));
  }
});
