"use strict";
function convertDecimalToBinary(number) {
    let num = number;
    let binary = (num % 2).toString();
    while (num > 1) {
        num = Math.floor(num / 2);
        binary = (num % 2) + (binary);
    }
    return binary;
}
function convertBinaryToDecimal(number) {
    let sum = 0;
    let numberToTheSecondPower = 0;
    let counter = 0;
    const numberArray = String(number).split("");
    for (let i = numberArray.length - 1; i >= 0; i--) {
        numberToTheSecondPower = numberArray[i] * 2 ** counter;
        sum += numberToTheSecondPower;
        counter++;
    }
    return sum;
}
