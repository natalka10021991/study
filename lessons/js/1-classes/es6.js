class Animal {
    constructor(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }

    hello() {
        console.log(`Hello! I am ${this.name}`);
    }
    
    playSound() {
        console.log(this.sound);
    }
}

const masha = new Animal('Masha', 10, 'Meom');
const sharik = new Animal('Sharik', 5, 'Gav');

masha.hello();
masha.playSound();

sharik.hello();
sharik.playSound();
