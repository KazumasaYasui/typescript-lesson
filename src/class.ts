class Person {

    name: string;
    private age: number;

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}

// let person2: Person;
const yasui = new Person('Yasui', 27);
yasui.incrementAge();
yasui.greeting();



// const anotherYasui = {
//     name: 'anotherYasui',
//     age: 27,
//     incrementAge: yasui.incrementAge,
//     greeting: yasui.greeting
// }
// anotherYasui.greeting();
