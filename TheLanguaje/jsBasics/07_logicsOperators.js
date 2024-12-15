// OR operators
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(1 || false);
console.log(null || false);
console.log('pepe' || false);

let result = false || null || 4 || false;
console.log(result)

console.log( 1 || 0);
console.log(null || 1);
console.log( null || 0 || 2);
console.log(undefined || null || 0 || '' || (1/0) || false);

let firstMessage = 'pepe'
console.log("" || firstMessage || 'anonymous');

let firstResult = 8 || (() => {return 'first message'})();
console.log(firstResult);

let secondResult = '' || (() => {return 'second message'})() || undefined
console.log(secondResult);

if(false || '' || undefined || 8) {
    console.log('it es working by the 8')
}

false || (()=> {console.log('pepe')})() || undefined;


//AND Operators
console.log(1 && true && 'pepe' && Infinity && true && undefined && 78);

let firstResultANDOpertor = 'pepe' & (() => {return null;})() && true && 9
console.log(firstResultANDOpertor);

let value = 4
value > 3 && (() => {console.log('ok')})()



//NOT !
console.log(!'pepe');
console.log(!undefined);
console.log(!null);
console.log(!'')
console.log(!0);
console.log(19)

console.log(!!'pepe');
console.log(!!undefined);
console.log(!!null);
console.log(!!'');
console.log(!!0);
console.log(!!19);



let res = false || console.log('pepe') || 3 || '';
console.log(res)

let au = console.log('pepe');
console.log(au);


let other = '' || (() => {console.log('pepe')})() || 4 || false
console.log(other)

let other1 = '' || (() => {return 1;})() || 4 || undefined
console.log(other1)


let age = 12;
if(age >= 14 && age <=90) {
    console.log(age)
}

if(age < 14 || age > 90) {
    console.log(age)
}
console.log(!!-1)

console.log( false ?? 4)

