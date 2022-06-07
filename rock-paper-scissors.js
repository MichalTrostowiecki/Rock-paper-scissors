

let myArray = ['rock', 'scissors', 'paper'];
let playerScore = 0;
let computerScore =0;


// This function is producing choice made by computer which is random
function computerPlay() {
  result = myArray[Math.floor(Math.random() * myArray.length)];
  return result;
}


// This function is a logic for paper,scissor rock game

  const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
    playerSelection = 'rock';
    playerWon = false;
    computerWon = false;
    
    if (playerSelection === 'rock' && computerSelection === 'rock') {
      return console.log("it's a tie");
    } else if 
    ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock"))
    {
      computerScore += 1;
      computerWon = true;
      return console.log(`Computer: ${computerSelection} beats Player: ${playerSelection}`);


    } else {
      playerScore += 1;
      playerWon = true;
      return console.log(`Player: ${playerSelection} beats Computer: ${computerSelection}`);
    }
    
  }

function game() {
   for (let i=0; i < 5; i++) {
    playRound();
     if (playerWon === true) {
       console.log(`You've won this round. \nYour points: ${playerScore}  Computer points: ${computerScore}`);
     } else if ((playerWon === computerWon) && (playerScore === computerScore)) {
       console.log(`No one wins! \nYour points: ${playerScore}   Computer points: ${computerScore}`);
     } else if (computerWon === true) {
      console.log(`You've lost this round. \nYour points: ${playerScore}  Computer points: ${computerScore}`);
     }
   }
}

function endGame() {
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore < computerScore) {
      console.log(`Computer wins with: ${computerScore}`);
    } else if(playerScore > computerScore) {
      console.log(`Player wins with: ${playerScore}`);
    }
  } else {
    game();
  }
}

endGame();