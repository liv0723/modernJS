let arr = ['jose', 'maria', 'juana'];
let [firstName, secondNmae, threeName] = arr;
console.log(firstName, secondNmae, threeName)

let [name, lastname, ...others] = "yan pizarro this is teh rest".split(' ');
console.log(name, lastname);
console.log(others)

let [firstStr,,threeStr] = 'jose';
console.log(firstStr, threeStr);

let [firstSet, secondSet] = new Set([{name: 'jose'}, {name: 'pepe'}]);
console.log(firstSet, secondSet);

let [firstMap, secondMap] = new Map([['firstUser', {name: 'jose'}], ['secondUser', {name: 'juana'}]]);
console.log(firstMap, secondMap)

let userObj = {};
[userObj.name, userObj.lastName] = 'Jose Estrada'.split(' ');
console.log(userObj.name, userObj.lastName);

let colorsMap = new Map();
colorsMap.set('amarillo', 'amarillo1');
colorsMap.set('rojo', 'rojo1');
console.log(colorsMap)

colorsMap.forEach ((value, key) => {
  console.log(key, value)
});

for (let [key, value] of colorsMap) {
  console.log(key, value)
}

colorsMap.forEach((item) => {
  console.log(item);
})

for (let item of colorsMap) {
  console.log(item)
}

let colorsSet = new Set()
colorsSet.add(['amarillo', 'amarillo1']);
colorsSet.add(['rojo', 'rojo1']);

colorsSet.forEach(([key, value]) => {
  console.log(key, value);
})

for (let [key, value] of colorsSet) {
  console.log(key, value)
}


let options = {
  title: "menu",
  width: 100,
  height: 200,

};
let {title = '', width = (() => 0) (), height: h = 0} = options;
console.log(title, width, h);


let user = {
  name: 'pepe',
  lastName: 'pizarro',
  age: 44,
  address: "uruguay",
  salary: 4000
}

let {lastName = '', name: n, ...rest} = user;
console.log(lastName);
console.log(n);
console.log(rest);


let optionsMedia = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// let {
//   size: { // colocar tamaño aquí
//     width,
//     height
//   },
//   items: [item1, item2], // asignar ítems aquí
//   title = "Menu" // no se encuentra en el objeto (se utiliza valor predeterminado)
// } = optionsMedia;

// console.log(width);
// console.log(height);
// console.log(title);
// console.log(item1);
// console.log(item2);



let optionsMenu = {
  title: 'my menu',
  items: ['item1', 'item2'],
}

function showMenu({title = 'Untitled', width = 100, height = 200, items: [item1, item2]} ) {
  console.log(`${title} ${width} ${height} ${item1} ${item2}`);
}

showMenu(optionsMenu)
console.log(optionsMenu)

function secondShowMenu ({title = 'my menu', height = 100, width = 100} = {}) {
   console.log(`${title} ${width} ${height}`);
}
secondShowMenu();

let otherUser = {
  years: 30,
  address: 'pdd'
}
let {address, years: age, isAdmin = false} = otherUser;
console.log(` ${address} ${name} ${age} ${isAdmin}`)

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function majorSalary( salaries = null) {
  let arrSalaries = Object.entries(salaries);
  arrSalaries.sort(([, salary1], [, salary2]) => salary2 - salary1);
  console.log(arrSalaries[0][0]);
}
majorSalary(salaries)