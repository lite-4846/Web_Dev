const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(e) {
//     console.log('Gotcha!');
// })

input.addEventListener('input', function(e) {
    console.log('Gotcha!');
    h1.innerText = input.value;
})

const div = document.querySelector('#container');
const butt = document.querySelector('button');

let ran = () => Math.floor(Math.random() * 255) + 1;

butt.addEventListener('click', (e) => {
    let r = ran();
    let g = ran();
    let b = ran();
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    e.stopPropagation();
})

div.addEventListener('click', function () {
    div.classList.toggle('hide');
})