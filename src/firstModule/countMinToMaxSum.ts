import { Callback } from "./generalFunctions";

function countMinToMaxSum(
    min: number, 
    max: number, 
    callback: Callback
    ): number {
        let sum: number = 0;

        for (let i: number = min; i <= max; i++) {
            callback(i) && (sum += i);
        }
        return sum;
    }

function countMinToMaxSumRecurse(
    min: number, 
    max: number, 
    callback: Callback
    ): number {
        let sum: number = 0;

        callback(min) && (sum += min);

        if (++min <= max) {
            sum += countMinToMaxSumRecurse(min, max, callback);
        }

        return sum;
    }