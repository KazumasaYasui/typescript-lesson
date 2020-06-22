"use strict";
let hasValue = true;
let count = 11;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hasValue2 = true;
let count2 = 10;
let float2 = 3.14;
let negative2 = -0.12;
let single2 = 'hello';
let double2 = "hello";
let back2 = `hello`;
let hello;
hello = 'hello';
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
const person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
console.log(person2);
const fruits = ['Apple', 'Banana', 'Grape'];
const fruit = fruits[0];
fruit.length;
const fruits2 = ['Apple', 'Banana', 'Grape', 1];
const fruits3 = ['Apple', 'Banana', 'Grape', 1];
const book = ['bussiness', 1500, false];
book.push(21);
// console.log(book[3]);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// coffee.size = true;
// coffee.size = 'SHORT';
coffee.size = CoffeeSize.SHORT;
console.log(coffee.size);
let anything = true;
anything = 'hello';
anything = 123;
anything = ['hello', 33, true];
anything = {};
anything.hoeghoge = 'hogehoge';
let banana = 'banana';
banana = anything;
let unionType = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
let unionTypes = [21, 'hello', 999, 'Yes'];
const apple = 'apple';
const numZero = 0;
const boolTrue = true;
const grape = 'grape';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: clothSize
};
cloth.size = 'small';
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
function sayHello() {
    console.log('Hello!');
}
function sayHello2() {
    console.log('Hello!');
    return;
}
console.log(sayHello());
let tmp = undefined;
// let tmp2: undefined = null;
let tmp3 = null;
// let tmp4: null = undefined;
const anotherAdd = add;
const anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
const anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
const anotherAdd4 = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = (num) => num * 2;
const doubleNumber2 = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
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
function error(message) {
    throw new Error(message);
    // while (true) {
    // }
}
console.log(error('This is an error'));
//# sourceMappingURL=index.js.map