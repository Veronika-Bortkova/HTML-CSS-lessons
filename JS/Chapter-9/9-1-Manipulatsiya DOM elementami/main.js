let target = document.getElementById("target");
console.log(target.innerText);//получаеем содержание єлемента (в нашем случае текст, которій лдежит в диве)
//можно переназначить текст
// target.innerText = "Hi, Nica";//заменили текст в диве
// console.log(target);//получим в консоли <div> id = "target">Hi, Nica"</div>
//если обратиться к обьекту и добавить метод style, можно доступитись до любой css характеристики
target.style.background = ("silver");
target.style.fontSize = "30px";//такое присвоение делает внутренний стиль у тега - в самом теге прописівает стиль, поєтому стили назначенніе таки образом будет достаточно сложно перебить, при необходимости
target.classList.add("foo");//classList.add добавляет елементу класс = в нашем случае foo. Получим <div id="target" class="foo" style="background: silver; font-size: 30px;">Hi, Nica</div>
target.classList.add("bar");//добавили класс bar. Получим <div id="target" class="foo bar" style="background: silver; font-size: 30px;">Hi, Nica</div>
console.log(target.classList);//метод classList озвращает все стили имеющиеся у єлемента (возвращает псевдомассивом)
target.classList.add("foo");

console.log(target.classList.keys());//позволяет получить ключи слассов, за которими их можно итертровать - обічно не нужно

console.log(target.classList.item(0));//получим класс по его индексу, в данном случае foo;
console.log(target.classList.contains("bar"));//проверяет существует ли такой клас, в данном случае вернет true (если би не существовало, вернуло би false)
target.classList.toggle("bar");//если указанний класс существует toggle его удаляет, если НЕ существует - toggle добавит такой класс
console.log(target);//<div id="target" class="foo" style="background: silver; font-size: 30px;">Hi, Nica</div> Исчез класс bar
target.classList.toggle("Joy");
console.log(target);//<div id="target" class="foo Joy" style="background: silver; font-size: 30px;">Hi, Nica</div>  добавился класс Joy

//target.style. таким оборазом стили лучше не задавать. Лучше создавать их с помощью classList и описивать в css файле

console.log(target.getAttribute("style"));//.getAttribute позволяет достоть информацию про любой тарибут - id, class и тд

console.log(target.getAttribute("class"));
console.log(target.getAttribute("id"));


//можно так же сетнуть атрибут - например id - и оно поменяется. НО в html документе мі будем видеть єлемент со старім айди и поиск по нему уже не даст результатов, потому что ми его заменили
target.setAttribute("id", "fdfdfg");// поменяли значение id на fdfdfg
console.log(target.getAttribute("id"));//получим fdfdfg;

target.setAttribute("id", "target");
console.log(target.getAttribute("id"));//получим target

target.classList.contains("bar");

console.log(target);
console.log(target.previousElementSibling);//отдает предідущий єлемент от того с которім  ми работали - в нашем случае <h1>After</h1>

console.log(target.nextElementSibling);////отдает следующий єлемент от того с которим  ми работали - в нашем случае <h2>Befor</h2>
console.log(target.children);//отдаст коллекцию со всеми дочерними html єлементами - в нашем случае HTMLCollection(2)[b, span]
console.log(target.childNodes);//возвращает узли в єтом случае NodeList(5)[text, b, text, span, text] Текстовіе узлі - • 	Text (текстовый узел) — текст внутри элемента или пробелы/переносы строк между тегами.

target.innerHTML = "<b>HYJKG</b>";//если би ми испольщовали метод inner то теги которіе ми вписали воспринимались би просто как стринга и отображались прямо как написано. Если ми хотим задать текст уже с тегами и чтоби теги воспринимались как теги HTML используем innerHTML

console.log(target.outerHTML);//возвращает обертку с содержимім (создано именно чтобі увидеть полностью обертку) - в нашем случае <div id="target" class="foo Joy" style="background: silver; font-size: 30px;"><b>HYJKG</b></div>

console.log(target);

//если у нас есть несколько єлементов, допустим одного класса, но не содержащих идентификаторов, то дейчтвия с ними через поиск обьектов по классу - а потом что-то делаем с ними в процессе итерации (циклом по коллекции)


let collectionExample_2 = document.getElementsByClassName("example");

for (const collectionExample2Element of collectionExample_2) {
    collectionExample2Element.innerText = "Hi, friend!";
    collectionExample2Element.classList.add("Klas");
    console.log(document.getElementsByClassName("example"));;
} 




