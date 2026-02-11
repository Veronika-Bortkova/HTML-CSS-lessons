// //– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
//
// fetch('https://dummyjson.com/carts?limit=50')
//     .then(res => res.json())
//     .then((value) => {
//         console.log(value);
// let carts = value.carts;
// let i = 0;
// for (const cart of carts) {
//     i++;
//     console.log(`Корзина № ${i}`);
//     for (const cartKey in cart) {
//         console.log(cartKey);
//     }
// }
// });


//----------------------2-----------------------------
//– взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.