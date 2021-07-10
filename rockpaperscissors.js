//randomly generate a choice between rock/paper/scissors
function aiPlay(){
    var seed = Math.floor(Math.random()*3);
    switch (seed){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//play one round of rock paper scissors using aiPlay()
//localeCompare compares strings case insensitive
function oneRound(playerChoice, aiChoice){
    if (playerChoice.localeCompare(aiChoice, undefined, {sensitivity: 'accent'}) == 0){
        return "Tie";
    }
    switch (aiChoice){
        case "rock":
            return (playerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' }) == 0) ? "Win" : "Lose";
        case "paper":
            return (playerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' }) == 0) ? "Win" : "Lose"; 
        case "scissors":
            return (playerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) == 0) ? "Win" : "Lose";
    }
}

//Run oneRound 5 times with playerChoice being a user input, then display results with console.log
function game(){
    console.log("Beginning 5 rounds of rock-paper-scissors");
    for (let numRounds = 0; numRounds < 5; numRounds++){
        console.log(oneRound(prompt("Make your move"), aiPlay()));
    }
}