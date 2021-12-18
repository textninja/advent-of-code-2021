const { Graph } = require('graphology');

function part1(input) {
  let graph = parseGraphInput(input);

  return countPaths(graph)
}

function part2(input) {
  
}

function countPaths(graph, currentCave="start", terminal="end", path=[currentCave]) {

    let count = 0;
    let neighbors = graph.forEachNeighbor(currentCave, neighbor => {

      let currentPath = [...path, neighbor];

      let pruned = graph.copy();
      if (isSmallCave(currentCave)) {
        pruned.forEachNeighbor(currentCave, n => pruned.dropEdge(currentCave, n))
      }

      if (neighbor === terminal) {
        count++;
      } else {
        count += countPaths(pruned, neighbor, terminal, currentPath);
      }

    });

    return count; 

}

function isSmallCave(cave) {
  return cave.toLowerCase() == cave;
}

function parseGraphInput(input) {
  let edges = input.trim().split("\n");

  let g = new Graph({ type: "undirected" });

  edges.forEach(edge => {

    let [a, b] = edge.trim().split("-");

    [a, b].forEach(node => {
      if (!g.hasNode(node)) {
        g.addNode(node);
      }
    });

    g.addEdge(a, b);

  });

  return g;
}

module.exports = {
  part1, part2, parseGraphInput
};