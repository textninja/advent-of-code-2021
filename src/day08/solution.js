function part1(input) {
  let lines = input.trim().split("\n");
  let segs = ["abcefg", "cf", "acdeg", "acdfg", "bcdf", "abdfg", "abdefg", "acf", "abcdefg", "abcdfg"];
  return lines.flatMap(line => line.split(" | ")[1].split(" ")).reduce((s, w) => {
    let wc = new Set(w).size;
    return s + (segs.filter(seg => seg.length == wc).length == 1);
  }, 0);
}

function part2(input) {
  let lines = input.trim().split("\n");
}

function deduce(line, possibilities) {
  let segs = ["abcefg", "cf", "acdeg", "acdfg", "bcdf", "abdfg", "abdefg", "acf", "abcdefg", "abcdfg"];

  let wordLengths = segs.map(s => s.length);
  let segmentsToNums = {};
  for (let [i, seg] of segs.entries()) {
    for (let char of seg) {
      segmentsToNums[char] = [i, ...segmentsToNums[char]||[]];
    }
  }

  possibilities = possibilities || {
    "a": "abcdefg",
    "b": "abcdefg",
    "c": "abcdefg",
    "d": "abcdefg",
    "e": "abcdefg",
    "f": "abcdefg",
    "g": "abcdefg"
  };

  let [input, output] = line.split(" | ");

  for (let word of output.split(" ")) {

    let possibleNums = [0,1,2,3,4,5,6,filter((wl,i) => )

  }

}

module.exports = {
  part1, part2, deduce
};