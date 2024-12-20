let numb = [1,2,3];
let names = new Array();
let mix = [1, 'pepe', {name: 'jua'}, function (){return true;}]

names[0] = 'maria';

console.log(numb);
console.log(names);
console.log(mix)
console.log(mix[3]());

console.log(numb.at(-1));
console.log('PEPE'.at(-1));

let fruits = ['apple', 'lime', 'orange']
console.log(fruits.pop(), fruits)
console.log(fruits.push('strawberry'), fruits)
console.log(fruits.shift(), fruits);
console.log(fruits.unshift('tomatoe'), fruits)


for(let element of fruits) {
  console.log(element)
}

fruits.length = 2;
console.log(fruits);

fruits.length = 5;
console.log(fruits)

let marc = new Array('zara', 'nike', 'adidas')
console.log(marc);
marc.length = 0;
console.log(marc);

let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(matrix);

let arr = [1, 2, 3];
console.log(arr);
console.log(arr.toString() === String(arr));


console.log(0 == []);
console.log('' == []);
console.log('0' == [])

function arrayOperations() {
  let styles = ['jazz', 'blues'];
  styles.push('rock-and-roll');
  let pos = Math.round((styles.length / 2)) - 1;
  styles[pos] = 'classics';
  console.log(styles.shift());
  styles.unshift('rap', 'reggae');
  console.log(styles)
}
arrayOperations()


function valueSum() {
  let arr = [];
  let value = 0;
  while( (value = Math.round((Math.random()*10) )) > 3){
    console.log(value);
    arr.push(value)
  }
  console.log(value);
  console.log(arr.reduce((a,b) => a+b))
}

valueSum()

function getMaxSubSum(arr) {
  let maxSum = 0;
  for(let i = 0; i < arr.length; i++) {
    let sumFixed = 0;
    for(let j = i; j < arr.length; j++){
      sumFixed+= arr[j];
      maxSum = Math.max(maxSum, sumFixed);
    }
  }
  console.log(maxSum);
}
getMaxSubSum([2,3,1,7,3,9,4]);



