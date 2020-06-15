var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hasValue2 = true;
var count2 = 10;
var float2 = 3.14;
var negative2 = -0.12;
var single2 = 'hello';
var double2 = "hello";
var back2 = "hello";
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
console.log(person2);
var fruits = ['Apple', 'Banana', 'Grape'];
var fruit = fruits[0];
fruit.length;
var fruits2 = ['Apple', 'Banana', 'Grape', 1];
var fruits3 = ['Apple', 'Banana', 'Grape', 1];
var book = ['bussiness', 1500, false];
book.push(21);
// console.log(book[3]);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// coffee.size = true;
// coffee.size = 'SHORT';
coffee.size = CoffeeSize.SHORT;
console.log(coffee.size);
var anything = true;
anything = 'hello';
anything = 123;
anything = ['hello', 33, true];
anything = {};
anything.hoeghoge = 'hogehoge';
var banana = 'banana';
banana = anything;
var unionType = 10;
// unionType.toUpperCase();
unionType = 'hello';
unionType.toUpperCase();
var unionTypes = [21, 'hello', 999, 'Yes'];
var apple = 'apple';
var numZero = 0;
var boolTrue = true;
var grape = 'grape';
var clothSize = 'large';
var cloth = {
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
var tmp = undefined;
var tmp2 = null;
var tmp3 = null;
var tmp4 = undefined;
var anotherAdd = add;
var anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
var anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
var anotherAdd4 = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
var doubleNumber2 = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
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
}
console.log(error('This is an error'));
