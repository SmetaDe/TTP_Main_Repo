var randomNum;
var score = 10;
var highscore = 0;
var guessesLeft = 10;

function generateRandomNumber() {
  randomNum = Math.floor(Math.random() * 100) + 1;
}

function displayMessage(message) {
  var messageElement = document.getElementById("message");
  messageElement.textContent = message;
}

function updateScore() {
  var scoreValueElement = document.getElementById("scoreValue");
  scoreValueElement.textContent = score;
}

function updateHighscore() {
  var highscoreValueElement = document.getElementById("highscoreValue");
  highscoreValueElement.textContent = highscore;
}

function disableGame() {
  var guessInput = document.getElementById("guessInput");
  var submitBtn = document.getElementById("submitBtn");
  guessInput.disabled = true;
  submitBtn.disabled = true;
}

function handleGuess() {
  var guessInput = document.getElementById("guessInput");
  var userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    displayMessage("Please enter a valid number");
  } else {
    guessesLeft--;

    if (userGuess === randomNum) {
      displayMessage("Congratulations! You guessed the correct number.");
      document.body.style.backgroundColor = "green";
      disableGame();

      if (score > highscore) {
        highscore = score;
        updateHighscore();
      }
    } else if (guessesLeft === 0) {
      displayMessage("Game over. You ran out of tries.");
      document.body.style.backgroundColor = "red";
      disableGame();
    } else {
      if (userGuess > randomNum) {
        displayMessage("Too high. Try again.");
      } else {
        displayMessage("Too low. Try again.");
      }
      score--;
      updateScore();
    }
  }

  guessInput.value = "";
}

function resetGame() {
  score = 10;
  guessesLeft = 10;
  updateScore();
  displayMessage("");
  document.body.style.backgroundColor = "";
  generateRandomNumber();
  var guessInput = document.getElementById("guessInput");
  var submitBtn = document.getElementById("submitBtn");
  guessInput.disabled = false;
  submitBtn.disabled = false;
}

document.getElementById("submitBtn").addEventListener("click", handleGuess);
document.getElementById("playBtn").addEventListener("click", resetGame);

generateRandomNumber();
