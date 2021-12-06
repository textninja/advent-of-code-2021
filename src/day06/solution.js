let asz = 256+8;

const days = Array(asz+1);

for (let day = days.length-1; day >= 0; day--) {

  let remaining = asz-day-2;

  let spawns = Math.max(remaining / 7 | 0, 0);
  days[day] = 1;
  for (let j = 0; j < spawns; j++) {
    days[day] += days[day+9+j*7];
  }
}

function part1(input) {
  let fish = input.split(",").map(Number);

  let days = [];

  for (let i = 0; i < 80; i++) {
    let l = fish.length;
    days.push(l);
    for (let j = 0; j < l; j++) {
      fish[j] = fish[j] - 1;
      if (fish[j] < 0) {
        fish[j] = 6;
        fish.push(8);
      }
    }
  }

  return fish.length; //?
}

function part2(input) {
  let fish = input.split(",").map(Number);

  return fish.reduce((s,n) => s+days[n], 0);
}

module.exports = {
  part1, part2
};

if (require.main === module) {
  const fs = require("fs");
  const path = require("path");
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

  console.log(part1(input));
  console.log(part2(input));
}
