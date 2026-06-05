import fs from 'fs';
import https from 'https';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', err => reject(err));
    });
  });
}

async function run() {
  const baseUrl = 'https://winter-s-hollow-597165529539.asia-southeast1.run.app';
  console.log("Checking if source map exists...");
  try {
    const mapUrl = `${baseUrl}/assets/index-C8QD7tXI.js.map`;
    const mapData = await fetchUrl(mapUrl);
    if (mapData.startsWith('{') || mapData.startsWith('[')) {
      console.log("Source map found! Length:", mapData.length);
      fs.writeFileSync('old-source-map.json', mapData);
      console.log("Saved old-source-map.json");
    } else {
      console.log("No source map found at this path.");
    }
  } catch (e) {
    console.log("Error checking source map:", e.message);
  }

  console.log("Fetching JS Bundle...");
  try {
    const jsUrl = `${baseUrl}/assets/index-C8QD7tXI.js`;
    const jsData = await fetchUrl(jsUrl);
    fs.writeFileSync('old-js-bundle.js', jsData);
    console.log("Saved old-js-bundle.js (size:", jsData.length, ")");
  } catch (e) {
    console.log("Error fetching JS bundle:", e.message);
  }
}

run();
