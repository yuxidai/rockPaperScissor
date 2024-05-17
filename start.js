let collect = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = collect[Math.floor(Math.random()*collect.length)];
    console.log(`computer's choice: ${choice}`);
    return choice;
};

//console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choice one below: 'rock', 'paper' or 'scissor'").trim().toLowerCase();
    console.log(`human's choice: ${choice}`);
    return choice;
};

//console.log(getHumanChoice());

function playRound(computerChoice, humanChoice){
    if(computerChoice == humanChoice)
    {
        // it's a tie so do nothing
        return;
    }
    else if(computerChoice == "rock" && humanChoice == "paper")
    {
        humanScore+=1;
    }
    else if (computerChoice == "paper" && humanChoice == "rock")
    {
        computerScore+=1;
    }
    else if (computerChoice == "scissor" && humanChoice == "rock")
    {
        humanScore+=1;
    }
    else if (computerChoice == "rock" && humanChoice == "scissor")
    {
        computerScore+=1;
    }
    else if (computerChoice == "paper" && humanChoice == "scissor")
    {
        humanScore+=1;
    }
    else if (computerChoice == "scissor" && humanChoice == "paper")
    {
        computerScore+=1;
    }
};

function playGame() {
    let count = 0;
    while(count < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        console.log(`Round: ${count + 1}, human score:${humanScore} VS computer score:${computerScore}`);
        count++;
    }
    let winner = humanScore > computerScore ? "human" : "computer";
    console.log(`The winner is ${winner}! Final score - human: ${humanScore} and computer: ${computerScore}`);
}

playGame();