function showInfo(obj) {
    console.log(`name: ${obj.name} age: ${obj.age}` );
}
showInfo({name : 'pepe', age : 23})

function sum(a = 0, b = 0) {
  console.log(a + b);  
}
sum(2, 2);
sum(3);
sum();

function rest(a = 0, b = (()=> 4)()) {
    console.log(a -b);
}
rest(5,3);
rest(6);
rest()

function showCont(cont) {
    console.log(cont ?? 'empty');
}
showCont()

function showMovie(age) {
  if(!age) return;
  console.log('you can see the movie');
}
showMovie(1);
showMovie(null);
showMovie(undefined);
showMovie(0);
showMovie('');
showMovie(false);
showMovie(true);
showMovie(-1);



function doNothing() {
  console.log('this function not return anything');
}

console.log( doNothing() === undefined )


function showPrimes(numb) {
  for(let i = 2; i < numb; i++){
    if(!isPrime(i)) continue;
    console.log(i)
  }
}
function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }
  return true;
}

showPrimes(11)