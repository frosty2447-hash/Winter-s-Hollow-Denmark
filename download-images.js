import fs from 'fs';
import https from 'https';
import path from 'path';

const files = [
  {
    url: 'https://winter-s-hollow-597165529539.asia-southeast1.run.app/assets/hero_atmosphere_1780488322744-CI21P_Sz.png',
    dest: './src/assets/images/hero_atmosphere.png'
  },
  {
    url: 'https://winter-s-hollow-597165529539.asia-southeast1.run.app/assets/signature_cocktail_1780488341204-CJYaShFs.png',
    dest: './src/assets/images/signature_cocktail_old.png'
  },
  {
    url: 'https://winter-s-hollow-597165529539.asia-southeast1.run.app/assets/gourmet_dish_1780488358532-Ba-EhUs3.png',
    dest: './src/assets/images/gourmet_dish_old.png'
  },
  {
    url: 'https://winter-s-hollow-597165529539.asia-southeast1.run.app/assets/cozy_hollow_1780488375765-BTdEr42a.png',
    dest: './src/assets/images/cozy_hollow.png'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  for (const f of files) {
    try {
      console.log(`Downloading ${f.url} -> ${f.dest}...`);
      await downloadFile(f.url, f.dest);
      console.log(`Success!`);
    } catch (e) {
      console.log(`Error downloading ${f.url}:`, e.message);
    }
  }
}

run();
