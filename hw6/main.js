// #dFeorS3m7u
// let str1 = 'hello world';
// console.log(str1.length);
// let srt2 = 'lorem ipsum';
// console.log(srt2.length);
// let srt3 = 'javascript is cool';
// console.log(srt3.length);


// #8lld9HMxXWB
// let str1 = 'hello world';
// let srtNew1=(str1.toUpperCase());
// console.log(srtNew1);
//
// let str2 = 'lorem ipsum';
// let srtNew2=(str2.toUpperCase());
// console.log(srtNew2);
//
//
// let str3 = 'javascript is cool';
// let srtNew3=(str3.toUpperCase());
// console.log(srtNew3);



// #ClDsAm7xba7
// let str1 = 'HELLO WORLD';
// let srtNew1=(str1.toLowerCase());
// console.log(srtNew1);
//
// let str2 = 'LOREM IPSUM';
// let srtNew2=(str2.toLowerCase());
// console.log(srtNew2);
//
//
// let str3 = 'JAVASCRIPT IS COOL';
// let srtNew3=(str3.toLowerCase());
// console.log(srtNew3);


// #0b89BkYZwu
// let str = ' dirty string   ';
// let s=str.trim()
// console.log(s)


// #bfoJuse4ZzP
// function stringToarray(str) {
//     if (str){
//         let split = str.split(' ');
//         return split;
//     }
//     return '';
// }
//
// let str = 'Ревуть воли як ясла повні'
// console.log(stringToarray(str))



// #Rbr5kEQ
// const arrNam = [10,8,-7,55,987,-1011,0,1050,0];
// const arrStr = arrNam.map(value => value.toString());
// console.log(arrStr)

// #5hqyKTfmc
// function sortNums(array,direction) {
//     if(direction==='ascending'){
//         return array.sort((a,b) => a-b)
//     }
//     if(direction==='descending'){
//         return array.sort((a,b) => b-a)
//     }
// }
//
// let nums = [11,21,3];
// sortNums(nums,'ascending')
// sortNums(nums,'descending')
//
// console.log(sortNums(nums,'descending'))
// console.log(sortNums(nums,'ascending'))


// #yo06d74c1C
// const coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// const fixArr = coursesAndDurationArray
// .sort((a, b) => b.monthDuration - a.monthDuration)
// .filter(value => value.monthDuration > 5)
// .map((value,index) => ({...value, id:index+1}));
// console.log(fixArr);


// #bolvdlhP
// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const cards = [];
// for (const suit of suits) {
//     for (const value of values) {
//         const card = {cardSuit: suit, value: value};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
//
// console.log(cards);
// console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

// #EP5I1UUzAX
// const reduce = cards.reduce((accum, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             accum.spades.push(card);
//             break;
//         case 'diamond':
//             accum.diamonds.push(card);
//             break;
//         case 'club':
//             accum.clubs.push(card);
//             break;
//         case 'heart':
//             accum.hearts.push(card);
//             break;
//
//     }
//
//
//     return accum;
// },
//
//     {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
//
//
// console.log(reduce);


// #4LJn7zBx
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// console.log(coursesArray.filter(course => {
//    return  course.modules.includes('sass')
// }));
//
// console.log(coursesArray.filter(course => {
//     return  course.modules.includes('docker')
// }));