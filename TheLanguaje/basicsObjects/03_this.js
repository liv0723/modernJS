let user = {
    name: 'pepe',
    age: 44,
} 

let hi = function() {
  console.log('Hi');
}

user['show info'] = function() {
    console.log(`${this.name} ${this.age}`);
}
user.hi = hi;


user['show info']();
user.hi();


let admin = {
  name: 'maria',
  age: 33,
  hi: function() {
    console.log('hi')
  },
  getData() {
    return `${this.name} ${this.age}`
  },
  showInfo() {
    console.log(`${this.name} ${this.age} ${this.getData()}`);
  }
}

admin.hi();
admin.showInfo();


let aux = {
  name: 'juan',
  //otherName: this.name + ' alvarez'
  otherName: function() {
    return this.name + " alvarez";
  }
}
console.log(aux.otherName());

let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
}
calculator.read(2, 2);
console.log(calculator.sum());
console.log(calculator.mul());


let employed = {
  carge: 'disk watsher',
  showInfo() {
    let firstInfo = () => {return this.carge}
    let secondInfo = function() {return this.carge}; 
    console.log(firstInfo());
    console.log(secondInfo());
  }
}

employed.showInfo();