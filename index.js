// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// console.log(upperCaseCustomerName());
// console.log(customerName);

var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
}
// setBestCustomer();
// console.log(bestCustomer);

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
// overwriteBestCustomer();
// console.log(bestCustomer);

const leastFavoriteCustomer = "Shaq";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Bruno";
}
