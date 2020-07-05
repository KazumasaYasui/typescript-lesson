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


function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: any): any;
function toUpperCase(x: string | number) {
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

interface TmpFunc {
    (x: string): number;
    (x: number): number;
}
const tmpUpper: TmpFunc = function (x: string | number) { return 0 };

interface FuncA {
    (a: number, b: string): number;
    (a: string, b: number): number;
}
interface FuncB {
    (a: string): number;
}
let intersectionFunc: FuncA & FuncB;
intersectionFunc = function(a: number | string, b?: number | string) { return 0 }

interface FuncC {
    (a: number): number;
}
interface FuncD {
    (a: string): string;
}
let unionFunc: FuncC | FuncD;


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
    kind: 'dog' = 'dog'
    speak() {
        console.log('bow-wow');
    }
}

class Bird {
    kind: 'bird' = 'bird'
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
havePet({ kind: 'bird', speak() { console.log('hello') }, fly() { console.log('not fly') } });


// NOTE: *.htmlがないのでエラー
// const input = <HTMLInputElement>document.getElementById('input');
// const input2 = document.getElementById('input') as HTMLInputElement;
// const input3 = document.getElementById('input')!;
//
// (<HTMLInputElement>document.getElementById('input')).value = 'initial input value other1';
// (document.getElementById('input') as HTMLInputElement).value = 'initial input value other2';
//
// if (input) {
//     input.value = 'initial input value';
// } else if (input2) {
//     input2.value = 'initial input2 value';
// }


interface Designer {
    name: string;
    // age: number; // NOTE: string以外は使用できない
    [index: string]: string; // NOTE: インデックスシグネチャのキーをstringにした場合はstringもnumberもOK
    // [index: number]: string; // NOTE: インデックスシグネチャのキーをnumberにした場合はnumberのみOK
}

const designer: Designer = {
    name: 'yasui',
    role: 'web'
}

designer.name;
designer.role; // 推測してくれない
designer.hoge; // 定義していない値でもエラーにならない


interface DownloadData {
    id: number;
    user: {
        name?: {
            first: string;
            last: string;
        }
    }
}

const downloadData: DownloadData = {
    id: 1,
    user: {}
}

console.log(downloadData.user?.name?.first);

const userData = downloadData.user ?? 'no-user';

type id = DownloadData["id"]
type name = DownloadData["user"]["name"]
type idOrUser = DownloadData["id" | "user"]


let targetString = 'hello';
let sourceString: 'hello' = 'hello';
targetString = sourceString;
// sourceString = targetString;

let targetNumber = 1;
let sourceNumber: 1 = 1;
targetNumber = sourceNumber;
// sourceNumber = targetNumber;

enum Color {
    RED,
    RLUE
}
let target1 = Color.RED;
let source1 = 100;
target1 = source1;
source1 = target1;

let target2 = function (a: string, b: string) { return { c: 'hoge' } };
let source2 = function (a: string) { return { c: 'hoge', d: 'fuga' } };
target2 = source2;
target2('a', 'b');

// let target3 = function (a: string) { return { c: 'hoge', d: 'fuga' } };
// let source3 = function (a: string, b: string) { return { c: 'hoge' } };
// target3 = source3;

class AdvancedPerson {
    name: string = 'Peter'
    // private age: number = 35;
}
class AdvancedCar {
    name: string = 'Prius'
    // age: number = 5;
}
let target4 = new AdvancedPerson();
let source4 = new AdvancedCar();
target4 = source4;


console.log(['abc', 'xyz'] + 'hogefugapiyo');


function advancedFn1(...args: readonly number[]) {
    // args.push(0)
}
advancedFn1(0, 0, 0, 3, 3, 3)

function advancedFn2(...args: [number, string, boolean?, ...number[]]) {
}
advancedFn2(0, 'hi', true, 1, 2, 3)


let milk = 'milk' as const;
let drink = milk;
const array = [10, 20] as const;
const peter ={
    name: 'Peter',
    age: 38
} as const;

type PeterType = typeof peter;
