// Function to get the user's choice
const getUserChoice = (userInput) => {

    // Convert user input to lowercase
    userInput = userInput.toLowerCase();

    // Check if the user input is valid
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') { 
        return userInput; // Return the valid user input
    } else {
        console.log('Error, please type: Rock, Paper, or Scissors.'); // Log an error message for invalid input
    }
};

// Function to get the computer's choice
const getComputerChoice = () => {

    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Return 'rock', 'paper', or 'scissors' based on the random number
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

// Function to determine the winner of the game
const determineWinner = (userChoice, computerChoice) => {

    // Check if the game is a tie
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }
    // Check if the user chose 'rock'
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
    // Check if the user chose 'paper'
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
    // Check if the user chose 'scissors'
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }

    if (userChoice === 'bomb') {
        return "Congratulations, you won!";
    }
};

// Function to play the game
const playGame = () => {
    const userChoice = getUserChoice('bomb'); // Get the user's choice
    const computerChoice = getComputerChoice(); // Get the computer's choice
    console.log('You threw: ' + userChoice); // Log the user's choice
    console.log('The computer threw: ' + computerChoice); // Log the computer's choice

    console.log(determineWinner(userChoice, computerChoice)); // Determine and log the winner
};

// Start the game
playGame();