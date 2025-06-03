const fs = require('fs');
const path = require('path');

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy the feed file to public directory
const feedSource = path.join(__dirname, '../src/feed.xml');
const feedDest = path.join(publicDir, 'feed.xml');

fs.copyFileSync(feedSource, feedDest);
console.log('Feed file copied to public directory'); 