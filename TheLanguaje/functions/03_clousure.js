function sayHiBye(name, lastName) {

  function fullName() {
    return `${name} ${lastName}`;
  }

  console.log(fullName('pepe', 'rod'))

}

sayHiBye('pepe', 'rod')

function makeount() {
  let count = 0;
  return function(){
    return ++count;
  }
}

let counter = makeount();
console.log(counter());
console.log(counter());
console.log(counter());

let otherCounter = makeount();
console.log(otherCounter())

function makeRandon() {
  return function() {
    return Math.random().toFixed(1) * 10;
  }
}
let arrRandon = [makeRandon(), makeRandon(), makeRandon()];

for (let item of arrRandon) {
  console.log(item())
}

function Counter() {
  Counter.staticCount = (Counter.staticCount ?? 0) + 1;
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  }
}

let firstCounter = new Counter();
let secondCounter = new Counter();

console.log(firstCounter.up());
console.log(secondCounter.up());
console.log(firstCounter.down());

console.log(secondCounter.up());

console.log(Counter.staticCount);



function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(2)(2));

function secondSum(a) {
  (function() {
    console.log(a);
  })()
}
secondSum(3);

function threeSum(a, b) {
  function fourSum(b) {
    console.log(a + b);
  }
  fourSum(b)
}
threeSum(2, 3);

