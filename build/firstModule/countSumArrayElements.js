"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countSumArrayElements(array, callback) {
    if (array.length === 0) {
        throw new Error('array length cannot be zero');
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            sum += array[i];
        }
    }
    return sum;
}
function countSumArrayElementsRecurse(array, callback, index) {
    if (array.length === 0) {
        throw new Error('array length cannot be zero');
    }
    index = index || 0;
    let sum = array[index];
    if (++index < array.length && callback(array[index])) {
        sum += countSumArrayElementsRecurse(array, callback, index);
    }
    return sum;
}
