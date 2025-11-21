// Computer choice function
let getComputerChoice = () => {
    let val = Math.random()
    let choice
    if(val < 0.4){
        choice = "Rock"
    }else if(val > 0.4 && val < 0.7){
        choice = "Paper"
    }else{
        choice = "Scissors"
    }
    return choice
}

let humanScore = 0;
let computerScore = 0;

// Play round function
let playRound = (humanChoice, computerChoice) => {
    let roundResult = null
    if(humanChoice === computerChoice){
        roundResult = `Its a tie! both chose ${humanChoice}.`
    }
    else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Paper" && computerChoice === "Rock") || 
        (humanChoice === "Scissors" && computerChoice === "Paper")) {

        roundResult = `You won! your choice: ${humanChoice} beats computer's choice: ${computerChoice}.`
        humanScore += 1
        
    }
    else{
        roundResult = `You lose! computer's choice: ${computerChoice} beats your choice: ${humanChoice}.`
        computerScore += 1
    }
    return roundResult
}

const span = document.querySelector("#result")
const scores = document.querySelector("#scores")
const gameResult = document.querySelector("#gameResult")

function gameInfo(roundResult) {
    span.textContent = roundResult
    scores.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`

    if(humanScore == 5|| computerScore == 5) {
        if(humanScore == 5) {
            gameResult.textContent = "You wont the game!."
        } else {
            gameResult.textContent = "You lost the game!."
        }
        // Reloading the page after 2 seconds
        setTimeout(function() {
            window.location.reload()
        }, 2000);
    }
}

function handleButtonClick(event) {
    const computerChoice = getComputerChoice()
    let roundResult
    switch (event.target.id) {
        case "Rock":
            roundResult = playRound(event.target.id, computerChoice)
            gameInfo(roundResult)
            break;

        case "Paper":
            roundResult = playRound(event.target.id, computerChoice)
            gameInfo(roundResult)
            break;

        case "Scissors":
            roundResult = playRound(event.target.id, computerChoice)
            gameInfo(roundResult)
            break;
    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)    
});