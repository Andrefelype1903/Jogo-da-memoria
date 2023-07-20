const grid = document.querySelector('.grid')

const area = document.querySelector('.area')

const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const campoParabens = document.querySelector('.parabens');
const textoParabens = document.querySelector('.texto-parabens');

const btnRecomecar = document.querySelector('.btn-recomecar')



const personagens = [
    'apy',
    'barnes',
    'barth',
    'flanders',
    'homer',
    'krusty',
    'lisa',
    'mag',
    'margie',
    'noia',

]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element
}


let firstCard = '';
let secondCard = '';

const checkEndGame = () => {

    const disabledCard = document.querySelectorAll('.disabled-card');

    if(disabledCard.length === personagens.length * 2) {
        clearInterval(this.loop);
        setTimeout(() => {

            // alert(`Parabens, ${spanPlayer.innerHTML}, seu tempo foi: ${timer.innerHTML} segundos`);
            
            campoParabens.style.display = 'flex';
            textoParabens.textContent = `Parabens, ${spanPlayer.innerHTML}, seu tempo foi: ${timer.innerHTML} segundos`

        }, 500);
        
        
    }

}


const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame()

    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        },500)
    }
}


const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')) {
        return
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if(secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards()
    }

}

const habilitaCartas = () => {
    
}


const createCard = (personagens) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(../imagens/${personagens}.png)`

    
    card.appendChild(front);

    setTimeout(() => {
        card.appendChild(back)
    }, 3000)

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', personagens)

    return card;
}

const loadGame = () => {


    const duplicateCharacters = [ ...personagens, ...personagens ]

    const shufledArray = duplicateCharacters.sort( () => Math.random() - 0.5 )
        

    shufledArray.forEach((shufledArray) => {
        
        const card = createCard(shufledArray);
        grid.appendChild(card)

    })
}



const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1
    }, 1000)

}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');
    loadGame()
    setTimeout(() => {
        startTimer()
    },3000)
}


btnRecomecar.addEventListener('click', () => {
    location.reload()
})




