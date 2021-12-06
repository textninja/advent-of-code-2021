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

  console.log(days); //?

  return fish.length; //?
}




function part1Refactored(input) {
  let fish = input.split(",").map(Number);

  numFish(0, 80); //?
  numFish(1, 80); //?
  numFish(2, 80); //?
  numFish(3, 80); //?
  numFish(4, 80); //?
  numFish(5, 80); //?
  numFish(6, 80); //?
  numFish(7, 80); //?
  numFish(8, 80); //?

  //return fish.reduce((s,f) => s+numFish(f, 80), 0); //?
}

/*
1 2             3
0 6 5 4 3 2 1 0 6
0 1 2 3 4 5 6 7 8
*/

numFish(0, 8); //?

function numFish(counter, days) {
  let directSpawns = (days+(6-counter))/7|0;

  directSpawns; //?

  

  return 1+directSpawns;
}

function part2(input) {
  let fish = input.split(",").map(Number);

  //numFish(fish[0], 256);
}

module.exports = {
  part1, part2, part1Refactored
};

if (require.main === module) {
  const fs = require("fs");
  const path = require("path");
  const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

  console.log(part1(input));
}
