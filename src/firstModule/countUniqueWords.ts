import { arrayFromString, INumberObject } from "./generalFunctions";

function countUniqueWordsInSentence(sentence: string): number {
  const words: string[] = arrayFromString(sentence);
  const wordsCountObj: INumberObject = {};
  let uniqueWordsAmount: number = 0;

  for (let i: number = 0; i < words.length; i++) {
      let currentElement: string = words[i];
      if (!(currentElement in wordsCountObj)) {
          wordsCountObj[currentElement] = 1;
      } else {
          wordsCountObj[currentElement]++;
      }
  }
    let word: string;
    for (word in wordsCountObj) {
        wordsCountObj[word] === 1 && uniqueWordsAmount++;
    }
    return uniqueWordsAmount;
}
