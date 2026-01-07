// // сет - уникальній набор. псевдоМассив значений, которіе не повторяются. Єто не массив и не дежейсон - просто коллекция
//
// let set = new Set();//создается с помощью Set()
// set.add(123);//попадет в массив (заполняется через add) добавлять можно не только примитиви, но и обьекти тощо
// set.add("ghj");//попадет в массив
// set.add(123);// не попадет в массив, потому что такое значение уже есть
// set.add("ghj");//не попадет в массив, потому что такое значение уже есть
// set.add("dfh");//попадет в массив
// console.log(set);//=>Set(3){123, 'ghj', 'dfh'}
//
// let mySet = new Set([1, 2, 3, 3, 2]);
// console.log(mySet);//=>Set(3){1, 2, 3}
//
// console.log(mySet.has(3));//возвращает тру, если содержит єлемент, и фелс, если не содержит
//
// set.delete("ghj");//удаляет указанній єлемент из сета
// console.log(set);
// console.log(set.size);//узнать количество єлементов в сете
//
//
// //сет можно проитерувати с помощью метода forEach
//
// let arr = [];
// set.forEach(value => console.log(value));
//
//
// // чтоби сделать массив из сета можно воспользоваться классмо Arrey, методом from
//
// let arrFromSet = Array.from(set);
// console.log(arrFromSet);//изменения єтого массива НЕ будут влиять а сет
// console.log(arrFromSet === set);//=> false



//Коллекции map ассоциации

// мапи делают ассоциации между ключами и значениями (как обьект), но имеют много функций

let map = new Map();// создается мэп с помощью конструктора new Map
console.log(map);//для того чтоби проассоциировать ключ с его значинем используют форму map.set(1,"one")
map.set(1,"one");
map.set(2,"two");
map.set(3,"three");
console.log(map);
map.get(1);// обращение к мєп - дай содержание ключаж
console.log(map.get(1));

//можно не только примитиві, но и обьекти тощо
let map_1 = new Map();
map_1.set("red", {name: "Ivan", surname: "Krasniuk"});
map_1.set("Nic_a", {name: "Veronika",surname:"Bortkova" });
console.log(map.get("Nic_a"));


//як що ключ теж обьект, то его надо сначала окремо винести

let kap_2 = new Map();
let red = {id:"red"};
let Nic_a = {id:"Nic_a"}
kap_2.set(red, {name: "Ivan", surname: "Krasniuk"});
kap_2.set(Nic_a, {name: "Veronika",surname:"Bortkova" });
console.log(kap_2.get(red));
console.log(kap_2.get(Nic_a));
console.log(kap_2);

//ключи в мапе всегда уникальніе, если снова обратиться к мапе и сделать сет с тем же ключом - он просто перезапишется - будет мапа с ключем и последним записаннім значением
kap_2.set(Nic_a, {name: "Veronika_))))",surname:"Bortkova" });
console.log(kap_2);

// map_2.delete(Nic_a);//удаляет обьект из мапи
// console.log(map_2);

// map_2.clear();// полностью очищает мапу, єтот же метод полностью очищает и сет
// console.log(map_2);

kap_2.size;//показывает размер мапи
console.log(kap_2.size);//=>1


kap_2.keys();//витягивает все ключи из мапи
console.log(kap_2.keys());

//ключи можно итерувати

let arrFromMap = Array.from(kap_2.keys());
console.log(arrFromMap);


let arrFromMap_1 = Array.from(map.keys());//сложили в массив все ключи мапи
console.log(arrFromMap_1);

//можно витянуть все значения

kap_2.values();
console.log(kap_2.values());
let arrFromMapValue = Array.from(kap_2.values());
console.log(arrFromMapValue);//получим массив со всеми значеними мапи, но уникальніми по ключам, по тому что ключи не могут дублироваться


let arrFromMapValue_1 = Array.from(map.values());
console.log(arrFromMapValue_1);

