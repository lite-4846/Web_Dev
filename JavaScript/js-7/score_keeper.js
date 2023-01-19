const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    panel: document.querySelector('#panel1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    panel: document.querySelector('#panel2')
}

// const player1 = document.querySelector('#player1');
// const player2 = document.querySelector('#player2');
// const panel1 = document.querySelector('#panel1');
// const panel2 = document.querySelector('#panel2');

const options = document.querySelector('#nor');
const reset = document.querySelector('#reset');

// let score1 = 0;
// let score2 = 0;
let rounds = 3;

options.addEventListener('change', function () {
    resetAll();
    // rounds = parseInt(e.target.value);
    rounds = parseInt(this.value);
    console.log(rounds);
});

function updateScore(player, opponent){
    player.score++;
    if (player.score <= rounds) {
        player.panel.innerText = player.score;
        if (player.score === rounds){
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.panel.style.color = '#06d6a0';
            opponent.panel.style.color = '#ef233c';
        }
    }
}

console.log(rounds);

p1.button.addEventListener('click', function (e) {
    // score1++;
    // if (score1 <= rounds) {
    //     panel1.innerText = score1;
    //     if (score1 === rounds){
    //         player1.disabled = true;
    //         player2.disabled = true;
    //         panel1.style.color = '#06d6a0';
    //         panel2.style.color = '#ef233c';
    //     }
    // }
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function (e) {
    // score2++;
    // if (score2 <= rounds) {
    //     panel2.innerText = score2;
    //     if (score2 === rounds){
    //         player1.disabled = true;
    //         player2.disabled = true;
    //         panel2.style.color = '#06d6a0';
    //         panel1.style.color = '#ef233c'
    //     }
    // }
    updateScore(p2, p1);
});

reset.addEventListener('click', function() {
    resetAll();
})

function resetAll() {
    // score1 = 0;
    // score2 = 0;
    // panel1.innerText = score1;
    // panel2.innerText = score2;
    // panel1.style.color = 'black';
    // panel2.style.color = 'black';
    // player1.disabled = false;
    // player2.disabled = false;

    for(let p of [p1, p2]){
        p.score = 0;
        p.panel.innerText = p.score;
        p.panel.style.color = 'black';
        p.button.disabled = false;
    }
}