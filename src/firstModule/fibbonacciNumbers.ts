import { INumberObject } from "./generalFunctions";

interface IFibonacciObject {
    firstFibonacciNumber: number;
    secondFibonacciNumber: number;
    limit: number;
    set setLimit(limit: number);
    [Symbol.iterator]: () => IterableIterator<number>;
}

let iterableFibonacciObject: IFibonacciObject = {
  firstFibonacciNumber: 0,
  secondFibonacciNumber: 1,
  limit: 0,
  set setLimit(limit: number) {
      this.setLimit = limit;
  },
  [Symbol.iterator]: function* () {
      let current = this.firstFibonacciNumber;
      let next = this.secondFibonacciNumber;
      let limit = this.limit;
      while (next <= limit) {
          yield current;
          let nextNumber = current + next;
          current = next;
          next = nextNumber;
      };
  },
};

// iterableFibonacciObject.limit = 10
// for (let item of iterableFibonacciObject) {
//     console.log(item);
// }

function fibonacciArrayRecurse(number: number, index?: number, fibonacciArray?: number[]): number[] {

  index = index || 1;
  fibonacciArray = fibonacciArray || [0, 1].splice(0, number);

  if (++index < number) {
      fibonacciArray.push(fibonacciArray[index - 1] + fibonacciArray[index - 2]);
      fibonacciArrayRecurse(number, index, fibonacciArray);
  }

  return fibonacciArray;
}


const fibonacciArrayRecursionMemo = (function () {
  const memo: INumberObject = {};

  return function pushFibonacci(number: number, fibonacciArray?: number[]) {

      fibonacciArray = fibonacciArray || [];

      function getFibonacciNumber(number: number) {
          let result: number = 0;

          if (memo[number] !== undefined) {
              result = memo[number];
              return result;
          }

          if (number <= 1) {
              memo[number] = number;
              result = number;
              return result;
          } else {
              result +=
                  getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
              memo[number] = result;
          }
          return result;
      }

      if (--number >= 0) {
          fibonacciArray.unshift(getFibonacciNumber(number));
          pushFibonacci(number, fibonacciArray);
      }

      return fibonacciArray;
  }
})()