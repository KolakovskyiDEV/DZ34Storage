"use strict";
// 1. Собрать данные с формы при ее сабмите
// 2. Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
// 3. Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее
// 4. Если данных нет, то показать соответствующее сообщение


document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {};
  const inputs = event.target.querySelectorAll(" input, textarea, select");
  for (let input of inputs) {
    if (!(input.type === "checkbox") && !(input.name === "file")) {
      data[input.name] = input.value;
      }
    // Сохраняем в обьект значение checkBox
    if (input.type === "checkbox") {
      data[input.name] = input.checked;
      }
    // Работаем с файлом(картинкой) и сразу в проверке убираем ошибку если файл не загружен
    if (input.name === "file" && input.files.length === 1) {
      // Позволяем асинхронно читать содержимое файлов, конвертирует файл в DataURL
      const reader = new FileReader();
      // событие при загрузке картинки
      reader.addEventListener("load", () => {
        //записываем в LocalStorage данные URL
        localStorage.setItem("safeImage", reader.result);
      });
      // Используется для чтения содержимого файла
      reader.readAsDataURL(input.files[0]);
      }

      }

  localStorage.setItem("dataForm", JSON.stringify(data));
      });
    // Создаём событие при загрузке страници и записываем данные назад в инпуты c localStorage
document.addEventListener("DOMContentLoaded", (ev) => {
    // Если нужно при перезагрузке первой страници удалять вывод картинки на второй странице
    //   localStorage.removeItem("safeImage");
    //Останавливаем событие если в localStorage не записан обьект dataFprm.
  if (!localStorage.dataForm) return;
    //разбирает строку JSON
  const data = JSON.parse(localStorage.getItem("dataForm"));
    // собираем все инпуты в переменную
  const inputs = document.querySelectorAll("#form input, textarea, select");
    // перебираем элементы обьект
  for (let input of inputs) {
    // Если элемент не CheckBox и не файл
    if (!(input.type === "checkbox") && !(input.name === "file")) {
      input.value = data[input.name];
    }
    // Если элемент CheckBox
    if (input.type === "checkbox") {
      input.checked = data[input.name];
    }
    }
    });

    // localStorage.clear();

