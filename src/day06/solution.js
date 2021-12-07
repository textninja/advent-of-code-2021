function part1(input) {
  return fishiesOnDay(input, 80);
}

function part2(input) {
  return fishiesOnDay(input, 256);
}

function fishiesOnDay(input, day) {
  let fishCounts = count(input.split(",").map(Number));

  for (let i = 0; i < day; i++) {
    let c = {};
    for (let [counter,count] of Object.entries(fishCounts)) {
      if (counter == 0) {
        c[8] = count;
        c[6] = (c[6]||0)+count;
      } else {
        c[counter-1] = (c[counter-1]||0)+count;
      }
    }
    fishCounts = c;
  }

  return Object.values(fishCounts).reduce((s,v) => s+v, 0);
}

function count(list) {
  return list.reduce((counts,item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

module.exports = {
  part1, part2
};