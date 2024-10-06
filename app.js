let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset_btn");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const resetGame = () => {
  userScore = 0;
  compScore = 0;
  
  // Reset the scores in the UI
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;

  // Reset the message
  msg.style.color = "black";
  msg.innerText = "Game has been reset. Start playing!";
  msg.style.backgroundColor = "#f0f0f0"; // Set to a neutral background color
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
  msg.style.color = "white";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", resetGame);
