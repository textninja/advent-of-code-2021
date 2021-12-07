class Counter {

  constructor(lst) {
    this._countMap = new Map;

    if (lst) {
      for (let val of lst) {
        this.inc(val);
      }
    }
  }

  inc(val, amt=1) {
    this._countMap.set(val, this.count(val)+amt);
  }

  count(val) {
    return this._countMap.get(val)||0;
  }

  counts() {
    return [...this._countMap];
  }

  *[Symbol.iterator]() {
    for (let k of this._countMap.keys()) {
      yield [k, this._countMap.get(k)];
    }
  }

  total() {
    let result = 0;
    for (let v of this._countMap.values()) {
      result += v;
    }
    return result;
  }

}


module.exports = {
  Counter
};
