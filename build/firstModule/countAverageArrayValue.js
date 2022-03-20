"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countAverageArrayValue(array, callback) {
    if (array.length === 0) {
        throw new Error('array length cannot be zero');
    }
    let counter = 0;
    let sum = 0;
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
function countAverageMatrixValue(matrix, callback) {
    if (matrix.length === 0) {
        throw new Error('matrix length cannot be zero');
    }
    let counter = 0;
    let sum = 0;
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
