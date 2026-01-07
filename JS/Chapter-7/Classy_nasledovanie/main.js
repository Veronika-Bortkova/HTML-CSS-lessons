// 1

// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting (){//в классах можно прописывать методы в теле класса. Это метод - отличается от функции - тем что он в теле класса, по сути та же функция
//         return `Hello, my name is ${this.name}`
//     }
// }
//
//
// let user_1 = new User("Nica", 27);
// console.log(user_1);
// console.log(user_1.greeting());


// 2


// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     static greeting() {//если метод статичный, то к нему можно обратиться даже не имея экземпляра класса, просто по классу (как имя подставит просто имя класса)
//         console.log(this);
//         console.log(this.age);//выыодит андефайн, потому что не имея экземпляра у нас его нет
//         return `Hello, my name is ${this.name}`;
//
//     }
// }
//
//
//
// console.log(User.greeting());



//3
//
// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
// work() {
//         return "work in process";
//
//     }
// }


// class Customer extends User  {//при создании нового класса, который содержит частично те же поля или методы из другого класса, можно использовать ключевое слово extends (расширять) и указать кого мы расширяем. В нашем слуае Customer является нащадком Юзера - то есть он расширяет юзера.
//
//     constructor(name, age, password) {
//         super(name, age);//супер - это то же, что и this только в родительском классе (супер конструктор). Если нажать контрл клик - нас перекинет в родительский класс нажать
//         this.password = password;
//     }
// }

// class Customer extends User {
//     password
//
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
// }
//
//
// let customer_1 = new Customer("Vic", 28, 4584);
// console.log(customer_1);
// console.log(customer_1.work());;



//4

function User (name, age){
    this.name = name;
    this.age = age
}

let user_4 = new User("Bin",27);
console.log(user_4);


function UserCreate (name, age, password){
    User.apply(this, arguments);
    this.password = password;
}

let userCreate_1 = new UserCreate("Lim", 28, 1235);
console.log(userCreate_1);


