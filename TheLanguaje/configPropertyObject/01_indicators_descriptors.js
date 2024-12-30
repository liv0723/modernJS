let user = {
  name: 'pepe'
};

let descriptorNameUser = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptorNameUser));

Object.defineProperty(user, 'age', {value: 23, writable: false, enumerable: false, configurable: false})
let descriptorAgeUser = Object.getOwnPropertyDescriptor(user, 'age');
console.log(JSON.stringify(descriptorAgeUser)); 





let admin = {
  toString() {
    return `${this.salary} ${this.name}`
  }

}

Object.defineProperty(admin, 'salary', {value: 2000, writable: false, enumerable: false, configurable: false});
console.log(Object.getOwnPropertyDescriptor(admin, 'salary'));

Object.defineProperty(admin, 'name', {value: 'lolo', enumerable: true, configurable: true, writable: true})

for (let key in admin) {
  console.log(key, admin[key]);
}

console.log(admin.toString());


let userEmpty = {}
Object.defineProperties(userEmpty, {
  name: {value: 'jose', writable: true, enumerable: true},
  age: {value: 34, writable: false, enumerable: false},
  salary: {value: 3000, writable: true, enumerable: true},
})

console.log(userEmpty)
console.log(JSON.stringify(Object.getOwnPropertyDescriptors(userEmpty)));

//Object.defineProperty(userEmpty, 'age' , {value: 20})
for (let key in userEmpty) {
  console.log(userEmpty[key]);
}

let copyUserEmpty = Object.defineProperties({}, Object.getOwnPropertyDescriptors(userEmpty));
console.log(copyUserEmpty);

let copyAdmin = Object.assign(admin);
console.log(copyAdmin);

let copyUser = structuredClone(user);
console.log(copyUser);

