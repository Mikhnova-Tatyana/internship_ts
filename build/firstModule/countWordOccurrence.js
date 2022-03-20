"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generalFunctions_1 = require("./generalFunctions");
function countWordOccurrenceInSentence(sentence) {
    const words = (0, generalFunctions_1.arrayFromString)(sentence);
    const wordsCountObject = {};
    for (let i = 0; i < words.length; i++) {
        let currentElement = words[i];
        if (!(currentElement in wordsCountObject)) {
            wordsCountObject[currentElement] = 1;
        }
        else {
            wordsCountObject[currentElement]++;
        }
    }
    return wordsCountObject;
}
