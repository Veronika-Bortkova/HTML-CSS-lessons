let now = new Date();
console.log(now);
console.log(now.getFullYear());//год
console.log(now.getMonth());// месяц СЧИТАЕТ с ноля - январь нулевой месяц
console.log(now.getDate());//день месяца
console.log(now.getDay());// порядковій номер дня недели
console.log(now.getHours());// час
console.log(now.getMinutes());//минути
console.log(now.getSeconds());//секунди
console.log(now.getMilliseconds());//милисекунди
console.log(now.getTime());//количество милисекунд с 1-го января 1970 года

let date_1 = new Date(1767707289741);//вернет указанное время - в данном случае єто то что ниже
console.log(date_1);//=> Tue Jan 06 2026 15:48:09 GMT+0200 (Восточная Европа, стандартное время)

let date_2 = new Date("June 22 1977 17:15:07");
console.log(date_2);

let date_3 = new Date("December 31 1979 21:30:07");
console.log(date_3);

let date_4 = new Date(1979, 11,31,21,30,7, 777);//год, месяц, число, час, минута, секунді, милисекунди)
console.log(date_4);

//чтоби измегнить уже существаующее значение к созданной переменной применяем сеттери

date_2.setHours(16);//так же можем менять любой сет. UTC - get используются для измерений от нулквого меридиана. Нужно когда заказчик и исполнитель в разных часовых порясах
console.log(date_2);

let user = {
    id: 1,
    name: "Nic",
    bDay: new Date(1767708653502)
}

console.log(user);