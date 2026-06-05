import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

// We know food items start around id:"f1" or name:"f1" or contains id:"f1"
// Let's find index of id:"f1"
const f1Indices = [];
let idx = bundle.indexOf('id:"f1"');
while (idx !== -1) {
  f1Indices.push(idx);
  idx = bundle.indexOf('id:"f1"', idx + 1);
}
console.log("f1 indices:", f1Indices);

f1Indices.forEach((f1Idx, i) => {
  // Print some characters before and after to locate the array
  console.log(`\n--- Match ${i} ---`);
  // Try to find the start of the array [ by searching backwards
  let startIdx = f1Idx;
  while (startIdx > 0 && bundle[startIdx] !== '[') {
    startIdx--;
  }
  // Try to find the end of the array ] by searching forwards
  let endIdx = f1Idx;
  let bracketCount = 1;
  while (endIdx < bundle.length && bracketCount > 0) {
    endIdx++;
    if (bundle[endIdx] === '[') bracketCount++;
    if (bundle[endIdx] === ']') bracketCount--;
  }
  endIdx++; // include the closing bracket
  
  const arrayText = bundle.substring(startIdx - 100, endIdx + 100);
  console.log("Extracted chunk:", bundle.substring(startIdx, endIdx));
});

// Let's also find drinks items starting with id:"d1"
console.log("\nSearching for d1...");
const d1Indices = [];
let d1Idx = bundle.indexOf('id:"d1"');
while (d1Idx !== -1) {
  d1Indices.push(d1Idx);
  d1Idx = bundle.indexOf('id:"d1"', d1Idx + 1);
}
console.log("d1 indices:", d1Indices);
d1Indices.forEach((idx, i) => {
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
  console.log(`\n--- Drinks Match ${i} ---`);
  console.log("Extracted chunk:", bundle.substring(startIdx, endIdx));
});

// Let's also find gallery items starting with id:"g1" or similar
console.log("\nSearching for g1...");
const g1Indices = [];
let g1Idx = bundle.indexOf('id:"g1"');
while (g1Idx !== -1) {
  g1Indices.push(g1Idx);
  g1Idx = bundle.indexOf('id:"g1"', g1Idx + 1);
}
console.log("g1 indices:", g1Indices);
g1Indices.forEach((idx, i) => {
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
  console.log(`\n--- Gallery Match ${i} ---`);
  console.log("Extracted chunk:", bundle.substring(startIdx, endIdx));
});

// Let's also find reviews starting with id:"r1"
console.log("\nSearching for r1...");
const r1Indices = [];
let r1Idx = bundle.indexOf('id:"r1"');
while (r1Idx !== -1) {
  r1Indices.push(r1Idx);
  r1Idx = bundle.indexOf('id:"r1"', r1Idx + 1);
}
console.log("r1 indices:", r1Indices);
r1Indices.forEach((idx, i) => {
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
  console.log(`\n--- Reviews Match ${i} ---`);
  console.log("Extracted chunk:", bundle.substring(startIdx, endIdx));
});
