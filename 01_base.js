// 1 Змінні

// const firstName = 'Daniel';
// const age = 20;

// const withNum5 = '5';

// console.log(name);

// 2 Мутировання
// console.log('Ім`я людини: ' + firstName + ' ' + age + ' років');
// console.log(age);

// const lastName = prompt('Введіть фамілію');
// alert(firstName + ' ' + lastName);

//3 Оператори
// const currentYear = 2021;
// const birthYear = 2001;

// const age = currentYear - birthYear

// const a = 10;
// const b = 5;
//
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

//4 Типи даних
//
// const isItTrue = true;
// const name = 'Daniel';
// const age = 20;
// let x;
//
// console.log(typeof isItTrue);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(typeof null)

//5 Пріоритет операторів
//
// const fullAge = 20;
// const birthYear = 2001;
// const currentYear = 2021;
//
// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

//6 Условні оператори
//
// const courseStatus = 'pending';
//
// if (courseStatus === 'ready') {
//     console.log('Курс вже готовий і його можна проходити');
// } else if (courseStatus === 'pending') {
//     console.log('Курс наразі в розробці ');
// }

// const isReady = true;
//
// if (isReady) {
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }
// Тернарний вираз
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42;
// const num2 = '42';
//
// console.log(num1 === num2);

//7 Булева логіка

//8 Функції
// function calculateAge(year) {
//     return 2021 - year;
// }
//
// console.log(calculateAge(2001));
//
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year);
//
//     if (age > 0) {
//         console.log('Людина на ім`я ' + name + ' зараз має стільки років ' + age);
//     } else {
//         console.log('Це взагалі майбутнє xD');
//     }
//
// }
//
// logInfoAbout('Даніель', 2001);
// logInfoAbout('Едуард', 2023)

//9 Массиви

// const cars = ['Мазда', 'Мерседез', 'Форд'];
// const cars = new Array('Мазда', 'Мерседез', 'Форд');
// console.log(cars.length);
//
// cars[1] = 'Порше';
// cars[cars.length] = 'Mazda'
// console.log(cars);

//10 Цикли
//
// const cars = ['Мазда', 'Мерседез', 'Форд', 'Порше'];

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(car);
// }

// for (let car of cars) {
//     console.log(car);
// }

//11 Об'єкти

// const person = {
//     firstName: 'Daniel',
//     lastName: 'Iovenko',
//     year: 2001,
//     languages: ['Ua', 'Ru', 'Eng'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet from person');
//     }
// };
//
// console.log(person.firstName)
// console.log(person["lastName"])
// const key = 'year'
//
// console.log(person[key])
// person.hasWife = true
// console.log(person)
// person.greet()