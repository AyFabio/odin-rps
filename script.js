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
function playRound(playerChoice, computerChoice){

    if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return "It\'s a Draw!"
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === 'paper') {
        return `Paper beats Rock. You Lose!`
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === 'scissors') {
        return `Rock beats Scissors. You Win!`
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === 'rock') {
        return `Paper beats Rock. You Win!`
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === 'scissors') {
        return `Scissors beats Paper. You Lose!`
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === 'rock') {
        return `Rock beats Scissors. You Lose!`
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === 'paper') {
        return `Scissors beats Paper. You Win!`
    } else {
        return 'You entered an invalid choice! Please enter Rock, Paper, or Scissors!'
    }
}

function game(){
    
}
//game will be played 5 times with winner declared at the end.