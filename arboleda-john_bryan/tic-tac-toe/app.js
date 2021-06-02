const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let gameHistory = [];
let historyCounter = 0;
const cellElements = document.querySelectorAll("[data-cell");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");
const turnX = document.getElementById("X");
const turnO = document.getElementById("O");
const turnContainer = document.getElementById("turnContainer");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const next = document.getElementById("nextButton");
const previous = document.getElementById("prevButton");
const playerTurn = document.getElementById("playerTurn");
let circleTurn;
let newGame = true;
previous.addEventListener("click", prevHistory);
next.addEventListener("click", nextHistory);

startGame();

restartButton.addEventListener("click", () => {
  window.location.reload();
});

//game start

function startGame() {
  circleTurn = false;
  playerTurn.innerHTML = `${
    circleTurn ? "Player O's Turn!" : "Player X's Turn!"
  }`;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  boardHover();
  winningMessageElement.classList.remove("show");
  next.style.visibility = "hidden";
  previous.style.visibility = "hidden";
}

//every click

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  saveLog();
  historyCounter = gameHistory.length - 1;
  if (checkWin(currentClass)) {
    endGame(false);
    next.style.visibility = "visible";
    previous.style.visibility = "visible";
  } else if (isDraw()) {
    endGame(true);
    next.style.visibility = "visible";
    previous.style.visibility = "visible";
  } else {
    swapTurns();
    boardHover();
  }
}

//result message

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

//place mark

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

//swap turns

function swapTurns() {
  circleTurn = !circleTurn;
  playerTurn.innerHTML = `${
    circleTurn ? "Player O's Turn!" : "Player X's Turn!"
  }`;
}

//board hover

function boardHover() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

//checking of winner

function checkWin(currentClass) {
  const isWin = WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });

  if (isWin) {
    cellElements.forEach((element) =>
      element.removeEventListener("click", handleClick)
    );
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    return true;
  } else {
    return false;
  }
}

//save history

function saveLog() {
  gameHistory.push(board.innerHTML);
}

//previous button

function prevHistory() {
  next.disabled = false;
  if (historyCounter > 0) {
    board.innerHTML = gameHistory[--historyCounter];
  }
  if (historyCounter === 0) {
    previous.disabled = true;
  }
}

//next button

function nextHistory() {
  previous.disabled = false;
  if (historyCounter < gameHistory.length - 1) {
    board.innerHTML = gameHistory[++historyCounter];
  }
  if (historyCounter === gameHistory.length - 1) {
    next.disabled = true;
  }
}
