let menu_btn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');


menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('active');
    menu.classList.toggle('active')

})

