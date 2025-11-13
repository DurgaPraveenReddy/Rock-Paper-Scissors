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

// Human choice function
let getHumanChoice = function() {
    let picked
    let choice = parseInt(prompt("Enter your choice: 1.Rock 2.Paper 3.Scissors"))
    if(choice === 1){
        picked = "Rock"
    }else if(choice === 2){
        picked = "Paper"
    }else if(choice === 3){
        picked = "Scissors"
    }
    else{
        console.log("Invalid choice. Returning null.")
        picked = null
    }
    return picked
}

// Play game function
function playGame() {

    let gameResult = null
    let humanScore = 0        // For keeping track of human score
    let computerScore = 0     // For keeping track of computer score

    // Play round function
    let playRound = (humanChoice, computerChoice) => {
        if(humanChoice === null) return null  // This takes care of the wrong choice by human
        let roundResult = null
        if(humanChoice === computerChoice){
            roundResult = `Its a tie! both chose ${humanChoice}.`
        }
        else if(
            humanChoice === "Rock" && computerChoice === "Scissors" || 
            humanChoice === "Paper" && computerChoice === "Rock" || 
            humanChoice === "Scissors" && computerChoice === "Paper") {

            roundResult = `You won! your choice: ${humanChoice} beats computer's choice: ${computerChoice}.`
            humanScore += 1
            
        }
        else{
            roundResult = `You lose! computer's choice: ${computerChoice} beats your choice: ${humanChoice}.`
            computerScore += 1
        }
        return roundResult
    }

    // Playing 5 rounds

    for(i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice))
    }

    // Game result with scores
    if(humanScore === computerScore){
        gameResult = `Its a draw, your score:${humanScore} and computer's score:${computerScore}.`
    }
    else if(humanScore > computerScore){
        gameResult = `You won the game!, your score:${humanScore} and computer's score:${computerScore}.`
    }
    else{
        gameResult = `You lost the game!, your score:${humanScore} and computer's score:${computerScore}.`
    }
    return gameResult
}


console.log(playGame())