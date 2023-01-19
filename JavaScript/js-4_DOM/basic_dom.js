const para = document.querySelector('p');

para.innerHTML += '<h4> So this is what happens! </h4>';

const btn3 = document.querySelector('#v1');
btn3.addEventListener('click', () => console.log('Heya!!'));

window.addEventListener('keydown', function (e) {
    switch(e.code){
        case 'ArrowUp':
            console.log('Up!');
            break;
        case 'ArrowDown':
            console.log('Down!');
            break;
        case 'ArrowLeft':
            console.log('Left!');
            break;
        case 'ArrowRight':
            console.log('Right!');
            break;
        default : 
            console.log('Ignored');
    }
})