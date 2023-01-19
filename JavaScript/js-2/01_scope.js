// --> Scopes

// Functional Scope     --> Except for function this below scopes wont be applied anywhere...

let boss = 'Luffy';
let radius = 8;

function panchat(){
    let boss = 'kaido';
    console.log(boss);  //  --> this will print kaido.
    radius = 3;
}

panchat();

console.log(boss);      //  --> this will print Luffy.
console.log(radius);    //  --> the value can be updated if function is executated.


// Block Scope

let rightHand = 'zoro';

if (rightHand === 'zoro'){
    let leftHand = 'sanji';
    console.log(leftHand);
}

// console.log(leftHand);  --> this will throw an error since leftHand only exists in "if" conditional..

