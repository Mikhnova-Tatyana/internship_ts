import { Callback } from "./generalFunctions";

function countAverageArrayValue(array: number[], callback: Callback): number | null {
  if (array.length === 0) {
      throw new Error('array length cannot be zero');
  }
  let counter: number = 0;
  let sum: number = 0;

  for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
          counter++;
          sum += array[i];
      }
  }
  if (counter > 0) {
      return sum / counter;
  } 
    return null;
}


function countAverageMatrixValue(matrix: number[][], callback: Callback): number | null {
  if (matrix.length === 0) {
      throw new Error('matrix length cannot be zero');
  }
  let counter: number = 0;
  let sum: number = 0;

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (callback(matrix[i][j])) {
              sum += matrix[i][j];
              counter++;
          }
      }
  }
  if (counter > 0) {
    return sum / counter;
} 
  return null;
}