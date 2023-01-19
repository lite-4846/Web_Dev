// **********  For Each  **********

console.log('***********  For Each  *********');

const numbers = []; //  -->  Array of 1-20 number.

for (let i = 0; i < 20; i++) {
    numbers.push(i + 1);
}

//  Now we can print it is using function;

// const print = function(n){
//     console.log(n);
// }

// print(1);
// print(2);

// And so on

// Instead of that 

numbers.forEach(function (n) {
    if (n % 5 === 0) {
        console.log(n);
    }
});