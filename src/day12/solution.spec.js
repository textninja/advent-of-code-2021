const path = require('path');
const fs = require('fs');
const { part1, part2, parseGraphInput } = require('./solution');
const { Graph } = require('graphology');

describe("Day 12", () => {

  const input = fs.readFileSync(path.join(__dirname, "sample.txt"), "utf8");

  it("should process graph with two nodes and one edge", () => {

    let exampleLine = "start-A";
    let processed = parseGraphInput(exampleLine);

    expect(processed).toBeInstanceOf(Graph);
    expect(processed.edges().length).toEqual(1);
    expect(processed.nodes().length).toEqual(2);

  });

  it("should process graph with 3 nodes and two edges", () => {

    let exampleGraph = `

      start-A
      A-B
    
    `;

    let processed = parseGraphInput(exampleGraph);

    expect(processed).toBeInstanceOf(Graph);
    expect(processed.nodes()).toHaveLength(3);
    expect(processed.edges()).toHaveLength(2);

    expect(processed.hasNode("start")).toBeTruthy();
    expect(processed.hasNode("F")).not.toBeTruthy();

  });

  it("should work with sample data for part 1", () => {

    expect(part1(input)).toEqual(10);

  });


  it("should work with mid sized example for part 1", () => {

    expect(
      part1(`
        dc-end
        HN-start
        start-kj
        dc-start
        dc-HN
        LN-dc
        HN-end
        kj-sa
        kj-HN
        kj-dc
      `)
    ).toEqual(19);

  });

  it("should work with larger example for part 1", () => {

    expect(
      part1(`
        fs-end
        he-DX
        fs-he
        start-DX
        pj-DX
        end-zg
        zg-sl
        zg-pj
        pj-he
        RW-he
        fs-DX
        pj-RW
        zg-RW
        start-pj
        he-WI
        zg-he
        pj-fs
        start-RW
      `)
    ).toEqual(226);

  });



  it("should work with sample data for part 2", () => {

    expect(part2(input)).toEqual(36);

  });

});
