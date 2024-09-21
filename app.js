// declaring rock, paper, scissors buttons
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

// declaring user and computer choice emoji
const computerChoiceEmoji = document.getElementById("computer-choice-emoji");
const userChoiceEmoji = document.getElementById("player-choice-emoji");

//declaring winner announcement board
const winnerAnnouncementBoard = document.getElementById(
  "winner-announcement-board",
);

// declaring the scoreboard
const scoreBoard = document.getElementById("score-board");

//declaring the user and computer score
let userScore = 0;
let computerScore = 0;

function updateScoreBoard(winner) {
  if (winner === "player win") {
    userScore++;
  } else if (winner === "computer win") {
    computerScore++;
  }
  scoreBoard.textContent = `computer ${computerScore}  ${userScore} player`;
}

function computerSelection() {
  const choices = ["rock", "paper", "scissors"];
  let expandedChoices = [];

  for (let i = 0; i < 11; i++) {
    expandedChoices.push(choices[i % choices.length]);
  }

  //Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // Shuffle the expanded choices
  const shuffledChoices = shuffleArray(expandedChoices);

  //return the shuffled choices
  const computerChoice =
    shuffledChoices[Math.floor(Math.random() * shuffledChoices.length)];
  return computerChoice;
}

// const computerChoice = computerSelection();
console.log(computerSelection());

// function to get computer choice
function getComputerChoice() {
  //getting the random choice from the computerSelection function
  // const randomChoice = computerChoice;
  const randomChoice = computerSelection();

  if (randomChoice === "rock") {
    computerChoiceEmoji.textContent = "✊";
  } else if (randomChoice === "paper") {
    computerChoiceEmoji.textContent = "✋";
  } else {
    computerChoiceEmoji.textContent = "✌️";
  }
  return randomChoice;
}

console.log(getComputerChoice());

// function to play the game
function playingGame(playerChoice) {
  let computerChoice = getComputerChoice();

  userChoiceEmoji.textContent =
    playerChoice === "rock" ? "✊" : playerChoice === "paper" ? "✋" : "✌️";

  if (playerChoice === computerChoice) {
    winnerAnnouncementBoard.textContent = "It's a draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winnerAnnouncementBoard.textContent = "Player win";
    updateScoreBoard("player win");
  } else {
    winnerAnnouncementBoard.textContent = "Computer win";
    updateScoreBoard("computer win");
  }
}

//event listeners
rockButton.addEventListener("click", () => playingGame("rock"));
paperButton.addEventListener("click", () => playingGame("paper"));
scissorsButton.addEventListener("click", () => playingGame("scissors"));
