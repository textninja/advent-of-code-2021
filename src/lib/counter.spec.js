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

  it("should be possible to increment by arbirtrary amounts", () => {
    let c = new Counter;
    c.inc("foo", 42);

    expect(c.count("foo")).toEqual(42);
  });

  it("should be possible to iterate through counts", () => {
    let c = new Counter;
    c.inc("foo");
    c.inc("bar", 5);
    let steps = 0;
    for (let [a, b] of c) {
      steps++;
    }
    expect(steps).toEqual(2);
  });

  it("should display a total", () => {
    let c = new Counter;
    expect(c.total()).toEqual(0);
    c.inc("a", 1);
    expect(c.total()).toEqual(1);
    c.inc("b", 5);
    expect(c.total()).toEqual(6);
    c.inc("a");
    expect(c.total()).toEqual(7);
  })

});
