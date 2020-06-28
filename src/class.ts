abstract class Person {

    static species = 'Homo sapiens';
    static isAdult(age: number) {
        return age > 17;
    }

    readonly id: number = 111;
    constructor(public readonly name: string, protected age: number) {
        this.id = 123;
        this.name = 'KY';
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person) {
        console.log(`ID: ${this.id}... Hello! My name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }

    abstract explainJob(): void;
}


class Teacher extends Person {
    private static instance: Teacher;

    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.')
        }
        return this._subject;
    }

    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.')
        }
        this._subject = value;
    }

    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    // greeting(this: Teacher) {
    //     console.log(`ID: ${this.id}... Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this._subject}.`);
    // }

    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}.`);
    }

    static getInstance() {
        if (Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher('KY', 28, 'Math');
        return Teacher.instance;
    }
}

console.log(Person.species);
console.log(Teacher.isAdult(27));

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher.subject);
teacher.subject = 'Japanese';
teacher.greeting();
console.log(teacher, teacher2);


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
