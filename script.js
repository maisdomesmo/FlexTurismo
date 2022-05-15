const inicio = document.getElementById('inicio')
const about = document.getElementById('about')
const services = document.getElementById('services')
const planos = document.getElementById('planos')
let passed = document.getElementById('inicio')

const menuinicio = document.getElementById('menuinicio')
const menuabout = document.getElementById('menuabout')
const menuservices = document.getElementById('menuservices')
const menuplanos = document.getElementById('menuplanos')
let menupassed = document.getElementById('menuinicio')

function toggle(section) {
    passed.classList.remove('active')
    passed.classList.add('desactive')
    section.classList.remove('desactive')
    section.classList.add('active')
    passed = section;
}

function togglemenu(menu) {
    menupassed.classList.remove('menuactive')
    menupassed.classList.add('menudesactive')
    menu.classList.remove('menudesactive')
    menu.classList.add('menuactive')
    menupassed = menu;
}

