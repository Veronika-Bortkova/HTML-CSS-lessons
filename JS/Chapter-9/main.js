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
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: "JavaScript Complex", monthDuration: 5},
//
// {title: "Java Complex", monthDuration: 6},
//
// {title: "Python Complex", monthDuration: 6},
//
// {title: "QA Complex", monthDuration: 4},
//
// {title: "FullStack", monthDuration: 7},
//
// {title: "Frontend", monthDuration: 4}
//
// ];
//
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement("div");
//     div.innerText = `Назва курсу - ${element.title} длительность курса - ${element.monthDuration}`;
//     document.body.append(div);
// }


//-------------------------------------4

// – Є масив
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.

//

//--------------------------------5
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (const element of coursesArray) {
    let divCourse = document.createElement("div");
    divCourse.classList.add("course");
    let ulModules = document.createElement("ul");
    let i = 0;
    for (const key in element) {
        let divInfoCourse = document.createElement("div");
        i++;
        divInfoCourse.classList.add("courseInfo");
        divInfoCourse.innerText = element[key];
        if (i>1) {// роблю для того, щоб не було в верхнему блоку запису такого виду "title -  JavaScript Complex", бо виглядає якось не полюдськи. А в інших блоках, щоб навпаки було - бо незрозуміло без цього, яка інфа в них лежить
            divInfoCourse.innerText = `${key} - ${element[key]}`;
        }
        divCourse.append(divInfoCourse);
        if (Array.isArray(element[key])){
            divInfoCourse.innerText = "Modules";
            divInfoCourse.append(ulModules);
        }
    }
         for (const ModulElement of element.modules) {
             let liNameModul = document.createElement("li");
             liNameModul.innerText = ModulElement;
             ulModules.append(liNameModul);
         }
    document.body.append(divCourse);
}
