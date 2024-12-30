let user = {
  name: 'pepe',
  age: 34,
  getName() {
    return this.name;
  },
  getAge: () => {
    return this.age;
  },
  getData() {
    return ((Math.random() * 10) >5)? this.getName() : this.getAge() 
  },
  showData() {
    let arr = Object.entries(user);
    let result = '';
    arr.forEach(([key, value], pos) => {
      console.log(key)
      console.log(value);
     if(key == 'name' || key == 'age') result += value
    })
    console.log(result);
  }
}

console.log(user.getName());
//console.log(user.getData());
user.showData();


let group = {
  title: 'our Group',
  students: ['pepe', 'maria', 'jose'],
  showLst() {
    this.students.forEach(
      student => {
        console.log(`${this.title} : ${student}`)
      }
    )
  }
}

group.showLst();

function wrapper(func, ms) {
  return function() {
    setTimeout(() => {
      func.call(this, ...arguments)
    }, ms)
  }
}

let admin = {
  name: 'pepe',
  sayName(msg) {
    console.log(`${this.name} ${msg}`)

  }
};
function sayHi(msg) {
  console.log(msg)
}

admin.sayHi;

let getFunctWrapper = wrapper(sayHi, 2000);
getFunctWrapper('my mesage  uu')

admin.sayName = wrapper(admin.sayName, 3000);
admin.sayName('my other message');




