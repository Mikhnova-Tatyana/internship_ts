import { Callback } from "./generalFunctions";

function countSumMatrixElements(
  matrix: number[][],
  callback: Callback
  ): number {
    let sum: number = 0;

    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number  = 0; j < matrix[i].length; j++) {
            if (callback(matrix[i][j])) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
  }

function countAmountMatrixElements(
  matrix: number[][], 
  callback: Callback
  ): number {
    let counter: number = 0;

    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (callback(matrix[i][j])) {
                counter++;
            }
        }
    }
    return counter;
  }