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

//declaring the user and computer score and Draw score
let userScore = 0;
let computerScore = 0;
let drawScore = 0;

//storing the generated choices in a variable
const computerChoice = computerSelection();

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
  // const computerChoice =
  // shuffledChoices[Math.floor(Math.random() * shuffledChoices.length)];
  return shuffledChoices;
}

// function to get computer choice
function getComputerChoice() {
  //getting the random choice from the computerSelection function
  const choiceSelection = computerChoice;
  const randomChoice =
    choiceSelection[Math.floor(Math.random() * choiceSelection.length)];

  if (randomChoice === "rock") {
    computerChoiceEmoji.textContent = "✊";
  } else if (randomChoice === "paper") {
    computerChoiceEmoji.textContent = "✋";
  } else {
    computerChoiceEmoji.textContent = "✌️";
  }
  return randomChoice;
}

// function to play the game
function playingGame(playerChoice) {
  let computerChoice = getComputerChoice();

  userChoiceEmoji.textContent =
    playerChoice === "rock" ? "✊" : playerChoice === "paper" ? "✋" : "✌️";

  if (playerChoice === computerChoice) {
    winnerAnnouncementBoard.textContent = "It's a draw";
    // updateScoreBoard("draw");
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

// function to update the scoreboard
function updateScoreBoard(winner) {
  if (winner === "player win") {
    userScore++;
  } else if (winner === "computer win") {
    computerScore++;
  } // else {
  //   drawScore++;
  // }
  scoreBoard.textContent = `computer ${computerScore}  ${userScore} player`;
}

//event listeners
rockButton.addEventListener("click", () => playingGame("rock"));
paperButton.addEventListener("click", () => playingGame("paper"));
scissorsButton.addEventListener("click", () => playingGame("scissors"));
