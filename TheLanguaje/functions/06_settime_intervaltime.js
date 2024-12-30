console.log('ok')

let sum = function(a, b) {
   console.log(a + b);
 };

let rest = function(a, b) {
  console.log(a - b);
};

setTimeout(sum, 2000, 3, 3);
setInterval(rest, 3000, 3, 2);
