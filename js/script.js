const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');

const form = document.querySelector('.login-form');

const divTemas = document.querySelector('.temas');

const btnRick = document.querySelector('.btn-Rick')
const btndragon = document.querySelector('.btn-dragon')
const btnSimpsons = document.querySelector('.btn-sinpsons')
const btnNaruto = document.querySelector('.btn-naruto')
const btnAvengers = document.querySelector('.btn-avengers');

const areaFundo = document.querySelector('body')

const tamanhoTela = window.innerWidth;
console.log(tamanhoTela);



input.focus()

input.addEventListener('input', ({target}) =>  {
    if(target.value.length >= 3) {
        button.removeAttribute('disabled');
        return;
    } 

    button.setAttribute('disabled', '');
})

form.addEventListener('submit', (event) => {
    event.preventDefault();


    localStorage.setItem('player', input.value);

    divTemas.style.display = 'flex'
    
    // window.location = 'pages/rick_and_morty.html'
    
})

// botao Rick and Morty
btnRick.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            window.location = 'pages/rick_and_morty.html'
        },2000)
    } else {
        window.location = 'pages/rick_and_morty.html'
    }
})

btnRick.addEventListener('mouseover', () => {
    areaFundo.style.backgroundImage = 'url(../imagens/bg.jpg)'
})

btnRick.addEventListener('mouseout', () => {
    areaFundo.style.backgroundImage = ''
})


// Botao dragon ball z
btndragon.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            window.location = 'pages/dragonball_z.html'
        },2000)
    } else {
        window.location = 'pages/dragonball_z.html'
    }
})

btndragon.addEventListener('mouseover', () => {
   areaFundo.style.backgroundImage = 'url(../imagens/thumb-1920-933307.png)'
})

btndragon.addEventListener('mouseout', () => {
    areaFundo.style.backgroundImage = ''
})


// Botao Os Simpsons
btnSimpsons.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            window.location = 'pages/simpsons.html'
        },2000)
    } else {
        window.location = 'pages/simpsons.html'
    }
})

btnSimpsons.addEventListener('mouseover', () => {
    areaFundo.style.backgroundImage = 'url(../imagens/Os_Simpsons_logo.jpg)'
})

btnSimpsons.addEventListener('mouseout', () => {
    areaFundo.style.backgroundImage = ''
})


// Botao Naruto Shippuden
btnNaruto.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            window.location = 'pages/naruto.html'
        },2000)
    } else {
        window.location = 'pages/naruto.html'
    }
})
 
btnNaruto.addEventListener('mouseover', () => {
    areaFundo.style.backgroundImage = 'url(../imagens/fundo_naruto.jpg)'
})

btnNaruto.addEventListener('mouseout', () => {
    areaFundo.style.backgroundImage = ''
})


// Botao Os Vingadores
btnAvengers.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            window.location = 'pages/avengers.html'
        },2000)
    } else {
        window.location = 'pages/avengers.html'
    }
})

btnAvengers.addEventListener('mouseover', () => {
    areaFundo.style.backgroundImage = 'url(../imagens/fundo_avengers.jpg)';
})

btnAvengers.addEventListener('mouseout', () => {
    areaFundo.style.backgroundImage = ''
})

