let rounds = 0;
let userWinCount = 0;

function playGame(userChoice) {

    let computerChoice = getComputerChoice();

    console.log(userChoice, computerChoice);

    if (userChoice === computerChoice) {
        alert("Draw");
    } else if (userChoice === "rock" && computerChoice === "scissors"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissors" && computerChoice === "paper"
    ) {
        alert("You won")
    } else {
        alert("You lost")
    }

}


function getComputerChoice() {

    return arr[random];
}