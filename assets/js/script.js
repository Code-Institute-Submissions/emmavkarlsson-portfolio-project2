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
}

function checkWinner() {
}

function recordResult() {
}