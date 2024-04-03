const fn = function(x1,x2,x3,x4) { return  x1 + x2 + x3 + x4; };

function partialUsingArguments(fn, ...args1) {
 return (...args) => fn(...args1, ...args);
}

let a = partialUsingArguments(fn, 'a')('b','c','d') //=> 'abcd'
let b = partialUsingArguments(fn, 'a','b')('c','d') //=> 'abcd'
let c = partialUsingArguments(fn, 'a','b','c')('d') //=> 'abcd'
let d = partialUsingArguments(fn, 'a','b','c','d')() //=> 'abcd'