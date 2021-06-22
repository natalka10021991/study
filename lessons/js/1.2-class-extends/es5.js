function Animal(name, age) {
    this._name = name;
    this._age = age;
    this.hello = function() {
        console.log(`Hello! I am ${this._name}`);
    }
}

function Cat() {
    Animal.apply(this, arguments);
}

function Dog() {
    Animal.apply(this, arguments);
}

Cat.prototype.playSound = function() {
    console.log("Meom")
}

Dog.prototype.playSound = function() {
    console.log("Woof")
}

const masha = new Cat('Masha', 10);
const sharik = new Dog('Sharik', 5);

masha.hello();
masha.playSound();

sharik.hello();
sharik.playSound();
