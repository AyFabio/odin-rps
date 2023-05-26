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

    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log(`You both chose ${computerChoice}, It\'s a draw!`)
        return 2;
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === 'paper') {
        console.log(`Paper beats Rock. You Lose!`)
        return 0;
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === 'scissors') {
        console.log(`Rock beats Scissors. You Win!`)
        return 1;
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === 'rock') {
        console.log(`Paper beats Rock. You Win!`)
        return 1;
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === 'scissors') {
        console.log(`Scissors beats Paper. You Lose!`)
        return 0;
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === 'rock') {
        console.log(`Rock beats Scissors. You Lose!`)
        return 0;
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === 'paper') {
        console.log(`Scissors beats Paper. You Win!`)
        return 1;
    } else {
        console.log('You entered an invalid choice! Please enter Rock, Paper, or Scissors!')
        return 3;
    }
}

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
//game will be played 5 times with winner declared at the end.