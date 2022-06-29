const btn_rock = document.querySelector('#btn_rock');
const btn_paper = document.querySelector('#btn_paper');
const btn_scissors = document.querySelector('#btn_scissors');
const round_result = document.querySelector('#round_result');
const game_result = document.querySelector('#game_result');

playerWinCount = 0;
aiWinCount = 0;

function aiPlay() {
    var seed = Math.floor(Math.random() * 3);
    switch (seed) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function oneRound(playerChoice, aiChoice) {
    if (playerChoice.localeCompare(aiChoice, undefined, { sensitivity: 'accent' }) == 0) {
        return "Tie";
    }
    switch (aiChoice) {
        case "rock":
            return (playerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' }) == 0) ? "Win" : "Lose";
        case "paper":
            return (playerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' }) == 0) ? "Win" : "Lose";
        case "scissors":
            return (playerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) == 0) ? "Win" : "Lose";
    }
}

btn_rock.addEventListener('click', () => {
    if(playerWinCount >= 5 || aiWinCount >= 5){
        playerWinCount = 0;
        aiWinCount = 0;
    }

    aiChoice = aiPlay();
    result = oneRound('rock', aiChoice);
    round_result.textContent = 'Player: rock | Computer: ' + aiChoice + ' | Result: ' + result;

    if (result == "Win") {
        playerWinCount++;
        console.log(playerWinCount);
    } else {
        aiWinCount++;
        console.log(aiWinCount);
    }
    game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount;

    if (playerWinCount >= 5) {
        game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount + ' | Victor: Player';
    }
    if (aiWinCount >= 5) {
        game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount + ' | Victor: Computer';
    }
})

btn_paper.addEventListener('click', () => {
    if(playerWinCount >= 5 || aiWinCount >= 5){
        playerWinCount = 0;
        aiWinCount = 0;
    }

    aiChoice = aiPlay();
    result = oneRound('paper', aiChoice);
    round_result.textContent = 'Player: paper | Computer: ' + aiChoice + ' | Result: ' + result;

    if (result == "Win") {
        playerWinCount++;
        console.log(playerWinCount);
    } else {
        aiWinCount++;
        console.log(aiWinCount);
    }
    game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount;

    if (playerWinCount >= 5) {
        game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount + ' | Victor: Player';
    }
    if (aiWinCount >= 5) {
        game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount + ' | Victor: Computer';
    }
})
btn_scissors.addEventListener('click', () => {
    if(playerWinCount >= 5 || aiWinCount >= 5){
        playerWinCount = 0;
        aiWinCount = 0;
    }

    aiChoice = aiPlay();
    result = oneRound('scissors', aiChoice);
    round_result.textContent = 'Player: scissors | Computer: ' + aiChoice + ' | Result: ' + result;

    if (result == "Win") {
        playerWinCount++;
        console.log(playerWinCount);
    } else {
        aiWinCount++;
        console.log(aiWinCount);
    }
    game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount;

    if (playerWinCount >= 5) {
        game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount + ' | Victor: Player';
    }
    if (aiWinCount >= 5) {
        game_result.textContent = 'Wins: Player ' + playerWinCount + ' | Computer ' + aiWinCount + ' | Victor: Computer';
    }
})

