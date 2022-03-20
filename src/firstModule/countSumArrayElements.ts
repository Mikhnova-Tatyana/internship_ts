import { Callback } from "./generalFunctions";

function countSumArrayElements(
  array: number[], 
  callback: Callback
  ): number {
    if (array.length === 0) {
        throw new Error('array length cannot be zero');
    }
    let sum: number = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            sum += array[i];
        }
    }
    return sum;
  }

  
function countSumArrayElementsRecurse(
  array: number[], 
  callback: Callback, 
  index?: number
  ): number {
    if (array.length === 0) {
        throw new Error('array length cannot be zero');
    }
    index = index || 0;
    let sum: number = array[index];

    if (++index < array.length && callback(array[index])) {
        sum += countSumArrayElementsRecurse(array, callback, index);
    }
    return sum;
  }