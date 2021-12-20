const { Graph } = require('graphology');

function part1(input) {
  let graph = parseGraphInput(input);

  return countPaths(graph)
}

function part2(input) {
  let graph = parseGraphInput(input);

  return countPathsWithRevisit(graph);
}

function countPathsWithRevisit(caveSystem, currentCave="start", terminal="end", canRepeat=true) {

  let count = 0;
  let subsystem = caveSystem.copy();
  subsystem.updateNodeAttribute(currentCave, "visits", visits => visits + 1);
  let visits = subsystem.getNodeAttribute(currentCave, "visits");

  if (currentCave === terminal) return 1;

  if (currentCave == "start") {
    caveSystem.forEachNeighbor(currentCave, neighborCave => {
      subsystem.dropEdge(currentCave, neighborCave);
    });
  }
  
  if (isRevisitableSmallCave(currentCave)) {
    if (canRepeat) {
      if (visits > 1) {
        collapse(subsystem);
        canRepeat = false;
      }
    } else {
      caveSystem.forEachNeighbor(currentCave, neighborCave => {
        subsystem.dropEdge(currentCave, neighborCave);
      });
    }
  }

  caveSystem.forEachNeighbor(currentCave, neighborCave => {
    count += countPathsWithRevisit(subsystem, neighborCave, terminal, canRepeat);
  });
  
  return count;
}


function collapse(caveSystem) {
  caveSystem.forEachNode(cave => {
 
    if (isRevisitableSmallCave(cave) && caveSystem.getNodeAttribute(cave, "visits") >= 1) {
      caveSystem.forEachNeighbor(cave, neighborCave => {
        caveSystem.dropEdge(cave, neighborCave);
      });
    }

  });
}

function countPaths(graph, currentCave="start", terminal="end", path=[currentCave]) {

    let count = 0;

    let pruned = graph.copy();
    if (isSmallCave(currentCave)) {
      pruned.forEachNeighbor(currentCave, n => pruned.dropEdge(currentCave, n))
    }

    let neighbors = graph.forEachNeighbor(currentCave, neighbor => {

      let currentPath = [...path, neighbor];

      if (neighbor === terminal) {
        count++;
      } else {
        count += countPaths(pruned, neighbor, terminal, currentPath);
      }

    });

    return count; 

}

function isRevisitableSmallCave(cave) {
  return isSmallCave(cave) && !["start", "end"].includes(cave);
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
        g.setNodeAttribute(node, "visits", 0);
      }
    });

    g.addEdge(a, b);

  });

  return g;
}

module.exports = {
  part1, part2, parseGraphInput
};