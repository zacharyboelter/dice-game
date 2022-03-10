
//variables for game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

//variables for DOM nodes

const message = document.querySelector('#message')
const player1ScoreBoard = document.querySelector('#player1Scoreboard')
const player2ScoreBoard = document.querySelector('#player2Scoreboard')
const player1Dice = document.querySelector('#player1Dice')
const player2Dice = document.querySelector('#player2Dice')
const rollBtn = document.querySelector('#rollBtn')
const resetBtn = document.querySelector('#resetBtn')

rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random()* 6) + 1;

    if (player1Turn) {
        player1Score += randomNumber
        message.textContent = `Player 1 rolled a ${randomNumber}`
        player1Dice.textContent = `${randomNumber}`
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        player1ScoreBoard.innerHTML = player1Score;
    } else {
        player2Score += randomNumber
        message.textContent = `Player 2 rolled a ${randomNumber}`
        player2Dice.textContent = `${randomNumber}`
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        player2ScoreBoard.textContent = player2Score
    }
    player1Turn = !player1Turn;
})