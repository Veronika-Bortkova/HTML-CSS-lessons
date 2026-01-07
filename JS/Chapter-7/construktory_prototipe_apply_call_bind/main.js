let arr = [];

function User(name, age, status){//функции конструкторы принято называть с Большой буквы, в функциях конструкторах нет ретерна, они ничего не возвращают - но создают обьект тощо

    this.name = name;
    this.age = age;
    this.status = status;

}

arr.push(new User("Nica", 27, true));
arr.push(new User("Lica", 37, true));
arr.push(new User("Vica", 47, true));
console.log(arr);
let userAlder = arr.find(value => value.age>40);
// console.log(userAlder);
// console.log(arr.find(value => value.age>20));

