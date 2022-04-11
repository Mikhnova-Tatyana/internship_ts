"use strict";
Object.defineProperty(Array.prototype, "bubbleSort", {
    value: function (callback) {
        let currentArray = this;
        for (let i = 0; i < currentArray.length; i++) {
            for (let j = 0; j < currentArray.length - 1 - i; j++) {
                if (callback(currentArray[j], currentArray[j + 1])) {
                    let temp = currentArray[j];
                    currentArray[j] = currentArray[j + 1];
                    currentArray[j + 1] = temp;
                }
            }
        }
        return currentArray;
    },
});
Object.defineProperty(Array.prototype, "selectionSort", {
    value: function (callback) {
        let currentArray = this;
        for (let i = 0; i < currentArray.length - 1; i++) {
            let index = i;
            for (let j = i + 1; j < currentArray.length; j++) {
                if (callback(currentArray[j], currentArray[index])) {
                    index = j;
                }
            }
            let temp = currentArray[i];
            currentArray[i] = currentArray[index];
            currentArray[index] = temp;
        }
        return currentArray;
    },
});
