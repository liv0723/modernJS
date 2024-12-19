let user = {
  address: {
    street: 'manuel pedreira',
  },
}
let number = 0;
console.log(user);
console.log(user.address)
console.log(user.address.street);
console.log(user.address.number)
//console.log(user.address.number.isInteger);
console.log(user.address?.number?.isInteger);
console.log(user.address?.street?.number?.increment(number++));
console.log(number);

let userAdmin = {
  salary: 2000,
  duplicateSalary() {
    return (this.salary * 2);
  }
}

let userGuess = {
  salary: 3000,
}

console.log(userAdmin.duplicateSalary?.());
console.log(userGuess.duplicateSalary?.());
//console.log(userGuess.duplicateSalary())

delete userAdmin?.duplicateSalary;

let bigUser ={
  addres: {

  }
};
//bigUser.address?.street = 'pepe';
console.log(user?.['name']);
