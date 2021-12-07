function part1(input) {

  let crabs = input.trim().split(",").map(Number);

  let crabCosts = range(Math.min(...crabs), Math.max(...crabs)).map((c,i,a) => {
    return crabs.reduce((t,cc) => t+Math.abs(cc-c), 0);
  });

  return Math.min(...crabCosts); //?
}

function part2(input) {
  let crabs = input.trim().split(",").map(Number); //?

  let crabCosts = range(Math.min(...crabs), Math.max(...crabs)).map((c,i,a) => {
    return crabs.reduce((t,cc) => t+dist(Math.abs(cc-c)), 0);
  });

  return Math.min(...crabCosts); //?
}

function range(a, b) {
  let r = [];
  for (let i = a; i <= b; i++) {
    r.push(i); 
  }
  return r;
}

function dist(dist) {
  dist = dist + 1;
  return (dist-1)/2*dist;
}

module.exports = {
  part1, part2
};