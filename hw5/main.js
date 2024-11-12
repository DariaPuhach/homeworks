// I2XsG6f
// let area = (a,b)=>a+b;
// console.log(area(5,6));


// ETGAxbEn8l
// let calculateCircleArea = (r) => Math.PI * r * r;
// console.log(calculateCircleArea(50));


// Mbiz5K4yFe7
// let calculateCylinderArea = (r, h) => 2 * Math.PI * r * (r + h);
// console.log(calculateCylinderArea(5, 10));

// SIdMd0hQ
// let footoArray = (array) =>{for (let item of array) {console.log(item)
//     }}
// footoArray([1, 2, 3, 4, 5]);


// 59g0IsA
// let createParagraph = (text) => document.write(`<p>${text}</p>`);
// createParagraph("Це текст першого параграфа.");
// createParagraph("А це текст другого параграфа.");


// hOL6126
// let createList = (text) =>    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// createList("Однаковий текст для всіх li");


// 0Kxco1edSN
// let createDynamicList = (text, count) => { document.write("<ul>");
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write("</ul>");}
//
// createDynamicList("Це елемент списку", 5);


// gEFoxMMO
// let createListFromArray = (array) =>{document.write("<ul>");
//     for (const item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write("</ul>");}
// let sampleArray = [1, "Hello", true, "JavaScript", 42, false, "world"];
// createListFromArray(sampleArray);


// bovDJDTIjt
// let displayUsers = (usersArray) => {for (let user of usersArray)
//           {document.write(`<div>
//                 <p>ID: ${user.id}</p>
//                 <p>Name: ${user.name}</p>
//                 <p>Age: ${user.age}</p>
//                            </div>`);}}
// const users = [
//     { id: 1, name: "Anna", age: 25 },
//     { id: 2, name: "Bohdan", age: 30 },
//     { id: 3, name: "Olena", age: 22 }
// ];
//
// displayUsers(users);


// pghbnSB
// let minValue = (numbers) =>{  let min = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//       let number = numbers[i];
//        if (number < min) {
//              min = number
//         }
//        return min
//     } }
//
// console.log(minValue([1, 2, 3, 4, 5]));


// EKRNVPM
// let sumArrayValues = (numbers) => {
//     let prefabricated = 0;
//     for (let number of numbers) {
//         prefabricated= prefabricated+number;
//     }
//     return prefabricated;
// }
//
// console.log(sumArrayValues([1, 2, 3, 4, 5]));


// kpsbSQCt2Lf
// let swap = (arr, index1, index2) => {
//     if (index1 < arr.length && index2 < arr.length) {
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//     } else {
//         console.log("Невірні індекси");
//     }
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44],3,1));


// mkGDenYnNjn
// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     let chosenCarrenty;
//     for(let item of currencyValues){
//         if(item.currency === exchangeCurrency){
//             chosenCarrenty = item;
//         }
//     }
//     let result= sumUAH/chosenCarrenty.value;
//     return result;
// }
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));