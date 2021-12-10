const path = require('path');
const fs = require('fs');
const { part1, part2 } = require('./solution');

describe("Day 2", () => {

  const input = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");

  it("should work with sample data for part 1", () => {

    expect(part1(input)).toEqual(1);

  });


  it("should work with sample data for part 2", () => {

    expect(part2(input)).toEqual(1);

  });

});
