// #HmvAfRQM
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then((value) => {
//         let {carts} = value;
//         console.log(carts)
//         for (const {id, userId, totalProducts, totalQuantity, total, discountedTotal} of carts) {
//             let cartDiv = document.createElement('div');
//             let h2 = document.createElement('h2');
//             h2.textContent = `Корзина ID: ${id}`;
//             let p = document.createElement('p');
//             p.textContent = `User ID: ${userId}`;
//             let p2 = document.createElement('p');
//             p2.textContent =`Total Products: ${totalProducts}`
//             let p3 = document.createElement('p');
//             p3.textContent =`Total Quantity: ${totalQuantity}`
//             let p4 = document.createElement('p');
//             p4.textContent = `Total Price: $${total}`
//             let p5 = document.createElement('p');
//             p5.textContent =`Discounted Total: $${discountedTotal}`
//             cartDiv.append(p,p2,p3,p4,p5);
//             document.body.appendChild(cartDiv);
//         }
//
//     });


// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((recipesObj)=>{
        let{recipes}=recipesObj;
        for(let {name,ingredients,instructions} of recipes){
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            h1.textContent=`${name}`;
            let p = document.createElement('p');
            p.innerText=`${instructions}`;
            let ul = document.createElement('ul');
            for (const ingredient of ingredients) {
                let li = document.createElement('li');
                li.textContent=`${ingredient}`;
                ul.appendChild(li);
            }
            div.append(h1,p,ul);
            document.body.appendChild(div);

        }

    });


