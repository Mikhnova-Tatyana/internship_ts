"use strict";
function transposeMatrix(matrix) {
    if (matrix.length === 0) {
        throw new Error('matrix length cannot be zero');
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
}
function addMatrix(matrix1, matrix2) {
    if (matrix1.length === 0 || matrix2.length === 0) {
        throw new Error('matrix length cannot be zero');
    }
    if (matrix1.length !== matrix2.length) {
        throw new Error('matrices must be equal');
    }
    const matrixResult = [];
    for (let i = 0; i < matrix1.length; i++) {
        matrixResult.push([]);
        for (let j = 0; j < matrix1[i].length; j++) {
            matrixResult[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return matrixResult;
}
