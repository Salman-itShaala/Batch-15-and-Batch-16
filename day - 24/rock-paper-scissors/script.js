const result = document.querySelector(".result");
const totalRoundsH3 = document.getElementById("total-rounds");

let totalRounds = 0;


function playGame(userChoice) {
    totalRounds++;

    totalRoundsH3.innerHTML = "Total Rounds : " + totalRounds;

    let computerChoice = getComputerChoice();

    console.log(userChoice, computerChoice);

    if (userChoice === computerChoice) {
        result.innerHTML = "Result : DRAW 😐"
    } else if (userChoice === "rock" && computerChoice === "scissors"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissors" && computerChoice === "paper"
    ) {
        result.innerHTML = "Result : You Won 😁";
        result.style.color = "green";
    } else {
        result.innerHTML = "Result : You Lost 🥲"
    }

}


function getComputerChoice() {

    const arr = ["rock", "paper", "scissors"]

    const x = Math.random() * 3;

    const random = parseInt(x)

    return arr[random];
}