let firstMap = new Map();
firstMap.set('name', 'jose');
firstMap.set('age', 33);
firstMap.set('address', 'lora');

console.log(firstMap.has('name'));
console.log(firstMap.get('age'));
if(firstMap.size > 2){
  console.log(firstMap.size);
}

firstMap.set('name', 'juan');
console.log(firstMap.get('name'))


let secondMap = new Map();
let objAge = {
  age: 23
}
secondMap.set('name', 'lucia');
secondMap.set(objAge, 23);
secondMap.set(true, true);

console.log(secondMap.get(true));
console.log(secondMap.get(objAge))

let threeMap = new Map();

threeMap.set('name', 'jose')
        .set('age', 23)
        .set('address', 'uruguay');


let recipeMap = new Map([
  ['pepino', 500],
  ['tomatoes', 200],
  ['cebolla', 100]
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}

for (let vegetable of recipeMap.values()) {
  console.log(vegetable);
}

for (let vegetable of recipeMap.entries()) {
  console.log(vegetable)
}

recipeMap.forEach( (value, key, map) => {
  console.log(value);
  console.log(key);
  console.log(map)
})


let countries = {
  'cuba': 'cuba',
  'uruguay': 'uruguay',
  'paraguay': 'paraguay'
}
let countriesMap = new Map(Object.entries(countries))

countriesMap.forEach( (value, key) => {
  console.log(key, value);
}) 

let monedasMap = new Map();
monedasMap.set('cuba', 'peso'),
monedasMap.set('eeuu', 'dollar');
monedasMap.set('auropa', 'euro')

let monedasObj = Object.fromEntries(monedasMap.entries());

console.log(monedasObj)


let usersSet = new Set();
let jhon = {name: 'jhon'};
let maria = {name: 'naria'}
let pete = {name: 'pete'};

usersSet.add(jhon);
usersSet.add(maria);
usersSet.add(pete);
usersSet.add(jhon);

usersSet.forEach((value) => {
  console.log(value);
})

for (let value of usersSet) {
  console.log(value);
}

console.log(usersSet.has({jose: 'jose'}));
console.log(usersSet.has(pete));

let countriesSet = new Set(['cuba', 'rusia', 'puerto rico']);
for (let value of countriesSet) {
  console.log(value);
}

let countriesObj = {
  cuba: 'cuba',
  eeuu: 'eeuu',
  rusia: 'rusia'
}

let secondcCountriesSet = new Set(Object.entries(countriesObj));

secondcCountriesSet.forEach((value, mixValue) => {
  console.log(value, mixValue);
})

function unique(arr) {
  console.log(Array.from(new Set(arr)));
}
unique(['pepe', 'maria', 'jose', 'pepe']);

function push() {
let map = new Map();
map.set('name', 'jose')
let keys = map.keys()
map
console.log(Array.from(keys));
} 
push();

