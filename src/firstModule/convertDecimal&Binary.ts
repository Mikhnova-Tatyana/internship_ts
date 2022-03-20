function convertDecimalToBinary(number: number): string {
  let num = number;
  let binary: string = (num % 2).toString();
  while (num > 1) {
    num = Math.floor(num / 2);
    binary = (num % 2) + (binary);
  }
  return binary;
}

function convertBinaryToDecimal(number: number): number {

  let sum: number = 0;
  let numberToTheSecondPower: number = 0;
  let counter: number = 0;
  const numberArray: any[] = String(number).split("");

  for (let i = numberArray.length - 1; i >= 0; i--) {
    numberToTheSecondPower = numberArray[i] * 2 ** counter;
    sum += numberToTheSecondPower;
    counter++;
  }

  return sum;
}