// let calc = function (a,b){
//     sum = a+b;
//     return sum;
// }
//
// console.log(calc(10,20));





// let a = (c,d) => c+d;
//
// // console.log(a(10,20));
// b = a(10,20);
// if (b > 10){
//     console.log(10);
// }

// if (a(10,20)>10) {
//     console.log(10);
//
// }


// function sumNumber(a,b){
//     sum = a+b;
//     return sum;
// }

// let a = sumNumber(10,20);
// console.log(a);

// function osd (){
//     let x = 10;
//     function inner(){
//         return ++x;
//     }
//     return inner;
// }
//
// console.log(osd()());
//
// let a = osd();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// // let usrer = {name: "Nica", age: 27};
// function userBuilder (name,age){
//     let user = {name,age};
//     return {
//         getName (){
//             return user.name
//
//         },
//         getAge (){
//            return user.age
//         },
//         setGetAge(newAge){
//             if (newAge > 0){
//                 user.age = newAge;
//             }
//         }
//     }
// }
//
// let builder = userBuilder("Nica",27);
// // console.log(builder)
// console.log(builder.getAge());
// builder.setGetAge(100);
// console.log(builder.getAge());

// let user = {
//     age: -120,
// };
//
// function ageControl (){
//     if (user.age <0){
//         user.age = "undefound";
//     }
//     return user.age;
// }
// ageControl();
// console.log(user.age);

// function iterator (arr, i){
//     console.log(arr[i]);
//     i++;
//     if (i<arr.length){
//         iterator(arr,i);
//     }
// }
// iterator([1,2,3],0);

// let innerArray = [];
// function flatter (array){
//     for (const arrayElement of array) {
//         if (Array.isArray(arrayElement)){
//             flatter(arrayElement)
//         } else{
//             innerArray.push(arrayElement);
//         }
//
//     }
// }
//
// flatter([[1,2,[3,4],5], 6,7]);//1.2.3.4.5
// console.log(innerArray);



//
// let newarray = [];
// let arr = [1,2,[3,4,5,6,7],8,[9,10, [11,12,13],14]];
// for (const arrayElement of arr) {
//     if (Array.isArray(arrayElement)){
//         for (const itemArrayElement of arrayElement){
//             newarray.push(itemArrayElement);
//         }
//
//     } else {
//         newarray.push(arrayElement);
//     }
// }
// console.log(newarray);




// function* foo(){
//         yield 100,
//         yield 200,
//         yield 300
// }
//
// let foogenerator = foo();
// console.log(foogenerator.next().value);
// console.log(foogenerator.next().value);
// console.log(foogenerator.next().value);
// console.log(foogenerator.next().value);
// console.log(foogenerator.next().value);


// function* cardHolder (){
//     const cards = [
//         {value: "7", mast: "pic"},
//         {value: "20", mast: "cher"},
//         {value: "D", mast: "bubn"},
//         {value: "V", mast: "tref"},
//     ]
//     for (const card of cards) {
//         yield card;
//     }
// }
//
// let cardHolderGeneration = cardHolder();
// console.log(cardHolderGeneration.next().value);
// console.log(cardHolderGeneration.next().value);

let cards = [
    {value: "7", mast: "pic"},
    {value: "20", mast: "cher"},
    {value: "D", mast: "bubn"},
    {value: "V", mast: "tref"},
]

function* cardHolder (arr){
    for (const card of arr) {
        yield card;
    }
}

// let cardHolderGeneration = cardHolder(cards);
// console.log(cardHolderGeneration.next());
// console.log(cardHolderGeneration.next().value);
// console.log(cardHolderGeneration.next().value);
// console.log(cardHolderGeneration.next());
// console.log(cardHolderGeneration.next());



// console.log("start");
// try {
//     console.log("a");
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log("finelly");
// }
//
// console.log("finish");



function calc(a,b) {
    if (b === 0){
        throw new Error("b is 0");
    }
    return a+b;
}

calc(1,0);