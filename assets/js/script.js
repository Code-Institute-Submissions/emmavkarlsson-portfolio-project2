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

function checkWinner() {
}

function recordResult() {
}