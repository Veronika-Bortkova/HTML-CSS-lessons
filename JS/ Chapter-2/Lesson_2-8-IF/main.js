// let age = +prompt("enter your age");
// if (age>=18){
//     console.log("adulte");
// } else {
//     console.log("cartoon");
// };
// console.log(typeof age);
let color = prompt("enter color", "green");
let isRoadClear = confirm("is road clear");
if (color === "green" && isRoadClear) {
    console.log("go");

    // if (confirm("is road clear")) {
    //     console.log("go");
    // } else {
    //     console.log("just wait");
    // }


} else if (color === "red") {
    console.log("stop");
} else if (color === "yellow"){
    console.log("weight");
} else {
    console.log("update");
}
