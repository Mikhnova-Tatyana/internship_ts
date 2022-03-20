import { INumberObject } from "./generalFunctions";

function factorial(number: number): number {
  let result: number = 1;
  while (number > 0) {
      result *= number--;
  }
  return result;
}


function factorialRecursion(number: number): number {
  if (number === 0) {
      return 1;
  }
  if (number != 1) {
      return number * factorialRecursion(number - 1);
  }
  return 1;
}


const factorialRecursionMemo = (function () {
  const memo: INumberObject = {};
  return function factorial(number: number): number {
      let result: number;

      if (memo[number] !== undefined) {
          result = memo[number];
      } else {
          if (number === 0 || number === 1) {
              result = 1;
          } else {
              result = number * factorial(number - 1);
          }

          memo[number] = result;
      }
      return result;
  };
})();