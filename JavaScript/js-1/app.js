// console.log("Hello There... ");

// let age = Math.floor(Math.random() * 100) + 1;

// if (age < 10) {
//     console.log("You are a child. You have to pay ₹10.")
// } 
// else if (age < 18) {
//     console.log("You are a teenager. You have to pay ₹20");
// }
// else if (age < 65) {
//     console.log("You are an adult. You have to pay ₹50");
// }
// else {
//     console.log("You are a SENIOR. You are free to go.");
// }

// console.log(age);


// Nesting if else function

// const password = prompt("Enter a Password!");

// // Password should be at least 6 characters 
// if (password.length >= 6) {

//     // Password should not contain spaces
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid Password!')
//     } 
//     else {
//         console.log('Password cannot contain spaces..')
//     }
// } 
// else {
//     console.log('Too Short..');
// }


// AND and OR operator

const age = 33;

// Note : the precedence of && is greater than ||. 

if ((age > 0 && age <5) || age > 65) {
    console.log("FREE!");
}
else if (age >= 5 && age < 10) {
    console.log("Pay ₹10.")
} 
else if (age >= 10 && age < 18) {
    console.log("Pay ₹20");
}
else if (age >= 18 && age < 65) {
    console.log("Pay ₹50");
}
else {
    console.log("Invalid Age!");
}
