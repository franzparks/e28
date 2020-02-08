//reference to html elements
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let selectionsMessage = document.querySelector('#selections');
let winMessage = document.querySelector('#win');
let loseMessage = document.querySelector('#lose');

//Attach click event listener
rockBtn.addEventListener('click', select);
paperBtn.addEventListener('click', select);
scissorsBtn.addEventListener('click', select);

function select(e) {
    // player selection
    let playerSelectionValue = e.target.value;

    // Computer selection
    let computerSelectionValue = computerSelection();

    let result = getResult(playerSelectionValue, computerSelectionValue);

    // Show selections
    selectionsMessage.innerHTML = `You  chose  ${playerSelectionValue} while the computer chose  ${computerSelectionValue}`;

    // Show the appropriate win or lose message
    if (result.win) {
        winMessage.style.display = 'block';
        winMessage.innerHTML = result.message;
        loseMessage.style.display = 'none';
    } else {
        winMessage.style.display = 'none';
        loseMessage.style.display = 'block';
        loseMessage.innerHTML = result.message;
    }
}

function computerSelection() {
    // The computer makes a random selection among the choices
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}

function getResult(player, computer) {
    //Get the result of the play
    if(player === 'rock' && computer === 'paper') {
        return { win : false, message : 'You lose :-( Paper beats Rock!' };
    } else if(player === 'rock' && computer === 'scissors' ) {
        return { win : true, message : 'You win! Rock beats Scissors!' };
    } else if(player === 'paper' && computer === 'rock' ) {
        return { win : true, message : 'You win! Paper beats Rock!' };
    } else if(player === 'paper' && computer === 'scissors' ) {
        return { win : false, message : 'You lose :-( Scissors beat Paper!' };
    } else if(player === 'scissors' && computer === 'rock' ) {
        return { win : false, message : 'You lose :-( Rock beats Scissors!' };
    } else if(player === 'scissors' && computer === 'paper' ) {
        return { win : win, message : 'You win! Scissors beat Paper!' };
    } else {
        return {message: 'It\'s a tie, no one wins, play again!'};
    }
}