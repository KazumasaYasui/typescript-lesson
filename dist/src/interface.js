"use strict";
// type addFunc = (num1: number, num2: number) => number;
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const human = {
    name: 'Yasui',
    age: 27,
    greeting(message) {
        console.log(message);
    }
};
class Developer {
    constructor(name, age, experience, initNickName) {
        this.name = name;
        this.age = age;
        this.experience = experience;
        if (initNickName) {
            this.nickname = initNickName;
        }
    }
    greeting(message) {
        if (message) {
            console.log(message);
        }
        else {
            console.log('Hello!');
        }
    }
    ok(condition = false) {
        if (condition) {
            console.log('OK');
        }
        else {
            console.log('NG');
        }
    }
}
const tmpDeveloper = {
    name: 'Yasui',
    age: 27,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = new Developer('Yasui', 27, 3);
const user2 = tmpDeveloper;
const user3 = new Developer('Yasui', 37, 13, 'Kazu');
user.name = 'KY';
user3.name = 'KY';
const nameable = {
    name: 'Yasui'
};
if (user3.nickname) {
    console.log(user3.nickname.toUpperCase());
}
//# sourceMappingURL=interface.js.map