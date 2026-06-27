// //Funcion declaration
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1991); // se le llama una funcion declaration
// console.log(age1);

// //Funcion Expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(2006);

// console.log(age2);

// //Arrow function

// const calAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calAge3(1191);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, name) => {
//   const age = 2026 - birthYear;
//   const retirement = 65 - age;
//   return `${name} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1992, "joel"));

// /* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const jonas = {
//   firstname: "joel",
//   lastName: "Torres",
//   age: 33,
//   job: "programmer",
//   friends: ["juan", "julio"],
// };

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// //ojo con esto

// // const respuesta = prompt(
// //   "elige lo q quieres saber,(firstname,lastName,age,job,friends) ",
// // );

// // console.log(jonas[respuesta]);
// // console.log(jonas.respuesta); // aca como recibe un string del prompt 'job' -> resulta undefined

// console.log(
//   `${jonas.firstname} has ${jonas.friends.length} friends, and his best rfiend is called ${jonas.friends[0]}`,
// );

// //For Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(rep);
// }

// //imprimermos el array joinas

// for (let i = 0; i <= jonas.friends.length - 1; i++) {
//   console.log(jonas.friends[i]);
// }

// //sumaremos un array

// let suma = 0;
// const anos = [1991, 1999, 2006, "joel", 2010];

// for (let i = 0; i < anos.length; i++) {
//   if (typeof anos[i] !== "number") continue;

//   suma += anos[i];
// }

// console.log(suma);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tipsCalculated = calcTip(bills[i]);
  tips.push(tipsCalculated);
}

console.log(tips);

for (let i = 0; i < bill.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(totals);
