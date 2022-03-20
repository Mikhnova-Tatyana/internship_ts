"use strict";
Function.prototype.customCall = function (context, ...args) {
    const func = this;
    let symbol = Symbol();
    context[symbol] = func;
    let result = context[symbol](...args);
    delete context[symbol];
    return result;
};
Function.prototype.customBind = function (context, ...args) {
    const func = this;
    return function (...rest) {
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol](...args.concat(rest));
        delete context[symbol];
        return result;
    };
};
