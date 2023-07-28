const input = document.querySelector('.login_input');
// const button = document.querySelector('.login_button');
const button = document.querySelector('.button');

const form = document.querySelector('.login-form');

const tela = window.innerWidth;
console.log(tela)

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
    
    if(tela < 750) {
        setTimeout(() => {
            window.location = 'pages/game.html'
        },500)
    } else {
        window.location = 'pages/game.html'
    }
    
})

