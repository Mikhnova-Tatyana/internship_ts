"use strict";
Object.defineProperty(Function.prototype, "customCall", {
    value: function (context, ...args) {
        let func = this;
        let symbol = Symbol();
        context[symbol] = func;
        let result = context[symbol](...args);
        delete context[symbol];
        return result;
    },
});
Object.defineProperty(Function.prototype, "customBind", {
    value: function (context, ...args) {
        const func = this;
        return function (...rest) {
            let symbol = Symbol();
            context[symbol] = func;
            let result = context[symbol](...args.concat(rest));
            delete context[symbol];
            return result;
        };
    },
});
