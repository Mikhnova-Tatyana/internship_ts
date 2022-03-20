function countFiguresInNumber(number: number): number {
  let counter: number = 0;

  while (number > 0) {
      number = Math.floor(number / 10) | 0;
      counter++;
  }
  return counter;
}

function countFiguresInNumberRecurse(number: number, counter?: number): number {
  counter = counter || 0;

  if (Math.floor(number / 10) === 0) {
      return ++counter;
  }
  return countFiguresInNumberRecurse(Math.floor(number / 10), ++counter);
}