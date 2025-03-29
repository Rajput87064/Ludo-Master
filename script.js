// Game State
const players = ["Red", "Green", "Blue", "Yellow"];
let currentPlayer = 0;
let diceValue = 0;

// DOM Elements
const diceBtn = document.getElementById("dice");
const playerTurnDisplay = document.getElementById("playerTurn");
const board = document.getElementById("board");

// Initialize Board
function initBoard() {
    // Draw Ludo board (simplified)
    board.innerHTML = `<div class="path"></div>`;
}

// Roll Dice
diceBtn.addEventListener("click", () => {
    diceValue = Math.floor(Math.random() * 6) + 1;
    alert(`You rolled a ${diceValue}!`);
    nextPlayer();
});

// Switch Player
function nextPlayer() {
    currentPlayer = (currentPlayer + 1) % players.length;
    playerTurnDisplay.textContent = `${players[currentPlayer]}'s Turn`;
}

// Initialize Game
initBoard();