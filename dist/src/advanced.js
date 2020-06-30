"use strict";
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
    return '';
}
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
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
havePet(new Dog());
havePet({ speak() { console.log('hello'); }, fly() { console.log('not fly'); } });
//# sourceMappingURL=advanced.js.map