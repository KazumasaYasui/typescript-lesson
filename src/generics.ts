function copy<T>(value: T): T {
    return value;
}

console.log(copy<string>('hello').toUpperCase());
console.log(copy({ name: 'Yasui' }).name);

function copy2<T extends { name: string }>(value: T): T {
    return value;
}
console.log(copy2({ name: 'Yasui' }));


type K = keyof { name: string; age: number; };

function copy3<T extends { name: string }, U extends keyof T>(value: T, key: U) {
    return value[key];
}
console.log(copy3({ name: 'Yasui', age: 27 }, 'age'));


class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
    id: number;
    data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
    id: 3,
    data: [33]
}
console.log(tmpDatabase.data);


interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})
fetchData.then(data => {
    data.toUpperCase();
})

const vegetables: Array<string> = ['Tomato', 'Broccoli', 'Asparagus'];


interface ResponseData<T extends { message: string } = any> {
    data: T;
    status: number;
}
let genericsTmp1: ResponseData;


interface Vegetables {
    readonly tomato: string;
    pumpkin?: string;
}
let genericsTmp2: keyof Vegetables;

type MappedTypes = {
    [P in 'tomato' | 'pumpkin']: P
}

type MappedTypes2 = {
    readonly [P in keyof Vegetables]?: string
}

type MappedTypes3 = {
    -readonly [P in keyof Vegetables]-?: string
}


type ConditionalTypes = 'tomato' extends string ? number : boolean
type ConditionalTypes2 = string extends 'tomato' ? number : boolean
type ConditionalInfer = { tomato: 'tomato' } extends { tomato: infer R } ? R : boolean
type DistributiveConditionalTypes = ('tomato' | 'pumpkin') extends 'tomato' ? number : boolean
type DistributiveConditionalTypes2<T> = T extends 'tomato' ? number : boolean
let genericsTmp3: DistributiveConditionalTypes2<'tomato' | 'pumpkin'>
let genericsTmp4: NonNullable<string | null>;
let genericsTmp5: ReturnType<string | any>;
