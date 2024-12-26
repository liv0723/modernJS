function pow(x, n) {
  let result = 0;
  console.log(result);
  if(n == 1) {
    return x;
  } else {
    result = x * pow(x, n-1);
    console.log(result)
  }
  return result;
}
console.log(pow(2,3));


let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

function sumSalaries(company) {
  if (Array.isArray(company)) {
    return company.reduce((acum, value) => acum + value.salary, 0)
  } else {
    let sumSal = 0;
    for (let subDepart of Object.values(company)) {
      sumSal += sumSalaries(subDepart);
    }
    return sumSal;
  }
}

console.log(sumSalaries(company));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


function sumList(list) {
 if (list == null) {
  return 0;
 } else {
  console.log(list.value)
  return list.value + sumList(list.next);
 }
}
console.log(sumList(list))


function sumListSecond(list) {
  if(list.next == null) {
    return list.value;
  } else {
    return list.value + sumListSecond(list.next);
  }
}

console.log(sumListSecond(list))

function sumTo(num) {
  let sum = 0;
  while (num > 0) {
    sum += num --;
  }
  return sum;
}

console.log(sumTo(10));

function sumToRec(num) {
  if (num == 0) {
    return num;
  } else {
    return num + sumToRec(num - 1)

  }
}

console.log(sumToRec(10));

function factorial(num) {
  let fact = 1;
  while(num > 0) {
    fact *=  num;
    --num;
  }
  return fact;
}

console.log(factorial(5))

function factorialRec(num) {
  if(num ==1) {
    return num;
  } else {
    return num * factorialRec(num-1);
  }
}

console.log(factorialRec(5))

function generateListRec(num) {
  if(num == 1) {
    return {value: num, next: false}
  } else {
    let print = {};
    print.value = num;
    print.next = generateListRec(num-1);
    return print;
  }
}

console.log(generateListRec(4));


function generateList(num) {
  let print = {};
  while (num >= 1) {
    if(num == 1) {
      print.value = num;
      print.next = null;
    } else {
      print.value = num;
      print.next 
    }
  }
}

function reverseList(list) {
  let arr = Array.from(list)
  return arr;
}

console.log(reverseList(list))
