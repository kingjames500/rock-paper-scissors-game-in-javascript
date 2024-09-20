// declaring rock, paper, scissors buttons
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

// declaring user and computer choice emoji
const computerChoiceEmoji = document.getElementById("computer-choice-emoji");
const userChoiceEmoji = document.getElementById("player-choice-emoji");

//declaring winner announcement board
const winnerAnnouncementBoard = document.getElementById("winner-announcement-board");

// declaring the scoreboard
const scoreBoard = document.getElementById("score-board");

// declaring the user and computer score
let userScore = 0;
let computerScore = 0;

function updateScoreBoard(winner){
    if(winner === "player win"){
        userScore++;
    }
    else if(winner === "computer win"){
        computerScore++;
    }
    scoreBoard.textContent = `computer ${computerScore}  ${userScore} player`;
}


// function to get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  
  if (randomChoice === "rock") {
    computerChoiceEmoji.textContent = "✊";
  } else if (randomChoice === "paper") {
    computerChoiceEmoji.textContent = "✋";
  } else {
    computerChoiceEmoji.textContent = "✌️";
  }
  return randomChoice;
}

function playingGame(playerChoice){

    const computerChoice = getComputerChoice();

    userChoiceEmoji.textContent = playerChoice === "rock" ? "✊" : playerChoice === "paper" ? "✋" : "✌️";

    if (playerChoice === computerChoice) {
        winnerAnnouncementBoard.textContent = "It's a draw";
    }

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")){
        winnerAnnouncementBoard.textContent = "Player win";
        updateScoreBoard("player win");
    }
    else{
        winnerAnnouncementBoard.textContent = "Computer win";
        updateScoreBoard("computer win");
    }
}

//event listeners
rockButton.addEventListener("click", () => playingGame("rock"));
paperButton.addEventListener("click", () => playingGame("paper"));
scissorsButton.addEventListener("click", () => playingGame("scissors"));



