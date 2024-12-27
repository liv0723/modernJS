//operator ...rest
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 2, 2));

function sumAll(...arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}
console.log(sumAll(2, 2, 2, 2));

function showInfoUser(name, age, ...inf) {
  console.log(`${name} ${age}`);
  console.log(inf);
}
showInfoUser('jose', '23', 'cuba', 22, {isEmployed: true});

function showNames() {
  console.log(arguments);
  console.log(arguments.length);
  for (let item of arguments) {
    console.log(item);
  }
  console.log(Array.from(arguments))
}
showNames('yan', 'mona', 'pepe');

//operator ..spread
let numbers = [1, 2, 3, 4]
function showMaxArr(arr) {
  console.log(Math.max(...arr, 5, ...arr));
}
showMaxArr(numbers);

function toGetterArrays(arr1, arr2) {
  let getter = [...arr1, ...arr2];
  return getter;
}
console.log(toGetterArrays([1, 2, 3], [4, 5, 6]));

let str = 'hola'
console.log([...str]);

let newObj = structuredClone({name: 'pepe'})
console.log(newObj);

let secondObj = Object.assign({name: 'pepe'});
console.log(secondObj);

let threeObj = {...{name: 'pepe'}};
console.log(threeObj);

let firstObjArr = [...[1, 2, 3]];
console.log(firstObjArr);

let secondObjArr = Object.assign([1, 2, 3]);
console.log(secondObjArr);






