

let myArray = ['rock', 'scissors', 'paper'];



function computerPlay() {
  result = myArray[Math.floor(Math.random() * myArray.length)];
  return result;
}

const playRound = (playerSelection, computerSelection) => {
  computerSelection = computerPlay();
  playerSelection = 'rock';
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    console.log(`It's a tie : ${computerSelection} + ${playerSelection}`);
  } else if 
  ((computerSelection == "rock" && playerSelection == "scissors") ||
  (computerSelection == "scissors" && playerSelection == "paper") ||
  (computerSelection == "paper" && playerSelection == "rock")) {
    console.log(`You've lost : ${computerSelection} + ${playerSelection}`);
  } else {
    console.log('Some error in the logic');
  }
}

playRound();
