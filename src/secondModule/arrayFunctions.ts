Object.defineProperty(Array.prototype, "customForEach", {
  value: function<T> (
    callback: (element: T, index?: number, thisArray?: T[]) => void
  ) {
    for (let i: number = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  },
});

Object.defineProperty(Array.prototype, "customMap", {
  value: function<T> (
    callback: (element: T, index?: number, thisArray?: T) => T
  ) {
    const resultArray: T[] = [];
    for (let i: number = 0; i < this.length; i++) {
      resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
  },
});

Object.defineProperty(Array.prototype, "customFilter", {
  value: function<T> (
    callback: (element: T, index?: number, thisArray?: T[]) => T[]
  ) {
    const resultArray: T[] = [];
    for (let i: number = 0; i < this.length; i++) {
      if(callback(this[i], i, this)){
        resultArray.push(this[i]);
      }
    }
    return resultArray;
  },
});

Object.defineProperty(Array.prototype, "customFind", {
  value: function<T> (
    callback: (element: T, index?: number, thisArray?: T[]) => T | undefined
  ) {
    for (let i: number = 0; i < this.length; i++) {
      if(callback(this[i], i, this)){
        return this[i];
      }
    }
    return undefined;
  },
});

Object.defineProperty(Array.prototype, "customReduce", {
  value: function<T> (
    callback: (accumulator: T | undefined, element: T, index?: number, thisArray?: T[])  => T, 
    accumulator?: T
  ) {
    let index: number = 0;
    if (arguments.length < 2) {
      index = 1;
      accumulator = this[0];
  }
  while (index < this.length) {
    accumulator = callback(accumulator, this[index], index, this);
    ++index;
  }
  return accumulator;
  },
});