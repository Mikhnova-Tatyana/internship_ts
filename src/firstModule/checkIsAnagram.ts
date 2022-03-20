import { INumberObject } from "./generalFunctions";

function checkIsAnagram(firstWord: string, secondWord: string): boolean {
    if (firstWord.length !== secondWord.length) {
        return false;
    }
    let charSumFirst = countCharSum(firstWord);
    let charSumSecond = countCharSum(secondWord);

    return (charSumFirst === charSumSecond);
}

function countCharSum(word: string): number {
    let charSum = 0;
    for (let i = 0; i < word.length; i++) {
        charSum += word.charCodeAt(i);
    }
    return charSum;
}

function checkIsAnagram2(firstWord: string, secondWord: string): boolean {
    if (firstWord.length !== secondWord.length) {
        return false;
    }
    const firstCharObject = getCharObject(firstWord);
    const secondCharObject = getCharObject(secondWord);

    for (let char in firstCharObject) {
        if (firstCharObject[char] !== secondCharObject[char]) {
            return false;
        }
    }
    return true;
}

function getCharObject(word: string): INumberObject {
    const charObject: INumberObject = {};
    word = word.toLowerCase();
    for (let char of word) {
        charObject[char] = ++charObject[char] || 1;
    }
    return charObject;
}