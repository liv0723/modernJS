let  trueValue = true;
let numberValue = 1;
let stringValue = 'pepe';
let nullValue = null;
let undefinedValue = undefined;
let bigIntValue = 2222n;

//convert to string 
console.log(typeof String(trueValue) + " " + String(trueValue));
console.log(typeof String(numberValue) + " " + String(numberValue));
console.log(typeof String(nullValue) + " " + String(nullValue))
console.log(typeof String(undefinedValue) + " " + String(undefinedValue));
console.log(typeof String(bigIntValue) + " " + String(bigIntValue))


//convert to number
console.log("3" / "2");
console.log("3n" * 2);
console.log(typeof +'2');
console.log(typeof Number('5') + ' ' + Number('5'));
console.log(typeof Number(null) + ' ' + Number(null));
console.log(typeof Number(true) + ' ' + Number(true) + ' ' + Number(false));
console.log(typeof Number(undefined) + ' ' + Number(undefined));

//convert to boolean
console.log(Boolean(1));
console.log(Boolean('1'));
console.log(Boolean('2nn'));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean((1/0)));
console.log(Boolean(null));
console.log(Boolean((1/'g')));





