// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
    customerName = "BOB";
    return customerName;
};


var bestCustomer;
function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}


function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return bestCustomer;
}


const leastFavoriteCustomer = "Spider";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Snake";
    return leastFavoriteCustomer;
}