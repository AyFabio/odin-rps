//computer randomly chooses rock, paper or scissors
function getComputerChoice() {
    let randomInt = Math.floor(Math.random()*3);

    if (randomInt === 0) {
        return "Rock";
    } else if (randomInt === 1) {
    return "Paper";
    } else {
        return "Scissors";
    }
}


//user choice is compared to computer choice and winner is chosen.
function playRound(playerChoice, computerChoice = getComputerChoice()){

    if (playerChoice === computerChoice) { //if tie
        results.textContent = `You both chose ${computerChoice}, It\'s a draw!`;
        return 2;
    } else if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") { //if error
        results.textContent = 'You entered an invalid choice! Please enter Rock, Paper, or Scissors!';
        return 3;
    } else if ((playerChoice === "Rock" && computerChoice === 'Scissors') ||
    (playerChoice === "Paper" && computerChoice === 'Rock') || 
    (playerChoice === "Scissors" && computerChoice === 'Paper')) { //if win
        results.textContent = `${playerChoice} beats ${computerChoice}. You Win!`;
        userScore++;
        return 1;
    } else { //if lose
        results.textContent = `${computerChoice} beats ${playerChoice}. You Lose!`;
        computerScore++;
        return 0;
    }
}

function updateScore() {
    score.textContent = `Current score is User: ${userScore} Computer: ${computerScore}`;
}

function gameEnd(){ //reset everything
    if (computerScore === 5) {
        winner.textContent = 'The computer won! Press Reset to play again.';
    } else if (userScore === 5) {
        winner.textContent = 'You won! Press Reset to play again.';
    } 

    choices.forEach(choice => choice.disabled = true);
    winner.appendChild(reset);    
    reset.addEventListener('click', () => {
        choices.forEach(choice => choice.disabled = false);
        winner.removeChild(reset)
        userScore = 0;
        computerScore = 0;
        winner.textContent = "";
        results.textContent = "";
        updateScore();
    });
}

const choices = document.querySelectorAll('button');

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        playRound(choice.id);
        updateScore();
        if (computerScore === 5 || userScore ===5 ) gameEnd();
        });
});

const results = document.querySelector('#results');

const score = document.querySelector("#score");

const winner = document.querySelector("#winner");

const reset = document.createElement("button");
reset.textContent = "Reset";
reset.style.display = "block";

let userScore = 0;
let computerScore = 0;







