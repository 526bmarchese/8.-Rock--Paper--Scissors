let userName = "";
let userWins = 0;
let computerWins = 0;
let roundsPlayed = 0;
let gameEnded = false;

document.getElementById("start-game").addEventListener("click", function () {
	userName = document.getElementById("username").value;
	if (userName) {
		document.getElementById("username-section").classList.add("hidden");
		document
			.getElementById("instructions-section")
			.classList.remove("hidden");
	}
});

document.getElementById("proceed-game").addEventListener("click", function () {
	document.getElementById("instructions-section").classList.add("hidden");
	document.getElementById("game-section").classList.remove("hidden");
	document.getElementById("greeting").innerText = `Good Luck, ${userName}!`;
});

function playRound(userChoice) {
	if (gameEnded) return;

	const choices = ["rock", "paper", "scissors"];
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";
	if (userChoice === computerChoice) {
		result = "It's a tie!";
	} else if (
		(userChoice === "rock" && computerChoice === "scissors") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissors" && computerChoice === "paper")
	) {
		result = `You win! ${userChoice} beats ${computerChoice}.`;
		userWins++;
	} else {
		result = `You lose! ${computerChoice} beats ${userChoice}.`;
		computerWins++;
	}
	roundsPlayed++;
	document.getElementById("round-result").innerText = result;
	document.getElementById("user-wins").innerText = userWins;
	document.getElementById("computer-wins").innerText = computerWins;

	document.getElementById("user-choice-img").src = `imgs/${userChoice}.jpg`;
	document.getElementById(
		"computer-choice-img"
	).src = `imgs/${computerChoice}.jpg`;

	document
		.querySelectorAll(".choice-img")
		.forEach((img) => img.classList.remove("selected"));
	document.getElementById("user-choice-img").classList.add("selected");

	if (roundsPlayed === 5) {
		endGame();
	}
}

function endGame() {
	gameEnded = true;
	let finalResult = "";
	if (userWins > computerWins) {
		finalResult = `Congratulations, ${userName}! You won the game!`;
	} else if (computerWins > userWins) {
		finalResult = `Sorry, ${userName}. You lost the game.`;
	} else {
		finalResult = `It's a tie game, ${userName}.`;
	}
	document.getElementById("final-result").innerText = finalResult;
	document.getElementById("final-result").classList.remove("hidden");
	document.getElementById("reset-game").classList.remove("hidden");
}

function resetGame() {
	userWins = 0;
	computerWins = 0;
	roundsPlayed = 0;
	gameEnded = false;
	document.getElementById("user-wins").innerText = userWins;
	document.getElementById("computer-wins").innerText = computerWins;
	document.getElementById("round-result").innerText = "";
	document.getElementById("final-result").classList.add("hidden");
	document.getElementById("reset-game").classList.add("hidden");

	document.getElementById("user-choice-img").src = "";
	document.getElementById("computer-choice-img").src = "";
}