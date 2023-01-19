// Concepts of Javascript // 

// Numbers.....

1       // This are numbers in Javascript. These are used as normally, as in real world.
2
3
Nan // --> Not a Number still consider as number in javascript.
//                          ___________________________________

// Boolean....

true    // This are boolean values it can only be true or false.
false


// String....

var favAnime = "One Piece";
//      var --> var data type are now old fashioned. So better use new ones.

let favCharacter = "Roronoa Zoro";
//      let --> It is general keyword to specify variables. The value of varible can be changed afterwards.

const sword = "shushui";
//      const --> The value of variable can't be changed afterwards.

//                          ___________________________________


// Null and Undefined....

null    //  --> It is used when the variable doesn't have value in it.
undefined   // --> It is shown when the value can't be find.

//                          ___________________________________

// Prompt and alert 

// --> prompt will ask you fill the info.

// Popular string methods

// 1. string.trim();        -->  will cut the extra spaces 
// 2. string.slice(2, 4)    -->  will slice the string in arguments portion
// 3. string.length         -->  will show the length of string
// 4. string.toUpperCase()   -->  will upper case all the letters
// 5. string.toLowerCase()   -->  will lower case all the letters
// 6. string[4]             -->  will show the specific index number
// 7. string.replace('hi',"HI") --> will replace hi into HI in the string
// 8. string.indexOf('di')  --> will tell the index no. of letter in the string.

//                          ___________________________________


// Popular Other methods

// 1. Math.PI               -->  value of Pi
// 2. Math.pow(2, 4)        -->  2 to the power 4 similar as 2 ** 4
// 3. Math.sqrt(4)          -->  square root of 
// 4. parseInt("kdkk1073")  -->  will try to extract integer
// 5. typeOf 'didie'        -->  will show the type of variable or given thing like, "string" "number", etc.
// 

//                          ___________________________________


// Another method to write a String and Perform functions in it.

`To use this we have to use the specific mark like this -->`;

// --> The speciality of this, we can use function/methods/properties within. 
// eg.

`luffy had 5kg meat and zoro has 2kg meat then they both have ${5 + 2}kg meat.`;

//                          ___________________________________


// Falsy values to be remembered

// false, 0, emptyString, Nan, undefined.

//                          ___________________________________


// ---------------    Arrays  --------------

let show = [luffy, meat, 5, Nan, null, undefined, "Moshi mosh"];

// Note : In any perticular js file, use only one kinda of string method like this "Hello" or this 'Hello'...