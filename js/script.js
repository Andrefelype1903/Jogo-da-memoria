const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');

const form = document.querySelector('.login-form');

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
    
    window.location = 'pages/game.html'
    
})

