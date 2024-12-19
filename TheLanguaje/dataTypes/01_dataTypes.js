//number
let firstNum = 2.44444;
let secondNum = new Number(2.44444);

console.log(typeof firstNum);
console.log(typeof secondNum);
console.log(firstNum == secondNum);
console.log(firstNum === secondNum);
console.log(firstNum === Number(secondNum));
console.log(firstNum.toFixed(2));
console.log(typeof firstNum.toFixed(1));
console.log(firstNum.toPrecision(3));
console.log(firstNum.toString());

let firstStr = 'pepe';
let secondStr = new String('pepe');

console.log(typeof firstStr);
console.log(typeof secondStr);
console.log(firstStr.repeat(2));
console.log(secondStr.repeat(2));
console.log(firstStr.replace('pepe', 'jose'));




let bign = 22222n;
let bool = true;
let nul = null;
let und = undefined;
let sym = Symbol('symbol');