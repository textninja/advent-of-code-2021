const axios = require("axios");
const path = require('path');
const fs = require('fs');
const part = process.argv.length == 4 ? parseInt(process.argv.pop(), 10) : 1;
const dayNum = parseInt(process.argv.pop(), 10);
const year = require('./year');

if (isNaN(dayNum) || isNaN(part)) {
  console.error("usage: yarn solve DAY PART");
  process.exit(1);
}

const basePath = path.join(__dirname, "../src/day" + `${dayNum}`.padStart(2, '0'));
const solutionPath = path.join(basePath, "solution.js");
const inputPath = path.join(basePath, "input.txt");

const { part1, part2 } = require(solutionPath);
const input = fs.readFileSync(inputPath, "utf8");

if (part == 1) {
  console.log(part1(input));
} else if (part == 2) {
  console.log(part2(input));
}

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
