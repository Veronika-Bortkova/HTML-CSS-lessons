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

// let input = document.getElementsByName("conv")[0];
// input.addEventListener("input", function (){
//     let oldP = document.querySelector("p");
//     if (oldP) oldP.remove();
//     let p = document.createElement("p");
//     let kg = input.value;
//     let funt = kg*2.20462;
//     p.innerText = kg + " кг = " + funt + " фунтов";
//     document.body.append(p);
//     }
// )

//---------------------7------------------
//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


// function addToLocalStorage(arrayName, objToAdd){
//
//     let arr = JSON.parse(localStorage.getItem(arrayName));
//     arr.push(objToAdd);
//     localStorage.setItem(arrayName, JSON.stringify(arr));
// }
//
// addToLocalStorage("sessionsList", {name:"Nica", age: 46});

//------------------------8--------------------

//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

// let f4 = document.getElementById("f4");
// f4.addEventListener("submit",function (ev){
//     ev.preventDefault();
//     let oldDivGrid = document.querySelector("div");
//     if (oldDivGrid){
//         oldDivGrid.remove();
//     }
//     let divGrid = document.createElement("div");
//     let inputLine = document.getElementById("numLine");
//     let inputColumn = document.getElementById("numColumn");
//     let inputValue = document.getElementById("value");
//     divGrid.setAttribute("style", `display: grid; grid-template-columns: repeat(${+inputColumn.value}, 200px); grid-template-rows: repeat(${+inputLine.value}, 200px);border: 3px solid black; gap: 2px;; background-color: black; width: fit-content; justify-items: center; align-items: center;`)
//     document.body.append(divGrid);
//     let calc = +inputLine.value*inputColumn.value;
//         for (let i = 0; i < calc; i++) {
//             let divItem = document.createElement("div");
//             divItem.className = "item";
//             divItem.innerText = inputValue.value;
//             divGrid.append(divItem);
//         }
//
// }
// );

//--------------------9----------------------------
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”

//при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.

    //При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


// let time = new Date();
// let oldTime = +localStorage.getItem("time") ||0;
// let divPrice = document.getElementById("price");
// let savePrise = +localStorage.getItem("price") || parseInt(divPrice.textContent);
// if (!oldTime){
// localStorage.setItem("price", savePrise);
// localStorage.setItem("time",time.getTime());
// }
// else if (time.getTime() > +oldTime + 10000) {
//          savePrise = savePrise + 10;
//          localStorage.setItem("price", savePrise);
//          divPrice.innerText = `${localStorage.getItem("price")}   грн`;
//          localStorage.setItem("time", time.getTime());
//      }
//
//      divPrice.textContent = savePrise + " грн";


//-----------------------------------10-------------------------

//зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

let arr = [];
for (let i = 1; i < 101; i++) {
    let obj = {};
    obj.id = i;
    obj.name = "Lorem";
    arr.push(obj);
};
console.log(arr);

let divArr10 = document.createElement("div");
document.body.append(divArr10);
divArr10.style = "wrapper";
for (let i = 0; i < 10; i++) {
    let divItem = document.createElement("div");
    divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
    divArr10.append(divItem);
    localStorage.setItem("numberKey", i);
}

let lastIndexBlock = +localStorage.getItem("numberKey");
let buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", function (){
    if (divArr10) divArr10.innerHTML = "";
     if (89>lastIndexBlock) {
         lastIndexBlock = lastIndexBlock+10;
         localStorage.setItem("numberKey", lastIndexBlock);
         for (let i = lastIndexBlock + 1; i < lastIndexBlock + 11; i++) {
             let divItem = document.createElement("div");
             divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
             divArr10.append(divItem);
         }
     }
     else {
        lastIndexBlock = 89;//роблю для того, щоб при клике на кнопку некст, коли массив закінчиться на екрані залишався останній блок
         for (let i = lastIndexBlock + 1; i < lastIndexBlock + 11; i++) {
             let divItem = document.createElement("div");
             divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
             divArr10.append(divItem);
         }
    }
});

let buttonPrev = document.getElementById("prev");
buttonPrev.addEventListener("click", function (){
    if (divArr10) divArr10.innerHTML = "";
    if (lastIndexBlock>9) {
        lastIndexBlock = lastIndexBlock-10;
        localStorage.setItem("numberKey", lastIndexBlock);//79=>69
        for (let i = lastIndexBlock + 1; i <= lastIndexBlock+10; i++) {
            let divItem = document.createElement("div");
            divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
            divArr10.append(divItem);
        }
        //lastIndexBlock = lastIndexBlock-10;
    } else {
        lastIndexBlock = 9;
        for (let i = 0; i < 10; i++) {
            let divItem = document.createElement("div");
            divItem.innerText = `id - ${arr[i].id}  name - ${arr[i].name}`;
            divArr10.append(divItem);
        }
    }
});




