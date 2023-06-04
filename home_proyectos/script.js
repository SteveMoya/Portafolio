/*Sidebar y modo oscuro*/ 

const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch')
    modeText = body.querySelector('.mode-text')




toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")) (
        modeText.innerText = "Light mode"
    )
    else {
        modeText.innerText = "Dark mode"
    }
})

/*End SideBar y Modo oscuro*/ 

/*LightBox y Galeria*/

const enlaces  = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let img = cadaEnlace.querySelector('.img').src
        console.log( img ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', img)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})


/*End LightBox y Galeria*/