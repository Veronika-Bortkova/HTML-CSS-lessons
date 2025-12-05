// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5, status: false},
//     {title: 'Java Complex', monthDuration: 6, status: true},
//     {title: 'Python Complex', monthDuration: 6, status: true},
//     {title: 'QA Complex', monthDuration: 4, status: false},
//     {title: 'FullStack', monthDuration: 7, status: true},
//     {title: 'Frontend', monthDuration: 4, status: true}
//  ];
// for (let course of coursesAndDurationArray){
//     if (coursesAndDurationArray[course].monthDuration>5){
//         console.log("Cool!")
//     }
//
// // }
// x = 0;
// for (let i = 0; i<coursesAndDurationArray.length; i++){
//     if (coursesAndDurationArray[i].monthDuration>5){
//         console.log("Cool!")
//     }
// }

    // if (coursesAndDurationArray[i].status === false){
    //     x++;
    //     console.log(x)
    // }
// for (let i = 0; i<coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].status === false) {
//         x++;
//         console.log(x);
//     }
// }
// debugger;
// for ( let cours of coursesAndDurationArray){
//     if (!cours.status)
//     console.log("cours");
// };



//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5, status: false},
//     {title: 'Java Complex', monthDuration: 6, status: true},
//     {title: 'Python Complex', monthDuration: 6, status: true},
//     {title: 'QA Complex', monthDuration: 4, status: false},
//     {title: 'FullStack', monthDuration: 7, status: true},
//     {title: 'Frontend', monthDuration: 4, status: true}
//  ];
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let cours = coursesAndDurationArray[i];
//   document.write(`<h3>"User info" - ${cours.title} - ${cours.monthDuration} - ${cours.status}</h3>`);
//
// }


// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:1080/quality=value:75/cm5h9mxw80vdc08k56pwcgv60'
//     },
// ];// DB
//
// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     document.write(`<div class="target">
//                         <h3>${product.title} - ${product.price} UAN</h3>
//                         <img src="${product.image}">
//                     </div>`)
// }

//
// let course = {
//     title: 'JavaScript Complex',
//     monthDuration: 5,
//     status: false
// };
//
// for (let fieldname in course){
//     // console.log(fieldname);
//     console.log(`${fieldname} - ${course[fieldname]}`);
// }


let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        status: false
    },
    {
        title: 'Python Complex',
        monthDuration: 7,
        status: true
    },
    {
        title: 'Frontend',
        monthDuration: 3,
        status: true
    }

];
for (let course of courses) {
    for (let fieldname in course){
        console.log(fieldname, course[fieldname])
    }
    console.log("");

}


// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         status: false
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 7,
//         status: true
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 3,
//         status: true
//     }
//
// ];
//
// let i = 0;
// while (i<courses.length){
//     let course = courses[i];
//     console.log(course);
//     i++;
// }

// do {
//     console.log("hghgkjg")
// } while (false);
