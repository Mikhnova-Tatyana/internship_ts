type ContextType<T> = { 
  [key: string | symbol ]: T; 
} 
 
 
Object.defineProperty(Function.prototype, "customCall", { 
  value: function<T> (this: Function, context: ContextType<Function>, ...args: T[]): T { 
    let func = this; 
    let symbol: symbol = Symbol(); 
    context[symbol] = func; 
    let result: T = context[symbol](...args); 
    delete context[symbol]; 
    return result; 
  }, 
});


Object.defineProperty(Function.prototype, "customBind", {
  value: function<T> (this: Function, context: ContextType<Function>, ...args: T[]): Function {
    const func = this;

    return function (...rest: T[]): T {
      let symbol: symbol = Symbol();
      context[symbol] = func;
      let result: T = context[symbol](...args.concat(rest));
      delete context[symbol];
      return result;
    };
  },
});