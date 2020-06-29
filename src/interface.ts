// type addFunc = (num1: number, num2: number) => number;

interface addFunc {
    (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Nameable {
    name: string;
    nickname?: string;
}

interface Ageable {
    age: number;
}

interface Human extends Nameable, Ageable {
    // readonly name: string;
    // age: number;
    greeting(message: string): void;
    ok?(condition: boolean): void;
}

const human: Human = {
    name: 'Yasui',
    age: 27,
    greeting(message: string) {
        console.log(message);
    }
}

class Developer implements Human {
    nickname?: string;
    constructor(public name: string, public age: number, public experience: number, initNickName?: string) {
        if (initNickName) {
            this.nickname = initNickName
        }
    }
    greeting(message?: string) {
        if (message) {
            console.log(message);
        } else {
            console.log('Hello!');
        }
    }

    ok(condition: boolean = false) {
        if (condition) {
            console.log('OK');
        } else {
            console.log('NG');
        }
    }
}

const tmpDeveloper = {
    name: 'Yasui',
    age: 27,
    experience: 3,
    greeting(message: string) {
        console.log(message);
    }
}

const user: Human = new Developer('Yasui', 27, 3);
const user2: Human = tmpDeveloper;
const user3 = new Developer('Yasui', 37, 13, 'Kazu');
user.name = 'KY'
user3.name = 'KY'

const nameable: Nameable = {
    name: 'Yasui'
}

if (user3.nickname) {
    console.log(user3.nickname.toUpperCase())
}

