interface ITrafficLights{
    colors: string[];
    limit: number;
    set setLimit(limit: number);
    [Symbol.iterator](): {
        colors: string[];
        limit: number;
        counter: number;
        index: number;
        next(): IteratorYieldResult<string> | IteratorReturnResult<undefined>
    }
}

interface IteratorYieldResult<TYield> {
    value: TYield;
    done?: false;
}

interface IteratorReturnResult<TReturn> {
    value: TReturn;
    done: true;
}

const trafficLights: ITrafficLights = {

  colors: ['red', 'yellow', 'green', 'yellow'],
  limit: 0,
  set setLimit(limit: number) {
      this.setLimit = limit;
  },
  [Symbol.iterator]() {
      return {
          colors: this.colors,
          limit: this.limit,
          counter: 0,
          index: 0,
          next() {
              if (++this.counter <= this.limit) {
                  let result: IteratorYieldResult<string> = {
                      value: this.colors[this.index],
                      done: false,
                  };
                  if (this.index === 3) {
                      this.index = 0;
                  } else {
                      ++this.index;
                  }
                  return result;
              }
              let result: IteratorReturnResult<undefined> = {
                    value: undefined,
                    done: true,
                };
                return result;
          },
      };
  },
}

// trafficLights.limit = 10

// for (let item of trafficLights) {
//     console.log(item);
// }


function* showColors(): IterableIterator<string> {
let colors: string[] = ['red', 'yellow', 'green', 'yellow'];
  for (let color of colors) {
    yield color;
  }
}

function* trafficLights2(limit: number): IterableIterator<string> {
  let counter: number = 0;
  while (counter++ < limit) {
      yield* showColors();
  }
}

// for (let item of trafficLights(2)) {
//     console.log(item);
// }