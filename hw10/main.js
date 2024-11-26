// #sH8c4er
// const button = document.createElement('button');
// button.innerText = 'Зникнути текст';
// document.body.appendChild(button);
// button.addEventListener('click', () => {
//     let toHideElement = document.getElementById('text');
//     if (toHideElement) {
//         toHideElement.style.display = 'none';
//     }
// })

// #j693ca8
// let ageInput = document.getElementById("age");
// let button = document.getElementById("button");
//
// button.addEventListener("click", function() {
//     let age = ageInput.value;
//     if (age < 18) {
//         alert("Вам ще немає 18 років!");
//     }else if (age >= 18) {
//         alert("Ваш вік достатній!")
//     }
// })

// #ymAmN2xJ
// let button = document.getElementById("button");
// let userDataValue = document.getElementById("userDataValue");
//
// button.addEventListener("click", function(event) {
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     let surname = document.getElementById("surname").value;
//     let age = document.getElementById("age").value;
//     let user = {
//         name,
//         surname,
//         age,
//     }
//     userDataValue.innerText = `Ім'я:${user.name}
//                                Прізвище: ${user.surname}
//                                Вік:${user.age}`;
// })


// // #2VaLt4vDczH
// let counterDiv = document.getElementById("counter");
// let counterValue = +localStorage.getItem("counter");
// counterValue += 1;
// localStorage.setItem("counter", counterValue);
// document.getElementById("counter").innerHTML = counterValue;

// #LhSfdhM3
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// let visit = new Date().toLocaleString();
// sessionsList.push(visit);
//
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

// #Jg0gPO00
// document.getElementById('kgInput').addEventListener('input', (e) => {
//     document.getElementById('lbOutput').textContent = (e.target.value * 2.2).toFixed(2);
// });


// RbQGnH5DuC
// function addToLocalStorage(arrayName, objToAdd) {
//     const lsItem = localStorage.getItem(arrayName);
//     if (!lsItem) {
//         throw new Error('there is no such array');
//     }
//     const array = JSON.parse(lsItem);
//     if (typeof objToAdd === 'object') {
//         array.push(objToAdd);
//     }
//     localStorage.setItem(arrayName, JSON.stringify(array));
// }

