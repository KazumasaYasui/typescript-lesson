"use strict";
var _a, _b, _c;
const yasui = {
    name: 'Yasui',
    role: 'back-end',
    follower: 1000
};
const yasui2 = {
    name: 'Yasui',
    role: 'back-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');
const upper123 = toUpperCase(123);
const upperTrue = toUpperCase(true);
const upperObj = toUpperCase;
upperObj('h1');
upperObj(321);
const tmpUpper = function (x) { return 0; };
let intersectionFunc;
intersectionFunc = function (a, b) { return 0; };
let unionFunc;
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
havePet(new Dog());
havePet({ kind: 'bird', speak() { console.log('hello'); }, fly() { console.log('not fly'); } });
const designer = {
    name: 'yasui',
    role: 'web'
};
designer.name;
designer.role; // 推測してくれない
designer.hoge; // 定義していない値でもエラーにならない
const downloadData = {
    id: 1,
    user: {}
};
console.log((_b = (_a = downloadData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadData.user) !== null && _c !== void 0 ? _c : 'no-user';
let targetString = 'hello';
let sourceString = 'hello';
targetString = sourceString;
// sourceString = targetString;
let targetNumber = 1;
let sourceNumber = 1;
targetNumber = sourceNumber;
// sourceNumber = targetNumber;
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["RLUE"] = 1] = "RLUE";
})(Color || (Color = {}));
let target1 = Color.RED;
let source1 = 100;
target1 = source1;
source1 = target1;
let target2 = function (a, b) { return { c: 'hoge' }; };
let source2 = function (a) { return { c: 'hoge', d: 'fuga' }; };
target2 = source2;
target2('a', 'b');
// let target3 = function (a: string) { return { c: 'hoge', d: 'fuga' } };
// let source3 = function (a: string, b: string) { return { c: 'hoge' } };
// target3 = source3;
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        // private age: number = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        // age: number = 5;
    }
}
let target4 = new AdvancedPerson();
let source4 = new AdvancedCar();
target4 = source4;
console.log(['abc', 'xyz'] + 'hogefugapiyo');
function advancedFn1(...args) {
    // args.push(0)
}
advancedFn1(0, 0, 0, 3, 3, 3);
function advancedFn2(...args) {
}
advancedFn2(0, 'hi', true, 1, 2, 3);
let milk = 'milk';
let drink = milk;
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38
};
//# sourceMappingURL=advanced.js.map