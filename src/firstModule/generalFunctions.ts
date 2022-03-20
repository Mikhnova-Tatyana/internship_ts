export interface INumberObject {
  [key: string]: number;
}

export type Callback = (element: number) => boolean;

export function arrayFromString(string: string): string[] {
  let array: string[] = [];
  let temporaryString: string = '';

  for (let i = 0; i <= string.length - 1; i++) {
      if (string[i] !== ' ') {
          temporaryString += string[i];
          if (i === string.length - 1) {
              array.push(temporaryString);
          }
      } else {
          array.push(temporaryString);
          temporaryString = '';
      }
  }
  return array;
}