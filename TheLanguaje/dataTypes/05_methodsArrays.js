let firstArr = ['yo', 'estudio', 'js'];
let modifiedArr = firstArr.splice(1,1);
console.log(firstArr)
console.log(modifiedArr)


let secondArr = ["Yo", "estudio", "JavaScript", "ahora", "mismo"];
let modifiedSecondArray = secondArr.splice(0,3,'pepe', 'maria')
console.log(secondArr);
console.log(modifiedSecondArray);
secondArr.splice(0,0,'jhon');
console.log(secondArr)

let threeArray = [1,2,3,4,5];
threeArray.splice(-1,0,6,7,8);
console.log(threeArray);
threeArray.splice((threeArray.length ),0,9,10)
console.log(threeArray)


let fourArray = ['a', 'b', 'c', 'd'];
console.log(fourArray.slice(1,3));
console.log(fourArray.slice(-3,-1))
console.log(fourArray);
let copyFourArray = fourArray.slice();
console.log(copyFourArray);
console.log(fourArray.splice(0));
console.log(fourArray)

let fiveArray = [1, 2, 3];
let sixArray = [4, 5, 6];
let concatFiveSix = [];
concatFiveSix = concatFiveSix.concat(fiveArray, sixArray, ...[7, 8, 9],10);
console.log(concatFiveSix)

let num11 = {
  0: 11
}
console.log(concatFiveSix.concat(num11))

let num12 = {
  0: 12,
  [Symbol.isConcatSpreadable]:true,
  length: 1
}
console.log([].concat(1,num12));

let names = ['bilbo', 'gandalf', 'guido', 'pepe', 'bilbo' , NaN]
names.forEach((element,index) => {console.log(element, index)})

console.log(names.includes('gandalf', 2))
console.log(names.indexOf('gandalf', 2));
console.log(names.lastIndexOf('bilbo'))
console.log(names.indexOf(NaN))
console.log(names.includes(NaN))

let objs = [
  {
    name: 'jose',
    age: 18,
  },
  {
    name: 'maria',
    age: 12,
  },
  {
    name: 'pepe',
    age: 34,
  }
]

let findNames = objs.find((element) => element.name === 'maria');
console.log(findNames);

let findId = objs.findIndex((item) => item.name === 'pepe');
console.log(findId);

let findIlastIndex = objs.findLastIndex((item) => item.name === 'jose');
console.log(findIlastIndex);

let filterObj = objs.filter((item) => item.age > 18);
console.log(filterObj)

let ages = objs.map((item) => item.age > 18);
let lengthNames = objs.map((item) => item.name.length);
let getNames = objs.map((item) => {return (item.age > 18)? item.name : ''})
console.log(ages, lengthNames, getNames)


let sortObjs = objs.sort((item1, item2) => {
  if(item1.age > item2.age) return -1;
  if(item1.age === item2.age) return 0;
  if(item1.age < item2.age) return 1;
});
console.log(sortObjs)

let sortObjsSecond = objs.sort((item1, item2) => item1.age - item2.age);
console.log(sortObjsSecond)

let arrNumbs = [1,2,3,4,5];
console.log(arrNumbs.reverse());

let cities = ['habana', 'camaguey', 'sanatiago'];
console.log(cities.copyWithin(1,2))

console.log(cities.join(' '));


let sumAges = objs.reduce((acum, item) => (item.age >= 18)? acum + item.age: acum + 0, 0);
console.log(sumAges)

let sumAgesreduceRigth = objs.reduceRight((acum, item, index) => {
  console.log(index);
  return (item.age >= 18)? acum + item.age: acum + 0
}, 0);
console.log(sumAgesreduceRigth);

console.log(typeof {});
console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray({}));

function camelize(str) {
  return str.split('-')
  .map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
}
console.log(camelize("pepe-juana"));



function filterArray(arr, a, b) {
  console.log(arr.filter((item) => (item >= a && item <=b) ));
  console.log(arr)
}
filterArray([1,2,6,7,8,9,], 2,6)
 
function filterrangeInPlace(arr, a, b) {
  //return arr.filter(item => item < a || item > b);
  let pos = 0;
  while (pos < arr.length) {
    if(arr[pos] < a || arr[pos] > b){
      arr.splice(pos--,1)
    }
    pos++;
  }
  return arr;

}
console.log(filterrangeInPlace([1,2,3,4,5,6,7,8,9], 3,6));




function orderByDec(arr) {
  console.log(arr.sort((item1, item2) => item2 - item1 ));
}

orderByDec([3,1,5,2,8,5]);

function copyOrder(arr) {
  console.log(arr.slice().sort((item1, item2) => item1 - item2));
  console.log(arr)
}
copyOrder([3,1,5,2,8,5]);


function arrayNames(arr) {
  let arrNames = arr.map(item => item.name);
  console.log(arrNames)
}
arrayNames([{name: 'jose'}, {name: 'maria'}])

function userMapes(users) {
  let newUsers = users.map((item,index) => { return {id: ++index, fulName: (item.name + ' ' +item.surName)} })
  console.log(newUsers);
}
userMapes([{name: 'jose', surName: 'rod'}, {name: 'maria', surName: 'rod'}])

function sortUsers(users) {
  console.log(users.sort((item1,item2) => item1.age - item2.age))
}
sortUsers([{name: 'jose', age: 2}, {name: 'maria', age: 1}])

function shuffle(arr) {
  arr.sort(() => Math.random() - Math.random());
  console.log(arr)
}
shuffle([4,2,7,3,7,9])

function getAverageAge(arr) {
  return Math.round(arr.reduce((sum, item) => sum + item.age,0) / arr.length);
}
console.log(getAverageAge([{age: 12}, {age:67}, {age: 22}]));

function unique(arr) {
  let aux = [];
  for(let i = 0; i < arr.length; i++) {
    if(!aux.includes(arr[i])) {
      aux.push(arr[i])
    }
  }
  console.log(aux);
}
unique(["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"]);

