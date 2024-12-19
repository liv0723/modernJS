//create object with prototype compartidos
function User(name) {
  this.name = name;
  this.isAdmin = false;
  this.showInfo = () => {
    console.log(`${this.name} ${this.isAdmin}`);
  }
}

User.prototype.saludar = function() {
  console.log(`hi ${this.name}`)
}

console.log(User.prototype)

let firstUser = new User('pepe');
let secondUser = new User('maria')

firstUser.showInfo();
secondUser.showInfo();
firstUser.saludar();
secondUser.saludar();

//create a user with default prototype
let threeUser = new Object({name: 'pepe', salary: 2000});
threeUser['age'] = '23';

console.log(threeUser);
console.log(threeUser.__proto__)

//create a object with un prototype defined
let fourUser = Object.create({name: 'juana'});

console.log(fourUser);
console.log(fourUser.__proto__);

let Admin = function(name, salary) {
  this.name = name;
  this.salary = salary;
}

let firstAdmin = new Admin('dalmira', 50000);

console.log(firstAdmin);

let secondAdmin = new function(isWhoman = true) {
  this.isWhoman =  isWhoman;
}

console.log(secondAdmin);

function BigUser(nick) {
  this.nick = nick;
  this.id = Math.floor(Math.random() * 10);

  return {specie: 'leon'};
}

let firstBigUser = new BigUser('jado');

console.log(firstBigUser);
console.log(firstBigUser instanceof BigUser);

function SmallUser(nick) {
  this.nick = nick;
  return 2;
}

let firstSmallUser = new SmallUser('fake');
console.log(firstSmallUser);
console.log(firstSmallUser instanceof SmallUser);

function Calculator() {
  this.read = function(a, b) {
    this.a = a;
    this.b = b;
  }
  this.sum = function() {
    console.log(this.a + this.b);
  }
  this.mul = function() {
    console.log(this.a * this.b);
  }
}

let firstCalculator = new Calculator();
firstCalculator.read(2, 2);
firstCalculator.sum( 2, 2);
firstCalculator.mul(2, 2);
