const path = require('path');
const fs = require('fs');
const { part1, part2, deduce } = require('./solution');
const { TestWatcher } = require('@jest/core');

describe("Day 8", () => {

  const input = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");

  it("should work with sample data for part 1", () => {

    expect(part1(input)).toEqual(26);

  });


  it("should work with sample data for part 2", () => {

    expect(part2(input)).toEqual(61229);

  });

  describe("deductions", () => {

    test("first example", () => {
      expect(deduce("be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe")).toEqual(8394);
    });

  });

});


