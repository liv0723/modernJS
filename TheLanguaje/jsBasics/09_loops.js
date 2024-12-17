
let cont = 0;
while(cont < 10) {
    console.log(cont++);
}


while(cont) {
    if(cont === 5) break;
    console.log(cont--);
}

do {
console.log(cont++);
} while(cont < 5)


for ( let i = 0 ; i < 7; i++){
    if(i === 4) continue;
    console.log(i);
}

outer:
for(let i = 0; i< 10 ; i++){
    for( let j = 0; j < 10; j++){
        if(i === 3 && j === 3) break outer;
        console.log(`${i} - ${j}`);
    }
}
console.log('end')

let i = 0;
while(i < 3) {
    console.log(i++)
}

let num = 0;
let div = 0;
auter:
while(num <= 10) {
  while(div < num){
    if(num % div === 0) continue auter;
    ++div;
  }
  console.log(num);
  num++;
}



