"use strict";
function copy(value) {
    return value;
}
console.log(copy('hello').toUpperCase());
console.log(copy({ name: 'Yasui' }).name);
function copy2(value) {
    return value;
}
console.log(copy2({ name: 'Yasui' }));
function copy3(value, key) {
    return value[key];
}
console.log(copy3({ name: 'Yasui', age: 27 }, 'age'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());
const tmpDatabase = {
    id: 3,
    data: [33]
};
console.log(tmpDatabase.data);
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
let genericsTmp1;
let genericsTmp2;
let genericsTmp3;
let genericsTmp4;
let genericsTmp5;
//# sourceMappingURL=generics.js.map