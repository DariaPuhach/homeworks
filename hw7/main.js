// #XjJuucOMR0
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//     new User(1, "John", "Doe", "john.doe@example.com", "+380501234567"),
//     new User(2, "Jane", "Doe", "jane.doe@example.com", "+380501234568"),
//     new User(3, "Alice", "Smith", "alice.smith@example.com", "+380501234569"),
//     new User(4, "Bob", "Johnson", "bob.johnson@example.com", "+380501234570"),
//     new User(5, "Charlie", "Brown", "charlie.brown@example.com", "+380501234571"),
//     new User(6, "David", "Williams", "david.williams@example.com", "+380501234572"),
//     new User(7, "Eva", "Miller", "eva.miller@example.com", "+380501234573"),
//     new User(8, "Frank", "Wilson", "frank.wilson@example.com", "+380501234574"),
//     new User(9, "Grace", "Taylor", "grace.taylor@example.com", "+380501234575"),
//     new User(10, "Hannah", "Anderson", "hannah.anderson@example.com", "+380501234576")
// ];

// console.log(users)


// #2ikXsE2WiKZ

// console.log(users.filter(user => {
//    return  user.id % 2 === 0
// }));

// #pOeHKct
// console.log(users.sort((a, b) => a.id - b.id));

// #nkMXISv
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// let clients = [
//     new Client(1, "John", "Doe", "john.doe@example.com", "+380501234567", ["Laptop", "Mouse"]),
//     new Client(2, "Jane", "Doe", "jane.doe@example.com", "+380501234568", ["Smartphone"]),
//     new Client(3, "Alice", "Smith", "alice.smith@example.com", "+380501234569", ["Tablet", "Charger", "Case"]),
//     new Client(4, "Bob", "Johnson", "bob.johnson@example.com", "+380501234570", ["Monitor", "Keyboard"]),
//     new Client(5, "Charlie", "Brown", "charlie.brown@example.com", "+380501234571", ["Printer"]),
//     new Client(6, "David", "Williams", "david.williams@example.com", "+380501234572", ["Webcam", "Headphones"]),
//     new Client(7, "Eva", "Miller", "eva.miller@example.com", "+380501234573", ["Router", "Network Cable"]),
//     new Client(8, "Frank", "Wilson", "frank.wilson@example.com", "+380501234574", ["External Hard Drive"]),
//     new Client(9, "Grace", "Taylor", "grace.taylor@example.com", "+380501234575", ["Flash Drive", "Memory Card"]),
//     new Client(10, "Hannah", "Anderson", "hannah.anderson@example.com", "+380501234576", ["Camera", "Tripod"])
// ]

// console.log(clients);

// #8abtVjRv

// console.log(clients.sort((a, b) => a.order.length - b.order.length));


// vV9a6584I5
// function Car(model, manufacturer, year, maxSpeed, engineVolume){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = function (){
//         for (let key in this){
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість збільшена до ${this.maxSpeed} км/год`);
//     }
//     this.changeYear = function changeYear (newValue){
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${this.year}`);
//     }
//     this.addDriver = function addDriver (driverObject){
//         this.driver = driverObject;
//         console.log(`Водія додано: ${this.driver}`);
//     }
//
// }
//
// const myCar = new Car("Model S", "Tesla", 2022, 250, 2.0);

// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(30);
// myCar.changeYear(2024);
// myCar.addDriver({ name: "John Doe", age: 35, experience: "10 років" });



// #5kla3yMpgp
// class Car{
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = function (){
//         for (let key in this){
//             console.log(key, this[key]);
//         }
//     };
//     this.increaseMaxSpeed = function increaseMaxSpeed (newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість збільшена до ${this.maxSpeed} км/год`);
//     }
//     this.changeYear = function changeYear (newValue){
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${this.year}`);
//     }
//     this.addDriver = function addDriver (driverObject){
//         this.driver = driverObject;
//         console.log(`Водія додано: ${this.driver}`);
//     }
//
// }}


// #zg6Fifnqig
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella("Anna", 18, 36),
    new Cinderella("Bella", 19, 37),
    new Cinderella("Catherine", 20, 38),
    new Cinderella("Diana", 21, 39),
    new Cinderella("Eva", 22, 35),
    new Cinderella("Fiona", 23, 38),
    new Cinderella("Giselle", 24, 36.5),
    new Cinderella("Hanna", 25, 37.5),
    new Cinderella("Isla", 26, 34),
    new Cinderella("Julia", 27, 35.5)
];

// Клас Prince
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;     // Ім'я принца
        this.age = age;       // Вік принца
        this.shoeSize = shoeSize; // Розмір туфельки
    }
}

const prince = new Prince("Alexander", 30, 36.5);

const matchedCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);

console.log(matchedCinderella);
