class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is Eating!`;
    }
}

class Cat extends Pet{
    constructor(name, age, lifes){
        super(name, age);
        this.rLifes = lifes;
    }
    eat(){
        return `${this.name} is Now Waiting`;
    }
    meow(){
        return 'Meowww!';
    }
}

class Dog extends Pet{
    constructor(name, age){
        super(name, age);
    }
    bark(){
        return 'Wooff!';
    }
}