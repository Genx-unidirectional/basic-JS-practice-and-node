let playground = document.querySelector(".playground");
let score = document.querySelector(".score");
let highScore = document.querySelector(".hscore");
let status = document.querySelector(".status");
let startBtn = document.querySelector(".btn-start");
let colors = ["yellow", "green", "blue", "red"];
// console.log(playground, score, highScore, status);

// Task :Make boxes flash whenever clicked also make random box flash when clicked on a start and note down the index of that box into botSequence

//Task : Add listener to every box so that we handle the click event to process the box such that user clicked on right sequence or not

//Task : Create level up when user reaches the botSequence level

// When user losses set all variables into their default values

//Task : Check for each user interaction

let userSequence = [];
let botSequence = [];
let level = 0;
let maxScore = 0;
let start = false;
let lose = false;

function restart() {
  userSequence = [];
  botSequence = [];
  level = 0;

  start = false;
  lose = false;
}

function botFlash(box) {
  box.classList.add("flash");
  setTimeout(() => {
    box.classList.remove("flash");
  }, 500);
}
function userFlash(box) {
  box.classList.add("flash");
  setTimeout(() => {
    box.classList.remove("flash");
  }, 500);
}

function checkAnswer(boxId) {
  if (userSequence[boxId] == botSequence[boxId]) {
    if (userSequence.length == botSequence.length) {
      setTimeout(() => {
        levelUp();
      }, 2000);
    }
  } else {
    if (maxScore < level) {
      maxScore = level;
      highScore.textContent = maxScore;
    }
    status.textContent = `You lose :( click start to play again)`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startBtn.addEventListener("click", () => {
    restart();
    if (start === false) {
      levelUp();
      start = true;
    }
  });
});

function levelUp() {
  score.textContent = level;
  userSequence = [];
  level++;
  const randNum = Math.floor(Math.random() * 3);
  const randColor = colors[randNum];
  const box = document.querySelector(`.${randColor}`);
  botFlash(box);
  botSequence.push(randNum);
}

function processBox() {
  if (!lose) {
    let box = this;
    const boxId = box.getAttribute("id");
    userFlash(box);
    userSequence.push(boxId);
    checkAnswer(userSequence.length - 1);
  }
}

const boxes = document.querySelectorAll(".box");

for (const box of boxes) {
  box.addEventListener("click", processBox);
}
