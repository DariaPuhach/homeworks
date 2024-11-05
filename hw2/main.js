let simpleArray = [25, "Привіт", true, 5.67, null, "Світ", false, 100, undefined, "JavaScript"];

// -----------------------------------------------------------------------

// let book1 = {
//     title: "Тіні забутих предків",
//     pageCount: 240,
//     genre: "Роман",
// };
//
// let book2 = {
//     title: "Кайдашева сім'я",
//     pageCount: 184,
//     genre: "Повість",
// };
//
// let book3 = {
//     title: "Захар Беркут",
//     pageCount: 256,
//     genre: "Історична повість",
// };
//
// console.log(book1);
// console.log(book2);
// console.log(book3);

//---------------------------------------------------

// let book1 = {
//     title: "Тигролови",
//     pageCount: 320,
//     genre: "Пригодницький роман",
//     authors: [
//         { name: "Іван Багряний", age: 45 }
//     ]
// };
//
// let book2 = {
//     title: "Лісова пісня",
//     pageCount: 180,
//     genre: "Драма-феєрія",
//     authors: [
//         { name: "Леся Українка", age: 42 }
//     ]
// };
//
// let book3 = {
//     title: "Собор",
//     pageCount: 360,
//     genre: "Роман",
//     authors: [
//         { name: "Олесь Гончар", age: 60 }
//     ]
// };
//
// console.log(book1);
// console.log(book2);
// console.log(book3);

// -------------------------------------------

// let users = [
//     { name: "Іван", username: "ivan123", password: "pass123" },
//     { name: "Олена", username: "olena456", password: "qwerty456" },
//     { name: "Петро", username: "petro789", password: "petroPass789" },
//     { name: "Анна", username: "anna111", password: "annaSecret111" },
//     { name: "Максим", username: "max999", password: "maxStrong999" },
//     { name: "Вікторія", username: "victoria888", password: "victoria888" },
//     { name: "Олег", username: "oleg555", password: "olegSecure555" },
//     { name: "Світлана", username: "sveta222", password: "svetaPass222" },
//     { name: "Дмитро", username: "dima333", password: "dimaCode333" },
//     { name: "Марія", username: "maria777", password: "mariaKey777" }
// ];
//
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);


// ---------------------------------------------------
// let temperatures = [
//     { day: 1, morning: 15, dayTime: 20, evening: 18 },
//     { day: 2, morning: 16, dayTime: 22, evening: 19 },
//     { day: 3, morning: 14, dayTime: 21, evening: 17 },
//     { day: 4, morning: 15, dayTime: 23, evening: 20 },
//     { day: 5, morning: 17, dayTime: 24, evening: 21 },
//     { day: 6, morning: 18, dayTime: 25, evening: 22 },
//     { day: 7, morning: 16, dayTime: 22, evening: 20 }
// ];
//
// console.log("Температура вранці в 2-й день:", temperatures[1].morning);

// ------------------------------------------

// let x;
//
// x = 1;
// console.log(x !== 0 ? 'Вірно' : 'Невірно');
//
// x = 0;
// console.log(x !== 0 ? 'Вірно' : 'Невірно');
//
// x = -3;
// console.log(x !== 0 ? 'Вірно' : 'Невірно');

// ------------------------------------------------

// let time = 37;
//
// if (time >= 0 && time < 15) {
//     console.log("Перша четверть години");
// } else if (time >= 15 && time < 30) {
//     console.log("Друга четверть години");
// } else if (time >= 30 && time < 45) {
//     console.log("Третя четверть години");
// } else if (time >= 45 && time < 60) {
//     console.log("Четверта четверть години");
// } else {
//     console.log("Неправильне значення. time повинно бути від 0 до 59.");
// }

//------------------------------------------------------------

// let day = 23;
//
// if (day >= 1 && day <= 10) {
//     console.log("Перша декада місяця");
// } else if (day >= 11 && day <= 20) {
//     console.log("Друга декада місяця");
// } else if (day >= 21 && day <= 31) {
//     console.log("Третя декада місяця");
// } else {
//     console.log("Неправильне значення. day повинно бути від 1 до 31.");
// }


// ---------------------------------------------------

// let dayNumber = prompt("Введіть порядковий номер дня тижня (1-7):");
//
// switch (dayNumber) {
//     case '1':
//         console.log("Monday: Meeting with the team.");
//         break;
//     case '2':
//         console.log("Tuesday: Project presentation.");
//         break;
//     case '3':
//         console.log("Wednesday: Work on the new feature.");
//         break;
//     case '4':
//         console.log("Thursday: Review code.");
//         break;
//     case '5':
//         console.log("Friday: Team building event.");
//         break;
//     case '6':
//         console.log("Saturday: Personal development.");
//         break;
//     case '7':
//         console.log("Sunday: Family time.");
//         break;
//     default:
//         console.log("Неправильний номер дня. Будь ласка, введіть число від 1 до 7.");
// }

// ----------------------------------------------------------------


let number1 = prompt("Введіть перше число:");
let number2 = prompt("Введіть друге число:");

if (number1 > number2) {
    console.log("Максимальне число: " + number1);
} else if (number2 > number1) {
    console.log("Максимальне число: " + number2);
} else {
    console.log("Числа рівні");
}



