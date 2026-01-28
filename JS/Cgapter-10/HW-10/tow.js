// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
let div = document.createElement("div");
document.body.append(div);

// window.onload = function (){
    let info = JSON.parse(localStorage.getItem("sessionsList"));
    for (const infoElement of info) {
        let p = document.createElement("p");
        p.innerText = infoElement;
        div.append(p);
    }

// }