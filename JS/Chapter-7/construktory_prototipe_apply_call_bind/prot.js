// console.log("Hi");
// let user_1 = new User("Nica", 27, true);
// console.log(user_1);
// user_1.greeting = function (){
//     console.log("Hello");
// }
// console.log(user_1);
// user_1.greeting();
// console.log(User);
// User.prototype.greeting = function (){
//     return `Hello, my name ${this.name}`;
// };
// let user_2 = new User("Lin", 35, true);
// console.log(user_2);
// console.log(user_2.greeting());




let user_1 = new User("Nica", 27, true);
console.log(user_1);
user_1.greeting = function (msg, data){
   return `Hello ${data} ${msg} ${this.name}`;
};
console.log(user_1.greeting("!!!", "10/01"));
let user_3 = new User("Min", 45, true);
// console.log(user_1.greeting.apply(user_3, ["&&&", "12/01"]));// apply - позволяет подменить this в данном случае берет гритинг у юзера1 и приминяет его на юзера 3. Если функция требует аргументы - то в apply можно добавить их - то есть в ней первій аргумент (в нашем случае user_3) всегда указывает на то, чем мы подменяем THIS, а дальше мы можем указывать аргументы функциикоторые должны быть в функции которую мы забрали из другого элемента. !!! Эти аргументы долдны указываться В МАССИВЕ, потому что вараркс (рест аргумент) принимается только массивом
// console.log(user_3);


// console.log(user_1.greeting.call(user_3, "&&&", "15/07"));// call раблотает также как єплай, но аргументі передаются не в массиве, а просто через запятую.- call удобно, когда аргументы уже известны и их немного.
// // - apply полезен, когда аргументы хранятся в массиве или нужно передать динамически сформированный список.
//
//
//

let greetingCopy = user_1.greeting.bind(user_3, "10/12","Joy!");//bind копирует функцию - в байнд идет обязательный агрумент - подмена this, и дополнительные аргументы функции. Не вызывает функцию сразу, а возвращает новую функцию с фиксированным this и аргументами.
console.log(greetingCopy());

//или так
let greetingCopy2 = user_1.greeting.bind(user_3);
console.log(greetingCopy2("Loo", "44/55"));







