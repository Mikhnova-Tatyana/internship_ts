import { arrayFromString, INumberObject } from "./generalFunctions";

function countUniqueWordsInSentence(sentence: string): number {
  const words: string[] = arrayFromString(sentence);
  const wordsCountObj: INumberObject = {};
  let uniqueWordsAmount: number = 0;

  for (let i = 0; i < words.length; i++) {
      let currentEleement = words[i];
      if (!(currentEleement in wordsCountObj)) {
          wordsCountObj[currentEleement] = 1;
      } else {
          wordsCountObj[currentEleement]++;
      }
  }
      for (const word in wordsCountObj) {
          wordsCountObj[word] === 1 && uniqueWordsAmount++;
      }
      return uniqueWordsAmount;
}
