
//variables for game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

//variables for DOM nodes

const message = document.querySelector('#message')
const player1ScoreBoard = document.querySelector('#player1ScoreBoard')
const player2ScoreBoard = document.querySelector('#player2ScoreBoard')
const player1Dice = document.querySelector('#player1Dice')
const player2Dice = document.querySelector('#player2Dice')
const rollBtn = document.querySelector('#rollBtn')
const resetBtn = document.querySelector('#resetBtn')

rollBtn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random()* 6) + 1;

    if (player1Turn) {
        player1Score += randomNumber
        message.textContent = `Player 1 rolled a ${randomNumber}`
        player1Dice.textContent += `${randomNumber}`
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
    } else {
        player2Score += randomNumber
        message.textContent = `Player 2 rolled a ${randomNumber}`
        player2Dice.textContent += `${randomNumber}`
        player2Dice.classList.remove('acitve')
        player1Dice.classList.add('active')
    }
    player1Turn = !player1Turn;
})