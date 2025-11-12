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
console.log(getComputerChoice())