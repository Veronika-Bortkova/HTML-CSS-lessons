// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [10,20,30,"jkjh",50,70,true,80,90,"jhjh"];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(typeof(arr[6]));


// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

// let obj1 = {
//     title: "Leon",
//     pageCount: 125,
//     genre: "action"
// };
//
// let obj2 = {
//     title: "Angelica",
//     pageCount: 127,
//     genre: "romantic"
// };
//
// let obj3 = {
//     title: "Home",
//     pageCount: 223,
//     genre: "fantezy"
// };
// console.log(obj1, obj2, obj3);


// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {
//         name: "ivan",
//         username: "vano",
//         password: "pas1"
//     },
//
//     {
//         name: "ivan2",
//         username: "vano2",
//         password: "pas2"
//     },
//
//     {
//         name: "ivan3",
//         username: "vano3",
//         password: "pas3"
//     },
//
//     {
//         name: "ivan4n",
//         username: "vano4",
//         password: "pas4"
//     },
//
//     {
//         name: "ivan5",
//         username: "vano5",
//         password: "pas5"
//     },
//
//     {
//         name: "ivan6",
//         username: "vano6",
//         password: "pas6"
//     },
//
//     {
//         name: "ivan7",
//         username: "vano7",
//         password: "pas7"
//     },
//
//     {
//         name: "ivan8",
//         username: "vano8",
//         password: "pas8"
//     },
//
//     {
//         name: "ivan9",
//         username: "vano9",
//         password: "pas9"
//     },
//
//     {
//         name: "ivan10",
//         username: "vano10",
//         password: "pas10"
//     }
//     ];
// console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password);



// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
// let temperatureStatistics = [
//     {
//         day: "M",
//         morning: 2,
//         afternoon: 5,
//         evening: 3
//     },
//
//     {
//         day: "T",
//         morning: 3,
//         afternoon: 6,
//         evening: 1
//     },
//
//     {
//         day: "W",
//         morning: 5,
//         afternoon: 7,
//         evening: 5
//     },
//
//     {
//         day: "TH",
//         morning: 3,
//         afternoon: 4,
//         evening: 1
//     },
//
//     {
//         day: "F",
//         morning: 7,
//         afternoon: 1,
//         evening: 2
//     },
//
//     {
//         day: "Sa",
//         morning: 7,
//         afternoon: 1,
//         evening: 4
//     },
//
//     {
//         day: "Su",
//         morning: 2,
//         afternoon: 1,
//         evening: 5
//     },
// ];
//
// console.log(temperatureStatistics);


//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 0;
// console.log(x!==0 ? "Virno":"Nevirno")




// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число

// let time = +prompt("Enter a number from 0 to 59");
//     if (time >=0 && time<=14) {
//         console.log("1 part");
//     } else if (time >=15 && time<=29){
//         console.log("2 part");
//     } else if (time >=30 && time<=44) {
//         console.log("3 part");
//     } else if (time >=45 && time<=59) {
//             console.log("4 part");
//     } else {
//             console.log("???");
//     }




// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt("Enter a number from 1 to 31");
//     if (day >=1 && day<=10) {
//         console.log("1 part");
//     } else if (day >=11 && day<=20){
//         console.log("2 part");
//     } else if (day >=21 && day<=31) {
//         console.log("3 part");
//     } else {
//             console.log("???");
//     }



// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day_of_the_week = prompt("Enter the day of the week");
// switch (day_of_the_week){
//     case "Monday":
//         console.log("Monday");
//         break;
//     case "Tuesday":
//         console.log("Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Wednesday");
//         break;
//     case "Thursday":
//         console.log("Thursday");
//         break;
//     case "Friday":
//         console.log("Friday");
//         break;
//     case "Saturday":
//         console.log("Saturday");
//         break;
//     case "Sunday":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("????");
// };

//
// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.

//
// let number_1 = +prompt("Enter number one");
// let number_2 = +prompt("Enter number two");
// if (number_1 > number_2){
//     console.log(number_1)
// } else if (number_1 === number_2){
//     console.log("equal");
// } else {
//     console.log(number_2)
// };




// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// let x = null;
// if (!!x === false){
//     x = "deault";
// }
// console.log(x);



// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
            console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}







