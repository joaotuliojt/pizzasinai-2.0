

window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

let toggleMenu = document.querySelector('.toggleMenu')
let navigation = document.querySelector('.navigation')
toggleMenu.addEventListener('click', showMenu)

function showMenu(){
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('show-menu')
}

let btnMenu = document.getElementsByClassName('btn-menu')

for(let menus of btnMenu){
    menus.addEventListener('click',function(){
        toggleMenu.classList.toggle('active')
        navigation.classList.toggle('show-menu')
    })
}