"use strict";
//1. 불리언
const isDone = false;
console.log(isDone);
//2. 숫자
const dicimal = 0;
const hex = 0x00fd;
const binary = 0b1010;
const octal = 0o744;
//3. 문자열
const message = "Hello, TypScript!";
//4. 배열
const list = [1, 2, 3, 4];
const list2 = ['red', 'blue', 'green'];
//5. 튜플
const tuple = ["apple", 10, false];
//6. 열거형
var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["blue"] = 20] = "blue";
    Color[Color["green"] = 30] = "green";
})(Color || (Color = {}));
const color = Color.blue;
console.log(color);
//7. any
let notSure = 1;
notSure = "message";
notSure = true;
let anyList = [1, true, "hi"];
console.log(anyList);
//8. void
let v = undefined;
const function1 = () => {
    console.log("void");
};
//9. Object
const create = (obj) => {
    create(null);
    create({ a: 1 });
    // create("string");
    // create(10);
    // create(true);
    // create(undefined);
};
