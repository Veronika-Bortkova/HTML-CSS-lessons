// // когда асинхронная функуия находится в тебе обычной функции в начале - перед обычной функцией ставится лейбл async, внутри - фетч заворачивает в переменную и перед ним ставится await То есть єта функция будет включаться только после того, как ассинхронние функции полнстью отработают (отпарсятся)
//
// async function foo(){
//     let posts =await fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => response.json());
//
//
//     let users = await  fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json());
//
//     console.log(posts);
//     console.log(users);
//
//
// };
//
// foo();

//Да, именно так работает event loop: даже если асинхронные задачи уже «готовы» и стоят в очереди (microtask queue или macrotask queue), они не начнут выполняться, пока весь текущий синхронный код не завершится и стек вызовов не освободится.
// Механика
// 1. 	Call stack (синхронный код) всегда имеет приоритет. Пока там есть функции, никакие колбэки из очереди не исполняются.
// 2. 	Когда стек пуст, event loop проверяет:
//     • 	Microtask queue (например,  от промисов). Все задачи оттуда выполняются до конца.
// • 	Потом берёт одну задачу из macrotask queue (например, , , I/O).
// 3. 	После выполнения этой macrotask снова проверяются microtasks, и цикл повторяется.

// Итог: сколько бы ни было синхронных операций, они выполнятся первыми. Асинхронные задачи могут «ждать» в очереди, но event loop возьмёт их только после того, как стек синхронного кода опустеет.


// let x = 1
// setTimeout( function (){
//     x = 1000;
//     // console.log(x); если єтой строчки нет, то за пределами функции мі не моежм вівести єто значчение функции - єто можем вівести сейчас только в теле функции - локально, за ней даже после задержки в консоль попаедт единица - потому что у нас нет другого кода
//     }, 1000);
// console.log(x);
//
//
// console.log("hi 1");//первім попадет в консоль
// setTimeout( function (){
//     console.log("hi 2")//четвертім попадет в консоль
// },2000);
// setTimeout(function (){
//     console.log("hi 3")//третим попадет в консоль
// },1000);
// console.log("hi 4");//вторім попадет в консоль
//
// setTimeout(() => {console.log("");},1500);
// //при цикле, нужно оборачивать отдельно в функцию, чтобы правильно получить результат цикла с задержкой
//
// let i = 0;
// while (i<5){
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
//     i++;
// }// при таком коде подучим пять пятерок. Для того чтоби получить правильній вівод нужно так
//
//
//
//
// let y = 0;
// while (y<5){
//     run(y);
//     y++;
// }
//
// function run(y) {
//     setTimeout(() => {
//         console.log(y);
//     },1000);
// }// в таком варианте видаст нормальний цикл 0,1,2,3,4 с задержкой вивоад каждого  значения на одну секунду


//---------------------------promise----------------------------------

// new Promise((resolve) => {
//     setTimeout(()=>{
//         let x = 1;
//         console.log(x);
//         resolve(x);//єто попадает в аргумент следующего зена
//     },1000)
// }).then((value) => {
//    return  new Promise((resolve1) => {
//         setTimeout(() => {
//             value++;
//             console.log(value);
//             resolve1(value);
//         }, 1000)
//     })
// }).then((value1) =>{
//    return  new Promise((resolve2) =>{
//         setTimeout(() =>{
//             value1++;
//             console.log(value1);
//             resolve2(value1);
//         },1000)
//     })
// }).then((value2) => {
//     return new Promise((resolve3) =>{
//         setTimeout(() =>{
//             value2++;
//             console.log(value2);
//             resolve3(value2);
//         },1000)
//     })
// })

//второй аргумент промиса - reject, определяет состояние если произошла ошибка. Его значение передается не в then a в catch
//
// new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         let x = 1;
//         console.log(x);
//         resolve(x);
//     },1000);
// }).then((value) =>{
//   return new Promise((resolve, reject) =>{
//       setTimeout(() => {
//           value++;
//           console.log(value);
//
//           if (false){//делаем иф для того чтобі при каком-то усовии передавалась инфа не на резолв, а на реджект
//             reject("причина ошибки");
//           } else{
//               resolve(value);(value);
//           }
//
//
//       },1000);
//   });
// }).then(value => {
//     setTimeout(() => {
//         value++;
//         console.log(value);
//     },1000);
// }).catch(reason => {//кетчу аргументом возвращает содержание реджеста. Ставить в коде сначала зен или кетч - не важно
//     console.log(reason);
// })

//--------------статуси Промисов-------------------------------

//Промиси имеют три состояния - ожидание (пендинг), resolve решено и reject отклонено. Так как внутри промиса всегда находится какая-то асинхронная операция, то пока ми ожидаем пока она віполнится Промис имеет статус пендинг, когда она заканчивается (удачно) то имеем фулфил - наполненній резолв, если происходит ошибка - то имеем стадию реджект.

// fetch("https:jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then((users) => {
//         for (const user of users) {
//             fetch("https:jsonplaceholder.typicode.com/posts?userId="+user.id)
//                 .then(value => value.json())
//                 .then(postOfIteraitedUser => //console.log(postOfIteraitedUser)
//            user.posts = postOfIteraitedUser)
//             console.log(user);
//         }
//     })

let userss = fetch("https://jsonplaceholder.typicode.com/users")
    .then(value => value.json());
let posts = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(value => value.json());


// Promise.all([userss,posts])//у класса Ппромис есть метод all, которій позволяет передаь в него в качестве массива асинхроніе запити или подии. Такой промис будет ожидать пока віполнятся оба асинхронніх запроса и в итоге видаст результат. В нашем случае получим массив из двух массивов - массив с юзерами и массив с постами
// .then(resalt => {
//     // console.log(resalt);
//     // let usersArray = resalt[0];
//     // let postdArray = resalt[1];
//     // console.log(usersArray);
//     // console.log(postdArray);
//     let [users,posts] = resalt;//Это называется деструктуризация массива.Она позволяет сразу «распаковать» элементы массива в отдельные переменные:- users получит значение resalt[0], - posts получит значение resalt[1]
//     for (const user of users) {
//         user.posts = [];
//         for (const post of posts) {
//             if (user.id === post.userId){
//                 user.posts.push(post);
//             }
//         }
//
//     }
//     console.log(users);
// })

//Еще один метод Промиса Promise.race тоже принимает массив с запитамиили асинхронними операциями. Єтот метод обрабатівает обе ассинхронніх операции, но в зен попадает тот, которий обработается первим. Используется, например, если можно получить информацию с двух серверов, один бістрее, но может лечь. Тогда при использовании єтого метода, если первій биістрій ралботает, получи информацию с него, если не работает - получим со всторого. Некая замена ифа

// Promise.race([userss, posts]).then(value => {
//     console.log(value);
// })


//Еще один метол Промиса Promise.any ([userss, posts]) делает применро тоже самое. Получим те данніе которие первім придут. Then сработает как только один из ответов придет

Promise.any([userss, posts]).then(value => {
     console.log(value);
 })