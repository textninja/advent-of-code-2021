const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');
const dayNum = parseInt(process.argv.pop(), 10);
const year = 2015;

if (isNaN(dayNum)) {
  console.error("usage: yarn day DAY");
  process.exit(1);
}

let templateDir = path.join(__dirname, "../_template");
let destinationDir = path.join(__dirname, "../src/day" + `${dayNum}`.padStart(2, '0'));

try {
  fs.mkdirSync(destinationDir);
} catch (e) {
  console.error(`Directory exists: ${destinationDir}`);
  process.exit(1);
}

for (let file of fs.readdirSync(templateDir)) {
  let src = fs.readFileSync(path.join(templateDir, file), "utf8");
  let fileName = path.basename(file);
  let transformedSrc = nunjucks.renderString(src, { day: dayNum });
  fs.writeFileSync(path.join(destinationDir, fileName), transformedSrc);
}
