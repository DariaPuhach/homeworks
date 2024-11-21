// #8Nmt60ZT
// let div = document.createElement('div');
//
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.style.backgroundColor = 'lightblue';
// div.style.color = 'darkblue';
// div.style.fontSize = '20px';
// div.innerText = 'Це новий блок з доданими стилями та класами!';
// document.body.appendChild(div);
//
// let node = div.cloneNode(true);
// document.body.appendChild(node);


// #OPLI89c9G
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let ul = document.createElement('ul');
//
// array.forEach(item => {
//     let li = document.createElement('li');
//     li.innerText = item;
//     ul.appendChild(li);
// });
// document.body.appendChild(ul);



// #jeBqHV525U5
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div= document.createElement("div");
//     div.textContent = `${coursesAndDurationArrayElement.title}- ${coursesAndDurationArrayElement.monthDuration}`;
//     document.body.appendChild(div);
// }




// // #Kx1xgoKy8
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div= document.createElement("div");
//     div.classList.add('item');
//     let h1 = document.createElement("h1");
//     h1.classList.add('heading');
//     h1.textContent = `${coursesAndDurationArrayElement.title}`;
//     let p = document.createElement("p");
//     p.classList.add('description');
//     p.textContent = `${coursesAndDurationArrayElement.description}`;
//
//     div.appendChild(h1);
//     div.appendChild(p);
//     document.body.appendChild(div);
// }