const R = 1;
const P = 2;
const S = 3;

console.log("let play Rock Paper Scissors I bet you can't beat me")
console.log("Now the rules are : \n1: Rock \n2: Paper \n3: Scissors")

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
   const c = parseInt(prompt("Enter your choice(1, 2, 3): "));
    return c;
}

function getComputerChoice() {
    // Fix: Math.random() doesn't work with multiple arguments
    // Generate random number between 1 and 3
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(rps, ans) {
    // Fix: Added missing conditions for all combinations
    if(rps === R && ans === P){
        console.log("You lose")
        computerScore++;
    }else if(rps === R && ans === S){
        console.log("You Win")
        humanScore++;
    }else if(rps === R && ans === R){
        console.log("play again")
    }else if(rps === P && ans === S){
        console.log("You lose")
        computerScore++;
    }else if(rps === P && ans === R){
        console.log("You Win")
        humanScore++;
    }else if(rps === P && ans === P){
        console.log("play again")
    }else if(rps === S && ans === R){
        console.log("You lose")
        computerScore++;
    }else if(rps === S && ans === P){
        console.log("You Win")
        humanScore++;
    }else if(rps === S && ans === S){
        console.log("play again")
    }
}

// Fix: Added variable declarations and function call
let rps = getHumanChoice();
let ans = getComputerChoice();
playRound(rps, ans);

console.log("Score - You:", humanScore, "Computer:", computerScore);