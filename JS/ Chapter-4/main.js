// let arr= [];
// arr[0] = 5;
// arr[1] = 7;
// arr[2] = 3;
// console.log(arr)

// arr = [2,17,13,6,22,31,45,66,100,-18];

// let i = arr.length-1;
// while (i>=0){
//     let arritem = arr[i];
//     if (arritem % 2 === 0) {
//         console.log(arritem);
//     }
//     i--;
// }




// for (let arritem = arr.length-1; arritem>=0; arritem--){
//     let n = arr[arritem];
//     if (n%2 ===0) {
//         console.log(n);
//     }
// }


// for (let arritem = 0; arritem<arr.length; arritem++){
//     let n = arr[arritem];
//     if (n%3 === 0) {
//         n = "okten";
//         console.log(arr);
//     }
// }

// for (let arritem = arr.length-1; arritem>=0; arritem--) {
//     let n = arr[arritem];
//     console.log(n);
// }
// debugger;


// arr = [1,2,3,true, false, 7, 8, "fgfh", "hjk", true];
// for (const arrElement of arr) {
//     if (typeof arrElement === "string"){
//         console.log(arrElement);
//     }
// }


// for (const arrElement of arr) {
//     console.log(typeof arrElement);
//
// }

// usersList = {
//     name: "Nica",
//     age: 18,
//     status: true
// }

// for (const user in usersList) {
//     for (const Euser in usersList[user]){
//         console.log(Euser);
//     }
//
// }

// const key = "name";
// console.log(key); // "name"
// console.log(usersList[key]); // "Nica"

// const key1 = "name";
// console.log(key1, usersList[key1]);

// //
// for (let i = 0; i <10; i++) {
//     console.log(i+1);
//     document.write(
//         `<div> ${i+1}`
//     )
//
//
// }
// for (let i = 1; i <101; i+=2) {
//     console.log(i-((i+1)/2));
//     document.write(
//         `<div> ${i}`
//     );
//
// }

// for (let i = 0, step = 1; step < 101; i += 2, step++) {
//     console.log(`Крок№ ${step} ${i}`);
//     document.write(`<div>Крок№ ${step} ${i}</div>`);
// }

// let n = 0;
// for (let i = 0; i <100; i+=1) {
//     if (i % 2 != 0) {
//         console.log(i);
//         document.write(`<div>Крок№ ${i}</div>`);
//     }
// }

// створити масив книжок (назва, кількість сторінок, автори , жанри).
// let books= [
//     {
//         name: "Jango",
//         number_of_pages: 200,
//         author: ["Терри Пратчетт"],
//         genre: ["fantasy", "world"],
//     },
//
//     {
//         name: "Red",
//         number_of_pages: 100,
//         author: ["Иван Ред", "Jklk iuiuiu"],
//         genre: ["fantasy"],
//     },
//
//     {
//         name: "Moby dik",
//         number_of_pages: 203,
//         author: ["Герман Мелвилл", "kjk jkjk"],
//         genre: ["drama", "action", "fun"]
//     }
// ]

// let i = 0;
// for (const book of books) {
//     if (book.number_of_pages > i) {
//         i = book.number_of_pages;
//     }
// }
// console.log(i);
// let i = books[0].number_of_pages;
// for (const booksKey in books) {
//     if (i > books[booksKey].number_of_pages) {
//         i = books[booksKey].number_of_pages;
//         b = booksKey;
//     }
// }
// console.log(books[b]);


// let i = 0;
// for (const book of books) {
//    if (book.genre.length > i){
//        i = book.genre.length;
//    }
//
// }
// console.log(i)



// let i = 0;
// let b = 0;
// for (const booksKey in books) {
//     if (i < books[booksKey].genre.length) {
//         i = books[booksKey].genre.length;
//         b = booksKey
//     }
// }
// console.log(books[b]);


// let i =0;
// let b = 0;
// for (const booksKey in books) {
//     if (books[booksKey].name.length > i) {
//         i = books[booksKey].name.length;
//         b = booksKey;
//     }
//
// }
//
// console.log(books[b]);
//
// let i = 0;
// let b = 0;
// for (const booksKey in books) {
//     if (books[booksKey].author.length === 1) {
//         console.log(books[booksKey]);
//     }
// }


// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

//
// let arr_5  = [];
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random()*10);
//     arr_5[i] = arr[i]*5;
//
// }
// console.log(arr);
// console.log(arr_5)

//
// let b = -1;
// let arrNumber = [];
// let arr = [1,2,3,"hh","iugiug",true, "kkh",8];
// for (const arrElement of arr) {
//     if (typeof arrElement === "number") {
//         b+=1;
//         arrNumber[b] = arrElement;
//     }
// }
// console.log(arrNumber)