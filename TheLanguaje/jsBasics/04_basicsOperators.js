//basics operators

console.log(`sum ${2 + 2}`);
console.log(`rest ${ 3 -5}`);
console.log(`mult ${2 * 4}`);
console.log(`div ${4 / 5}`);
console.log(`rest ${5 % 2}`);
console.log(`exp ${2 ** 4}`);
console.log(`raiz ${2 ** (1/2)}`);


//string concatenation
console.log('pepe' + ' ' + 'ramirez');
console.log('ttt' + 6);
console.log('333' + null);
console.log('111' + undefined);
console.log('3333' + true);
console.log('eeeee' + 222n);
console.log('wwww' + (1/0));
console.log('eeee' + ('ww' / 2));


//chained assignments
let a,b,c;
a = b = c = 2+2;
console.log(a + b + c);


//modify in place
let age = 4;
age += 2;
console.log(age++);
console.log(age)


//increment and decrement
let counter = 0;
console.log(++counter);
console.log(`${++counter} ${counter++} ${counter}`);
console.log(2 * ++counter);


//operator coma
let firstResult = (2+2, 3+ 3);
console.log(firstResult);



