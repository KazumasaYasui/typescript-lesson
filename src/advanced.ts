type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const yasui: EngineerBlogger = {
    name: 'Yasui',
    role: 'back-end',
    follower: 1000
}


interface Engineer2 {
    name: string;
    role: string;
}

interface Blogger2 {
    name: string;
    follower: number;
}

interface EngineerBlogger2 extends Engineer2, Blogger2 {}

const yasui2: EngineerBlogger2 = {
    name: 'Yasui',
    role: 'back-end',
    follower: 1000
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;


function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
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

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}

havePet(new Bird());
havePet(new Dog());
havePet({ speak() { console.log('hello') }, fly() { console.log('not fly') } });