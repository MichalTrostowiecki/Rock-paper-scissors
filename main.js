const container = document.querySelector('#container');
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('#btn');
const playerResults = document.querySelector('#playerResults');
const totalScore = document.querySelector('#totalResults');

let playerScore = 0;
let computerScore = 0;



// On click of the button execute round of a game : playRound
buttons.forEach(button => {  
  button.addEventListener('click', () => {
    playRound(button.textContent);
  })
 })

// this function will generate random number for computer choice later
function randomNumber(number) {
  return Math.floor(Math.random() * number + 1);
}

// This function generate computerGuess based on result of randomNumber function
function generateComputerChoice() {
  let computerChoice = randomNumber(3);
  let computerGuess = '';
  
  switch (computerChoice) {
    case 1: 
      computerGuess = 'Scissors';
      break;
    case 2:
      computerGuess = 'Rock';
      break;
    case 3:
      computerGuess = 'Paper';
      break;
    default:
      break;
  }
  return computerGuess;
  
}
// this checks if we don't have a winner already before playing a round 
const checkWinner = () => {
  winner = false;
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore < computerScore) {
      winner = false;
      playerResults.textContent = `Computer wins!`;
      winner = true;
    } else {
      playerResults.textContent = `Player wins!`;
      winner = true;
    }   
 } 
 return winner;
}


// playRound function execute one round of a game. Based on result it adds points for w winner.
function playRound (playerSelection, computerSelection) {
  computerSelection = generateComputerChoice();
 
    winner = checkWinner();
    if (playerSelection === computerSelection && winner === false) {
      playerResults.textContent = (`It's a Tie!`)
      totalScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    } else if (
      ((computerSelection === "Rock" && playerSelection === "Scissors") ||
      (computerSelection === "Scissors" && playerSelection === "Paper") ||
      (computerSelection === "Paper" && playerSelection === "Rock")) &&
      (winner === false)) {
        playerResults.textContent = `Computers: ${computerSelection} beats Players: ${playerSelection}`
        computerScore++;
        totalScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    } else if(winner === false) {
          playerResults.textContent = `Computers: ${computerSelection} lose with Players: ${playerSelection}`
          playerScore++;
          totalScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    } else if (winner === true) {
      alert('Refresh page to play again');
    }
  checkWinner();
}
  
