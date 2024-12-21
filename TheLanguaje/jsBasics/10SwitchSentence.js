let conditional = 'pepe';
switch(conditional) {
  case 'juan': 
    console.log('is juan');
    break;
  
    case 'maria':
      console.log('is maria');
      break;

    case 'jose':
      console.log('is jose');
      break;

    default:
      console.log('not one');
      break

}

let obj = {
  name : 'pepe',
  age: 30
}

let obj1 = obj;

switch(obj) {
  case { name: 'maria', age: 21}:
    console.log('is marea');
    break;

  case { name: 'jose', age: 67}:
    console.log('is jose');
    break;

  case { name: 'pepe', age: 30}:
    console.log('is pepe');
    break;

  case obj1:
    console.log('is pepe');
    break;

  default:
    console.log('is not');
    break

}

let browser = '';

function getBrowser() {
  return new Promise((resolved) => {
    setTimeout(() => {
      browser = (Math.floor(Math.random() * 10) < ) ? 'opera' : 'moxilla' 
      resolved(browser)
    }, 2000);

  })
}


(async () => {
  let aux = await getBrowser();
   switch (aux) {
    case 'opera':
      console.log('is opera');
      break;
    
    case 'moxilla':
      console.log('is moxilla');
      break;
  
    default:
      console.log('is not one');
      break;
    }

})()
