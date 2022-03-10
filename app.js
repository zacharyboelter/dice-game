
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

    if (player1Score >= 20) {
        gameWon()
        message.textContent = `Player 1 Wins!! 🥳`
    } else if (player2Score >= 20){
       gameWon()
        message.textContent = `Player 2 Wins!! 🥳`
    }
})

function gameWon(){
    resetBtn.style.display = 'block'
    rollBtn.style.display = 'none'
}

function resetGame(){
    player1Score = 0
    player2Score = 0
    player1Turn = true
    message.textContent = `Player 1 Turn`
    player1Dice.textContent = player1Score
    player1ScoreBoard.textContent = player1Score
    player2Dice.textContent = player2Score
    player2ScoreBoard.textContent = player2Score
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
}
resetBtn.addEventListener('click', resetGame)