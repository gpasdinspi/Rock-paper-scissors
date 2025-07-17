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

function getHumanChoice(){

    let answer = prompt("rock-paper-scissors")
    return answer;
}

function playRound(humanChoice , computerChoice){

    let player1 = String(humanChoice).toLowerCase();
    let player2 = String(computerChoice).toLowerCase();

    if (player1 == player2){
        console.log("It's a tie");
    }
    else if (player1 == "rock" && player2 == "paper"){
        console.log("you lose, paper beats rock");
        computerScore +=1;
    }
    else if (player1 == "rock" && player2 == "scissors"){
        console.log("you win, rock beats scissors");
        humanScore +=1;
    }
    else if (player1 == "paper" && player2 == "rock"){
        console.log("you win, paper beats rock");
        humanScore +=1;
    }
    else if (player1 == "paper" && player2 == "scissors"){
        console.log("you lose, scissors beats paper");
        computerScore +=1;
    }
    else if (player1 == "scissors" && player2 == "paper"){
        console.log("you win, scissors beats paper");
        humanScore +=1;
    }
    else if (player1 == "scissors" && player2 == "rock"){
        console.log("you lose, rock beats scissors");
        computerScore +=1;
    }   
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    let round = 5;

    for (let i = 0; i < round; i++){

        let player1 = getHumanChoice();
        let player2 = getComputerChoice();

        playRound(player1, player2);
    }
}

playGame();