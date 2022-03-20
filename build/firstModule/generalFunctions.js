"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayFromString = void 0;
function arrayFromString(string) {
    let array = [];
    let temporaryString = '';
    for (let i = 0; i <= string.length - 1; i++) {
        if (string[i] !== ' ') {
            temporaryString += string[i];
            if (i === string.length - 1) {
                array.push(temporaryString);
            }
        }
        else {
            array.push(temporaryString);
            temporaryString = '';
        }
    }
    return array;
}
exports.arrayFromString = arrayFromString;
