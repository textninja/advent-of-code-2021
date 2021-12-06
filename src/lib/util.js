class Counter {

  constructor(lst) {
    this._countMap = new Map;

    if (lst) {
      for (let val of lst) {
        this.inc(val);
      }
    }
  }

  inc(val) {
    this._countMap.set(val, this.count(val)+1);
  }

  count(val) {
    return this._countMap.get(val)||0;
  }

  counts() {
    return [...this._countMap];
  }

}


module.exports = {
  Counter
};
