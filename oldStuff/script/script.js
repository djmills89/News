const menu = document.getElementById('icon')
const checkbox = document.getElementById('menuCheckbox')
const menuIcon = menu.querySelector('img')
let isOpen = false


menu.addEventListener('click', (e) => {
    isOpen = !isOpen
    e.preventDefault()
    checkbox.checked = !checkbox.checked

    isOpen ? menuIcon.src = '../assets/images/icon-menu-close.svg' : menuIcon.src = '../assets/images/icon-menu.svg'

})