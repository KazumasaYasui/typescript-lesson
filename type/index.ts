let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

let hasValue2 = true;
let count2 = 10;
let float2 = 3.14;
let negative2 = -0.12;
let single2 = 'hello';
let double2 = "hello";
let back2 = `hello`;

let hello: string;
hello = 'hello';

interface myPerson {
    name: {
        first: string;
        last: string;
    };
    age: number;
}
const person: myPerson = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}

const person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}
console.log(person2);

const fruits: string[] = ['Apple', 'Banana', 'Grape']
const fruit = fruits[0]
fruit.length

const fruits2: any = ['Apple', 'Banana', 'Grape', 1]
const fruits3 = ['Apple', 'Banana', 'Grape', 1]

const book: [string, number, boolean] = ['bussiness', 1500, false];
book.push(21);
// console.log(book[3]);

enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
// coffee.size = true;
// coffee.size = 'SHORT';
coffee.size = CoffeeSize.SHORT;
console.log(coffee.size);

let anything: any = true;
anything = 'hello';
anything = 123;
anything = ['hello', 33, true];
anything = {};
anything.hoeghoge = 'hogehoge';
let banana = 'banana';
banana = anything;

let unionType: number | string = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
let unionTypes: (number | string)[] = [21, 'hello', 999, 'Yes'];

const apple: 'apple' = 'apple';
const numZero: 0 = 0;
const boolTrue: true = true;
const grape = 'grape';

type ClothSize = 'small' | 'medium' | 'large'
let clothSize: ClothSize = 'large';
const cloth: {
    color: string;
    size: ClothSize
} = {
    color: 'white',
    size: clothSize
}
cloth.size = 'small';

function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(1, 2);

function sayHello(): void {
    console.log('Hello!');
}
function sayHello2(): undefined {
    console.log('Hello!');
    return;
}
console.log(sayHello());
let tmp: undefined = undefined;
let tmp2: undefined = null;
let tmp3: null = null;
let tmp4: null = undefined;

const anotherAdd: (n1: number, n2: number) => number = add;
const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
    return num1 + num2;
}
const anotherAdd3 = function (num1: number, num2: number): number {
    return num1 + num2;
}
const anotherAdd4: (n1: number, n2: number) => number = function (num1, num2) {
    return num1 + num2;
}
const doubleNumber = (num: number): number => num * 2;
const doubleNumber2: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => void): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text:string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;
anyInput = 'hello';
anyInput = 21;
anyInput = true;
text = anyInput;

if (typeof unknownInput === 'string') {
    text = unknownInput;
}

function error(message: string): never {
    throw new Error(message);
    // while (true) {
    // }
}
console.log(error('This is an error'));
