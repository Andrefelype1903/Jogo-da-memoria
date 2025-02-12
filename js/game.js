const grid = document.querySelector('.grid');

const area = document.querySelector('.area');

const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const header = document.querySelector('header');
const main = document.querySelector('main');
const temas = document.querySelector('.temas');
const rodape = document.querySelector('.rodape')



const divTemas = document.querySelector('.temas');

const btnRick = document.querySelector('.btn-Rick');
const btndragon = document.querySelector('.btn-dragon');
const btnSimpsons = document.querySelector('.btn-sinpsons');
const btnNaruto = document.querySelector('.btn-naruto');
const btnAvengers = document.querySelector('.btn-avengers');
const btngodOfWar = document.querySelector('.btn-godofwar');
const btnTheLastOfUs = document.querySelector('.btn-thelastofus');
const btnResidentEvil = document.querySelector('.btn-residentevil');
const btnGameOfThrones = document.querySelector('.btn-gameofthrones');


const todosBtn = document.querySelectorAll('.btn-tema')

const areaFundo = document.querySelector('body');

const tamanhoTela = window.innerWidth;


const campoParabens = document.querySelector('.parabens');
const textoParabens = document.querySelector('.texto-parabens');

const btnRecomecar = document.querySelector('.btn-recomecar');

const dicas = document.querySelector('.dicas');
const btnDicaSim = document.querySelector('.btn-dica-sim');
const btnDicaNao = document.querySelector('.btn-dica-nao');

//seletores do ranking

const primeiroLugar = document.querySelector('.primeiro')
const segundoLugar = document.querySelector('.segundo')
const terceiroLugar = document.querySelector('.terceiro')
const quartoLugar = document.querySelector('.quarto')
const quintoLugar = document.querySelector('.quinto')

//seletores do ranking




const playerPassados = localStorage.getItem('rankingPlayer');

const todosPlayers = JSON.parse(playerPassados);
// todosPlayers.push(novoPlayer)

const playersGeral = []

console.log(playersGeral)

// console.log(todosPlayers)


const escreveRanking = () => {
  
    if(todosPlayers != null) {
    
        todosPlayers.sort((a, b) => {
            let tempoA = parseInt(a[0].tempo);
            let tempoB = parseInt(b[0].tempo);
            return tempoA - tempoB;
          });
          
          // Selecionar os 5 melhores jogadores (5 primeiros elementos do array)
          let melhoresJogadores = todosPlayers.slice(0, 5);
          
          // Mapear os dados dos jogadores e tempos em um novo array de objetos
          let dadosDosJogadores = melhoresJogadores.map(jogador => {
            return {
              nome: jogador[0].nome,
              tempo: parseInt(jogador[0].tempo)
            };
          });
        
          console.log("Dados dos 5 melhores jogadores:", dadosDosJogadores);
          
        if(todosPlayers.length > 0) {
            primeiroLugar.style.background = 'rgb(250, 250, 250, 0.5)'
            primeiroLugar.textContent = `1°: ${dadosDosJogadores[0].nome} //  ${dadosDosJogadores[0].tempo} segundos`
        }
        if(todosPlayers.length > 1) {
            segundoLugar.style.background = 'rgb(250, 250, 250, 0.5)'
            segundoLugar.textContent = `2°: ${dadosDosJogadores[1].nome} // ${dadosDosJogadores[1].tempo} segundos`
        }
        if(todosPlayers.length > 2) {
            terceiroLugar.style.background = 'rgb(250, 250, 250, 0.5)'
            terceiroLugar.textContent = `3°: ${dadosDosJogadores[2].nome} // ${dadosDosJogadores[2].tempo} segundos`
        }
        if(todosPlayers.length > 3) {
            quartoLugar.style.background = 'rgb(250, 250, 250, 0.5)'
            quartoLugar.textContent = `4°: ${dadosDosJogadores[3].nome} // ${dadosDosJogadores[3].tempo} segundos`
        }
        if(todosPlayers.length > 4) {
            quintoLugar.style.background = 'rgb(250, 250, 250, 0.5)'
            quintoLugar.textContent = `5°: ${dadosDosJogadores[4].nome} // ${dadosDosJogadores[4].tempo} segundos`
        }
    }
}


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
    rodape.style.display = 'flex';
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
    rodape.style.display = 'flex';
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
    rodape.style.display = 'flex';
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
    areaFundo.style.backgroundPosition = '70%';
    backCards = 'url(../imagens/back_naruto.png)';
    backCardBorder = '2px solid #ff0000';
    faceCards = '2px solid #ff0000';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_naruto.jpg)';
    rodape.style.display = 'flex';
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
    backCards = 'url(../imagens/back2_avengers.png)';
    backCardBorder = '2px solid #800080';
    faceCards = '2px solid #800080';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_avengers.jpg)';
    rodape.style.display = 'flex';
}

const temaGodofWarRagnarok = () => {

    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push( 'angrboda',
    'brok',
    'sindri',
    'kratos',
    'atreus',
    'freya',
    'fenrir',
    'valquiria',
    'elfo_escuro',
    'thor',);

    areaFundo.style.backgroundImage = 'url(../imagens/fundo_botao_ragnarok.jpg)';
    areaFundo.style.backgroundPosition = '70%'
    backCards = 'url(../imagens/back_ragnarok.png)';
    backCardBorder = '2px solid #add8e6';
    faceCards = '2px solid #add8e6';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_ragnarok.png)';
    rodape.style.display = 'flex';
}

const temaTheLastOfUs = () => {

    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push( 'ellie',
    'joel',
    'abby',
    'rat_king',
    'tommy',
    'gina',
    'tropego',
    'baiacu',
    'jessie',
    'clicker',);

    areaFundo.style.backgroundImage = 'url(../imagens/fundo_the_last_of_us.jpeg)';
    backCards = 'url(../imagens/back_the_last_of_us.png)';
    backCardBorder = '2px solid #4b3621';
    faceCards = '2px solid #4b3621';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_the_last_of_us.png)';
    rodape.style.display = 'flex';
}

const temaResidentEvil = () => {
    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push( 'ada',
    'chris',
    'ashley',
    'claire_redfield',
    'dimitrescu',
    'hunk',
    'jill',
    'leon',
    'mia',
    'nemesis',);

    areaFundo.style.backgroundImage = 'url(../imagens/tela_fundo_resident-evil.jpg)';
    backCards = 'url(../imagens/back_resident_evil.png)';
    backCardBorder = '2px solid #ff0000';
    faceCards = '2px solid #ff0000';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_resident.png)';
    rodape.style.display = 'flex';
}

const temaGameOfThrones = () => {
    temas.style.display = 'none';
  
    header.style.display = 'flex';
    personagens.push( 'sansa',
    'jaime',
    'missandei',
    'rei_da_noite',
    'john',
    'drogon',
    'daneris',
    'bolton',
    'arya',
    'tiryon',);

    areaFundo.style.backgroundImage = 'url(../imagens/fundo_thrones.png)';
    areaFundo.style.backgroundPosition = '70%';
    backCards = 'url(../imagens/back_thrones.png)';
    backCardBorder = '2px solid #888';
    faceCards = '2px solid #888';
    campoParabens.style.backgroundImage = 'url(../imagens/parabens_thrones.png)';
    rodape.style.display = 'flex';
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

            const nome = spanPlayer.innerHTML
            const tempo = timer.innerHTML

           novoPlayer = [{
                nome: spanPlayer.innerHTML, tempo: timer.innerHTML,
           }]

           if(todosPlayers === null) {

                primeiroLugar.style.background = 'rgb(250, 250, 250, 0.5)'
                primeiroLugar.textContent = `1°: ${spanPlayer.innerHTML} //  ${timer.innerHTML} segundos`


                playersGeral.push(novoPlayer)
                let playerString = JSON.stringify(playersGeral);
                localStorage.setItem('rankingPlayer', playerString);
                todosPlayers.push(novoPlayer)

           } else {

               todosPlayers.push(novoPlayer);
               let playerGeralString = JSON.stringify(todosPlayers)
               localStorage.setItem('rankingPlayer', playerGeralString)
               escreveRanking()
           }

        }, 500);
    }
}

// localStorage.removeItem('rankingPlayer')


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
        card.addEventListener('click', revealCard);
    }, 3000);
    
    card.setAttribute('data-character', personagens)


    btnDicaSim.addEventListener('click', () => {
    
        back.style.display = 'none';
        dicas.style.display = 'none';
        setTimeout(() => {
            back.style.display = 'flex';
        },3000)
    })
    

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

        let segundos = 0;
        let minutos = 0;

        const currentTime = +timer.innerHTML;

        segundos = currentTime + 1;

        
        timer.innerHTML = segundos;
        
    

        if(timer.innerHTML > 60 && timer.innerHTML < 62) {
            dicas.style.display = 'flex'
        }

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


btnDicaNao.addEventListener('click', () => {
    dicas.style.display = 'none'
})




// botoes de temas ↓

// botao Rick and Morty

const desabilitaBotoes = () => {
  btnRick.disabled = true;
  btndragon.disabled = true;
  btnSimpsons.disabled = true;
  btnNaruto.disabled = true;
  btnAvengers.disabled = true;
  btngodOfWar.disabled = true;
  btnTheLastOfUs.disabled = true;
  btnResidentEvil.disabled = true;
  btnGameOfThrones.disabled = true;
}

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
    desabilitaBotoes();
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
    desabilitaBotoes();
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
    desabilitaBotoes();
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
    desabilitaBotoes();
})
 
btnNaruto.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_naruto.jpg)'
    main.style.backgroundPosition = '70%';
})

btnNaruto.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnNaruto.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_naruto.jpg)'
    main.style.backgroundPosition = '70%';
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
    desabilitaBotoes();
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



// Botao God of war ragnarok
btngodOfWar.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaGodofWarRagnarok();
            onload();
        },2000)
    } else {
        temaGodofWarRagnarok();
        onload();
    }
    desabilitaBotoes();
})

btngodOfWar.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_botao_ragnarok.jpg)';
    main.style.backgroundPosition = '70%';
})

btngodOfWar.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btngodOfWar.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_botao_ragnarok.jpg)';
    main.style.backgroundPosition = '70%';
})


// Botao The last of us II
btnTheLastOfUs.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaTheLastOfUs();
            onload();
        },2000)
    } else {
        temaTheLastOfUs();
        onload();
    }
    desabilitaBotoes();
})

btnTheLastOfUs.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_the_last_of_us.jpeg)';
})

btnTheLastOfUs.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnTheLastOfUs.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_the_last_of_us.jpeg)';
})

// Botao Resident Evil
btnResidentEvil.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaResidentEvil();
            onload();
        },2000)
    } else {
        temaResidentEvil();
        onload();
    }
    desabilitaBotoes();
})

btnResidentEvil.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/tela_fundo_resident-evil.jpg)';
})

btnResidentEvil.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnResidentEvil.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/tela_fundo_resident-evil.jpg)';
})


// Botao Game of Thrones
btnGameOfThrones.addEventListener('click', () => {
    if(tamanhoTela <= 600) {
        setTimeout(() => {
            temaGameOfThrones();
            onload();
        },2000)
    } else {
        temaGameOfThrones();
        onload();
    }
    desabilitaBotoes();
})

btnGameOfThrones.addEventListener('mouseover', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_thrones.png)';
})

btnGameOfThrones.addEventListener('mouseout', () => {
    main.style.backgroundImage = ''
})

btnGameOfThrones.addEventListener('touchstart', () => {
    main.style.backgroundImage = 'url(../imagens/fundo_thrones.png)';
})

