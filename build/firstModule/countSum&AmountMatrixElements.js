"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countSumMatrixElements(matrix, callback) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(matrix[i][j])) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
function countAmountMatrixElements(matrix, callback) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (callback(matrix[i][j])) {
                counter++;
            }
        }
    }
    return counter;
}
