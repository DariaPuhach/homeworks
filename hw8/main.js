// #AiN5CoUQ
// const cat = {
//     name: 'Vanda',
//     age: 3,
//     breed: 'bengal',
//     skills:['jump high', 'hunt for toys', 'open doors'],
//     introduce() {
//         console.log(`Мене звати ${this.name}, мені ${this.age} роки/років, і я породи ${this.breed}.`);
//     },
//     purr() {
//         console.log(`${this.name} муркоче: "Мурррр-муррр".`);
//     }
// };
//
// // cat.introduce();
// // cat.purr();
// let copiCatAssign = Object.assign({},cat)
// console.log(copiCatAssign);
//
// function myAssign(target, ...sources) {
//     if(cat === null || cat === undefined) {
//         console.log('не вірні значення')
//     }
//     sources.forEach((source) => {
//         Object.defineProperties(
//             target,
//             Object.keys(source).reduce((descriptors, key) => {
//                 descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
//                 return descriptors;
//             }, {}),
//         );
//     });
//     return target;
// }
//
// let copy = myAssign({}, cat);
// console.log(copy);
//
// console.log(copy===cat)


// const newCopiCat = structuredClone(cat); в документаціі написано, що саме цей метод використовується для глибокої копіїї,але я не змогла його реалізувати
// console.log(newCopiCat);


// #iz6emEsP2BA

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let changedArray = coursesAndDurationArray.map((course,index) => ({...course,id:index+1}))
console.log(changedArray);