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
function playRound(playerChoice = prompt('Please choose rock, paper, or scissors.'), computerChoice = getComputerChoice()){

    playerChoice = playerChoice.charAt(0).toLocaleUpperCase() + playerChoice.slice(1).toLowerCase();

    computerChoice = computerChoice.charAt(0).toLocaleUpperCase() + computerChoice.slice(1).toLowerCase();

    if (playerChoice === computerChoice) { //if tie
        console.log(`You both chose ${computerChoice}, It\'s a draw!`);
        return 2;
    } else if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") { //if error
        console.log('You entered an invalid choice! Please enter Rock, Paper, or Scissors!');
        return 3;
    } else if ((playerChoice === "Rock" && computerChoice === 'Scissors') ||
    (playerChoice === "Paper" && computerChoice === 'Rock') || 
    (playerChoice === "Scissors" && computerChoice === 'Paper')) { //if win
        console.log(`${playerChoice} beats ${computerChoice}. You Win!`);
        return 1;
    } else { //if lose
        console.log(`${computerChoice} beats ${playerChoice}. You Lose!`);
        return 0;
    }
}

//game will be played 5 times with winner declared at the end.
function game(){
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let roundResult = playRound();
        if (roundResult === 1){
            userScore ++;        
        } else if (roundResult === 0) {
            computerScore ++;
        } else if (roundResult === 3){
            i --;
        }
    }
   
    if (userScore > computerScore) {
        console.log(`The score is User:${userScore} Computer:${computerScore}.You win!`)
    } else if ( userScore === computerScore ) {
        console.log(`The score is User:${userScore} Computer:${computerScore}. It\'s a tie!`)
    } else {
        console.log(`The score is User:${userScore} Computer:${computerScore}.You lose!`)
    }
}

