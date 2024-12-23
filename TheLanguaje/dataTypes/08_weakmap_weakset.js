let obj = {};

let weakMap = new WeakMap();
weakMap.set(obj, 'ok');

console.log(weakMap.get(obj));

let jose = {name: 'jose'};
let secondWeakMap = new WeakMap();
secondWeakMap.set(jose, 'jose');
console.log(secondWeakMap.get(jose));
jose = null;
console.log(secondWeakMap.get(jose));



