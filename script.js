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
console.log(getHumanChoice())