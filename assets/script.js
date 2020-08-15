
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playing = true;


let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playerChoiceBox = document.getElementById('player-choicebox');
let computerChoiceBox = document.getElementById('computer-choicebox');
let playerScoreboard = document.getElementById('player-score');
let computerScoreboard = document.getElementById('computer-score');
let finalWinner = document.getElementById('end-title');

/* Function that evaluates who wins each round */
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();

    rounds++;
    playerChoiceBox.textContent = playerSelection;
    computerChoiceBox.textContent = computerSelection;
    
    /* Player wins */
    if ((playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK')){
        playerScore++;
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
    }
    /* Computer wins */
    else if ((computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || (computerSelection === 'PAPER' && playerSelection === 'ROCK')){
        computerScore++;
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
    } 
    /* Draw */
    else {
        playerScoreboard.textContent = playerScore;
        computerScoreboard.textContent = computerScore;
    }
    /* Function that shows the winner */
        if (rounds === 5){
            if (playerScore > computerScore){
                alert('You Win!');
            } else if (computerScore > playerScore){
                alert('You loose.');
            } else {
                alert('It was a Draw.');
            }
            window.location.href = "last-page.html";
        }

}
/* Function that gets the players choice */
rock.addEventListener('click', function(){
    if (rounds < 5){
        return playRound("ROCK");
    } else {
        playing === false;
    }
});
paper.addEventListener('click', function(){
    if (rounds < 5){
        return playRound("PAPER");
    } else {
        playing === false;
    }
});
scissors.addEventListener('click', function(){
    if (rounds < 5){
        return playRound("SCISSORS");
    } else {
        playing === false;
    }
});

/* Function that makes the computer choice */
function computerPlay(){
    let computerOptions = ['ROCK', 'PAPER', 'SCISSORS'];
    selector = computerOptions[Math.floor(Math.random()*computerOptions.length)]; 
    return selector;
}


