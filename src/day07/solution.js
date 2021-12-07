function part1(input) {
  return minCrabCost(input);
}

function part2(input) {
  return minCrabCost(input, (d) => ((d + 1) / 2) * d);
}

function minCrabCost(input, distfn = (n) => n) {
  let crabs = input.trim().split(",").map(Number);

  let crabCosts = range(Math.min(...crabs), Math.max(...crabs)).map(
    (c, i, a) => {
      return crabs.reduce((t, cc) => t + distfn(Math.abs(cc - c)), 0);
    }
  );

  return Math.min(...crabCosts);
}

function range(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

module.exports = {
  part1,
  part2,
};
