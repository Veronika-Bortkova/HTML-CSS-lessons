let form = document.getElementsByTagName("form")[0];

form.onsubmit = function (ev){
    ev.preventDefault();
    let userId = this.userId.value;
    // console.log(userId.match(/\d/g));//регулярнео віражение - ищет все что цифри, g - показівает, что ищет глобально, все, а не только первое встреченное.
    //можно указать конкретніе числа - диапазон
    //регулярніе віражения - позволяют распознать в стринге какие-то паттерні - числа, диапазоні чисел и тд
    // console.log(userId.match(/[0-4]/g));
    // if (!userId.match(/[0-9]/g)){
    //     console.log("error");//теперь, если в єтом инпуте будут не числа, а букві и тд - то відаст сообщение об ошибке
    // } обьединяю ниже

    let body = this.body.value;
    let title = this.title.value;
    // console.log(userId,title,body);
    //теперь для того чтобі допустим проверять что боди имеет больше чем три слова используем другое регулярнео віражение body.match(/(\w+\s){3,}) где \w - символы - в нашем случае слово - + показывает, что символов больше одного. \s - пробела. Дальше в фигурніх скоюках диапазон - у нас от трех и через запятую нисего не укахано, то есть не дан верхний предел
    if (!!body.match(/(\w+\s){2,}\w+/) && !!userId.match(/[0-9]/g)){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
};