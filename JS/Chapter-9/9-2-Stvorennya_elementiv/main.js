let h1  = document.createElement("h1");//.createElement создает новій html елемент НЕ вставляет его в документ, просто создает. Как аргумент принимает название тега создаваемого елемента - в нашем случае h1

//Для того чтоби вставить елемнт в HTML документ существует append (принимает любое количество елементов) или appendChid (принимает один елемент)
h1.innerText = "some title";
document.body.appendChild(h1);

let allUsersDiv = document.getElementsByClassName("users")[0];

let users = [
    {id:1, name: "Nica", age: 18, status: true},

    {id:2, name: "Lica", age: 27, status: false},

    {id: 3, name: "Ivan", age: 35, status: true},

    {id: 4, name: "Vika", age: 47, status: false},

    {id: 5, name: "Petya", age: 45, status: true},
]

for (const user of users) {
    let div = document.createElement("div");
    div.classList.add("user");
    div.innerText = user.name;
    allUsersDiv.appendChild(div);

}

let users1 = [
    {id:1, name: "Nica", age: 18, status: true},

    {id:2, name: "Lica", age: 27, status: false},

    {id: 3, name: "Ivan", age: 35, status: true},

    {id: 4, name: "Vika", age: 47, status: false},

    {id: 5, name: "Petya", age: 45, status: true},
];

for (const users1Element of users1) {
    let userInfoDiv = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = users1Element.name;
    let p = document.createElement("p");
    p.innerText = users1Element.status + " " +users1Element.age;
    userInfoDiv.append(h2, p);
    document.body.appendChild(userInfoDiv);


}



