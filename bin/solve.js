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
  var answer = part1(input);
} else if (part == 2) {
  var answer = part2(input);
}

(async() => {

  let result = await aocSubmit(part, answer);
  console.log(result);

})();

async function aocSubmit(part, solution) {

  // <form method="post" action="2/answer">
  // <input type="hidden" name="level" value="1"/>
  // <p>Answer: <input type="text" name="answer" autocomplete="off"/>
  // <input type="submit" value="[Submit]"/></p>
  // </form>

  let data = new URLSearchParams;
  data.append("answer", solution);
  data.append("level", part);

  let url = `https://adventofcode.com/${year}/day/${dayNum}/answer`;
  let response = await axios.post(
    url,
    data.toString(),
    {
      headers: {
        "Cookie": "session=" + encodeURIComponent(process.env["ADVENT_OF_CODE_SESSION_COOKIE"])
      }
    }
  );

  if (/That's not the right answer/i.test(response.data)) {
    return false;
  } else if (/You gave an answer too recently/.test(response.data)) {
    return response.data.match(/You have ([^.]+?) left to wait )/)[1];
  }

  return true;
}
