'use strict'

document.querySelector('#form').addEventListener('submit', event => {
    event.preventDefault();
    const data = {};
    const data1 = {};
    const inputs = event.target.querySelectorAll(' input, textarea, select');
    for (let input of inputs) {
        
        if (!(input.type === 'checkbox')&&!(input.name === 'file')) {
            
            data[input.name] = input.value;
            // console.log(input.name);
         
        }
        if (input.type === 'checkbox') {
            data[input.name] = input.checked;
            
        }
         if (input.name === 'file') {

            //   console.log(input.name);
            //  console.log(input.files);
             const reader = new FileReader();
             reader.addEventListener('load', () => {
                //  console.log(reader.result);
                //  console.log(input.files[0]);
                 data1[input.name] = reader.result;
                 console.log(data1);
                //  console.log(data);
             });
             reader.readAsDataURL(input.files[0]);
             
            
        }
        
    }
    console.log(data1);
    // localStorage.setItem('recent-image', JSON.stringify(data1));
    // console.log(data);
    localStorage.setItem('dataForm', JSON.stringify(data))
});

// document.addEventListener('DOMContentLoaded', ev => {
//     if (!localStorage.dataForm) return;
//     const data = JSON.parse(localStorage.getItem('dataForm'));
//     // console.log(data);
//     const inputs = document.querySelectorAll('#form input, textarea, select');
//     for (let input of inputs) {
//         if (!(input.type === 'checkbox')) {
            
//             input.value = data[input.name];
//             // console.log(input.name);
//         }
//         if (input.type === 'checkbox') {
           
//             input.checked = data[input.name];
        
//         }
        
        
//     }
// });

// localStorage.clear();

















    // if (input.checked) {
            //     input.defaultChecked===true;
            //     console.log(input.defaultChecked);
            // }
            //  console.log(input);
















// let form = document.querySelector('#form');
// document.querySelector('#form').addEventListener('submit', event => {
//     event.preventDefault(); //отменна стандартеого события
//   const inputs =  event.target.querySelectorAll('input,select,textarea');
//     const data = {};
//     console.log(inputs);
//     for (let input of inputs) {
//         data[input.name] = input.value;
//         console.log(input.name, input.value);
        
//     }
//     //в localStorage всегда хранится строка
//     //Преобразовывает обьект в строку
//     localStorage.setItem('formData',JSON.stringify(data));
//     //console.log(data);
// });


// document.addEventListener('DOMContentLoaded', (e) => {
//     if (!localStorage.formData) return;
//     const data = JSON.parse(localStorage.getItem('formData'));
//     const inputs = document.querySelectorAll('#form input,select,textarea');
//     for (let input of inputs) {
//         input.value = data[input.name];
//     }
   
//     console.log(data);
// });
// // нужно после перезагрузки файла чтобы осталась галочка и загруженный файл