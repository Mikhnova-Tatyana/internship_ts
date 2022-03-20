"use strict";
const trafficLights = {
    colors: ['red', 'yellow', 'green', 'yellow'],
    limit: 0,
    set setLimit(limit) {
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
                    let result = {
                        value: this.colors[this.index],
                        done: false,
                    };
                    if (this.index === 3) {
                        this.index = 0;
                    }
                    else {
                        ++this.index;
                    }
                    return result;
                }
                let result = {
                    value: undefined,
                    done: true,
                };
                return result;
            },
        };
    },
};
// trafficLights.limit = 10
// for (let item of trafficLights) {
//     console.log(item);
// }
function* showColors() {
    let colors = ['red', 'yellow', 'green', 'yellow'];
    for (let color of colors) {
        yield color;
    }
}
function* trafficLights2(limit) {
    let counter = 0;
    while (counter++ < limit) {
        yield* showColors();
    }
}
// for (let item of trafficLights(2)) {
//     console.log(item);
// }
