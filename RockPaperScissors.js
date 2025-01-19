const R = 1;
const P = 2;
const S = 3;

console.log("Let's play Rock Paper Scissors! I bet you can't beat me");
console.log("Now the rules are : \n1: Rock \n2: Paper \n3: Scissors");

function getHumanChoice() {
    const c = parseInt(prompt("Enter your choice(1, 2, 3): "));
    // Add input validation
    if (c !== 1 && c !== 2 && c !== 3) {
        console.log("Invalid input! Please enter 1, 2, or 3");
        return getHumanChoice();
    }
    return c;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const rps = getHumanChoice();
        const ans = getComputerChoice();
        
        // Convert numbers to words for better messages
        const choices = {1: 'Rock', 2: 'Paper', 3: 'Scissors'};
        console.log(`You chose ${choices[rps]}, Computer chose ${choices[ans]}`);

        if (rps === R && ans === P) {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (rps === R && ans === S) {
            console.log("You Win! Rock beats Scissors");
            humanScore++;
        } else if (rps === R && ans === R) {
            console.log("It's a tie! Play again");
        } else if (rps === P && ans === S) {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if (rps === P && ans === R) {
            console.log("You Win! Paper beats Rock");
            humanScore++;
        } else if (rps === P && ans === P) {
            console.log("It's a tie! Play again");
        } else if (rps === S && ans === R) {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (rps === S && ans === P) {
            console.log("You Win! Scissors beats Paper");
            humanScore++;
        } else if (rps === S && ans === S) {
            console.log("It's a tie! Play again");
        }

        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds (note: changed to < 5 since we start from 0)
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        playRound();
    }

    // Announce final result
    if (humanScore > computerScore) {
        alert(`Congratulations! You win the game!\nFinal Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`Game Over! Computer wins!\nFinal Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        alert(`It's a tie game!\nFinal Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();