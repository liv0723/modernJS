// let obj = {
//   name: 'pepe',
//   age: 44
// }
// for(let item of obj){
//   console.log(item)
// }

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if(this.current <= this.to){
      return {
        done: false,
        value: this.current++
      }
    } else {
      return {
        done: true
      }
    }
  }
}

for(let item of range) {
  console.log(item);
}

let arrayFromRange = Array.from(range);
arrayFromRange.push(6)
for(let item of arrayFromRange) {
  console.log(item)
}





for(let item of 'pepe') {
  console.log(item)
}

let str = 'hola';

let iterator = str[Symbol.iterator] ();

while(true) {
  let result = iterator.next()
  if(result.done) break;
  console.log(result.value);
}



//Arraylike no son iterable tinen indises y una propiedad length
let arrayLike = {
  0: 'hola',
  1: 'mundo',
  length: 2,
}
//no tienen los metodos de los array como push pop unshif shif
//arrayLike.push()
// for(let item of arrayLike) { }

let arr = Array.from(arrayLike);
arr.push('mierda')
for(let item of arr){
  console.log(item)
}

let secondArr = Array({name: 'jose', age: 23});
secondArr.push('cuba')
for(let item of secondArr) {
  console.log(item)
}

let threeArray = Array.from({0: 'pepe', 1: 'juan',});
console.log(threeArray)
threeArray.push('cama');
for(let item of threeArray) {
  console.log(item)
}






