// map : It creates an array of objects taken from the ohere things.

console.log('************   Map  ***********')

const gullyBoys = ['labhesh', 'bhavesh', 'om'];

// const GullyBoys = gullyBoys.map(function(name){
//     return name.toUpperCase();
// })

 
// arrow : Its the shorter way to write function;

const add = function(x, y) {
    return x+y;
}

const sub = (x, y) => {
    return x-y;
}

const GullyBoys = gullyBoys.map((name) => {
    return name.toUpperCase();              // It works same as above but with less words.
})

console.log(gullyBoys);
console.log(GullyBoys);