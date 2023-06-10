// Tic-Tac-Toe Game Logic
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = gameState[winCondition[0]];
    const b = gameState[winCondition[1]];
    const c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    document.getElementById("statement").textContent = `Player ${currentPlayer} won the game!`;
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    document.getElementById("statement").textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function handleCellClick(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
  handleResultValidation();
}

function makeMove(row, col) {
  const clickedCellIndex = row * 3 + col;
  const clickedCell = document.getElementsByClassName("cell")[clickedCellIndex];

  if (!gameActive || gameState[clickedCellIndex] !== "") {
    return;
  }

  handleCellClick(clickedCell, clickedCellIndex);
}

// Time Display Logic
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("time");
  timeElement.textContent = now.toLocaleTimeString("en-KE", { timeZone: "Africa/Nairobi" });
}

// Update time every second
setInterval(updateTime, 1000);

// Initial time update
updateTime();
