"use strict";
function checkNumberIsPositive(number) {
    return ((number >> 31) & 1) !== 1;
}
function countBits(number) {
    const countBitsObject = {
        zeroBits: 0,
        unitBits: 0,
    };
    for (let i = 0; i < 32; i++) {
        if ((number & 1 << i) === 1 << i) {
            ++countBitsObject.unitBits;
        }
    }
    countBitsObject.zeroBits = 32 - countBitsObject.unitBits;
    return countBitsObject;
}
function bitwiseInvert(number) {
    return (-number - 1);
}
function bitwiseInvert2(number) {
    return number ^ -1;
}
function bitwiseInvert3(number) {
    for (let i = 0; i < 32; i++) {
        if (((number >> i) & 1) === 0) {
            number ^= (0 << i);
        }
        number ^= (1 << i);
    }
    return number;
}
