//EXERCISE 1
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); 



//EXERCISE 2
function divition (...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}
console.log(divition(1, 2, 3)); 
