import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const s = bundle.indexOf('function zT(');
console.log("function zT found at index:", s);
console.log(bundle.substring(s + 4000, s + 9000));
