const menu = document.getElementById('menu-toggle');
const nav = document.querySelector('header nav');

menu.addEventListener('click', ()=>{
    // nav.classList.remove('hidden');
    menu.querySelector('.hamburger').classList.toggle('hidden');
    menu.querySelector('.close').classList.toggle('hidden');
    nav.classList.toggle('hidden');
})