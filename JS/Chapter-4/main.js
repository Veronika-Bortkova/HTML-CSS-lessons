// function writer (title, price, discr){

// document.write(//*html*//
//     `
//     <div> ${title}  ${price} </div>
//     <div>${discr}</div>
//
//     `
// )
// };
//
// writer("milk", 12, "fresh");




// function arrayPrinter(list){
//     for (const listElement of list) {
//         console.log(listElement);
//     }
// }
//     let usersWithId = [
//
//         {id: 1, name: "vasya", age: 31, status: false},
//
//         {id: 2, name: "petya", age: 30, status: true},
//
//         {id: 3, name: "kolya", age: 29, status: true},
//
//         {id: 4, name: "olya", age: 28, status: false}
//
//     ];
// arrayPrinter(usersWithId);
//
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// arrayPrinter(arr);
//

// function userFactory(id,imya,age,status){
//     let user = {
//         id: id,
//         name: imya,
//         age: age,
//         status: status
//     }
//     return user;
// }
//
// let u1 = userFactory(1, "Nica",12,false);
// let u2 = userFactory(2, "Vica",18,false);
// let u3 = userFactory(3, "Lica",27,false);
// let u4 = userFactory(4, "Nic",12,true);
// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);

// function percent (sum1, percent){
//     return sum1/100*percent;
//
// }
//
// function tax (sum2){
//     return sum2 - percent(sum2,20)-percent(sum2, 1.5);
// }
// let resalt = tax(10000)
// console.log(resalt);
//


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
//
// function bookFilter(arrey){
//     let filterBooks = [];
//     for (const arreyElement of arrey) {
//         if (arreyElement.number_of_pages >100){
//             filterBooks.push(arreyElement);
//         }
//     }
//     return filterBooks;
// }
//
// let filer = bookFilter(books);
// console.log(filer);


// function foobar (){
//     if (arguments.length ===2){
//         return arguments[0] + arguments[1];
//     } else if(arguments.length ===3){
//         return arguments[0] + arguments[1] + arguments[2];
//     }
//
// }
//
// console.log (foobar(1,2,3));
// console.log(foobar(1,2));


// function asd (v,x,...y){
//     console.log(y)
// }
//
// asd (1,2,7,8,3);





