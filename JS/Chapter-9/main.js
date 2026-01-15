// let div = document.createElement("div");
//
// div.classList.add("wrap", "collapse", "alpha", "beta");
// // div.style.background = "silver";
// // div.style.fontSize = "34px";
// // div.style.color = "green";
// // div.setAttribute("id", "first")
// div.innerText = "Yju"
// document.body.appendChild(div);
//     // додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// let div2 = div.cloneNode(true);//если в метод cloneNode передается тру - клонируется єлемент со всем содердимим и связями, если фелс - только сам єлемент, без содержимого и дочерних узлов (класси сохраняются)
// document.body.appendChild(div2);
// let div3 = div.cloneNode(false);
// document.body.appendChild(div3);
// // div.setAttribute("id", "first")
// // div2.setAttribute("id", "second");
// // div3.setAttribute("id", "Third");
// div.setAttribute("id", "first")

//--------------------------2

//– Є масив:
//
// [‘Main’,’Products’,’About us’,’Contacts’]
//
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let arrMenu = ["Main","Products","About us","Contacts"];
// let ul = document.createElement("ul");
// for (const arrMenu1 of arrMenu) {
//     let li = document.createElement("li");
//     li.innerText = arrMenu1;
//     ul.append(li);
// }
// document.body.append(ul);


//---------------------3
// – Є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.