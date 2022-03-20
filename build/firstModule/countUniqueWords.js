"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generalFunctions_1 = require("./generalFunctions");
function countUniqueWordsInSentence(sentence) {
    const words = (0, generalFunctions_1.arrayFromString)(sentence);
    const wordsCountObj = {};
    let uniqueWordsAmount = 0;
    for (let i = 0; i < words.length; i++) {
        let currentEleement = words[i];
        if (!(currentEleement in wordsCountObj)) {
            wordsCountObj[currentEleement] = 1;
        }
        else {
            wordsCountObj[currentEleement]++;
        }
    }
    for (const word in wordsCountObj) {
        wordsCountObj[word] === 1 && uniqueWordsAmount++;
    }
    return uniqueWordsAmount;
}
