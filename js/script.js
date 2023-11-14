// generate randomized computer choice of 'rock', 'paper', or 'scissors'
// get user's choice and save it
// check computer's choice against user's choice
// return the winner
// generate a new computer choice
// get user's new choice and save it
// compare computer and user choices again
// at the end of five rounds, determine who has won most
// return the overall winner of the five round match

const playerSelection = prompt('Enter your pick');
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let computerChoice = 'default string';

    if (randomNumber <= 3) {
        computerChoice = 'scissors';
    } else if (randomNumber <= 6) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'rock';
    }
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
}

function playOneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let endOfGameMessage = 'The game is over. Who won?';

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        endOfGameMessage = 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        endOfGameMessage = 'You win! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        endOfGameMessage = 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        endOfGameMessage = 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        endOfGameMessage = 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        endOfGameMessage = 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        endOfGameMessage = `It's a tie!`;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        endOfGameMessage = `It's a tie!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        endOfGameMessage = `It's a tie!`;
    } else {
        endOfGameMessage = 'You entered an invalid option. Please enter Rock, Paper, or Scissors.';
    }

    return endOfGameMessage;
}

function game() {
    let userWins = 0;
    let computerWins = 0;
    let grandWinner = 'We do not know who wil win yet';

    playOneRound(playerSelection, computerSelection);
    if (playOneRound(playerSelection, computerSelection) === 'You win! Rock beats Scissors.' || playOneRound(playerSelection, computerSelection) === 'You win! Paper beats Rock.' || playOneRound(playerSelection, computerSelection) === 'You win! Scissors beats Paper.') {
        userWins++;
        console.log('The user won the first round.');
    } else if (playOneRound(playerSelection, computerSelection) === `It's a tie!`) {
        console.log('The first round was a tie.');
    } else if (playOneRound(playerSelection, computerSelection) === 'You lose! Rock beats Scissors.' || playOneRound(playerSelection, computerSelection) === 'You lose! Paper beats Rock.' || playOneRound(playerSelection, computerSelection) === 'You lose! Scissors beats Paper.') {
        computerWins++;
        console.log('The computer won the first round.');
    } else {
        console.log('You entered an invalid option. Please try again.');
    }

    playOneRound(playerSelection, computerSelection);
    if (playOneRound(playerSelection, computerSelection) === 'You win! Rock beats Scissors.' || playOneRound(playerSelection, computerSelection) === 'You win! Paper beats Rock.' || playOneRound(playerSelection, computerSelection) === 'You win! Scissors beats Paper.') {
        userWins++;
        console.log('The user won the second round.');
    } else if (playOneRound(playerSelection, computerSelection) === `It's a tie!`) {
        console.log('The second round was a tie.');
    } else if (playOneRound(playerSelection, computerSelection) === 'You lose! Rock beats Scissors.' || playOneRound(playerSelection, computerSelection) === 'You lose! Paper beats Rock.' || playOneRound(playerSelection, computerSelection) === 'You lose! Scissors beats Paper.') {
        computerWins++;
        console.log('The computer won the second round.');
    } else {
        console.log('You entered an invalid option. Please try again.');
    }

    if (userWins > computerWins) {
        grandWinner = `The user is the grand winner! The user won ${userWins} times out of the 5 rounds.`;
    } else if (computerWins > userWins) {
        grandWinner = `The computer is the grand winner! The computer won ${computerWins} times out of the 5 rounds.`;
    } else if (userWins = computerWins) {
        grandWinner = `There was a tie! The user won ${userWins} times out of the 5 rounds and the computer won ${computerWins} times out of the five rounds.`
    } else {
        grandWinner = 'An invalid input was entered.'
    }

    return grandWinner;
}

console.log(game());

/*
console.log(playOneRound(playerSelection, computerSelection));
console.log('The user chose ' + playerSelection);
console.log('The computer chose ' + computerSelection);
*/