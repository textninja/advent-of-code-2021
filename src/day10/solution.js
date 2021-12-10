const CORRUPTION_SCORE = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137
};

function part1(input) {
  return input.trim().split("\n")
    .reduce((score,line) => score+corrupted(line).score, 0)
}

function part2(input) {
  let allScores = input.trim().split("\n")
      .map(getCompletionScore)
      .filter(n=>n);

  return median(allScores);
}

function getCompletionScore(brackets) {
  let completions = [];
  let openToClose = { "{": "}", "[": "]", "(": ")", "<": ">" }; 
  for (let c of brackets) {
    if (c in openToClose) completions.push(openToClose[c]);
    else if (completions.pop() != c) return 0;
  }

  return completions.reverse().reduce((score,char) => score*5+" )]}>".indexOf(char), 0);
}

function corrupted(line) {
  let closingBrackets = {
    "[": "]",
    "{": "}",
    "(": ")",
    "<": ">"
  };

  let stack = [];

  for (let char of line) {
    // opening bracket
    if (char in closingBrackets) stack.push(closingBrackets[char]);
    else if (stack.pop() != char) {
      return { corrupted: true, score: CORRUPTION_SCORE[char] };
    }
  }

  return { corrupted: false, score: 0 }

}

function median(list, comparator=(a,b)=>a-b) {
  return [...list].sort(comparator)[list.length/2|0]
}

module.exports = {
  part1, part2, corrupted, getCompletionScore
};