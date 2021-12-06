
const axios = require("axios");
const path = require('path');
const fs = require('fs');
const dayNum = parseInt(process.argv.pop(), 10);
const year = require('./year');

if (isNaN(dayNum)) {
  console.error("usage: yarn input DAY");
  process.exit(1);
}

const destinationDir = path.join(__dirname, "../src/day" + `${dayNum}`.padStart(2, '0'));

async function aoc(path) {

  path = path.replace(/^(?!\/)/, "/");
  let url = `https://adventofcode.com${path}`;

  let response = await axios.get(url, {
    headers: {
      "Cookie": "session=" + encodeURIComponent(process.env["ADVENT_OF_CODE_SESSION_COOKIE"])
    }
  });

  return response.data;
}

(async () => {
  let result = await aoc(`/2015/day/${dayNum}/input`);

  fs.writeFileSync(path.join(destinationDir, "input.txt"), result);
})();
