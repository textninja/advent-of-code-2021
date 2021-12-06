const path = require('path');
const fs = require('fs');
const { part1, part2, part1Refactored } = require('./solution');

describe("Day 6", () => {

  const input = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");

  it("should work with sample data for part 1", () => {

    expect(part1(input)).toEqual(5934);

  });

  it("should work with refactored code using sample data for part 1", () => {

    expect(part1Refactored(input)).toEqual(5934);

  });


  it("should work with sample data for part 2", () => {

    expect(part2(input)).toEqual(26984457539);

  });

});
