const memoize = (func) => {
  let cache;
  return () => {
    if (!cache) {
      cache = func();
      return cache;
    }
    const temp = cache;
    cache = func();
    return temp;
  };
};

const memoizer = memoize(() => Math.random());

console.log(memoizer());
console.log(memoizer());
console.log(memoizer());
