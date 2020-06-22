"use strict";
// Hello!!!
let hello2 = 'hello';
console.log(hello2.toUpperCase());
function echo(message) {
    return message;
}
let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase();
let nullableMessage = echo('hi!');
let undefinedMessage = undefined;
let onlyNull = null;
let onlyUndefined = undefined;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
echo.call(null, 'null');
const newFunction1 = echo.bind(null, 'null');
const newFunction2 = echo.apply(null, ['null']);
//# sourceMappingURL=compiler.js.map