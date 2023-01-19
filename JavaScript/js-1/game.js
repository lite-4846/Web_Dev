let maximum = prompt('Enter a Maximun Number');
while(!parseInt(maximum)){
    maximum = prompt('Enter a Valid Number');
}

let attempts = 1;

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum); 

let guess = prompt('Guess the Number!');

while(parseInt(guess) !== targetNum){
    attempts++;
    if(guess.toLowerCase() === 'q') break;

    if(guess < targetNum){
        guess = prompt('Too Low!, Guess again!');
    }
    else if(guess > targetNum){
        guess = prompt('Too high!, Guess again!');
    }
    else {
        guess = prompt('Invalid Guess! Guess Again...')
    }
}

if(guess === 'q'){
    console.log('Quitting!');
}
else {
    console.log(`Congrats, You guessed it in ${attempts} attempts`);
}