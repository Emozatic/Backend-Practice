const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'data.js');
let content = fs.readFileSync(file, 'utf8');
const original = content;
content = content.replace(/image:\s*\{[\s\S]*?(?:filename:\s*"[^"]*"\s*,)?[\s\S]*?url:\s*("[^"]*")[\s\S]*?\}/g, 'image: $1');
if (content === original) {
  console.error('No changes made.');
  process.exit(1);
}
fs.writeFileSync(file, content, 'utf8');
console.log('Updated data.js');
