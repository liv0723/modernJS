//import { user } from "./exportObject.js";
let user = {
    name: 'pepe',
    age: 22,
}

console.log(user)

let idSymbol = Symbol('id');

user[idSymbol] = 1;


console.log(user[idSymbol]);
console.log('ok')
