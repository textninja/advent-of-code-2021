const { Counter } = require("../lib/util");

function part1(input) {
  return fishiesOnDay(input, 80);
}

function part2(input) {
  return fishiesOnDay(input, 256);
}

function fishiesOnDay(input, day) {
  let fishCounts = new Counter(input.trim().split(",").map(Number));

  for (let i = 0; i < day; i++) {
    let c = new Counter;
    for (let [fish,count] of fishCounts) {
      if (fish == 0) {
        c.inc(8,count);
        c.inc(6,count);
      } else {
        c.inc(fish-1, count);
      }
    }
    fishCounts = c;
  }

  return fishCounts.total();
}

module.exports = {
  part1, part2
};