const { Counter } = require("./util");


describe("Counter", () => {

  it("should be of type Counter", () => {
    let c = new Counter;
    expect(c).toBeInstanceOf(Counter);
  });

  it("should return 0 for nonexistent items", () => {
    let c = new Counter;
    expect(c.count(null)).toEqual(0);
  });

  it("should return the correct count in simple cases", () => {
    let c = new Counter;
    c.inc(1);
    expect(c.count(1)).toEqual(1);
  });

  it("should allow initialization by array", () => {
    let c = new Counter([1, 1, 2, 2, 2, 2, 3, 3, 3]);

    expect(c.count(1)).toEqual(2);
    expect(c.count(2)).toEqual(4);
    expect(c.count(3)).toEqual(3);
    expect(c.count(4)).toEqual(0);

    c.inc(1);
    expect(c.count(1)).toEqual(3);

  });

  it("should return multiple counts", () => {
    let c = new Counter([1, 2]);

    expect(c.counts()).toEqual([[1,1],[2,1]]);
  });

});
