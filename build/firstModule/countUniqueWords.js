"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generalFunctions_1 = require("./generalFunctions");
function countUniqueWordsInSentence(sentence) {
    const words = (0, generalFunctions_1.arrayFromString)(sentence);
    const wordsCountObj = {};
    let uniqueWordsAmount = 0;
    for (let i = 0; i < words.length; i++) {
        let currentElement = words[i];
        if (!(currentElement in wordsCountObj)) {
            wordsCountObj[currentElement] = 1;
        }
        else {
            wordsCountObj[currentElement]++;
        }
    }
    let word;
    for (word in wordsCountObj) {
        wordsCountObj[word] === 1 && uniqueWordsAmount++;
    }
    return uniqueWordsAmount;
}
