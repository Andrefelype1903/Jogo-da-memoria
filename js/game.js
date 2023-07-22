const grid = document.querySelector('.grid');

const area = document.querySelector('.area');

const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const header = document.querySelector('header');
const main = document.querySelector('main');
const temas = document.querySelector('.temas');



const divTemas = document.querySelector('.temas');

const btnRick = document.querySelector('.btn-Rick');
const btndragon = document.querySelector('.btn-dragon');
const btnSimpsons = document.querySelector('.btn-sinpsons');
const btnNaruto = document.querySelector('.btn-naruto');
const btnAvengers = document.querySelector('.btn-avengers');

const areaFundo = document.querySelector('body');

const tamanhoTela = window.innerWidth;
console.log(tamanhoTela);


const campoParabens = document.querySelector('.parabens');
const textoParabens = document.querySelector('.texto-parabens');

const btnRecomecar = document.querySelector('.btn-recomecar')


const personagens = [];
let backCards;
let backCardBorder;
let faceCards;

const temaRickAndMorty = () => {

    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push(  'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'meeseeks',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer',);

    areaFundo.style.backgroundImage = 'url(../imagens/bg.jpg)'
    backCards = 'url(../imagens/back.png)';
    backCardBorder = '2px solid #39813a';
    faceCards = '2px solid #39813a';
    campoParabens.style.backgroundImage = 'url(../imagens/rick_and_morty.jpg)'

}

const temaDragonBallZ = () => {
  
    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push('cell',
    'freeza',
    'gohan',
    'picolo',
    'goku',
    'kuririn',
    'fatboo',
    'maginboo',
    'trunks',
    'vegeta',);

    areaFundo.style.backgroundImage = 'url(../imagens/thumb-1920-933307.png)'
    backCards = 'url(../imagens/wp7382693.png)';
    backCardBorder = '2px solid #ffff00';
    faceCards = '2px solid #ffff00';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens.png)'
}

const temaOsSimpsons = () => {
    
    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push('apy',
    'barnes',
    'barth',
    'flanders',
    'homer',
    'krusty',
    'lisa',
    'mag',
    'margie',
    'noia',);

    areaFundo.style.backgroundImage = 'url(../imagens/Os_Simpsons_logo.jpg)'
    backCards = 'url(../imagens/hemer_back.png)';
    backCardBorder = '2px solid #ffd700';
    faceCards = '2px solid #ffd700';
    campoParabens.style.backgroundImage = 'url(../imagens/wallpapersden.com_bart-4k-simpson_3840x2160.png)'
}

const temaNarutoShippuden = () => {
    
    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push( 'naruto',
    'sasuke',
    'jiraya',
    'minato',
    'pain',
    'obito',
    'hinata',
    'itachi',
    'kakashi',
    'madara',);

    areaFundo.style.backgroundImage = 'url(../imagens/fundo_naruto.jpg)';
    areaFundo.style.backgroundPosition = '70%'
    backCards = 'url(../imagens/back_naruto.png)';
    backCardBorder = '2px solid #ff0000';
    faceCards = '2px solid #ff0000';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_naruto.jpg)';
}

const temaAvengers = () => {

    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push( 'strange',
    'capitao_america',
    'homem_aranha',
    'homem_de_ferro',
    'hulk',
    'misterio',
    'pantera_negra',
    'rocket_raccon',
    'thanos',
    'ultron',);

    areaFundo.style.backgroundImage = 'url(../imagens/fundo_avengers.jpg)';
    backCards = 'url(../imagens/back_avengers.png)';
    backCardBorder = '2px solid #800080';
    faceCards = '2px solid #800080';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_avengers.jpg)';
}

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
            textoParabens.textContent = `Parabens, ${spanPlayer.innerHTML}, seu tempo foi: ${timer.innerHTML} segundos`;

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

const createCard = (personagens) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(../imagens/${personagens}.png)`
    back.style.backgroundImage = backCards;
    back.style.border = backCardBorder;
    front.style.border = faceCards;
    
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

const onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');
    loadGame()
    setTimeout(() => {
        startTimer()
    },3000)
}


btnRecomecar.addEventListener('click', () => {
    location.reload()
})



// botoes de temas ↓

// botao Rick and Morty
btnRick.addEventListener('click', () => {
    console.log('cliquei com mouse')
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaRickAndMorty();
            onload();
        },2000)
    } else {
        temaRickAndMorty();
        onload();
    }
})

btnRick.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/bg.jpg)'
})

btnRick.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnRick.addEventListener('touchstart', () => {
    console.log('cliquei com touch')
    main.style.backgroundImage = 'url(../imagens/bg.jpg)'
})


// Botao dragon ball z
btndragon.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaDragonBallZ();
            onload()
        },2000);
    } else {
        temaDragonBallZ();
        onload()
    }
})

btndragon.addEventListener('mouseover', () => {
   main.style.backgroundImage = 'url(../imagens/thumb-1920-933307.png)'
})

btndragon.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btndragon.addEventListener('touchstart', () => {
   main.style.backgroundImage = 'url(../imagens/thumb-1920-933307.png)'
})


// Botao Os Simpsons
btnSimpsons.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaOsSimpsons();
            onload();
        },2000)
    } else {
        temaOsSimpsons();
        onload();
    }
})

btnSimpsons.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/Os_Simpsons_logo.jpg)'
})

btnSimpsons.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnSimpsons.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/Os_Simpsons_logo.jpg)'
})


// Botao Naruto Shippuden
btnNaruto.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaNarutoShippuden();
            onload();
        },2000);
    } else {
        temaNarutoShippuden();
        onload();
    }
})
 
btnNaruto.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_naruto.jpg)'
})

btnNaruto.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnNaruto.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_naruto.jpg)'
})


// Botao Os Vingadores
btnAvengers.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaAvengers();
            onload();
        },2000)
    } else {
        temaAvengers();
        onload();
    }
})

btnAvengers.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_avengers.jpg)';
})

btnAvengers.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnAvengers.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_avengers.jpg)';
})
