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


function playRound(humanChoice , computerChoice, humanScore, computerScore){

    let player1 = String(humanChoice).toLowerCase();
    let player2 = String(computerChoice).toLowerCase();
    let winner;
    let message;

    if (player1 == player2){
        console.log("It's a tie");
    }
    else if (player1 == "rock" && player2 == "paper"){
        console.log("you lose, paper beats rock");
        winner = player2;
    }
    else if (player1 == "rock" && player2 == "scissors"){
        console.log("you win, rock beats scissors");
        winner = player1;
    }
    else if (player1 == "paper" && player2 == "rock"){
        console.log("you win, paper beats rock");
        winner = player1;
    }
    else if (player1 == "paper" && player2 == "scissors"){
        console.log("you lose, scissors beats paper");
        winner = player2;
    }
    else if (player1 == "scissors" && player2 == "paper"){
        console.log("you win, scissors beats paper");
        winner = player1;
    }
    else if (player1 == "scissors" && player2 == "rock"){
        console.log("you lose, rock beats scissors");
        winner = player2;
    } 
    if (winner === player1 ){
        humanScore +=1;
        message = "you win !"
    }else if (winner === player2){
        computerScore +=1;
        message = "you lose !"
    }else {
        message = "It's a tie !"
    }

    const outp = document.querySelector('.output');
    outp.textContent = message;



    return {
        computerScore : computerScore, 
        humanScore : humanScore  
    }
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    let score

    while (true){

        let player2 = getComputerChoice();

        const rock = document.querySelector('.rock')
        rock.addEventListener('click', () => {
            score = playRound("rock", player2, humanScore, computerScore)
        })

        const paper = document.querySelector('.paper')
        paper.addEventListener('click', () => {
            score = playRound("paper", player2, humanScore, computerScore)
        })

        const scissors = document.querySelector('.scissors')
        scissors.addEventListener('click', () => {
            score = playRound("scissors", player2, humanScore, computerScore)
        })
        humanScore = score.humanScore;
        computerScore = score.computerScore;

        if (humanScore == 5 || computerScore == 5){
            break;
        }
    }
    console.log(`humain score : ${humanScore}`)
    console.log(`computer score : ${computerScore}`)
}

playGame();