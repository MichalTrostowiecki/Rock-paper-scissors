const container = document.querySelector('#container');
const div = document.createElement('div');
const button1 = document.createElement('button');
button1.textContent = 'Scissors';
button1.setAttribute('id','btn');
const button2 = document.createElement('button');
button2.textContent = 'Rock'
button2.setAttribute('id','btn');
const button3 = document.createElement('button');
button3.textContent = 'Paper';
button3.setAttribute('id','btn');

div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);
container.appendChild(div);

// Creating a function with loop to add event listeners for all my buttons.
const btn = document.querySelectorAll('#btn').forEach(item =>{
item.addEventListener('click', (event) => {
  console.log(event.target);
})
});




let playerScore = 0;
let computerScore =0;




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
      computerGuess = 'scissors';
      break;
    case 2:
      computerGuess = 'rock';
      break;
    case 3:
      computerGuess = 'paper';
      break;
    default:
      break;
  }
  return computerGuess;
  
}

// playRound function execute one round of a game. Based on result it adds points for w winner.
function playRound (playerSelection, computerSelection) {
  playerSelection = prompt('What is your pick?')
  computerSelection = generateComputerChoice();
  
  if (playerSelection === computerSelection) {
    console.log(`It's a tie`);
    console.log(`Computer score: ${computerScore} Player score: ${playerScore}`)
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")) {
      computerScore += 1;
      console.log(`Computers: ${computerSelection} beats Players: ${playerSelection}\nComputer score: ${computerScore} Player score: ${playerScore}`);
    
  } else {
      playerScore += 1;
      console.log(`Computers: ${computerSelection} lose with Players: ${playerSelection}\nComputer score: ${computerScore} Player score: ${playerScore}`);
  }
}





// This function executes 5 rounds of a game
// function game() {
//   for (let i=0; i < 5; i++) {
//     if (playerScore === 5) {
//       console.log(`Player wins by reaching first: ${playerScore} points.`);
//     } else if (computerScore === 5) {
//       console.log(`Computer wins by reaching first: ${computerScore} points.`);
//     } else {
//       playRound();
//     }
//   }
// }





