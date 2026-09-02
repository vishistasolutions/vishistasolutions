const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const imgMatches = content.match(/src=["']([^"']+\.(?:png|jpg|jpeg|webp|svg))["']/gi) || [];
console.log('Image src matches:', imgMatches.length);
imgMatches.forEach(m => console.log('  ', m));

const bgMatches = content.match(/url\(["']?([^"')]+\.(?:png|jpg|jpeg|webp))["']?\)/gi) || [];
console.log('\nBackground image matches:', bgMatches.length);
bgMatches.forEach(m => console.log('  ', m));
