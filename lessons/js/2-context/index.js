class Clock {
    constructor(name) {
        this.name = name;
    }

    hello(delay) {
        setTimeout(() => {
            console.log(`Hello! I am clock with name ${this.name}`);
        }, delay);
    }
    
    // Without arrow function
    // hello(delay) {
    //     const name = this.name;
    //     setTimeout(function () {
    //         console.log(`Hello! I am clock with name ${name}`);
    //     }, delay);
    // }
}

(new Clock('AppleWatch')).hello(1000, 'AppleWatch');
