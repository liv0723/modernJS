let firstUser = new Object() ; //objects constructors
let secondUser = {
    name: 'pepe',
    age: 30,
    "likes birds": false,
};
let key = 'isUnployed';

firstUser.isAdmin = true;
firstUser[key] = true            // literal objects
delete secondUser.age

console.log(secondUser.name);
console.log(firstUser.isAdmin);
console.log(secondUser.age);
console.log(secondUser['likes birds']);
console.log(firstUser['isUnployed']);
console.log(firstUser[key]);
console.log(firstUser.isUnployed);

let calcProperty;
setTimeout( ()=> calcProperty = 'salary', 2000)

let threeUser = {
  'other': 'other',
  [calcProperty]: 8000,
}
console.log(threeUser.other);
console.log(threeUser[calcProperty]);
console.log(threeUser['salary']);
console.log(threeUser.salary);

setTimeout(() => {
  threeUser[calcProperty] = 10000;
  console.log(threeUser['salary'])
}, 4000);

setTimeout(() => {console.log(threeUser)},5000);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}
console.log( makeUser('pepe', 55) );
console.log('salary' in makeUser('juana', 33));

let human = {
  color: 'white',
  height: 180,
  weight: 80,
  age: 22,
  isAdult: true,
  hasHair: false,
}

for  (let key in human) {
  console.log(key);
  console.log(human[key]);
}

let codes = {
  23: 'germany',
  3: 'japan',
  55: 'usa',
  1: 'rusia'
}
for (let key in codes) {
  console.log(key);
  console.log(codes[key])
}

// for ( let prop of human) {
//   console.log(prop);
// }









