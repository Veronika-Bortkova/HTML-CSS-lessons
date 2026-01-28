localStorage.setItem("name", "Nica");//- localStorage — это встроенное хранилище в браузере. Оно позволяет сохранять данные прямо на компьютере пользователя.
// - .setItem("ключ", "значение") — метод, который записывает данные.
// - В твоём примере:
//     - Ключ: "name"
// - Значение: "Nica"
// → В браузере теперь хранится запись: name = "Nica"
//- Данные сохраняются постоянно (в отличие от sessionStorage, где всё исчезает после закрытия вкладки).
// - Даже если обновить страницу или закрыть браузер, значение "Nica" останется, пока пользователь сам не очистит данные.
//let myName = localStorage.getItem("name");
// console.log(myName); // выведет "Nica"

// let myName = localStorage.getItem("name");//получаем значение по ключу name
// console.log(myName);//=> Nica
//
// localStorage.clear();//очистили локалсторидж
// //і локал сторидж можно сохранять обьекти
//
// //localStorage.setItem("user", {id:1, name:"Nic_a",  });//при такой запими мі получим обжект обжект - єто не то. Нужно использовать джейсон стрингифай
//
// localStorage.setItem("user", JSON.stringify({ id:1, name:"Nic_a",  }));//если нужно внести изменения в єтот обьект, то придется вініимать его, переводить в формат обьекта и менять
//
// let userJS = localStorage.getItem("user");
// console.log(userJS);
// let user = JSON.parse(userJS);
// console.log(user);
// user.age = 37;
// let stringify = JSON.stringify(user);
// localStorage.setItem("user", stringify);
//
// //тоже самое можно делать с массивами
// users = [
//     {
//         id:1,
//         name: "Nica",
//         age: 18,
//         status: true
//     },
//
//     {
//         id:2,
//         name: "Lica",
//         age: 27,
//         status: false
//     },
//
//     {
//         id: 3,
//         name: "Ivan",
//         age: 35,
//         status: true
//     },
//
//     {
//         id: 4,
//         name: "Vika",
//         age: 47,
//         status: false
//     },
//
//     {
//         id: 5,
//         name: "Petya",
//         age: 45,
//         status: true
//     },
// ]
//
// localStorage.setItem("users", JSON.stringify(users));
let usersJS = localStorage.getItem("users");
users = JSON.parse(usersJS);
users.push({});
localStorage.setItem("users", JSON.stringify(users));