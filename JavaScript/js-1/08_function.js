function greet(person) {
    console.log(`Hello, There... ${person}`);
}

greet('Yamato');

function avg(x, y, z) {
    console.log(`The average of ${x}, ${y} and ${z} is ${(x + y + z) / 3}.`);
}

avg(3, 3, 6);

// Creating Repeat function..

function repeat(str, numTimes) {
    let result = [];
    for (let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}