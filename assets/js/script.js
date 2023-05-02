let user = document.getElementById('users-choice');
let computer = document.getElementById('computers-choice');
let result = document.getElementById('result');

let messageSpan = document.getElementById('message');
let winsLabel = document.getElementById('wins');
let tiesLabel = document.getElementById('ties');
let lossesLabel = document.getElementById('losses');
let buttons = document.getElementsByClassName('btn-selection');

// Game variables
let userScore = 0;
let computerScore = 0;
let tieGames = 0;

/**
 * Make user selection based on the button it clicks
*/
function initializeGame(event) {
    for (let button of buttons) {
        let userChoice = button.name;
        
        button.addEventListener('click', function(event) {
            makeUserSelection(userChoice);
        });
    }
}

/**
 * Disabling the buttons when the user has clicked on them,
 * as the user waits for the computer to make it's choice,
 * and enabling them again when the results are shown
 */
function toggleButtons(isEnabled) {
    for (let button of buttons) {
        if (isEnabled) {
            button.classList.remove("disabled");
        } else {
            button.classList.add("disabled");
        }
    }
}

/**
 * The game function for when the user has made it's choice
 * takes in the userChoice parameter
 */
function makeUserSelection(userChoice) {
    toggleButtons(false);

    messageSpan.textContent = "Please wait for computer to select";
    user.textContent = userChoice;
    computer.textContent = "";
    result.textContent = "";

    setTimeout(function() {
        runGame(userChoice);
        toggleButtons(true);
    }, 1500);    
}

/**
 * Runs the game after the user and computer has made it's choice
 * Updates the score on the scoreboard and 
 * the descriptive text
 */
function runGame(userChoice) {
    let computerChoice = computerTurn();    
    let winner = checkWinner(userChoice, computerChoice);
    let outcome = recordResult(winner);

    messageSpan.textContent = "";
    computer.textContent = computerChoice;
    result.textContent = outcome;

    winsLabel.textContent = userScore;
    tiesLabel.textContent = tieGames;
    lossesLabel.textContent = computerScore;
}

/**
 * Function for generating random numbers
 * and returning names based on these
 */
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
        default:
            return "Error";
    }
}

/**
 * Checks the winner of the game based on the parameters userChoice and computerChoice
 * 0 = tie
 * 1 = user wins
 * -1 = computer wins
 */
function checkWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice){
      return 0;
    } else if (computerChoice === "Rock") {
        return (userChoice === "Paper" || userChoice === "Spock") ? 1 : -1;
    } else if (computerChoice === "Paper") {
        return (userChoice === "Scissors" || userChoice === "Lizard") ? 1 : -1;
    } else if (computerChoice === "Scissors") {
        return (userChoice == "Rock" || userChoice === "Spock") ? 1 : -1;
    } else if (computerChoice === "Lizard") {
        return (userChoice === "Rock" || userChoice === "Scissors") ? 1 : -1;
    } else if (computerChoice === "Spock") {
        return (userChoice === "Lizard" || userChoice === "Paper") ? 1 : -1;
    }
}

/**
 * Increments the scores and records the results
 * takes in the parameter result
 */
function recordResult(result) {
    if (result === 1) {
        userScore++;
        return "You Win!";
    } else if (result === 0) {
        tieGames++;
        return "It's a tie!";
    } else if (result === -1) {
        computerScore++;
        return "You Lose!";
    }
}

document.addEventListener("DOMContentLoaded", initializeGame);