// Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’
//
// console.log("hello world".length);
// console.log("lorem ipsum".length);
// console.log("javascript is cool".length);
// let s = "lorem ipsum";
// console.log(s.length);
//
// arrString = ["hello world", "lorem ipsum", "javascript is cool"];
// for (let sElement of arrString) {
//     console.log(sElement.length)
// }

// ---------------------------------------------------------------------------------------------------
//
// // – Перевести до великого регістру наступні стрінгові значення
// //
// //       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

// let arrStr = ["hello world","lorem ipsum", "javascript is cool"];
// arrStr.forEach(value => console.log(value.toUpperCase()));


// ------------------------------------------------------------------------------------
//     – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

// let arrStr1 = ["HELLO WORLD","LOREM IPSUM", "JAVASCRIPT IS COOL"];
// arrStr1.forEach( value => console.log(value.toLowerCase()));


// arrStr1.forEach( value =>{document.write(`<div style="margin: 40px; font-size: 40px">`); document.write(`${value.toLowerCase()} jkl`);document.write(`</div>`)});
//
// let s = "HELLO WORLD";
// s = s.toLowerCase();
// console.log(s);

// ----------------------------------------------------------------------------------------------
//
//     – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
// let s = " dirty string   ";
// let s1 = s.trim()// удаляет лишние пробелы из грязной стринги
// console.log(s1);
// console.log(s.length);
// console.log(s1.length);

// ---------------------------------------------------------------------------------------------------
//
//     – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
// let str1 = "Ревуть воли як ясла повні";
// function stringToarray(str){
//
// }
// strarr = str1.split(" ");
// console.log(strarr);

// function stringToarray(str){
//     if (typeof str === "string"){
//         const split = str.split(" ");
//         return split;
//     }
//     return [""];
//
// }
// console.log(stringToarray(NaN));


// ------------------------------------------------------------------------------------------
//     – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

// let arrNumber = [10,8,-7,55,987,-1011,0,1050,0];
// let arrStringnumber = arrNumber.map(value => {
//
//         value = `${value}`;
//
//     return value;
// })
// console.log(arrStringnumber);
//
//
// const stringified = arrNumber.map(String);
// console.log(stringified);
//
//
//
//
// let arrStringnumber1 = arrNumber.map(value => `${value}`);
// console.log(arrStringnumber1);
//
// let arrStringnumber2 = arrNumber.map(value => value+"");
// console.log(arrStringnumber2);

// ---------------------------------------------------------------------------------------------------
//     – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

// let arrNumbs = [ 11,21,3];
// function sortNums(arr,direction){
//     if (direction === "top"){
//        return   arr.sort((a,b) => b-a);
//     } if (direction === "buttom") {
//         return arr.sort((a, b) => a- b);
//     }
//     return "vvedy prav word";
// }
//
// let result = sortNums(arrNumbs, "top");
// console.log(result);
// let result1 = sortNums(arrNumbs, "buttom");
// console.log(result1);
// let result2 = sortNums(arrNumbs, 5465);
// console.log(result2);



//
// ------------------------------------------------------------------------------------------------
//     – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}




//
// let arrCours = [
//
//     {title: "JavaScript Complex", monthDuration: 5},
//
// {title: "Java Complex", monthDuration: 6},
//
// {title: "Python Complex", monthDuration: 6},
//
// {title: "QA Complex", monthDuration: 4},
//
// {title: "FullStack", monthDuration: 7},
//
// {title: "Frontend", monthDuration: 4}
//
// ];
//
// let sortArr = arrCours.sort((a,b) =>b.monthDuration-a.monthDuration);
// console.log(sortArr);
//
//
// let filterArr = arrCours.filter(value => value.monthDuration >5);
// console.log(filterArr);
//
// let newArr = arrCours.map((value, index) => {
//     return    {...value, id: index + 1}
//
// })
// console.log(newArr);
//
//
// let newArr1 = arrCours.map((value, index) => {
//     value.id = index+1;
//     return value
// })
// console.log(newArr1);
//
// let newarr4 = arrCours
//     .sort((a,b) =>b.monthDuration-a.monthDuration)
//     .filter(value => value.monthDuration >5)
//     .map((value, index) => {
//     value.id = index+1;
//     return value
// });
//
// console.log(newarr4);
//
// let newarr5 = arrCours
//     .sort((a,b) =>b.monthDuration-a.monthDuration)
//     .filter(value => value.monthDuration >5)
//     .map((value, index) => ({...value, id: index+1}));
//
// console.log(newarr5);
//
//
// let user =
//     {
//         id:1,
//         name: "Nica",
//         age: 18,
//         status: true
//     };
//
// let userId = {...user, idi: 8};
// console.log(userId);


// ----------------------------------------------------------------------------------------------------
//
//     взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker




// let coursesArray = [
//     {
//         title: "JavaScript Complex",
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "node.js"]
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
// let coursesSussArray= coursesArray.filter(value => {
//     if (value.modules.indexOf("sass")>=0)
//         return value;
// });
//
// console.log(coursesSussArray);
//
// let coursesSussArray1= coursesArray.filter(value => {
//     if (value.modules.indexOf("docker")>=0)
//         return value;
// });
//
// console.log(coursesSussArray1);
//
//
// let coursesSussArray2 = coursesArray.filter(value => {
//     if (value.modules.includes("sass"))
//         return value;
// })
//
// console.log(coursesSussArray2);
//
//
// let coursesSussArray3 = coursesArray.filter(value => {
//     return value.modules.includes("sass")
//
// })
//
// console.log(coursesSussArray3);



// ------------------------------------------------------------------------------------------
//     описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
//
//
//
//
//
//
//
// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }
//

// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

const  arrSuits = ["spade", "diamond", "heart", "clubs"];
const arrValue = ["6","7","8","9","10","ace","jack","queen","king"];

let arrCards = [];
for (const arrValueElement of arrValue) {
    for (const arrSuitElement of arrSuits) {
        let card = {
            cardSuit: arrSuitElement,
            value: arrValueElement,
            };
        arrCards.push(card);
    }
}
console.log(arrCards);

for (const arrCard of arrCards) {
    if (arrCard.cardSuit === "diamond" || arrCard.cardSuit === "heart"){
        arrCard.color = "red";
    } else {
        arrCard.color = "black";
        }
}

console.log(arrCards);
// 0
// :
// {cardSuit: 'spade', value: '6', color: red}
// • 	spade — пика
// • 	diamond — бубна
// • 	heart — черва
// • 	clubs — трефа


// – знайти піковий туз

let spadAce = arrCards.find(value => (value.cardSuit === "spade" && value.value === "ace"));
console.log(spadAce);

// – знайти всі шістки

let sixes = arrCards.filter(value => (value.value === "6"));
console.log(sixes);

// знайти – всі червоні карти

let redCards = arrCards.filter(value => (value.color === "red"));
console.log(redCards);

// знайти– всі буби

let diamondCards = arrCards.filter(value => (value.cardSuit === "diamond"));
console.log(diamondCards);

//знайти – всі трефи від 9 та більше
// ’jack’,’queen’,’king’

let clubsCardsTop9 = arrCards.filter(value => (value.cardSuit === "clubs" && (value.value ==="9" || value.value ==="10" || value.value === "ace" || value.value === "ace" || value.value === "jack" || value.value === "queen" || value.value === "king")));
console.log(clubsCardsTop9);

let topValue = ["9","10","ace","jack","queen","king"];
let clubsCardsTop9_1 = arrCards.filter(value => (value.cardSuit === "clubs" && topValue.includes(value.value)));
console.log(clubsCardsTop9_1);

//Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// //
// // Приклад моделі кінцевого об’єкту
// //
// // {
// //
// //     spades:[],
// //
// //         diamonds:[],
// //
// //     hearts:[],
// //
// //     clubs:[]
// //
// // }

let deckCardSuit = arrCards.reduce((acc, card) => {
    if (card.cardSuit === "spade"){
        acc.spades.push(card);
    } else if (card.cardSuit === "diamond"){
        acc.diamonds.push(card);
    } else if (card.cardSuit === "heart"){
        acc.hearts.push(card);
    } else{
        acc.clubs.push(card);
    }
    return acc;

}, {spades:[],diamonds:[],hearts:[],clubs:[]})

console.log(deckCardSuit);