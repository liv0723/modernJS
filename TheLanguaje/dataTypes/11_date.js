let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970)

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970)

let Dec31_1969 = new Date(- 24 * 3600 * 1000);
console.log(Dec31_1969); 

let date = new Date('2017-01-26');
console.log(date);

console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getDay());


let lastNow = new Date();
console.log(lastNow);
console.log(lastNow.getDay());
console.log(lastNow.getTime());
console.log(lastNow.getMonth());
console.log(lastNow.getFullYear());


lastNow.setFullYear(2025);
lastNow.setDate(1);
lastNow.setMonth(0);
console.log(lastNow)


let timeNow = Date.now();
console.log(timeNow);



