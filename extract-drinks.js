import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const keywords = ['Denmark Mist', "Hollow's Breath", "The Hollow's Breath", "Coastal Mist", "Karri"];
keywords.forEach(kw => {
  const idx = bundle.indexOf(kw);
  if (idx !== -1) {
    console.log(`Keyword: ${kw} found at index ${idx}`);
    // Find the enclosing array
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
    console.log("Found enclosing array:", bundle.substring(startIdx, endIdx));
  }
});
