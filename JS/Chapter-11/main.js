fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json));

//єто постоянній запит при работе вс апи
//аргументи для функции можно прописивать произвольно
// то что ниже будет тоже самое, что и віше и работать так же

fetch('https://jsonplaceholder.typicode.com/users')
    .then((asd) => asd.json())
    .then((users) => console.log(users));

fetch('https://jsonplaceholder.typicode.com/users')
    .then((asd) => asd.json())
    .then((users) => {
        for (let user of users) {
            let div = document.createElement("div");
            div.innerText = (user.name +  "     " + user.email);
            document.body.append(div);
        }
    });

fetch('https://dummyjson.com/products')
    .then(waa => waa.json())
    .then((products) => {
        let arr = products.products;
        let arr2 = [];
        for (let arrElement of arr) {
            arr2.push(arrElement.title);
        }
        console.log(arr2);

    });

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')//параметрі урлі - пишется ? и за ним параметри. limit - сколько єлементов показівать. Параметрі пишем через амперсент. skip - колько єлементов пропустить, Параметр select действительно ограничивает список дополнительных полей, которые будут включены в ответ.
//	Но поле  сервис возвращает всегда, даже если его не указать.
    .then(waa => waa.json())
    .then((products) => console.log(products));

fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
    })
})
    .then(res => res.json())
    .then((value) => console.log(value));