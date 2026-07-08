'use strict';

//Capturamos elementos que interactuan
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');

const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.querySelector('#current--1');

const hola = document.getElementById;
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

//init function

let currentScore, activePlayer, playing, scores;

const init = function () {
  //Variables de estado

  currentScore = 0; //se acumula el puntaje de todas las rondas
  activePlayer = 0; //0=jugador 1 y 1=judador 2
  scores = [0, 0];

  playing = true;

  //Inicializamos pantalla
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  diceImg.classList.add('hidden');

  //reseteamos todo

  currentScorePlayer0.textContent = 0;
  currentScorePlayer1.textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
};

init();
//funcion cambiar de jugador

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};

//Empieza el juego

btnRoll.addEventListener('click', function () {
  if (playing) {
    //Generamos un dado random
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    //Mostramos dado en pantalla
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${randomDice}.png`;

    if (randomDice !== 1) {
      //Acumulamos puntajem mientras no sea 1
      currentScore += randomDice;
      //Imprimimos el puntaje

      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch active Player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check winner

    if (scores[activePlayer] >= 10) {
      playing = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Cambiamos de player

      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);

scorePlayer1.getElementb;
