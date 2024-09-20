// declaring rock, paper, scissors buttons
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');

// declaring user and computer choice emoji
const computerChoiceEmoji = document.getElementById('computer-choice-emoji');
const userChoiceEmoji = document.getElementById('player-choice-emoji');

//declaring winner announcement board
const winnerAnnouncementBoard = document.getElementById('winner-announcement-board');

// declaring the scoreboard
const scoreBoard = document.getElementById('score-board');

// declaring the user and computer score
let userScore = 0;
let computerScore = 0;



// function to get the computer choice
function getComputerChoice() {
    const choices = ['✊', '✌', '✌',
        '✋', '✊', '✋',
        '✊', '✌', '✋',
        '✌', '✋', '✊',
    ];

    const randomChoices = Math.floor(Math.random() * choices.length);

    if (randomChoices === "rock") {
        computerChoiceEmoji.textContent = "✊";
    }
    else if (randomChoices === "paper") {
        computerChoiceEmoji.textContent = "✋";
    }
    else {
        computerChoiceEmoji.textContent = "✌";
    }
    return randomChoices;
}


//function to update the scoreboard



//function to playgame

//adding event listeners to the buttons

