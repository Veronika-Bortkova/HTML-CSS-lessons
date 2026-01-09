// // – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// //
// // створити пустий масив, наповнити його 10 об’єктами new User(….)
//
// function User(id,name,surname,email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arrUsers = [];
// arrUsers.push(new User(1, "Nic_a", "Bortkova", "nic@mail", "777-77-77"));
// arrUsers.push(new User(2, "Mic_a", "Nortkova", "mic@mail", "888-88-88"));
// arrUsers.push(new User(3, "Dic_a", "Dortkova", "dic@mail", "333-33-33"));
//
// //или так
//
// let arrUsers_2 = [
//     new User(1, "Nic", "Dfklk", "nic@fdd", "777-33-2200"),
//     new User(2, "Mic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(7, "Bic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(3, "Dic", "Afklnmk", "mic@fdd", "773-78-2200"),
//     new User(5, "Lic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(6, "Tic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(8, "Sic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(9, "Cic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(4, "Jic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(10, "Wic", "Dfklnmk", "mic@fdd", "773-73-2200"),
//     new User(100, "Wic", "Dfklnmk", "mic@fdd", "773-73-2200")
// ]
//
// console.log(arrUsers);
// console.log(arrUsers_2);
//
// // – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//
// let arrNumberEvenId = arrUsers_2.filter(value => {
//     if (value.id%2===0){
//         return value;
//     }
// }
// );
//
// console.log(arrNumberEvenId);
//
//
// let arrNumberEvenId_1 = arrUsers_2.filter(value => value.id%2===0);
// console.log(arrNumberEvenId);
//
// // – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// arrUsers_2.sort((a,b) => a.id-b.id);
// console.log(arrUsers_2);
//
//
// // – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// //
// // створити пустий масив, наповнити його 10 об’єктами Client
//
// function Client (id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// arrClients  = [];
// arrClients.push(new Client(1, "Nica", "Bortkova", "hjk@khjh", "777-77-77", ["milk", "bread", "better"]));
// arrClients.push(new Client(2, "Vica", "Vortkova", "hluk@khjh", "778-77-77", ["mil;k;kk", "bread", "bettklker"]));
//
// console.log(arrClients);
//
//
// class ClientClass {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// arrClientsClass  = [];
// arrClientsClass.push(new ClientClass(1, "Nica", "Bortkova", "jkljk@ggg", "777-77-77", ["sole", "juice", "chokolet"]));
// arrClientsClass.push(new ClientClass(2, "Lica", "Lortkova", "jklkkljk@ggg", "778-87-77", ["sklkkole", "julklkice", "ch;kokolet"]));
// console.log(arrClientsClass);
//
//
// function Client_1 (id, name, surname , email, phone, ...products){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// };
//
// let arrClients_1 = [
//     new Client_1(1, "Nic", "Bjlklkj", "gjg@khjkh", "777-777-77", {name:"milk", price: 123}, {name: "juice", price: 788}),
//     new Client_1(1, "Nic", "Bjlklkj", "gjg@khjkh", "777-777-77", {name:"milk", price: 123}, {name: "juice", price: 788}, {name: "jljlje", price: 77},  {name: "rtewewe", price: 333}),
//     new Client_1(1, "Nic", "Bjlklkj", "gjg@khjkh", "777-777-77", {name:"milk", price: 123}, {name: "juice", price: 788}, {name: "jljlje", price: 77},  {name: "rtewewe", price: 333},{name: "mnn", price: 31}),
//     new Client_1(1, "Nic", "Bjlklkj", "gjg@khjkh", "777-777-77", {name:"milk", price: 123}, {name: "juice", price: 788}, {name: "jljlje", price: 77},  {name: "rtewewe", price: 333},{name: "sdsd", price: 22}),
//     new Client_1(1, "Nic", "Bjlklkj", "gjg@khjkh", "777-777-77", {name:"milk", price: 123}),
// ]
//
// console.log(arrClients_1);
//
//
// //
// // – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
//
//
// arrClients_1.sort((a,b) => a.order.length - b.order.length);
// console.log(arrClients_1);
//
//
// //
// // – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// //
// //     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //
// //     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// //
// //     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// //
// //     — changeYear (newValue) – змінює рік випуску на значення newValue
// //
// //     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
// class Car {
//     constructor(model, producer, year, maxspeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engineVolume = engineVolume;
//     }
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     info (){
//         for (const argumentsKey in this) {
//             console.log(`${argumentsKey} - ${this[argumentsKey]}`)
//         }
//
//     }
//
//     increaseMaxSpeed (newSpeed){
//      this.maxspeed = this.maxspeed + newSpeed;
//     }
//     changeYear (newValue){
//         if (newValue > 1815)
//         this.year = newValue;
//     }
//
//     addDriver (driver){
//         if (driver) this.driver = driver;
//     }
//
// }
//
// let car_1 = new Car("volvo", "produsre1", 1988, 150, "20 l");
// car_1.drive();
// car_1.info();
// car_1.increaseMaxSpeed(20);
// console.log(car_1.maxspeed);
// car_1.changeYear(1977);
// console.log(car_1.year);
// car_1.addDriver({name: "Nica", age: 22});
// console.log(car_1);
//
//
//
// // – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// //
// //     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// //
// //     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// //
// // ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
//
// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderellas = [
//     new Cinderella("1Lin", 17, 35),
//     new Cinderella("2Vin", 18, 36),
//     new Cinderella("3Hin", 27, 37),
//     new Cinderella("4Kin", 37, 38),
//     new Cinderella("5Cin", 22, 39),
//     new Cinderella("6Yin", 23, 40),
//     new Cinderella("7Gin", 25, 37),
//     new Cinderella("8Din", 24, 39),
//     new Cinderella("9Pin", 27, 34),
//     new Cinderella("10Xin", 18, 37),
// ]
//
// class Prince{
//     constructor(name, age, shoeFoundSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeFoundSize;
//     }
// }
// let prince = new Prince("Dik", 30, 34);
//
// console.log(cinderellas);
// console.log(prince);
//
// for (const cinderellElement of cinderellas) {
//     if (cinderellElement.footSize === prince.shoeSize){
//         console.log(cinderellElement)
//     }
// }
//
// let trueCinderella = cinderellas.find(value => value.footSize === prince.shoeSize);
// console.log(trueCinderella);
//
//
//
//
// // Через Array.prototype. створити власний foreach, filter
//
// cinderellas.forEach((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array)
//
// }
// )


Array.prototype.myForeach = function (cb){
    for (let i = 0; i<this.length; i++){
        cb(this[i],i, this);
    }
}

let arr = new Array(10,20,30);
arr.myForeach((value, index, array) => console.log(value, index, array));

Array.prototype.myFilter = function (cb){
    let arrF = [];
    for (let i = 0; i<this.length; i++){
        if (cb(this[i],i, this)){
            arrF.push(this[i]);
        }
    }
    return arrF;
};

let arr_2 = arr.myFilter(value => value>10);
console.log(arr_2);

let arr_3 = arr.myFilter(((value, index) => value>10&&index>1));
console.log(arr_3);
let arrG = [];
arr.forEach(value => {

    if (value>10){
        arrG.push(value);
    }
})
console.log(arrG);


arr_7 = arr.map(value => {
    if (value>10) return value
});
console.log(arr_7);// вернет [undefined, 20, 30]

arr_8 = arr.map(value => value*10);
console.log(arr_8);


let arr9 = [10, 20, 30];

arr9.myForeach((value, index, array) => {
    console.log("Элемент:", value, "Индекс:", index, "Массив:", array);
});






