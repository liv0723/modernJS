let user = {
  name: 'pepe',
  showName() {
    console.log( this.name );
  },
  getName() {
    return this.name;
  }
}

setTimeout(user.showName, 1000)
setTimeout(() => {
  console.log(user.getName())}, 3000);

  user = {
    name: 'juan',
    showName() {
      console.log( this.name );
    },
    getName() {
      return this.name;
    }
  }

setTimeout(() => {console.log(user.getName())},2000) 


////////////////////////////////////////////////////////////////////

let admin = {
  salary: 2000,
  showSalary() {
    console.log(this.salary);
  }
}

setTimeout(admin.showSalary.bind(admin), 2000);

admin = {
  showSalary() {
    console.log('not salary')
  }
};

setTimeout(() => {admin.showSalary()}, 4000);


////////////////////////////////////////////////////////////////////
let obj = {
  color: 'red',
  showColor() {
    return this.color;
  },
  dropColor() {
    this.color = '';
  }
}

console.log(obj.showColor());

let auxShowColor = obj.showColor.bind(obj);
console.log(auxShowColor());

obj.dropColor()
obj.showColor();
auxShowColor();
obj = {
  showColor() {
    console.log('blue')
  }
};
auxShowColor();
obj.showColor();
auxShowColor();



////////////////////////////////////////////////////////////////////
let fly = {
  number: '22222',
  showNumber() {
    return `number of fly: ${this.number}`;
  }
}

function showInfoFly(func) {
  console.log(func())
}

showInfoFly(fly.showNumber.bind(fly))
//showInfoFly(fly.showNumber);

function secondShowInfoFly(func) {
  console.log(fly.showNumber());
  //console.log(func())
}

secondShowInfoFly(fly.showNumber);




////////////////////////////////////////////////////////////////////
function sum(a, b) {
  console.log(a + b);
}

let copySum = sum.bind(null,3);
copySum(4);
copySum(0);

////////////////////////////////////////////////////////////////////

let superHermes = {
  name: 'hermes',
  employed: 3,
}

function showInfo() {
  console.log(`name ${this.name} employed ${this.employed}`);
}

let copyShowInfo = showInfo.bind(superHermes);
copyShowInfo();


superHermes.showInfo = copyShowInfo;

function main(func) {
  func();
}
main(superHermes.showInfo)


let copySuperHermes = {
  name: 'copy Hermes',
  employed:4,
  showInfo: copyShowInfo
}

copySuperHermes.showInfo()

// copySuperHermes.showInfo = function(){
//   console.log(`name ${this.name} employed ${this.employed}`)
// }


copySuperHermes.showInfo.bind(copySuperHermes)
copySuperHermes.showInfo()



function partial(func, ...args) {
  return function(...arg) {
  return func.call(objUser, ...args, ...arg);
  }
}

let objUser = {
   name: 'pepe',
  sayUser(time,msg) {
    return `${time} ${this.name} ${msg}`;
  },
}

let func = partial(objUser.sayUser, new Date().getHours() + ':' + new Date().getMinutes());
console.log(func('my message'));



function f() {
  console.log(this);
}

let auxObj = {
  g: f.bind(null),
}

auxObj.g()



function sayHi() {
  console.log(this.name);
}
sayHi.number = 5;

let copySayHi = sayHi.bind({name: 'pepe'});
copySayHi();
console.log(sayHi.number);


function askPass(ok, fail) {
  if(Math.random() * 10 > 5) {
    ok();
  } else {
    fail()
  }
}

let userLogged = {
  name: 'pepe',
  ok() {
    console.log(`${this.name} ok logged`);
  }, 
  fail() {
    console.log(`${this.name} fail logged`);
  }
}
//let aux = askPass.bind(userLogged);
askPass(userLogged.ok.bind(userLogged), userLogged.fail.bind(userLogged))
askPass(() => userLogged.ok(), () => userLogged.fail());



function secondAskPass(ok, fail) {
  if(Math.random() * 10 > 5) {
    ok()
  } else {
    fail()
  }
}

let secondUserLogged = {
  name: 'juana',
  login(result) {
    console.log((result)? `${this.name} is logged`: `${this.name} fail logged`);
  }
}

secondAskPass(() => secondUserLogged.login(true), () => secondUserLogged.login(false))

secondAskPass(secondUserLogged.login.bind(secondUserLogged, true), secondUserLogged.login.bind(secondUserLogged, false))
