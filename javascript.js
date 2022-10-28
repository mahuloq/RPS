function playerSelection ()
{
let choice = prompt("Enter Choice");
choice = choice.toLowerCase();
choice = choice.charAt(0).toUpperCase() + choice.slice(1);  
return choice;
} 


function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() *100) + 1;
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
if (randomNumber <= 33) {
        return rock;
    }

else if (randomNumber >= 66) {
return paper;
}

else {
return scissors;
}
}

function playRound(playerSelectionCap, computerSelection) {
   
if (playerSelectionCap === computerSelection ) {
    return "It is a tie!";
} else if ((playerSelectionCap === "Rock") && (computerSelection === "Paper")) {
    return "You Lose! Paper covers Rock";
} else if ((playerSelectionCap === "Rock" && computerSelection === "Scissors")) {
    return "You Win! Rock smashes Scissors";
} else if ((playerSelectionCap === "Paper" && computerSelection === "Scissors")) {
    return "You Lose! Scissors cut Paper";
} else if ((playerSelectionCap === "Paper" && computerSelection === "Rock")) {
    return "You Win! Paper covers Rock";
} else if ((playerSelectionCap === "Scissors" && computerSelection === "Rock")) {
    return "You Lose! Rock smashes Scissors";
} else if ((playerSelectionCap === "Scissors" && computerSelection === "Paper"))
    return "You Win! Scissors cuts Paper";
  else 
    return "You entered an invalid selection."
}


// console.log(playRound(playerSelection(), getComputerChoice()));
 
function gameRound() {
playerWin = 0;
computerWin = 0;
winnerOutput = "";
    for (let i = 0; i < 5; i++) {
        if (i<5) {
         console.log(roundWinner =  playRound(playerSelection(), getComputerChoice()));
         winnerOutput = roundWinner.charAt(4);
        //  console.log(winnerOutput);
            if (winnerOutput === "W"){
                playerWin++
                // console.log(playerWin);
            }
            else if (winnerOutput === "L"){
                computerWin++
                // console.log(computerWin);
            }
            else if (winnerOutput === "e") {i--}
        }
    }
if (playerWin === computerWin){
console.log( `You won ${playerWin} out of 5 rounds. The computer won ${computerWin} of 5 rounds. It is a draw!`)
}

else if (playerWin > computerWin) {
  console.log(  `You won ${playerWin} out of 5 rounds. The computer won ${computerWin} of 5 rounds. You Won!`)
}

else {
    console.log( `You won ${playerWin} out of 5 rounds. The computer won ${computerWin} of 5 rounds. You Lost!`)
}
     

}
gameRound();