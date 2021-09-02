'use strict'
document.querySelector('#form1').addEventListener('submit', action => {
    action.preventDefault();
    //Если пользователь не отправил форму выводим сообщение
    if ((!localStorage.dataForm) && (!localStorage.safeImage)) {
        alert('Данных нет');
        return;
    };
    const data = JSON.parse(localStorage.getItem('dataForm'));
    // записываем в переменную данные картинки с localStorage
    const image = localStorage.getItem('safeImage');
    //Перебираем элементы массива и записываем содержимое в список ul/li
       let ul = document.createElement('ul');
        for (let item in data) {
            let li = document.createElement('li');
                li.innerHTML = `${item}:  ${data[item]}`;
    // Выводим значение checkBox в список
            if (data[item].toString() === 'true') {
                li.innerHTML = `CheckBox: Пользователь подтвердил согласие`;
            }
            if (data[item].toString() === 'false') {
                li.innerHTML = `CheckBox: Пользователь не подтвердил согласие`;
            }
                ul.append(li);
            };
                document.body.append(ul);
    //создаём тег 'img' и записываем 
                let img = document.createElement('img');
    // Создаём атрибут 'src' c адресом графического файла в переменной image взятого из localStorage
                img.setAttribute('src', image);
                img.setAttribute('style', 'max-width:200px; border-radius:20px;');
                img.setAttribute('alt', 'Файл не загружен');
                ul.append(img);
            });
