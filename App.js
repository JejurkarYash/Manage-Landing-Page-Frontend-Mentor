
// Declaring Varaible 

let Btn = document.getElementById('menu-btn');
let BtnIcon = document.getElementById('menuIcon');
let Button = document.getElementById('button');
let MenuItem = document.getElementById('Menus');
let CloseBtn = document.getElementById('close-btn');
// console.log(CloseBtn);






// document.addEventListener('DOMContentLoaded', function () {
//     Btn.addEventListener('click', function () {
//         console.log('Menu Button');
//     });
// });


Btn.addEventListener('click', function () {
    console.log("hello");
    MenuItem.classList.remove('hidden');
    Btn.classList.add('hidden');
    CloseBtn.classList.remove('hidden');

});

CloseBtn.addEventListener('click', function () {
    MenuItem.classList.add('hidden');
    Btn.classList.remove('hidden');
    CloseBtn.classList.add('hidden');
});






