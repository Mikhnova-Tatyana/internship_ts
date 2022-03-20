"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countMinToMaxSum(min, max, callback) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        callback(i) && (sum += i);
    }
    return sum;
}
function countMinToMaxSumRecurse(min, max, callback) {
    let sum = 0;
    callback(min) && (sum += min);
    if (++min <= max) {
        sum += countMinToMaxSumRecurse(min, max, callback);
    }
    return sum;
}
