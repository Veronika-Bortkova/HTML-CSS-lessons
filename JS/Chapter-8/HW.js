// // за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
// //
// //     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
//
// let coursesAndDurationArray = [
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
// // let i = 0;
// // coursesAndDurationArray.map(value =>
// // {
// //     i++;
// //     value.id = i;
// //     return value;
// // });
// // console.log(coursesAndDurationArray);
//
// // let newArr = coursesAndDurationArray.map((course, index) => ({...course, id: index + 1}));//	Круглые скобки важны: без них  интерпретировалось бы как тело функции, а не как объектный литерал.
// // // • 	Скобки “говорят”: это выражение, верни этот объект.
// //
// // // console.log(coursesAndDurationArray.map((course, index) => {
// // //     course.id = index + 1;
// // //     return course;
// // // }));;
// // console.log(newArr);
// // console.log(coursesAndDurationArray);
//
//
// let example = {name: "Nica", age:27};
// let newExamle = {...example, id:1};
// console.log(example);
// console.log(newExamle);
//
// let coursesAndDurationArrayWithID = coursesAndDurationArray.map((courses, index) => ({...courses,id:index+1}));
// console.log(coursesAndDurationArrayWithID);
// console.log(coursesAndDurationArray);
//
// -----------------------------------------------------------------------------------------------


    // Створити функцію, яка робить глибоку копію об’єкта.
    //
    // Додати перевірки на undefined, null, NaN.
    //
    // Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.


// function deepCopy (obj){
//     if (obj) {
//         let formJson = JSON.stringify(obj);
//         let copyObject = JSON.parse(formJson);
//
//         for (const objectKey in obj) {
//             if (typeof obj[objectKey] === "function" ){
//                 copyObject[objectKey] = obj[objectKey];
//             }
//         }
//         return copyObject;
//     }
//     else console.log("Введи обьект")
// }
//
// let objectExample = {
//     name:"Nica",
//     age: 18,
//     greeting ()
//     {console.log("Hi")},
//     foo (){
//         console.log("KKKK")
//     }
// };
// let objectExampleCopy = deepCopy(objectExample);
// objectExampleCopy.greeting();
// console.log(objectExample.greeting === objectExampleCopy.greeting);
// objectExampleCopy.foo();
// // console.log(objectExampleCopy);
// // console.log(objectExample);
//
//
// // console.log(objectExampleCopy===objectExample);
// // objectExample.greeting();
// // console.log(objectExampleCopy.greeting() === objectExample.greeting());
//
// // delete objectExample.greeting;
// // // objectExampleCopy.greeting();
// // // objectExample.greeting();
// // console.log(objectExample);
// // console.log(objectExampleCopy);
// // objectExampleCopy.greeting();


// Решение Сергея--------------
// function cloner(obj) {
//     if (obj) {
//         let functions = [];
//         for (const key in obj) {
//             if (typeof obj[key] === 'function') {
//                 const functionClone = obj[key].bind({});
//                 functions.push({functionClone, key});
//             }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             cloneObj[func.key] = func.functionClone;
//         }
//
//         // console.log(cloneObj);
//         return cloneObj;
//
//     }
//
//     throw new Error('!!!!!');
//
// }
//
// let example = {
//     name:"Nic",
//     age: 27,
//     greeting (){
//         console.log("Hi");
//     },
//     foo (){
//         console.log("JJJJ")
//     }
// };
// console.log(example);
// let copy = cloner(example);
// console.log(copy);
// console.log(copy.foo === example.foo);
// copy.foo();
// example.foo();
//-------------------------------------------------мое решение с байндом
// function deepCopy1 (obj){
//     if (obj) {
//         let copyObject = JSON.parse(JSON.stringify(obj));
//         for (const key in obj) {
//             if (typeof obj[key] === "function") {
//                 copyObject[key] = obj[key].bind(copyObject);
//             }
//         }
//
//         return copyObject;
//     }
//     throw new Error('!!!!!')
// }
//
// let example1 = {
//     name: "Nica",
//     age: 46,
//     greeting (){
//         console.log(`Hi ${this.name}`);
//     },
//     foo (){
//         console.log("JJJJJ");
//     }
// };
// let copy1 = deepCopy1(example1);
// console.log(copy1);
//
// copy1.greeting();
// console.log(copy1.greeting === example1.greeting);//=> false перевіряю що це дійсно не одна
// copy1.foo();
// // let copy2 = deepCopy1(NaN);
//--------------------------

// // за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
// //
// //     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

let coursesAndDurationArray = [

    {title: "JavaScript Complex", monthDuration: 5},

{title: "Java Complex", monthDuration: 6},

{title: "Python Complex", monthDuration: 6},

{title: "QA Complex", monthDuration: 4},

{title: "FullStack", monthDuration: 7},

{title: "Frontend", monthDuration: 4}
]

let newArr = coursesAndDurationArray.map((course, index)=>({
    title: course.title,
    monthDuration: course.monthDuration,
    id:index+1
}));

console.log(newArr === coursesAndDurationArray);
console.log(newArr);
console.log(coursesAndDurationArray);