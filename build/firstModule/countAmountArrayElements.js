"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countAmountArrayElements(array, callback) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            counter++;
        }
    }
    return counter;
}
