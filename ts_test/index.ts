//1. 불리언
const isDone: boolean = false;
console.log(isDone);

//2. 숫자
const dicimal: number = 0;
const hex: number = 0x00fd;
const binary: number = 0b1010;
const octal: number = 0o744;

//3. 문자열
const message: string = "Hello, TypScript!";

//4. 배열
const list: number[] = [1,2,3,4];
const list2: string[] = ['red','blue','green'];

//5. 튜플
const tuple: [string,number, boolean] = ["apple", 10, false];

//6. 열거형
enum Color {
  red = 10,
  blue = 20,
  green = 30
}

const color: Color = Color.blue;
console.log(color);

//7. any
let notSure: any = 1;
notSure = "message";
notSure = true;

let anyList: any[] = [1, true, "hi"];
console.log(anyList);

//8. void
let v: void = undefined;

const function1 = (): void => {
  console.log("void");
};

//9. Object
const create = (obj: object | null): void => {
  create(null);
  create({a:1});
  // create("string");
  // create(10);
  // create(true);
  // create(undefined);
}
