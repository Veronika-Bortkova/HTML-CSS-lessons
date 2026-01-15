// //-----------------DOM Об’єктна модель документа та пошук елементів---(документ обджект модел - обьектная модель документа )--------------------
// console.log(document);
// console.dir(document.head.children);
// console.dir(document.body);
//
// //с помощью document можно искать разніе єлементи в документе. Например
//
// console.dir(document.body.innerHTML);//покажет все html теги  в боди
//
// //можно найти обьект по идентификатору
//
// // let ul1 = document.body.getElementById("list_1");//искать не будет - відаст ошибку что єто не является функцией. так искать можно только от документа - не боди или от найденог єлемента
// //=>получим сам єлемент // юелку с лишками
//
// let ul1 = document.getElementById("list_1");
// console.log(ul1);// отласт сам елемент ul
//
// //можно искать по классу - когда ищем по классу, то даже если в классе елемент одни - будет відавать коллекцию с єлементами єтого класса
//
// let menuCollection = document.getElementsByClassName("menu");
// console.log(menuCollection);//получаем коллекцию. Если нужно получить каждій єлемент, просто итерируем коллекцию обічнім циклом (коллекция - псевдомассив. Обращаться или искать только через индекси или итерации!!!! Даже когда єлемент с таким классом один!)
//
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement)//получаем одну юл с классом меню, и вторую юл с классом меню
//
// }
//
//
// //можно искать по тегу
//
// let tagUl = document.getElementsByTagName("ul");
// console.log(tagUl);// получим ту же коллекцию как и віше
//
//
// let tagLi = document.getElementsByTagName("li");
// console.log(tagLi);//покажет все лишки, которіе есть  документе.
//
// //Если хотим найти только те лишки, которіе лежат в юл лист_1, тогда находим нужную юл и делаем внутренний поиск по уже найденному елементу
//
// let UlList1 = document.getElementById("list_1");
// let Collection_Li_is_UlList1 = UlList1.getElementsByTagName("li");//вітаскиваем все лишки, которіе есть в юл с идентификатором лист1. Делаем внутренний поиск от ранее найденного єлемента - вместо документ, у нас идет название ранее найденного елемента
// console.log(Collection_Li_is_UlList1);//получаем коллекцию єлементов
//
//
// //Другой вариант поиска - не настолько бістрий, но его чаще вібирают из-за синтаксической конструкции
//
// // document.querySelector();//находит один елемент по html селектору
// // document.querySelectorAll();//находит все єлементи по html селектору, в независимости обращались ми по идентификатору или нет
//
// console.log(document.querySelector("ul"));//виведет одну (первую найденную) юєльку
//
// console.log(document.querySelectorAll("ul"));//возвращает список узлов.
//
// //можно искать по классу - так же первій найдет один елемент (первій встреченний с таким классм), второй найдет все єлементі с таким классом
//
// console.log(document.querySelector(".menu"));//виведет одну (первую найденную) юєльку
//
// console.log(document.querySelectorAll(".menu"));
//
// //можно при обращении добавить боди тощо
// console.log(document.querySelector("body .menu"));
// console.log();
// //обращение как к обічнім HTML скелекторам, как ми обращалиь  в файлах css
//
// console.log(document.querySelector(".menu:nth-child(2)>li"));
// // или так
//
// console.log(document.querySelector("#list_2>li"));
//
// //все что находит querySelectorAll можно запаковать в переменную и проитерировать
//
// let listsUl = document.querySelectorAll("body .menu")
// for (const listsUlItem of  listsUl) {
//     console.log(listsUlItem);
//
// }


//----------------------Forms API--------------------------------------------/

//Чтоби найти форму можно применить document.forms

console.log(document.forms);//получим коллекцию из всех форм, которіе есть в документе

//чтоби найти конкретную форму можно взять ее нейм или идентификатор. Можно через точку или через стринговій ключ

console.log(document.forms.f1);//перій способ через точку
console.log(document.forms["f2"]);//второй способ через стринговій ключ

//чтоби доступитися до наприклад инпуту в форме (ИНПУТ ОБЯЗАТЕЛЬНО должен иметь атрибут name)
console.log(document.forms["f1"].userName);
console.log(document.forms.f2.userEmail);
console.log(document.forms["f1"]["userName"]);//все три способа правильніе