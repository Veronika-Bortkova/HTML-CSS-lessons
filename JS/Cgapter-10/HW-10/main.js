//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
//
// let elementText = document.getElementById("text");
// let button = document.getElementsByTagName("button")[0];
//
// button.onclick = function (){
//     elementText.remove();
// }

//------------------------------2------------------

//– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
//





// let f1 = document.getElementById("f1");
// f1.onsubmit = function (ev) {
//     ev.preventDefault();
// }
// f1.addEventListener("submit", function (){
// let age = +document.getElementById("ageUser").value;
// let p = document.createElement("p");
// let oldP = document.getElementsByTagName("p");
// if (oldP.length>0) oldP[0].remove();
// document.body.append(p);
// p.innerText = "";
// if (age>=18){
//     p.innerText = "Вам більше 18-ти";
//     // document.body.append(p);
//     }
//  else if (0<age && age<18){
//     p.innerText = "Вам менше 18-ти";
//     // document.body.append(p);
// }
// else if (age<=0){
//     p.innerText = "Введіть коректне значення";
//     // document.body.append(p);
// }
// })







//--------------3-------------------------
//Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

// let f2 = document.getElementById("f2");
// f2.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     let div = document.createElement("div");
//     pName = document.createElement("p");
//     pSurname = document.createElement("p");
//     pEge = document.createElement("p");
//     pName.innerText = document.getElementById("name").value;
//     pSurname.innerText = document.getElementById("surname").value;
//     pEge.innerText = document.getElementById("age").value;
//     div.append(pName,pSurname,pEge);
//     document.body.append(div);
// });


//--------------------4----------------------

// //є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let divNumber = document.getElementById("number");
//
// let number = localStorage.getItem("contayner");
// if (number === null){
//     number = +divNumber.innerText;
// } else
//     number = +number;
// document.onreadystatechange = function (){
//      if (document.readyState ==="complete") {
//          number++;
//          divNumber.innerText = +number;
//          localStorage.setItem("contayner", number)
//      }
// };
//
// // window.onload = function (){
//     let number = +divNumber.innerText;
//     divNumber.innerText = number+1;
// };
// document.onreadystatechange = function (){
//     if (document.readyState ==="complete"){
//         let number = +divNumber.innerText;
//         divNumber.innerText = number+1;
//     }
// }


// let currenNumber = +localStorage.getItem("calc");
// currenNumber++;
// localStorage.setItem("calc", currenNumber);
// document.getElementById("target").innerText = currenNumber;

//---------------------5------------------------
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
// let dataTimes = localStorage.getItem("sessionsList");
// localStorage.setItem("sessionsList",JSON.stringify([]));
// // window.onload = function (){
//     let dataTimes = JSON.parse(localStorage.getItem("sessionsList")) || [];
//     dataTimes.push(new Date().toLocaleString());
//     localStorage.setItem("sessionsList",JSON.stringify(dataTimes));
// // };


//-------------6--------------------

//створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// let input = document.getElementsByName("conv")[0];
// let p = document.getElementById("resalt");
// input.addEventListener("input", function (){
//     let resalt = +input.value*2.20462;
//     p.innerText = resalt;
// })

let input = document.getElementsByName("conv")[0];
input.addEventListener("input", function (){
    let oldP = document.querySelector("p");
    if (oldP) oldP.remove();
    let p = document.createElement("p");
    let kg = input.value;
    let funt = kg*2.20462;
    p.innerText = kg + " кг = " + funt + " фунтов";
    document.body.append(p);
    }
)


