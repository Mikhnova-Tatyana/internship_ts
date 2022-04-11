Object.defineProperty(Array.prototype, "bubbleSort", {
  value: function<T> (
    callback: (firstElement: T, secondElement: T) => boolean
  ) {
    let currentArray: T[] = this;
    for (let i: number = 0; i < currentArray.length; i++) {
      for (let j: number = 0; j < currentArray.length - 1 - i; j++) {
        if (callback(currentArray[j], currentArray[j + 1])){
          let temp: T = currentArray[j];
          currentArray[j] = currentArray[j + 1];
          currentArray[j + 1] = temp;
        }
      }
    }
    return currentArray;
  },
});

Object.defineProperty(Array.prototype, "selectionSort", {
  value: function<T> (
    callback: (firstElement: T, secondElement: T) => boolean
  ) {
    let currentArray: T[] = this;
    for (let i: number = 0; i < currentArray.length - 1; i++) {
      let index: number = i;
      for (let j: number = i + 1; j < currentArray.length; j++) {
        if (callback(currentArray[j], currentArray[index])) {
          index = j;
        }
      }
      let temp: T = currentArray[i];
      currentArray[i] = currentArray[index];
      currentArray[index] = temp;
    }
    return currentArray;
  },
});