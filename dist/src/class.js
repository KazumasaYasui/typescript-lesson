"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 111;
        this.id = 123;
        this.name = 'KY';
    }
    static isAdult(age) {
        return age > 17;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`ID: ${this.id}... Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    // greeting(this: Teacher) {
    //     console.log(`ID: ${this.id}... Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}.`);
    // }
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}.`);
    }
}
console.log(Person.species);
console.log(Teacher.isAdult(27));
const teacher = new Teacher('KY', 28, 'Math');
console.log(teacher.subject);
teacher.subject = 'Japanese';
teacher.greeting();
// const yasui = new Person('Yasui', 27);
// yasui.incrementAge();
// yasui.greeting();
// const anotherYasui = {
//     name: 'anotherYasui',
//     age: 27,
//     incrementAge: yasui.incrementAge,
//     greeting: yasui.greeting
// }
// anotherYasui.greeting();
//# sourceMappingURL=class.js.map