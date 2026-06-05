import fs from 'fs';

const bundle = fs.readFileSync('old-js-bundle.js', 'utf8');

const variables = ['Gx', 'yf', 'xf', 'Yx', 'Zz'];
variables.forEach(v => {
  // Let's look for assignments like "Gx=" or "Gx =" or "const Gx=" or similar, or when it looks like "/assets/"
  // Let's do a regex search for the variable names being assigned
  const regex = new RegExp(`[,;{ ]${v}\\s*=\\s*"([^"]+)"`, 'g');
  let match;
  while ((match = regex.exec(bundle)) !== null) {
    console.log(`Matched assignment for ${v}:`, match[0]);
  }
  
  // Or maybe it is imported like: import Gx from "/assets/..."
  // In a compiled asset, it usually looks like: Gx = "/assets/..." or Gx = "/assets/image_name"
  const regex2 = new RegExp(`\\b${v}\\s*=\\s*"([^"]+)"`, 'g');
  while ((match = regex2.exec(bundle)) !== null) {
    console.log(`Matched assignment (regex2) for ${v}:`, match[0]);
  }
});

// Let's print the first occurrence of variables definition or see if there's any image assets path mentioned in the JS
const assetPaths = bundle.match(/\/assets\/[^"]+\.(png|jpg|jpeg|webp|svg)/g) || [];
console.log("\nFound asset paths in bundle:", [...new Set(assetPaths)]);
