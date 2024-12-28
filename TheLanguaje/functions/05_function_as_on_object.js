function sayHi() {
  console.log('Hi')
}
console.log(sayHi.name, sayHi.length);

let getName = function(name) {
  console.log(name);
}
console.log(getName.name, getName.length);


let user = {
  name: 'pepe',
  sayName() {
    console.log(this.name);
  },
  sayBye : function() {
    console.log(this.name);
  }
}

console.log(user.sayBye.name);
console.log(user.sayName.name);



function ask(question, ...handlers) {

  for (let handler of handlers) {
    if (handler.length > 0) {
      if(question)
      handler(question);
    } else {
      handler();
    }
  }
}


ask('', function() {console.log('null')}, function(question) {console.log(question)})


function execute(arg, ...handlers) {
  for (let handler of handlers) {
    if (handler.length > 0) {
      handler(arg)
    } else {
      handler();
    }
  }
}

execute('22', () => {console.log('empty')}, (arr) => {console.log(arr)})


function addPropertyFunction() {
  addPropertyFunction.couter = (addPropertyFunction.couter || 0) + 1;
}
addPropertyFunction();
addPropertyFunction();
console.log(addPropertyFunction.couter);

function makeCounterIntoFunction() {

  function counter() {
    return counter.count= (counter.count || 0) + 1;
  }
   return counter;
}

let counter = makeCounterIntoFunction();
counter.otherCount = 3;
console.log(counter());
console.log(counter());
console.log(counter.count);
console.log(counter.otherCount);

let showName = function otherShowName(name) {
  if (name) {
    console.log(` name : ${name}`);
    return name;
  } else {
    otherShowName('pepe');
  }
}

let result1 = showName('maria');
let result2 = showName();
console.log(result1, result2);

let sayHi1 = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // usa func para volver a llamarse a sí misma
  }
};

sayHi1(); // Hello, Guest

// Pero esto no funcionará.
//func(); 



let showUser = function show(user) {
  if (user) {
    console.log(user);
    showUser.count = (showUser.count || 0) + (show.count || 0);
  } else {
    show.count = (show.cont || 0) + 1;
    console.log(show.count);
    show({name: 'pepe', age: 34})
  }
  
}

showUser({name: 'frank', age:77})
console.log(showUser.count);
showUser()
console.log(showUser.count)


function makeCounter () {

  function counter() {
    counter.count = (counter.count || 0) + 1;
    counter.set = function(value) {
      counter.count = value;
    };
    counter.decrease = function() {
      counter.count = (counter.count || 0) - 1;
    }
  }
  return counter;
}
let secondCounter = makeCounter()
secondCounter();
console.log(secondCounter.count);
secondCounter.set(0);
console.log(secondCounter.count);
secondCounter();
secondCounter();
console.log(secondCounter.count);
secondCounter.decrease();
console.log(secondCounter.count);
