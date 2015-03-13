////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    //var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === 'rock' && computerMove === 'rock') {
            return winner = 'tie';
        } else if (playerMove === 'rock' && computerMove === 'paper') {
            return winner = 'computer';
        } else if (playerMove === 'rock' && computerMove === 'scissors') {
            return winner = 'player';
        }
    if (playerMove === 'paper' && computerMove === 'paper') {
            return winner = 'tie';
        } else if (playerMove === 'paper' && computerMove === 'scissors') {
            return winner = 'computer';
        } else if (playerMove === 'paper' && computerMove === 'rock') {
            return winner = 'player';
        }
    if (playerMove === 'scissors' && computerMove === 'scissors') {
            return winner = 'tie';
        } else if (playerMove === 'scissors' && computerMove === 'rock') {
            return winner = 'computer';
        } else if (playerMove === 'scissors' && computerMove === 'paper') {
            return winner = 'player';
        }

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

    var round = 1;
    while (playerWins < 5 && computerWins < 5) {
        getPlayerMove();
        getComputerMove();
        getWinner(playerMove,computerMove);
        if (winner === 'player') {
            playerWins ++;
        } else if (winner === 'computer') {
            computerWins ++;
        }
        console.log("Round " + round + ". Player chose " + playerMove + " while Computer chose " + computerMove + ".");
        if (winner === 'player' || winner === 'computer') {
            console.log(winner + " is the winner!");
        } else {
            console.log("It's a tie!");
        }
        console.log("The score is currently " + playerWins + " to " + computerWins + ".");
        round ++;

    }
    if (playerWins === 5) {
        champion = 'player';
    } else {
        champion = 'computer';
    }
    console.log("After " + (round - 1) + " rounds " + champion + " is the champion!");
}

