import { INumberObject } from "./generalFunctions";

function checkIsAnagram(firstWord: string, secondWord: string): boolean {
    if (firstWord.length !== secondWord.length) {
        return false;
    }
    let charSumFirst: number = countCharSum(firstWord);
    let charSumSecond: number = countCharSum(secondWord);

    return (charSumFirst === charSumSecond);
}

function countCharSum(word: string): number {
    let charSum: number = 0;
    for (let i: number = 0; i < word.length; i++) {
        charSum += word.charCodeAt(i);
    }
    return charSum;
}

function checkIsAnagram2(firstWord: string, secondWord: string): boolean {
    if (firstWord.length !== secondWord.length) {
        return false;
    }
    const firstCharObject: INumberObject = getCharObject(firstWord);
    const secondCharObject: INumberObject = getCharObject(secondWord);

    let char: string;
    for (char in firstCharObject) {
        if (firstCharObject[char] !== secondCharObject[char]) {
            return false;
        }
    }
    return true;
}

function getCharObject(word: string): INumberObject {
    const charObject: INumberObject = {};
    word = word.toLowerCase();
    let char: string;
    for (char of word) {
        charObject[char] = ++charObject[char] || 1;
    }
    return charObject;
}