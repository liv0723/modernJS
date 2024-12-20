let firstStr = 'pepe \n perez';
let secondStr = `pepe 
 perez`

console.log(firstStr);
console.log(secondStr);
console.log(firstStr === secondStr)
console.log('\'pepe\'')

console.log('pepe'.length)

console.log('pehyyeyeye'[1])
console.log('no soy nada'.charAt(4))
console.log('popopo'.at(-1))

for (let item of 'pepe'){
  console.log(item);
}

for (let item in 'pepe'){
  console.log(item);
  console.log('pepe'[item])
}

console.log('pedro'.toUpperCase());
console.log('PEPE'.toLowerCase());
console.log('pepe'[0].toUpperCase());

let name = 'pepe';
let arr = name.split('')
arr[0] = name[0].toUpperCase();
console.log(arr.join(''));

let newStr ='';
for (let item in name) {
  console.log(item);
  if(+item === 0) {
    newStr = newStr + name[item].toUpperCase();
  } else {
    newStr = newStr + name[item]
  }
}
console.log(newStr);

let paragraph = 'all you need is love all you need is love';
console.log(paragraph.indexOf('need'));
console.log(paragraph.includes('love'))
console.log(paragraph.search('you'));

let pos = 0;

while(true) {
  let foundPos = paragraph.indexOf('you', pos);
  if(foundPos == -1) break;
  console.log(foundPos)
  pos = foundPos + 1
}

let secondPos = 0;

while(secondPos < paragraph.length) {
  let foundPos = paragraph.indexOf('you', secondPos);
  if(foundPos == -1) break;
  console.log(foundPos);
  secondPos = foundPos + 1;
}

let threePos = 0;
while(threePos < paragraph.length) {
  let foundPos = paragraph.indexOf('you', threePos);
  if(foundPos !== -1) {
    console.log(foundPos);
    threePos = foundPos + 1
  } else{
    break;
  }
}

let fourPos = -1;
while ((fourPos = paragraph.indexOf('you', fourPos + 1)) != -1) {
  console.log( fourPos );
}


console.log(paragraph.includes('ever'));
console.log(paragraph.includes('is'),6);

console.log(paragraph.startsWith('all'));
console.log(paragraph.startsWith('fin'));

console.log(paragraph.endsWith('love'));
console.log(paragraph.endsWith('all'))

console.log(paragraph.substring(4,8))
console.log(paragraph.substring(7));
console.log(paragraph.substring())

console.log(paragraph.slice(6,12));
console.log(paragraph.slice(0,5));
console.log(paragraph.slice(2));
console.log(paragraph.slice(-5,-1));

console.log(paragraph.substr(1,5));
console.log(paragraph.substr(-2,4));

console.log('mierda'.codePointAt(4))
console.log('z'.codePointAt(0));
console.log('Z'.codePointAt(0));
console.log('a'.codePointAt(0).toString(16));

console.log(String.fromCodePoint(122));
console.log(String.fromCodePoint(90));

console.log('pepe'.localeCompare('pepe'))
console.log('a'.localeCompare('A'));


function firstUpperCase(str) {
  let arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  console.log(arr.join(''));
}

firstUpperCase('jose');

function check(str) {
  if(str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')){
    return true;
  } return false
}
console.log((check('abajo fifel xxx') ))

function trunccate(str, max) {
  if(max >= str.length) return;
  return str.slice(0,max).concat('...')
}

console.log(trunccate('eeeee',3));

function extractCurrencyValue(str) {
  return parseInt(str.slice(1));
}
console.log(extractCurrencyValue('x120') === 120);


