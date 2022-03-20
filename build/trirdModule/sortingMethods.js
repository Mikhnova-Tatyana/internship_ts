"use strict";
Array.prototype.bubbleSort = function (callback) {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (callback(this[j], this[j + 1])) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};
Array.prototype.selectionSort = function (callback) {
    for (let i = 0; i < this.length - 1; i++) {
        let index = i;
        for (let j = i + 1; j < this.length; j++) {
            if (callback(this[j], this[index])) {
                index = j;
            }
        }
        let temp = this[i];
        this[i] = this[index];
        this[index] = temp;
    }
    return this;
};
