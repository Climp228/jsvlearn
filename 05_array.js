// const cars = ["Опель", "БМВ", "Тесла", "Форд"];
// const people = [
//     {name: "Daniel", budget: 3800},
//     {name: "Igor", budget: 1800},
//     {name: "Maria", budget: 2600}
// ];
// const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34];

//Методи масивів

// cars.push("Лада");
// cars.unshift("");
// cars.shift();
// cars.reverse();
// console.log(cars);
//

// for (const person of people) {
//     console.log(person);
// }

// const upperCaseCars = cars.map(tuc => {
//     return tuc.toUpperCase();
// })
// console.log(upperCaseCars);


// const index = cars.indexOf("Тесла");
// const index = people.findIndex(function (person) {
//     return person.budget === 2600;
// });
// console.log(people[index]);
// const pers = people.find(function (pers) {
//     return pers.budget === 2600;
// });
// console.log(pers);
// cars[index] = "Вольво";
// console.log(cars);

//Задачка на модифікування тексту №1
// const text = "Привіт, мене звати Даніель";
// const reverseText = text.split("").reverse().join("");
// console.log(reverseText);

// const people = [
//     {name: "Daniel", budget: 3800},
//     {name: "Igor", budget: 1800},
//     {name: "Maria", budget: 2600}
// ];
//
// const allBudget = people.reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
// }, 0);
//
// console.log(allBudget);