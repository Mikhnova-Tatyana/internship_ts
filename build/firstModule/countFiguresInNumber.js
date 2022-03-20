"use strict";
function countFiguresInNumber(number) {
    let counter = 0;
    while (number > 0) {
        number = Math.floor(number / 10) | 0;
        counter++;
    }
    return counter;
}
function countFiguresInNumberRecurse(number, counter) {
    counter = counter || 0;
    if (Math.floor(number / 10) === 0) {
        return ++counter;
    }
    return countFiguresInNumberRecurse(Math.floor(number / 10), ++counter);
}
