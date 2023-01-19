const images = document.getElementsByTagName('img');

for(let img of images){
    // img.src = 'jiekdidk.com';
    img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}

const ide = document.querySelector('img');
// ide.id = 'soul';

const firstLink = document.querySelector('a');
firstLink.setAttribute('href', 'http://www.google.com');

const input = document.querySelector('input[type="text"]');
input.type = 'password';