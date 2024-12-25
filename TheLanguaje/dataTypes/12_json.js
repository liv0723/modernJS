//const js = require("@eslint/js");

let user = {
  name: "pepe",
  age: 33,
  toString() {
    return `{"name": ${this.name}, \\'age\\': ${this.age}}`
  }
}

console.log(user.toString());

let jsonUser = JSON.stringify(user);
console.log(jsonUser)
console.log(typeof jsonUser);


console.log(JSON.stringify(33));
console.log(JSON.stringify('pepe'));
console.log(JSON.stringify([1, 'pepe', {name: 'maria'}]))
console.log(JSON.stringify(null));
console.log(JSON.stringify(true));
console.log(JSON.stringify(undefined));

let admin = {
  isAdmin() {
    return true;
  },
  [Symbol('id')]: 123,
  something: undefined
}

console.log(JSON.stringify(admin));

let room = {
  number: 23,
  }
let meetUp = {
  title: 'Conference', 
  participants: [{name: 'john'}, {name: 'maria'}],   
  get cantParticipants () {
    return this.participants.length
  }
}

room.occupiedBy = meetUp;
meetUp.place = room

//console.log(JSON.stringify(meetUp));
//console.log(JSON.stringify(meetUp));
console.log( JSON.stringify(meetUp, ['title', 'participants', 'name']))
console.log(JSON.stringify(meetUp, function replacer(key, value) {
  return (key == 'occupiedBy')? undefined : 
  (key == 'cantParticipants')? value * 2 : value
}));


let myUserStr = '{"name": "jose"}';

console.log(typeof JSON.parse(myUserStr));
console.log(JSON.parse(myUserStr));

console.log(JSON.parse(myUserStr, function(key, value) {
  return value + " mamon" 
}))

let numbers = "[1, 2, 3]"
console.log(typeof JSON.parse(numbers));

let numbersObj = JSON.parse(numbers, function(key, value) {
  console.log(key);
  console.log(value);
  return value;
})
console.log(numbersObj)
