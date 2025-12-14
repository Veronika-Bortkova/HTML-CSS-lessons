function User(name, age, status){
    this.name = name;
    this.age = age;
    this.status = status;
}

let user1 = new User("Nica", 27, true);
console.log(user1);
console.log(user1.name);

// User.prototype.wild = function (){
//     return "jkjkjkj";
// };
//
// let user2 = new User("mkm", 45, "yes");
// console.log(user2);
// console.log(user2.wild());

user1.greeting = function (msg, j){
    return `Hello ${this.name} ${msg}  ${j}`;
}

console.log(user1);
console.log(user1.greeting("!!!", ")))))))))))))))"));

let user2 = new User("Lika", 28, true);
console.log(user1.greeting.apply(user2, ["!!!", "))))))))))))"]));

let user3 = new User("Ivan", 48, true);
console.log(user3);
console.log(user1.greeting.call(user3, ")))))", "!!!!"));

let user4 = new User("Olya", 38, true);
console.log(user4);
let greetingCopy = user1.greeting.bind(user4 );
console.log(greetingCopy("12", "17"));




