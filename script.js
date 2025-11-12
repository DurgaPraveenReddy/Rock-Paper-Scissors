// computer choice function
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

//human choice function
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

let humanScore = 0        // for keeping track of human score
let computerScore = 0     // for keeping track of computer score

//play round function
let playRound = (humanChoice, computerChoice) => {
    let result
    if(humanChoice === "Rock" && computerChoice === "Scissors"){
        result = `You won! ${humanChoice} beats ${computerChoice}`
        humanScore += 1
    }else if(humanChoice === "Paper" && computerChoice === "Rock"){
        result = `You won! ${humanChoice} beats ${computerChoice}`
        humanScore += 1
    }else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        result = `You won! ${humanChoice} beats ${computerChoice}`
        humanScore += 1
    }else if(humanChoice === computerChoice){
        result = `Its a tie! Computer choice : ${computerChoice}`
    }else{
        result = `You lose! ${computerChoice} beats ${humanChoice}`
        computerScore += 1
    }
    return result
}

// Variables for storing human and computer choices
const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

console.log(playRound(humanChoice, computerChoice))