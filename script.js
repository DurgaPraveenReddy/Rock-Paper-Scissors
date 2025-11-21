// Used by playRound() to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Using DOM methods to store element references inorder to modify 
// elements in the gameInfo function.

const roundInfo = document.querySelector("#roundInfo")
const scores = document.querySelector("#scores")
const gameResult = document.querySelector("#gameResult")

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

// Play round function

let playRound = (humanChoice, computerChoice) => {
    let roundResult = null
    if(humanChoice === computerChoice){
        roundResult = `It's a tie, both chose ${humanChoice}.`
    }
    else if(
        (humanChoice === "Rock" && computerChoice === "Scissors") || 
        (humanChoice === "Paper" && computerChoice === "Rock") || 
        (humanChoice === "Scissors" && computerChoice === "Paper")) {

        roundResult = `You won, your choice ${humanChoice} beats computer's choice ${computerChoice}.`
        humanScore += 1
        
    }
    else{
        roundResult = `You lose, computer's choice ${computerChoice} beats your choice ${humanChoice}.`
        computerScore += 1
    }
    return roundResult
}

// This function is responsible for updating the page with game info for every click

function gameInfo(roundResult) {
    roundInfo.textContent = roundResult
    scores.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`

    if(humanScore == 5|| computerScore == 5) {
        if(humanScore == 5) {
            gameResult.textContent = `Game Over! You win the match, beating the computer ${humanScore} to ${computerScore}.`
        } else {
            gameResult.textContent = `Game Over! The computer wins the match, beating you ${computerScore} to ${humanScore}.`
        }

        // Reloading the page after 2 seconds
        setTimeout(function() {
            window.location.reload()
        }, 2000);
    }
}

// This function gets called by the event handler

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

// This stores the nodeList of all the buttons

const buttons = document.querySelectorAll("button")

// Assigning event handler for each button for the event 'click'

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)    
});