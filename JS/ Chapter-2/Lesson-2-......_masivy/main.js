let arr;
arr = [1, 2, 15, "xcxcx"];
console.log(arr);
arr[0] = "first";
console.log(arr);
arr[4] = "finish";
console.log(arr);
console.log(arr.length);
arr[arr.length] = 700;
console.log(arr);

let arr_1 = [
    [
        [1,22,4], 8, 5
    ],
    [],
    []
];
console.log(arr_1[0][0][1]);

//обьекты------------------------
let user_1 = {
    id: 1,
    name: "Nica",
    age: 45,
    skills: ["html", "js", "git"],
    wife: {
        name: "N",
        age: 46
    }
};
console.log(user_1.wife.name);

user_1.adress = "rsgskaya";
user_1["podpys"] = true;
delete user_1.age;
console.log(user_1);


