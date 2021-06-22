class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`Hello! I am ${this.name}`);
    }
}

class Cat extends Animal {
    playSound() {
        console.log('Meom');
    }
}

class Dog extends Animal {
    playSound() {
        console.log('Woof');
    }
}

const masha = new Cat('Masha', 10);
const sharik = new Dog('Sharik', 5);

masha.hello();
masha.playSound();

sharik.hello();
sharik.playSound();
