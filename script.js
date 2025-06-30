const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("pd");
const computerDisplay = document.getElementById("cd");
const result = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetBtn = document.getElementById('reset');
let playerScore = 0;
let computerScore =0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let gameResult = "";

    if (playerChoice === computerChoice){
        gameResult = "It's a TIE!";
        result.style.color = "rgb(66, 85, 228)";
    }
    else {
        switch(playerChoice){
            case "rock":
                gameResult = (computerChoice === "scissors") ? "You WIN!" : "You lose";
                break;
            case "paper":
                gameResult = (computerChoice === "rock") ? "You WIN!" : "You lose";
                break;   
            case "scissors":               
                gameResult = (computerChoice === "paper") ? "You WIN!" : "You lose";
                break;
    }
}

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    result.textContent = `Result: ${gameResult}`;

    switch(gameResult){
        case "You WIN!":
            result.style.color = "green";
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose":
            result.style.color = "red";
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    playerDisplay.textContent = "Player: ";
    computerDisplay.textContent = "Computer: ";
    result.textContent = "Result:";
    result.style.color = "rgb(66, 85, 228)";
}