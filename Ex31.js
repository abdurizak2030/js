function operation (a, b, callback) {
    return callback(a, b);
}   
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
function subtract(x, y) {
    return x - y;
}
function divide(x, y) {
    return x / y;
}


console.log(operation(5, 3, add));
console.log(operation(5, 3, multiply));
console.log(operation(5, 3, subtract));
console.log(operation(6, 3, divide));
