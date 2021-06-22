function Animal(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;

}

Animal.prototype.hello = function() {
    console.log(`Hello! I am ${this.name}`);
}


Animal.prototype.playSound = function() {
    console.log(this.sound);
}

const masha = new Animal('Masha', 10, 'meom');
const sharik = new Animal('Sharik', 5, 'gav');

masha.hello();
masha.playSound();

sharik.hello();
sharik.playSound();
