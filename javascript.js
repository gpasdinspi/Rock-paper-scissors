let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let nb = Math.floor((Math.random()*100)+1);
    let choice;

    if (nb <33){
        choice = "rock";
    }else if (nb < 66){
        choice = "paper";
    }else{
        choice = "scissors";
    }

    return choice;
}


function playRound(humanChoice , computerChoice){

    let player1 = String(humanChoice).toLowerCase();
    let player2 = String(computerChoice).toLowerCase();
    let winner;
    let message = "";

    if (player1 == player2){
        message = "It's a tie";
    }
    else if (player1 == "rock" && player2 == "paper"){
        message = "you lose, paper beats rock";
        winner = player2;
    }
    else if (player1 == "rock" && player2 == "scissors"){
        message = "you win, rock beats scissors";
        winner = player1;
    }
    else if (player1 == "paper" && player2 == "rock"){
        message = "you win, paper beats rock";
        winner = player1;
    }
    else if (player1 == "paper" && player2 == "scissors"){
        message = "you lose, scissors beats paper";
        winner = player2;
    }
    else if (player1 == "scissors" && player2 == "paper"){
        message = "you win, scissors beats paper";
        winner = player1;
    }
    else if (player1 == "scissors" && player2 == "rock"){
        message = "you lose, rock beats scissors";
        winner = player2;
    } 
    if (winner === player1 ){
        humanScore +=1;
    }else if (winner === player2){
        computerScore +=1;
    }

    const outp = document.querySelector('.output');
    outp.textContent = message;

    const scoreP = document.querySelector('.score');
    scoreP.textContent = `humain score : ${humanScore}   computer score : ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        document.querySelector('.output').textContent += " — Game Over!";
        if (humanScore > computerScore){
            document.querySelector('.output').textContent = "\nYou are the winner !"
        }else{
            document.querySelector('.output').textContent = "\nThe computer is the winner !"
        }
        
        humanScore = 0;
        computerScore = 0;
        
    }
}

function playGame(){

    const rock = document.querySelector('.rock')
    rock.addEventListener('click', () => {
        playRound("rock", getComputerChoice())
    })

    const paper = document.querySelector('.paper')
    paper.addEventListener('click', () => {
        playRound("paper", getComputerChoice())
    })

    const scissors = document.querySelector('.scissors')
    scissors.addEventListener('click', () => {
        playRound("scissors", getComputerChoice())
    })

}

playGame();