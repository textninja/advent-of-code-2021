const path = require('path');
const fs = require('fs');
const { part1, part2, corrupted, getCompletionScore } = require('./solution');

describe("Day 10", () => {

  const input = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");

  test("identificaiton of corrupted lines", () => {

    expect(corrupted("[").corrupted).toEqual(false);
    expect(corrupted("{").corrupted).toEqual(false);
    expect(corrupted("{}").corrupted).toEqual(false);
    expect(corrupted("{]").corrupted).toEqual(true);
    expect(corrupted("]").score).toEqual(57);
    expect(corrupted("{([(<{}[<>[]}>{[]{[(<()>").corrupted).toEqual(true);
    expect(corrupted("[({(<(())[]>[[{[]{<()<>>").corrupted).toEqual(false);

  });

  test("completion scoring", () => {
    expect(getCompletionScore("(")).toEqual(1);
    expect(getCompletionScore("((")).toEqual(6);
    expect(getCompletionScore("(}")).toEqual(0);
    expect(getCompletionScore("<{([{{}}[<[[[<>{}]]]>[]]")).toEqual(294);
  });


  it("should work with sample data for part 1", () => {

    expect(part1(input)).toEqual(26397);

  });


  it("should work with sample data for part 2", () => {

    expect(part2(input)).toEqual(288957);

  });

});
