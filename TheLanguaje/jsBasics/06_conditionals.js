let firstConditional =  (2 == null);
if( firstConditional) {
  console.log('ok')
} else {
  console.log('not ok')
}

if(1 == '1') {
  console.log('ok')
} else {
  console.log('not ok')
}

if(0){
  console.log('0')
} else if('') {
  console.log('')
} else if(null) {
  console.log('null')
} else if(undefined) {
  console.log('undefined');
} else if('t'/3) {
  console.log('NaN')
} else{
  console.log('hear');
}

(4 > (Math.random().toPrecision() * 10)) ? console.log('ok') : console.log('NOT OK');

setTimeout( () => {console.log( ((Math.random().toPrecision(1) * 10 > Math.random().toPrecision())) ? 'ok' : 'not ok')}, 2000)

//setInterval( () => {console.log('ok')}, 1000);
//setTimeout(() => {console.log('ok')}, 2000)

let age = Math.random().toPrecision(1) * 10;
let message = ( age < 5) ? 'is a child' :
  (age < 8) ? 'is a young' : 'is a adult'
console.log(`${message} ${age}`);


(3 > 1) ? (() => {console.log( 'ok' )})() : console.log('not ok');

let conditional = ((Math.random().toPrecision(1) * 10) > 5) ? true : false;
if( conditional ) {
  console.log('IS ECAMAC script')
} else {
  console.log(' is other')
}

let a, b;
a = Math.random().toPrecision() * 10
b = Math.random().toPrecision() * 10;
let result = (( a + b ) > 9) ? 'over' : 'under';
console.log(result)
