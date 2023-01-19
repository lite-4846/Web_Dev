const h1 = document.querySelector('h1');
const button = document.querySelector('button');

// h1.style.textAlign = 'center';

button.style.padding = '7px 20px';
button.style.borderRadius = '7px';

let ran = () => Math.floor(Math.random() * 255) + 1;

const para = document.createElement('p');

button.addEventListener('click', () => {
    let r = ran();
    let g = ran();
    let b = ran();
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    document.body.appendChild(para);
    para.innerText = `rgb(${r},${g},${b})`;
    if(r+b+g < 250){
        para.style.color = `rgb(235,248,211)`;
    }
    else {
        para.style.color = `rgb(29,24,6)`;
    }
})