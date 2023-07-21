const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');

const form = document.querySelector('.login-form');

const divTemas = document.querySelector('.temas');

const btnRick = document.querySelector('.btn-Rick')
const btndragon = document.querySelector('.btn-dragon')
const btnSimpsons = document.querySelector('.btn-sinpsons')
const btnNaruto = document.querySelector('.btn-naruto')
const btnAvengers = document.querySelector('.btn-avengers')



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

btnRick.addEventListener('click', () => {
    window.location = 'pages/rick_and_morty.html'
})

btndragon.addEventListener('click', () => {
    window.location = 'pages/dragonball_z.html'
})

btnSimpsons.addEventListener('click', () => {
    window.location = 'pages/simpsons.html'
})

btnNaruto.addEventListener('click', () => {
    window.location = 'pages/naruto.html'
})

btnAvengers.addEventListener('click', () => {
    window.location = 'pages/avengers.html'
})