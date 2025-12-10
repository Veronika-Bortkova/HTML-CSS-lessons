// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

// function S (a,b){
//     let sPr = a*b;
//     console.log (sPr);
//     return sPr;
// }
//
// S(4,5);
//
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

// function sCircl (r) {
//  return SC = r * r * Math.PI;
//
//
// }
// let d =  sCircl(2);
// console.log(d);


// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// S_{\mathrm{полн}}=2\pi Rh+2\pi R^2-

// function squareСylinder (r,h){
//     return 2*Math.PI * r * h + 2* Math.PI * r * r;
// }
//
// let d =  squareСylinder(2, 10);
// console.log(d);



// – створити функцію, яка приймає масив та виводить кожен його елемент
//
// function arrElement (array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// arrElement([1,2,3]);

//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

// function writer(text){
//     document.write(`
//     <p>${text}</p>
//     `)
// }
//
// writer("jhlkhhlhlh")



// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

// function list(li){
//     document.write(`
//     <ul>
//     <li>${li}</li>
//     <li>${li}</li>
//     <li>${li}</li>
// </ul>
//     `)
// }
// list("Liiiiiiiiiiiiiii");


// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//
// function list (text, numberLi){
//
//         document.write(`<ul>`);
//                             for (let i = 0; i<numberLi; i++){
//                                document.write(`
//                                         <li>${text}</li>
//                                                `
//                                               );
//                                }
//         document.write(`</ul>`);
// }
// list("kjhkjkjh",4);


// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
//
// function list (arr){
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`
//         <li>${arrElement}</li>
//         `
//         );
//     }
// }
// list([1,2,3,"jkj",true]);


// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

// function list (arr){
//     for (const arrElement of arr) {
//         document.write(`<div style="margin: 40px">`);
//         for (const arrElementKey in arrElement) {
//             document.write(`
//
//                   <p>${arrElementKey} ${arrElement[arrElementKey]}</p>
//
//             `);
//         }
//         document.write(`</div>`);
//     }
// }
//
// list([{id: 1, name:"nica", age:"12"}, {id: 2, name:"Lica", age:"17"},{id: 3, name:"Vica", age:"27"}])

// – створити функцію яка повертає найменьше число з масиву

// function minNumber (array){
//     let minNumber = array[0];
//     for (const arrayElement of array) {
//         if (minNumber>arrayElement){
//             minNumber = arrayElement;
//         }
//
//     }
//     return minNumber;
// }
//
//
// console.log(minNumber([10,-123, 5,1,9]))

// function minNumber (array){
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         const minNumberElement = array[i];
//         if (minNumberElement<min){
//             min = minNumberElement;
//         }
//
//     }
//     return min;
// }
//
//
// console.log(minNumber([10,-123, 5,1,-170,9]))


// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sumErray (array){
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum = sum + arrayElement;
//     }
//     return sum;
// }
//
// console.log(sumErray([10,20,40,30]));





// // – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// arr_1 = [0,1,2];
// function swap(arr,index1,index2){
//     if (index2<arr.length && index1<arr.length){
//         let ch = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = ch;
//         return arr;
//     }
//   return -Infinity;
// }
//
//
// console.log(swap(arr_1, 0, 2));

//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


let arr = [{currency:"USD",value:25},{currency:"EUR",value:42}];

function exchange (summaUAH, currencyValues, exchangeCurrency){
    let convertSum;
    for (const currencyValueslement of currencyValues) {
        if (exchangeCurrency===currencyValueslement["currency"]){
            convertSum = summaUAH/currencyValueslement["value"];
            }
    }
    return convertSum;
}

console.log(exchange(10000, arr,"EUR"));

