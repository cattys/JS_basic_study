'use strict';

// 1.String Concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`)

console.log('\'') // '이 출력됨
/*
    \n 새로 줄바꿈
    \t 탭
*/

// 2.Numeric operators
console.log(1 + 1) //add
console.log(1 - 1) //substract
console.log(1 / 1) //divide
console.log(1 * 1) //multiply
console.log(1 % 1) //remainder
console.log(2 ** 3) //exponentiation >> 2의 3승 = 8

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement)
// 1. counter = counter +1;
// 2. preIncrement = counter;

const postIncrement = counter++;
console.log(postIncrement)
// 1. preIncrement = counter;
// 2. counter = counter +1;


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x= x + y;
x -= y; // x= x - y;
x *= y; // x= x * y;
x /= y; // x= x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. Logical operators: || (or) && (and) ! (not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value >> heavy한 function/expression은 마지막에 넣기
console.log(`or : ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('😉');
    }
    return true;
}


// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// !(not)


//7. Equality
const stringFive = '5';
const numberFive = 5;

// ==loose equality, with type conversion //값만 같아도 된다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion // 값+타입까지 같아야한다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
// 객체는 reference 형태로 저장되기에 완전히 똑같을수 없다.

const arum1 = {
    name: 'arum'
};
const arum2 = {
    name: 'arum'
};
const arum3 = arum1;

console.log(arum1 == arum2); //false
console.log(arum1 === arum2); //false
console.log(arum1 === arum3); //true

// quiz
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); //true
console.log(null === undefined); //false

// * 0, null, undefined, empty 문자열은 전부 false로 간주될수 있음

// 8. if, else if, else
// 9. Ternary operator // 3항 조건문 // ? operators
// condition ? value1 : value2;
const name = 'arumi';
console.log(name === 'ellie' ? 'yes' : 'no'); // no출력
// 간단할때만 쓸것

// 10. Switch
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox': // 붙여두면 알아서 같은 결과값 출력함
        console.log('love you');
        break;
    default:
        console.log('idk');
        break;
}

// 11. Loops
// while loop, while the condition is truthy.
// body code is executed(실행된다)
let i = 3;
while (i > 0) {
    console.log(`i: ${i}`);
    i--;
}
// i는 0이됨

// do while loop, body case is executed first,
// then check the condition.
do {
    console.log(`do 일단 실행해! i : ${i}`);
    i--;
} while (i > 0);
// 조건을 확인하고 맞으면 다시 do로 돌아가서 실행

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`i:${i}`);
}

//nested loops 가능 > for 안에 for가능 but CPU에 안좋음

// break : loop를 완전히 끝내는것
// continue : 지금꺼만 스킵하고 다시 다음 스텝 시작

// Q1. iterate from 0 to 10 and print only even numbers(use continue)

for (let a = 0; a < 11; a++) {
    if (a % 2 !== 0) {
        continue;
    }
    console.log(`a: ${a}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let b = 0; b <= 10; b++) {
    if (b > 8) {
        break;
    }
    console.log(`b: ${b}`);
}