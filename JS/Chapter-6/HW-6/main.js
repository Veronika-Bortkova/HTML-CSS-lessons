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
let str1 = "Ревуть воли як ясла повні";
// function stringToarray(str){
//
// }
// strarr = str1.split(" ");
// console.log(strarr);

function stringToarray(str){
    if (typeof str === "string"){
        const split = str.split(" ");
        return split;
    }
    return [""];

}
console.log(stringToarray("Ревуть воли як ясла повні"));


