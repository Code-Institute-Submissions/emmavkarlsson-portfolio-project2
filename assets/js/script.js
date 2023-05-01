document.addEventListener("DOMContentLoaded", initializeGame);

let buttons = document.getElementsByClassName('btn-selection');

function initializeGame(event) {
    for (let button of buttons) {
        const userChoice = button.name;
        
        button.addEventListener('click', function(event) {
            makeUserSelection(userChoice);
        });
    }
}

let user = document.getElementById('users-choice');
let computer = document.getElementById('computers-choice');
let result = document.getElementById('result');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');

// Game variables
let gameInProgress = false;
let userScore = 0;
let computerScore = 0;
let tieGames = 0;


function toggleButtons() {
}

function makeUserSelection() {  
}

function runGame() {
}

function computerTurn() {

    let randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
      case 1:
        return "Rock";
      case 2:
        return "Paper";
      case 3:
        return "Scissors";
      case 4:
        return "Lizard";
      case 5:
        return "Spock";
    }
}

function checkWinner(userChoice, computerChoice) {
    if(userChoice == computerChoice){
      return 0;
    } 
    
    if (computerChoice == "Rock") {
        return (userChoice == "Paper" || userChoice == "Spock") ? 1 : -1;
    } 
    
    if (computerChoice == "Paper") {
        return (userChoice == "Scissors" || userChoice == "Lizard") ? 1 : -1;
    } 
    
    if (computerChoice == "Scissors") {
        return (userChoice == "Rock" || userChoice == "Spock") ? 1 : -1;
    } 
    
    if (computerChoice == "Lizard") {
        return (userChoice == "Rock" || userChoice == "Scissors") ? 1 : -1;
    } 
    
    if (computerChoice == "Spock") {
        return (userChoice == "Lizard" || userChoice == "Paper") ? 1 : -1;
    }
}

function recordResult(result) {
    if (result == 1) {
        userScore++;
        return "You Win!";
    } else if (result == 0) {
        tieGames++;
        return "It's a tie!";
    } else if (result == -1) {
        computerScore++;
        return "You Lose!";
    }
}