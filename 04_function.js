// 1 Функції
// Function declaration
// function greet(name) {
//     console.log('Привіт - ', name);
// }

// Function expression
// const greet2 = function greet2(name) {
//     console.log('Привіт 2 - ', name);
// };
//
// greet('Артур');
// greet2('Артур');

// 2 Анонімні функції
// let counter = 0;
//
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter);
//     }
//
// }, 1000);

// 3 Стрілочні функції

// function greet(name) {
//     console.log();
// }

// const arrow = (name) => {
//     console.log('Привіт - ', name);
// };
//
// arrow('Даніель');
//
// const pow2 = num => num ** 2;
//
// console.log(pow2(10));

// 4 Параметри по замовчуванню

// const sum = (a, b) => a + b;
// console.log(sum(50, 5));
//
// function sumAll(...all) {
//     let result = 0;
//     for (let num of all) {
//         result += num;
//     }
//     return result;
// }
//
// const res = sumAll(1, 2, 3, 4, 5, 6);
// console.log(res);

// 5 Замикання

// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName);
//     };
// }
//
// const logWithLastName = createMember('Daniel');
// console.log(logWithLastName);