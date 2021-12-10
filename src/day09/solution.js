function part1(input) {
  let grid = input.trim().split("\n").map(l => [...l].map(Number));
  let lowPoints = []; //?

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (neighbours(y, x).every(n => n>grid[y][x])) {
        lowPoints.push(grid[y][x]+1)
      }
    }
  }

  return lowPoints.reduce((sum,p) => sum+p, 0);

  function neighbours(y, x) {
    return [[y-1, x], [y+1, x], [y, x-1], [y, x+1]]
      .filter(([y,x]) => (y>=0&&x>=0&&y<grid.length&&x<grid[0].length))
      .map(([y,x]) => grid[y][x]);
  }
}


function part2(input) {
  
}

module.exports = {
  part1, part2
};