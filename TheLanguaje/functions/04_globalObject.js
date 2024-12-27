
globalThis.myGlobalInfo = {
  name: 'yan',
  age: 36
}

if(globalThis.MYPromise) {
  console.log('exist the Promise')
} else {
  globalThis.MyPromise = function() {
    console.log('my promisse')
  }
}

globalThis.MyPromise();
