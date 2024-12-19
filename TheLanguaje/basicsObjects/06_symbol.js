//import { user } from "./exportObject.js";
let user = {
    name: 'pepe',
    age: 22,
}

console.log(user)

let idSymbol = Symbol('id');

user[idSymbol] = 1;


console.log(user[idSymbol]);
console.log(user)

//the symbols are ocults
for (let key in user) {
    console.log(key);
}

//the symbol are ocults
console.log(Object.keys(user));

//son copiados por Object.assign()
let copyUser = Object.assign(user);
console.log(copyUser)
console.log(copyUser[idSymbol]);


//Global symbols, creating equals symbols, get the symbol by the name
let numSymbol = Symbol.for('num');
let copyNumSymbol = Symbol.for('num');
console.log(numSymbol === copyNumSymbol);


//get a name by the symbol
let copyNumSymbolName = Symbol.keyFor(numSymbol);
console.log(copyNumSymbolName);

//local and global symbol
let localSymbol = Symbol('local symbol');
let globalSymbol = Symbol.for('global symbol');

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol));

console.log(globalSymbol.description);
console.log(localSymbol.description);




