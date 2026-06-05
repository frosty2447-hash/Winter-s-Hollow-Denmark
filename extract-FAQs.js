import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

// The FAQs are in an array starting with [{q:"Where exactly are you hidden in Denmark, WA?"
const phrase = 'Where exactly are you hidden in Denmark, WA?';
const idx = bundle.indexOf(phrase);
if (idx !== -1) {
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
  console.log("Found FAQs array:", bundle.substring(startIdx, endIdx));
}
