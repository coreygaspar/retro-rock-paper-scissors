// Player Choice
let playerPick; // The Player's Choice 

function pickRock() {
    console.log('Player Chooses Rock'); 
    playerPick = 0; 
    let rockImg = document.querySelector(".image1"); 
    let buttonVisibility = document.querySelectorAll("button");
    rockImg.src = "./assets/images/rock.png";
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
      setTimeout(function(){document.getElementById("button1").disabled = false; },1000); 
      setTimeout(function(){document.getElementById("button2").disabled = false;},1000); 
      setTimeout(function(){document.getElementById("button3").disabled = false;},1000); 
     cpuChoice(); // Gives CPU Response
}

function pickPaper() {
    console.log('Player Chooses Paper');
    playerPick = 1; 
    let paperImg = document.querySelector(".image1");
    paperImg.src = "./assets/images/paper.png"; 
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
      setTimeout(function(){document.getElementById("button1").disabled = false;},1000); 
      setTimeout(function(){document.getElementById("button2").disabled = false;},1000); 
      setTimeout(function(){document.getElementById("button3").disabled = false;},1000); 
     cpuChoice(); // Gives CPU Response
}

function pickScissors() {
    console.log('Player Chooses Scissors'); 
    playerPick = 2; 
    let scissorsImg = document.querySelector(".image1"); 
    scissorsImg.src = "./assets/images/scissors.png"; 
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
      setTimeout(function(){document.getElementById("button1").disabled = false;},1000); 
      setTimeout(function(){document.getElementById("button2").disabled = false;},1000); 
      setTimeout(function(){document.getElementById("button3").disabled = false;},1000); 
     cpuChoice(); // Gives CPU Response
}

// CPU Choice
let cpuPick = Math.floor(Math.random() * 3); // Picks a random number from 0-2

function cpuChoice() {
    cpuPick = Math.floor(Math.random() * 3);
    let cpuItem = document.querySelector(".image2"); 
    if (cpuPick === 0) {
        cpuItem.src = "./assets/images/rock.png"; // If the random number is 0, the CPU selects Rock
    } else if (cpuPick === 1) {
        cpuItem.src = "./assets/images/paper.png"; // If the random number is 1, the CPU selects Paper
    } else if (cpuPick === 2) {
        cpuItem.src = "./assets/images/scissors.png"; // If the random number is 2, the CPU selects Scissors
    }
    setTimeout(() => {
        scoreBoard()
    }, 200); // Allows the scoreboard to function
} 

// Scoreboard
let playerScoreCounter = 0; // Sets the player score to 0
let cpuScoreCounter = 0; // Sets the CPU score to 0

function scoreBoard() {
    let player = playerPick; // Sets a value on the scoreboard for the player's pick
    let cpu = cpuPick; // Sets a value on the scoreboard for the CPU's pick
    const playerScore = document.querySelector(".playerscore"); // Grabs the HTML Class and stores it within the playerScore variable
    const cpuScore = document.querySelector(".computerscore"); // Grabs the HTML Class and stores it within the cpuScore variable
    //Rock
    if (player === 0 && cpu === 0) {
        console.log("Tie")
        // If both the Player & CPU chooses Rock, the result is a tie
    } else if (player === 0 && cpu === 1) {
        // If Player chooses Rock & CPU chooses Paper, CPU wins
        console.log("CPU Wins") 
        cpuScoreCounter++; // Adds 1 point to the Player's score counter
        cpuScore.innerHTML = cpuScoreCounter;
    } else if (player === 0 && cpu === 2) {
        // If Player chooses Rock & CPU chooses Scissors, Player wins
        console.log("Player Wins") 
        playerScoreCounter++; // Adds 1 point to the CPU's score counter
        playerScore.innerHTML = playerScoreCounter;
    } 
        
    //Paper
        else if (player === 1 && cpu === 0) { 
         // If Player chooses Paper & CPU chooses Rock, Player wins
        console.log("Player Wins") 
        playerScoreCounter++; 
        playerScore.innerHTML = playerScoreCounter;
    } else if (player === 1 && cpu === 1) {
        console.log("Tie")
         // If both the Player & CPU chooses Paper, the result is a tie
    } else if (player === 1 && cpu === 2) {
        // If Player chooses Paper & CPU chooses Scissors, CPU wins
        console.log("CPU Wins")
        cpuScoreCounter++; 
        cpuScore.innerHTML = cpuScoreCounter;
    }
    
    //Scissors
        else if (player === 2 && cpu === 0) {
        console.log("CPU Wins")
        // If Player chooses Scissors & CPU chooses Rock, CPU wins
        cpuScoreCounter++;
        cpuScore.innerHTML = cpuScoreCounter;
    } else if (player === 2 && cpu === 1) {
        // If Player chooses Scissors & CPU chooses Paper, Player wins
        console.log("Player Wins")
        playerScoreCounter++;
        playerScore.innerHTML = playerScoreCounter;
    } else if (player === 2 && cpu === 2) {
        // If both the Player & CPU chooses Scissors, the result is a tie
        console.log("Tie")
    }

    if (playerScoreCounter === 3) {
      console.warn("You win the game!");
      window.location.replace("win.html");
  } else if (cpuScoreCounter === 3) {
      console.warn("You lose the game!");
      window.location.replace("lose.html");
  }
}

