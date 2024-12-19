
let firstMillion = 1000000;
let secondMillion = 1_000_000;
let threeMillion = 1e6;

console.log((firstMillion === secondMillion) && (secondMillion === threeMillion));
console.log(threeMillion)

let num255 = 255;
console.log(num255.toString())
console.log(num255.toString(2));
console.log(num255.toString(16));

let num5 = 5
let num10 = 10
let num30 = 30;
console.log(`${num5.toString(16)} ${num10.toString(16)} ${num30.toString(16)}`)
console.log(11..toString(16));
console.log((11).toString(16));


//hexadecimal numbers
console.log(0xff);

//redondeo
console.log(Math.floor(3.1));
console.log(Math.floor(-1.1))

console.log(Math.round(3.7));
console.log(Math.round(-1.8));
console.log(Math.round(2.2));
console.log(Math.round(-5.4));

console.log(Math.ceil(2.2));
console.log(Math.ceil(-2.2));

console.log(Math.trunc(5.9));
console.log(Math.trunc(5.1));
console.log(Math.trunc(-4.8));

let num = 1.23456;
console.log(Math.round(num * 100) / 100);
console.log(num.toFixed(1));
console.log(num.toFixed(4)) 


console.log(0.1 + 0.2);
console.log(+(0.1 + 0.2).toFixed(1));


//isFinite and isNaN
console.log(isNaN(2));
console.log(isNaN('pepe'));
console.log(isNaN('2y' / 2 ));
console.log(isNaN('2 ' / 2));

console.log(isFinite(4));
console.log(isFinite(1/0));
console.log(isFinite(''));
console.log(isFinite(null));
console.log(isFinite('   '));

console.log(Number.isFinite(''));
console.log(Number.isFinite('  '));
console.log(Number.isNaN('llll'));
console.log(Number.isNaN('www' / 2));


console.log(parseInt('10px'))
console.log(parseFloat('11.1px'));
console.log(parseInt('111.111px'))
console.log(parseFloat('   8888.8888'))
console.log(parseInt('ddd   4444'))

console.log(Math.random());
console.log(Math.max(2,6,9,1,'',null,56,4,2,2,));
console.log(Math.min(8,3,0,33,'',null));
console.log(Math.pow(2,2));
console.log(Math.pow('3','3'));
console.log(Math.abs(4,4));
console.log(Math.abs('3.3'))
console.log(Math.sign(-9))
console.log(Math.sign('-44'))
console.log(parseInt('8888i'))
console.log(Number.parseInt('9999uyyyy'))


