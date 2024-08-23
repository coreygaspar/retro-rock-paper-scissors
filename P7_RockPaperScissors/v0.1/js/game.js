function rockAppear(){
document.getElementById('rock').style.display='flex';
document.getElementById('paper').style.display='none';
document.getElementById('scissors').style.display='none';
computerChoice()
}
function paperAppear(){
  document.getElementById('rock').style.display='none';
  document.getElementById('paper').style.display='flex';
  document.getElementById('scissors').style.display='none';
  computerChoice()
}

function scissorsAppear(){
  document.getElementById('rock').style.display='none';
  document.getElementById('scissors').style.display='flex';
  document.getElementById('paper').style.display='none';
  computerChoice()

}

function computerChoice(){
  document.querySelector(".image2");
  // console.log("hi");
  const random = Math.floor(Math.random() * 3); 

  if(random==0){
    console.log("computer chose rock.")
    document.getElementById('rock2').style.display='flex';
document.getElementById('paper2').style.display='none';
document.getElementById('scissors2').style.display='none';
  } else if(random==1){
    console.log("computer chose paper.")
    document.getElementById('rock2').style.display='none';
document.getElementById('paper2').style.display='flex';
document.getElementById('scissors2').style.display='none';
  } else if(random==2){
    console.log("computer chose scissors.")
    document.getElementById('scissors2').style.display='flex';
document.getElementById('paper2').style.display='none';
document.getElementById('rock2').style.display='none';
  }
  // scoreBoard();
}

// function scoreBoard(){
//   let playerScoreCount = 0;
//   let computerScoreCount = 0;
//   const playerScoreBox = document.querySelector(".playerscore");
//   const computerScoreBox = document.querySelector(".computerscore");

// if(player)
// computerScoreBox.innerHTML = computerScoreCount;
// playerScoreBox.innerHTML = playerScoreCount;