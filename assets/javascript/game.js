// VARIABLES
// ==========================================================================

 // Creates an array that lists out all of the options (a-z).
  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var userGuess = []
// Creating variables to hold the number of wins, losses, guesses left and guesses so far. All start at 0 except guesses left.
  
  var game = {
    wins: 0,
    losses: 0,
    guessesleft: 9,
    guessessofar: [],
    gameon: true,
    playagain: true,
  
    winner: function() {
      this.wins = (this.wins + 1);
      this.gameon = false;
      alert("Congratulations!!");
    }, 
    
    keeptrying: function() {
      this.guessesleft = (this.guessesleft - 1);
    },

    gameover: function() {
      alert("Better luck next time!"); 
      this.guessesleft = 0;
      this.losses = (this.losses + 1);
      gameon: false;
    },

    playagain: function() {
      alert("Let's play again!"); 
      this.guessesleft = 9;
      this.guessessofar = [];
    }
  };


  // FUNCTIONS
// ==============================================================================

// Logs all of our car's current stats to the console.
  function reWriteStats() {
    console.log("Wins: " + game.wins);
    console.log("Losses: " + game.losses);
    console.log("Guesses left: " + game.guessesleft);
    console.log("Guesses so far: " + game.guessessofar);
    console.log("------------------------------");
  }

      // Create variables that hold references to the places in the HTML where we want to display things.
      var directionsText = document.getElementById("directions-text");
      var computerChoiceText = document.getElementById("computerchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var guessesleftText = document.getElementById("guessesleft-text");
      var guessessofarText = document.getElementById("guessessofar-text");
    
  // MAIN PROCESS
  // ==============================================================================
  
  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
        
      // Determines which key was pressed.
      var userGuess = event.key.toLowerCase();

      // Randomly chooses a choice from the options array. This is the Computer's choice.

      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // This logic determines the outcome of the game (win/loss), 
      // increments the appropriate numbers utilizing the methods defined in the var game 
      // and dictates when the game should stop

      if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

      if (userGuess == computerGuess) {
        game.winner();
        reWriteStats();
        game.playagain();
      }

      if (userGuess !== computerGuess) {
        game.keeptrying();
        game.guessessofar.push(userGuess);
        reWriteStats();
      }

      if (game.guessesleft == 0) {
        game.gameover();
        reWriteStats();
        game.playagain();
      }
    }
    // Hide the directions
      directionsText.textContent = "";

    // Display the wins, losses, guesses left, and guesses so far.

    winsText.textContent = "wins: " + game.wins;
    lossesText.textContent = "losses: " + game.losses;
    guessesleftText.textContent = "guesses left: " + game.guessesleft;
    guessessofarText.textContent = "guesses so far: " + game.guessessofar;
};
