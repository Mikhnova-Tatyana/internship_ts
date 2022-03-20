type ContextType = {
  [key: string | symbol ]: any;
}

interface Function {
  customCall(context: ContextType, ...args: any[]): any;
  customBind(context: ContextType, ...args: any[]): any;
}

Function.prototype.customCall = function (context: ContextType, ...args: any[]): any {
  const func = this;
  let symbol: symbol = Symbol();
  context[symbol] = func;
  let result = context[symbol](...args);
  delete context[symbol];
  return result;
}

Function.prototype.customBind = function (context: ContextType, ...args: any[]): any {
  const func = this;
  return function (...rest: any[]) {
      let symbol: symbol = Symbol();
      context[symbol] = func;
      let result = context[symbol](...args.concat(rest));
      delete context[symbol];
      return result;
  }
}