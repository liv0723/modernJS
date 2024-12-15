// ?? operators
let name = 'pepe';
let lastName = 'dfdfdf';
let age = 23;
let salary = 0;
let ocupation =  undefined;
let enterprise = null;


console.log(name ?? lastName ?? age ?? 'not value');
console.log(ocupation ?? 'not value');
console.log( enterprise ?? 'not value');
console.log(salary ?? 'not value');
console.log(ocupation ?? enterprise ?? 'not value');

