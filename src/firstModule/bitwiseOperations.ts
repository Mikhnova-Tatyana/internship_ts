function checkNumberIsPositive(number: number): boolean {
    return ((number >> 31) & 1) !== 1;
}

type CountBitsObject = {
    zeroBits: number;
    unitBits: number;
}

function countBits(number: number): CountBitsObject {
  const countBitsObject: CountBitsObject = {
      zeroBits: 0,
      unitBits: 0,
  };
  for (let i = 0; i < 32; i++) {
      if ((number & 1 << i) === 1 << i) {
          ++countBitsObject.unitBits;
      } 
  }
  countBitsObject.zeroBits = 32 - countBitsObject.unitBits;
  return countBitsObject;
}

function bitwiseInvert(number: number): number {
    return (-number - 1);
}

function bitwiseInvert2(number: number): number {
    return number ^ -1;
}

function bitwiseInvert3(number: number): number {
    for (let i = 0; i < 32; i++) {
        if (((number >> i) & 1) === 0) {
            number ^= (0 << i);
        }
        number ^= (1 << i);
    }
    return number;
}