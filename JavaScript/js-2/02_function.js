// We can pass function in function...

console.log('**********  Here starts function  **********')

function twoTimes(func) {
    func();
    func();
}

function rollDie() {
    console.log(Math.floor(Math.random() * 6 + 1));
}

twoTimes(rollDie);      // --> It will print rollDie two times.


//  *********  Return Function  **********  

function isBetweenNumber(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = isBetweenNumber(0, 18);

//  -->  Now the isChild is a function returened from isBetweenNumber, can be used like...

isChild(8);  //  -->  will return 'true' since its between 0 and 18.


const isAdult = isBetweenNumber(19, 40);

//  -->  Same as above...

isAdult(16);  //  -->  will return 'false' since its NOT between 18 and 40;
