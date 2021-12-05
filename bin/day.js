const path = require('path');
const fs = require('fs');
let dayNum = parseInt(process.argv.pop(), 10);
let year = 2015;

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

console.log(destinationDir);

//try {
//  fs.mkdirSync()
//}

// async function aoc(path) {

//   path = path.replace(/^(?!\/)/, "/");
//   let url = `https://adventofcode.com${path}`;

//   let response = await axios.get(url, {
//     headers: {
//       "Cookie": "session=" + encodeURIComponent(process.env["ADVENT_OF_CODE_SESSION_COOKIE"])
//     }
//   });

//   return response.data;
// }

// (async () => {

//   let rawInput = await aoc(`/${year}/day/${dayNum}/input`); //?
//   let rawDescription = await aoc(`/${year}/day/${dayNum}`); //?

// })();