function slow(x) {
  setTimeout(() => console.log('slow function'),2000);
  x['name'] = x['name'] + 'mierda'
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if(cache.has(x)) {
      return `from cache ${cache.get(x).name}`;
    }
    let result = func(x);

    cache.set(x, result);
    return `out cache ${result.name}`;
  }
}

let slowCache = cachingDecorator(slow);

let obj = {name: 'pepe'};
let otherObj = {name: 'maria'}

console.log(slowCache(obj));
console.log(slowCache(obj));
console.log(slowCache(otherObj));
console.log(slowCache(otherObj))


let map = new Map();
map.set('name', 'jose');
console.log(map)





let worker = {
  duplicate(arg) {
    return arg * 2;
  },
  slow(x) {
    return this.duplicate(x);
  }
}

function cachingDecoratorSlow(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return `from cache ${cache.get(x)}`;
    }
    let result = func.call(this, x);
    cache.set(x, result)
    return `out of cache ${result}`;
  }
}

 let newFunction = worker.slow;
 console.log(newFunction.call(worker, 5));

console.log(worker.slow(2));

worker.slow = cachingDecoratorSlow(worker.slow);
console.log(worker.slow(3));
console.log(worker.slow(3))




let secondWorker = {
  dupplicate(min, max) {
    return min + max;
  }
}

function cachingDecoratorSecondWorker(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(Array.from(arguments));
    if(cache.has(key)) {
      return `from cache ${cache.get(key)}`;
    } else {
      console.log(...arguments);
      let result = func.call(this,...arguments);
      cache.set(key, result);
      return `out cache ${result}`;
    }
  }
}

function hash(args) {
  return args.join();
}

secondWorker.dupplicate = cachingDecoratorSecondWorker(secondWorker.dupplicate, hash)
console.log(secondWorker.dupplicate(2,2));
console.log(secondWorker.dupplicate(2, 2));



function work(a, b) {
  console.log(a + b);
}

function cachinWork(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.call(this, ...args);
  }
  wrapper.calls = [];
  return wrapper;
}

work = cachinWork(work);
work(1, 1);
work(2, 2);

for (let item of work.calls) {
  console.log('call:' + item);
}

function f(x){
  console.log(x);
  //return x * 2;
}

function delay(f, ms) {
  return function(x) {
    setTimeout(() => {
      f(x)
    }, ms)
  }
}

function secondDelay(f, ms) {
  let wrapper = null;
  setTimeout(() => {
    wrapper = function(x) {
      f(x)
    }
  }, ms)

  do {
    if(!wrapper) {
      return wrapper;
    }

  } while(!wrapper)

}


//f = delay(f, 5000);
f = secondDelay(f, 3000);
f(4);


