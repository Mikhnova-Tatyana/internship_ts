import { arrayFromString, INumberObject } from "./generalFunctions";

function countWordOccurrenceInSentence(sentence: string): INumberObject {
  const words: string[] = arrayFromString(sentence);
  const wordsCountObject: INumberObject = {};

  for (let i: number = 0; i < words.length; i++) {
      let currentElement: string = words[i];
      if (!(currentElement in wordsCountObject)) {
          wordsCountObject[currentElement] = 1;
      } else {
          wordsCountObject[currentElement]++;
      }
  }
  return wordsCountObject;
}