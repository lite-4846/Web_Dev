const gullyBoys = {
    sahil: 38,
    om: 48,
    bhavesh: 38,
    labhesh: 99,
    ujwal: 83,
    pratik: 83,
    naresh: 38,
    tanmay: 83
}

// for(let boys in gullyBoys){
//     console.log(`${boys} scored ${gullyBoys[boys]}`);
// }

let total = 0;
let scores = Object.values(gullyBoys);

for(let score of scores){
    total += score;
}

let average = total/scores.length;

console.log(total);
console.log(average);