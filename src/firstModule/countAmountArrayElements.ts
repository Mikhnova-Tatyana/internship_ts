import { Callback } from "./generalFunctions";

function countAmountArrayElements(
  array: number[], 
  callback: Callback
  ): number {
    let counter: number = 0;

    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        counter++;
      }
    }
    return counter;
  }