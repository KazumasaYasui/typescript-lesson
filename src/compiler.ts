// Hello!!!
let hello2 = 'hello';
console.log(hello2.toUpperCase());

function echo(message: string | undefined) {
    if (message) {
        return message;
    }
}
let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase();

let nullableMessage = echo('hi!');
let undefinedMessage: string | undefined = undefined;
let onlyNull: null = null;
let onlyUndefined: undefined = undefined;

if (nullableMessage) {
    nullableMessage.toUpperCase();
}

echo.call(null, 'null');
const newFunction1 = echo.bind(null, 'null');
const newFunction2 = echo.apply(null, ['null']);
