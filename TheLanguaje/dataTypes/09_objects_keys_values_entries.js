let arr = ['jose', 'maria', 'pepe'];
arr.map((value, index) => {
  console.log(value, index);
})

let users = {
  name: 'pepe',
  age: 23,
  salary: 2000
};

function tranformObjs(users) {
  let usersArrays = Object.entries(users);
  let duplicateSalary = usersArrays.map( ([key, value]) => {
    if(key == 'salary') return [key, (value * 2)];
    return [key, value]
  });
  console.log(Object.fromEntries(duplicateSalary))
}

tranformObjs(users);

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumProperties(salaries) {
let arrayValues = Object.values(salaries);
let sumValues = 0;
for(let value of arrayValues) {
  sumValues+= value;
}
console.log(sumValues);
}

sumProperties(salaries);

function countPropertiesObj(obj) {
  let propertiesObj = Object.keys(obj);
  console.log(propertiesObj.length);
}
let user = {
  name: 'John',
  age: 30
};
countPropertiesObj(user)

