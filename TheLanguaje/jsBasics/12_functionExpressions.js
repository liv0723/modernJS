'use strict'
let sayHi = function() {
  console.log('hello');
}

sayHi();

let firstFun = function(){console.log('ok');}
let secondFun = function() {console.log('ok');}
let threeFun = firstFun;
console.log(firstFun === secondFun);
console.log(firstFun === threeFun);
console.log(secondFun);

//callback 

function ask(value, yes, not) {
  console.log(value)
  if(value > 5) {
    yes();
  } else {
    not()
  }
}

ask( Math.floor(Math.random()* 10), function() {
  console.log('ok');
}, function() {
  console.log('cancel');
});



//diference betwen function declaration and function expression
 showUser();
 function showUser() {
  console.log({name: 'pepe'});
 }

// showAdmin()
// let showAdmin = function() {
//   console.log({namde: 'juana'})
// }

let age = Math.floor(Math.random() * 10);
console.log(age);
if(age > 5){
  welcome();
  function welcome() {
    console.log('welcome')
  }
} else {
  function welcome() {
    console.log('logout')
  }
  welcome()
}

//welcome();


let salary = Math.floor(Math.random() * 1000);
console.log(salary);
let showSalary;
if(salary > 50) {
  //showSalary();
  showSalary = function() {
    console.log('is mayor')
  }
} else {
  showSalary = function() {
    console.log('is menor');
  }
  showSalary();
}
let isMayor;
isMayor = (age > 3)? function(){console.log('is mayor')} : function() {console.log('is not mayor')};
isMayor()
showSalary();