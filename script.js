const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("pd");
const computerDisplay = document.getElementById("cd");
const result = document.getElementById("result");

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let gameResult = "";

    if (playerChoice === computerChoice){
        gameResult = "It's a TIE!"
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

}
