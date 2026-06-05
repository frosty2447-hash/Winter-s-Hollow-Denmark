import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const matches = [];
let idx = bundle.indexOf('function DT(');
if (idx === -1) {
  // Try mapping on "DT=" or something
  // In our earlier routing section it was case "cocktails":return u.jsx(DT,{})
  // Let's find DT identifier declaration which is usually very close to Wg, CT etc.
  // In compiled output: case"cocktails":return u.jsx(DT,{})
  // Let's print around case"cocktails":
  const cIndex = bundle.indexOf('case"cocktails":');
  console.log("case:'cocktails' index:", cIndex);
  console.log(bundle.substring(cIndex - 300, cIndex + 300));
} else {
  console.log("function DT found at index:", idx);
  console.log(bundle.substring(idx, idx + 4000));
}
