let rockBtn = document.querySelector('#rock');
let paperBtn =  document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let userScoreText = document.querySelector('.your-score');
let computerScoreText = document.querySelector('.computer-score');
let roundResultText = document.querySelector('.round-result');
let playAgainBtn = document.querySelector('.play-again-button');
let gameOverText = document.querySelector('.winner');
let userWins = 0;
let computerWins = 0;

userScoreText.textContent = `Your score: ${userWins}`;
computerScoreText.textContent = `Computer score: ${computerWins}`;

rockBtn.addEventListener('click', () => {
    playGame('Rock', getComputerChoice());
    checkGameOver();
});

paperBtn.addEventListener('click', () => {
    playGame('Paper', getComputerChoice());
    checkGameOver();
});

scissorsBtn.addEventListener('click', () => {
    playGame('Scissors', getComputerChoice());
    checkGameOver();
});

playAgainBtn.addEventListener('click', () => {
    resetGame();
});

function checkGameOver(){
    if (userWins === 5 || computerWins === 5){
        playAgainBtn.classList.remove('hidden');
        rockBtn.style.pointerEvents = 'none';
        paperBtn.style.pointerEvents = 'none';
        scissorsBtn.style.pointerEvents = 'none';

        if(userWins === 5){
            gameOverText.textContent = 'Game over! The user is the winner!';
        } else{
            gameOverText.textContent = 'Game over! The computer is the winner!';
        }
    }
}

function resetGame(){
    userWins = 0;
    computerWins = 0;
    userScoreText.textContent = `Your score: ${userWins}`;
    computerScoreText.textContent = `Computer score: ${userWins}`;
    roundResultText.textContent = '';
    gameOverText.textContent = '';
    playAgainBtn.classList.add('hidden');
    rockBtn.style.pointerEvents = 'auto';
    paperBtn.style.pointerEvents = 'auto';
    scissorsBtn.style.pointerEvents = 'auto';
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    computerPick = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerPick)
    return computerPick;
}

function playGame(playerSelection, computerSelection){
    let endOfGameMessage = '';

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        endOfGameMessage = 'You win! Rock beats Scissors.';
        roundResultText.textContent = 'You win! Rock beats Scissors.';
        userWins++;
        userScoreText.textContent = `Your score: ${userWins}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        endOfGameMessage = 'You win! Paper beats Rock.';
        roundResultText.textContent = 'You win! Paper beats Rock.';
        userWins++;
        userScoreText.textContent = `Your score: ${userWins}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        endOfGameMessage = 'You win! Scissors beats Paper.';
        roundResultText.textContent = 'You win! Scissors beats Paper.';
        userWins++;
        userScoreText.textContent = `Your score: ${userWins}`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        endOfGameMessage = 'You lose! Paper beats Rock.';
        roundResultText.textContent = 'You lose! Paper beats Rock.';
        computerWins++;
        computerScoreText.textContent = `Computer score: ${computerWins}`;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        endOfGameMessage = 'You lose! Scissors beats Paper.';
        roundResultText.textContent = 'You lose! Scissors beats Paper.';
        computerWins++;
        computerScoreText.textContent = `Computer score: ${computerWins}`;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        endOfGameMessage = 'You lose! Rock beats Scissors.';
        roundResultText.textContent = 'You lose! Rock beats Scissors.';
        computerWins++;
        computerScoreText.textContent = `Computer score: ${computerWins}`;
    } else if (playerSelection === computerSelection) {
        endOfGameMessage = `It's a tie! ${playerSelection} ties ${computerSelection}.`;
        roundResultText.textContent = `It's a tie! ${playerSelection} ties ${computerSelection}.`;
    } else {
        endOfGameMessage = 'Something went wrong...';
    }

    // Just to see the results clearly laid out in the console
    console.log(endOfGameMessage);
}