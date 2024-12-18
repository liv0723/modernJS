
let user = {
    name: 'pepe',
    age: 23,
}
let admin = user;
let visitor = {
  name: 'julio',
    age: 11,
}

console.log(user);
console.log(admin);

admin['name'] = 'maria'
admin.age = 44;

console.log(user);
console.log(admin)

console.log(user === admin);
console.log(visitor === user);
console.log(visitor === admin);


let userCopy = {}; 
Object.assign(userCopy, user);

console.log(userCopy);
console.log(userCopy === user);

console.log(Object.assign(user));

let adminCopy = Object.assign({}, admin);

console.log(adminCopy === admin);


let city = {
  name: 'jordania',
  extencion: 10000,
  zone: {
    nort: 12,
    south: 23
  }
}

let firstCopyCity = structuredClone(city);
let secondCopyCity = Object.assign(city);

console.log(city.zone === firstCopyCity.zone);
console.log(city.zone === secondCopyCity.zone)


let country = {};
country['me'] = country;

let copyCountry = structuredClone(country);

console.log(copyCountry.me === country);
console.log(copyCountry.me === copyCountry);